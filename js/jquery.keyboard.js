/*!
jQuery UI Virtual Keyboard
Version 1.18.12

Author: Jeremy Satterfield
Modified: Rob Garrison (Mottie on github)
-----------------------------------------
Licensed under the MIT License

Caret code modified from jquery.caret.1.02.js
Licensed under the MIT License:
http://www.opensource.org/licenses/mit-license.php
-----------------------------------------

An on-screen virtual keyboard embedded within the browser window which
will popup when a specified entry field is focused. The user can then
type and preview their input before Accepting or Canceling.

As a plugin to jQuery UI styling and theme will automatically
match that used by jQuery UI with the exception of the required CSS.

Requires:
	jQuery v1.4.3+
	jQuery UI (position utility only) & CSS theme

Setup/Usage:
	Please refer to https://github.com/Mottie/Keyboard/wiki
*/
/*jshint browser:true, jquery:true, unused:false */
;(function($){
"use strict";
$.keyboard = function(el, options){
	var base = this, o;

	base.version = '1.18.12';

	// Access to jQuery and DOM versions of element
	base.$el = $(el);
	base.el = el;

	// Add a reverse reference to the DOM object
	base.$el.data("keyboard", base);

	base.init = function(){
		base.options = o = $.extend(true, {}, $.keyboard.defaultOptions, options);

		// Shift and Alt key toggles, sets is true if a layout has more than one keyset
		// used for mousewheel message
		base.shiftActive = base.altActive = base.metaActive = base.sets = base.capsLock = false;
		base.lastKeyset = [false, false, false]; // [shift, alt, meta]
		// Class names of the basic key set - meta keysets are handled by the keyname
		base.rows = [ '', '-shift', '-alt', '-alt-shift' ];
		$('<!--[if lte IE 8]><script>jQuery("body").addClass("oldie");</script><![endif]--><!--[if IE]>' +
			'<script>jQuery("body").addClass("ie");</script><![endif]-->').appendTo('body').remove();
		base.msie = $('body').hasClass('oldie'); // Old IE flag, used for caret positioning
		base.allie = $('body').hasClass('ie');
		base.inPlaceholder = base.$el.attr('placeholder') || '';
		// html 5 placeholder/watermark
		base.watermark = (typeof(document.createElement('input').placeholder) !== 'undefined' &&
			base.inPlaceholder !== '');
		// save default regex (in case loading another layout changes it)
		base.regex = $.keyboard.comboRegex;
		// determine if US "." or European "," system being used
		base.decimal = ( /^\./.test(o.display.dec) ) ? true : false;
		// convert mouse repeater rate (characters per second) into a time in milliseconds.
		base.repeatTime = 1000/(o.repeatRate || 20);
		// delay in ms to prevent mousedown & touchstart from both firing events at the same time
		o.preventDoubleEventTime = o.preventDoubleEventTime || 100;
		// flag indication that a keyboard is open
		base.isOpen = false;
		// is mousewheel plugin loaded?
		base.wheel = $.isFunction( $.fn.mousewheel );
		// keyCode of keys always allowed to be typed - caps lock, page up & down, end, home, arrow, insert &
		// delete keys
		base.alwaysAllowed = [20,33,34,35,36,37,38,39,40,45,46];
		base.$keyboard = [];

		// Check if caret position is saved when input is hidden or loses focus
		// (*cough* all versions of IE and I think Opera has/had an issue as well
		base.temp = $('<input style="position:absolute;left:-9999em;top:-9999em;" type="text" value="testing">')
			.appendTo('body').caret(3,3);
		// Also save caret position of the input if it is locked
		base.checkCaret = (o.lockInput || base.temp.hide().show().caret().start !== 3 ) ? true : false;
		base.temp.remove();
		base.lastCaret = { start:0, end:0 };

		base.temp = [ '', 0, 0 ]; // used when building the keyboard - [keyset element, row, index]

		// Bind events
		$.each('initialized beforeVisible visible hidden canceled accepted beforeClose'.split(' '), function(i,f){
			if ($.isFunction(o[f])){
				base.$el.bind(f + '.keyboard', o[f]);
			}
		});

		// Close with esc key & clicking outside
		if (o.alwaysOpen) { o.stayOpen = true; }
		$(document).bind('mousedown keyup touchstart checkkeyboard '.split(' ').join('.keyboard '), function(e){
			if (base.opening) { return; }
			base.escClose(e);
			// needed for IE to allow switching between keyboards smoothly
			if ( e.target && $(e.target).hasClass('ui-keyboard-input') ) {
				var kb = $(e.target).data('keyboard');
				// only trigger on self
				if (kb === base && kb.options.openOn) {
					kb.focusOn();
				}
			}
		});

		// Display keyboard on focus
		base.$el
			.addClass('ui-keyboard-input ' + o.css.input)
			.attr({ 'aria-haspopup' : 'true', 'role' : 'textbox' });

		// add disabled/readonly class - dynamically updated on reveal
		if (base.$el.is(':disabled') || (base.$el.attr('readonly') &&
			!base.$el.hasClass('ui-keyboard-lockedinput'))) {
			base.$el.addClass('ui-keyboard-nokeyboard');
		}
		if (o.openOn) {
			base.$el.bind(o.openOn + '.keyboard', function(){
				base.focusOn();
			});
		}

		// Add placeholder if not supported by the browser
		if (!base.watermark && base.$el.val() === '' && base.inPlaceholder !== '' &&
			base.$el.attr('placeholder') !== '') {
			base.$el
				.addClass('ui-keyboard-placeholder') // css watermark style (darker text)
				.val( base.inPlaceholder );
		}

		base.$el.trigger( 'initialized.keyboard', [ base, base.el ] );

		// initialized with keyboard open
		if (o.alwaysOpen) {
			base.reveal();
		}

	};

	base.setCurrent = function(){
		// ui-keyboard-has-focus is applied in case multiple keyboards have alwaysOpen = true and are stacked
		$('.ui-keyboard-has-focus').removeClass('ui-keyboard-has-focus');
		$('.ui-keyboard-input-current').removeClass('ui-keyboard-input-current');

		base.$el.addClass('ui-keyboard-input-current');
		base.$keyboard.addClass('ui-keyboard-has-focus');
		base.isCurrent(true);
		base.isOpen = true;
	};

	base.isCurrent = function(set){
		var cur = $.keyboard.currentKeyboard || false;
		if (set) {
			cur = $.keyboard.currentKeyboard = base.el;
		} else if (set === false && cur === base.el) {
			cur = $.keyboard.currentKeyboard = '';
		}
		return cur === base.el;
	};

	base.isVisible = function() {
		return base.$keyboard && base.$keyboard.length ? base.$keyboard.is(":visible") : false;
	};

	base.focusOn = function(){
		if (base.$el.is(':visible')) {
			// caret position is always 0,0 in webkit; and nothing is focused at this point... odd
			// save caret position in the input to transfer it to the preview
			// add delay to get correct caret position
			setTimeout(function(){
                // Number inputs don't support selectionStart and selectionEnd
				if (base.$el.attr('type') != 'number') {
					base.lastCaret = base.$el.caret();
				}
			}, 20);
		}
		if (!base.isVisible()) {
			clearTimeout(base.timer);
			base.reveal();
		}
		if (o.alwaysOpen) {
			base.setCurrent();
		}
	};

	base.reveal = function(){
		var p, s;
		base.opening = true;
		// remove all "extra" keyboards
		$('.ui-keyboard').not('.ui-keyboard-always-open').remove();

		// Don't open if disabled
		if (base.$el.is(':disabled') || (base.$el.attr('readonly') &&
			!base.$el.hasClass('ui-keyboard-lockedinput'))) {
			base.$el.addClass('ui-keyboard-nokeyboard');
			return;
		} else {
			base.$el.removeClass('ui-keyboard-nokeyboard');
		}

		// Unbind focus to prevent recursion - openOn may be empty if keyboard is opened externally
		if (o.openOn) {
			base.$el.unbind( o.openOn + '.keyboard' );
		}

		// build keyboard if it doesn't exist; or attach keyboard if it was removed, but not cleared
		if ( !base.$keyboard || base.$keyboard && ( !base.$keyboard.length || $.contains(document.body, base.$keyboard[0]) ) ) {
			base.startup();
		}

		// clear watermark
		if (!base.watermark && base.el.value === base.inPlaceholder) {
			base.$el
				.removeClass('ui-keyboard-placeholder')
				.val('');
		}
		// save starting content, in case we cancel
		base.originalContent = base.$el.val();
		base.$preview.val( base.originalContent );

		// disable/enable accept button
		if (o.acceptValid) { base.checkValid(); }

		if (o.resetDefault) {
			base.shiftActive = base.altActive = base.metaActive = false;
			base.showKeySet();
		}

		// appendLocally && appendTo will now assume the keyboard will be displayed in
		// its static position; the developer can now position it as desired using the
		// ".ui-keyboard" class name.
		if (!o.appendLocally && o.appendTo === 'body') {
			// basic positioning before it is set by position utility
			base.$keyboard.css({ position: 'absolute', left: 0, top: 0 });
		}

		// beforeVisible event
		base.$el.trigger( 'beforeVisible.keyboard', [ base, base.el ] );

		base.setCurrent();

		// show keyboard
		base.$keyboard.show();

		// adjust keyboard preview window width - save width so IE won't keep expanding (fix issue #6)
		if (o.usePreview && base.msie) {
			if (typeof base.width === 'undefined') {
				base.$preview.hide(); // preview is 100% browser width in IE7, so hide the damn thing
				base.width = Math.ceil(base.$keyboard.width()); // set input width to match the widest keyboard row
				base.$preview.show();
			}
			base.$preview.width(base.width);
		}

		base.position = o.position;

		// position after keyboard is visible (required for UI position utility) and appropriately sized
		if ($.ui && $.ui.position && !$.isEmptyObject(base.position)) {
			// get single target position || target stored in element data (multiple targets) || default @ element
			base.position.of = base.position.of || base.$el.data('keyboardPosition') || base.$el;
			base.position.collision = base.position.collision || 'flipfit flipfit';
			base.$keyboard.position(base.position);
		}

		base.checkDecimal();

		// get preview area line height
		// add roughly 4px to get line height from font height, works well for font-sizes from 14-36px
		// needed for textareas
		base.lineHeight = parseInt( base.$preview.css('lineHeight'), 10) ||
			parseInt(base.$preview.css('font-size') ,10) + 4;

		if (o.caretToEnd) {
			s = base.originalContent.length;
			base.lastCaret = {
				start: s,
				end  : s
			};
		}

		// IE caret haxx0rs
		if (base.allie){
			// ensure caret is at the end of the text (needed for IE)
			s = base.lastCaret.start || base.originalContent.length;
			p = { start: s, end: s };
			// set caret at end of content, if undefined
			if (!base.lastCaret) { base.lastCaret = p; }
			// sometimes end = 0 while start is > 0
			if (base.lastCaret.end === 0 && base.lastCaret.start > 0) {
				base.lastCaret.end = base.lastCaret.start;
			}
			// IE will have start -1, end of 0 when not focused (see demo: http://jsfiddle.net/Mottie/fgryQ/3/)
			if (base.lastCaret.start < 0) { base.lastCaret = p; }
		}

		// opening keyboard flag; delay allows switching between keyboards without immediately closing
		// the keyboard
		setTimeout(function(){
			base.opening = false;
			if (o.initialFocus) {
				base.$preview.focus().caret( base.lastCaret );
			}
			base.$el.trigger( 'visible.keyboard', [ base, base.el ] );
		}, 10);
		// return base to allow chaining in typing extension
		return base;
	};

	base.startup = function(){
		if ( !(base.$keyboard && base.$keyboard.length) ) {
			// custom layout - create a unique layout name based on the hash
			if (o.layout === "custom") { o.layoutHash = 'custom' + base.customHash(); }
			base.layout = o.layout === "custom" ? o.layoutHash : o.layout;

			if (typeof $.keyboard.builtLayouts[base.layout] === 'undefined') {
				if ($.isFunction(o.create)) {
					o.create(base);
				}
				if (!base.$keyboard.length) {
					base.buildKeyboard();
				}
			}
			base.$keyboard = $.keyboard.builtLayouts[base.layout].$keyboard.clone();

			// build preview display
			if (o.usePreview) {
				base.$preview = base.$el.clone(false)
					.removeAttr('id')
					.removeClass('ui-keyboard-placeholder ui-keyboard-input')
					.addClass('ui-keyboard-preview ' + o.css.input)
					.removeAttr('aria-haspopup')
					.attr('tabindex', '-1')
					.show(); // for hidden inputs
				// Switch the number input fields to text so the caret positioning will work again
				if (base.$preview.attr('type') == 'number') {
					base.$preview.attr('type', 'text');
				}
				// build preview container and append preview display
				$('<div />')
					.addClass('ui-keyboard-preview-wrapper')
					.append(base.$preview)
					.prependTo(base.$keyboard);
			} else {
				// No preview display, use element and reposition the keyboard under it.
				base.$preview = base.$el;
				if (!$.isEmptyObject(base.position)) {
					o.position.at = o.position.at2;
				}
			}

		}

		base.preview = base.$preview[0];
		base.$decBtn = base.$keyboard.find('.ui-keyboard-dec');
		// add enter to allowed keys; fixes #190
		if (o.enterNavigation || base.el.tagName === "TEXTAREA") { base.alwaysAllowed.push(13); }
		if (o.lockInput) {
			base.$preview.addClass('ui-keyboard-lockedinput').attr({ 'readonly': 'readonly'});
		}

		base.bindKeyboard();

		base.$keyboard.appendTo( o.appendLocally ? base.$el.parent() : o.appendTo || 'body' );

		base.bindKeys();

		// adjust with window resize
		if ($.ui && $.ui.position && !$.isEmptyObject(base.position)) {
			$(window).bind('resize.keyboard', function(){
				if (base.isVisible()) {
					base.$keyboard.position(base.position);
				}
			});
		}

	};

	base.bindKeyboard = function(){
		var layout = $.keyboard.builtLayouts[base.layout];
		base.$preview
			.unbind('keypress keyup keydown mouseup touchend '.split(' ').join('.keyboard '))
			.bind('keypress.keyboard', function(e){
				var k = base.lastKey = String.fromCharCode(e.charCode || e.which);
				base.$lastKey = []; // not a virtual keyboard key
				if (base.checkCaret) { base.lastCaret = base.$preview.caret(); }

				// update caps lock - can only do this while typing =(
				base.capsLock = (((k >= 65 && k <= 90) && !e.shiftKey) ||
					((k >= 97 && k <= 122) && e.shiftKey)) ? true : false;

				// restrict input - keyCode in keypress special keys: 
				// see http://www.asquare.net/javascript/tests/KeyCode.html
				if (o.restrictInput) {
					// allow navigation keys to work - Chrome doesn't fire a keypress event (8 = bksp)
					if ( (e.which === 8 || e.which === 0) && $.inArray( e.keyCode, base.alwaysAllowed ) ) { return; }
					if ($.inArray(k, layout.acceptedKeys) === -1) { e.preventDefault(); } // quick key check
				} else if ( (e.ctrlKey || e.metaKey) && (e.which === 97 || e.which === 99 || e.which === 118 ||
						(e.which >= 120 && e.which <=122)) ) {
					// Allow select all (ctrl-a:97), copy (ctrl-c:99), paste (ctrl-v:118) & cut (ctrl-x:120) &
					// redo (ctrl-y:121)& undo (ctrl-z:122); meta key for mac
					return;
				}
				// Mapped Keys - allows typing on a regular keyboard and the mapped key is entered
				// Set up a key in the layout as follows: "m(a):label"; m = key to map, (a) = actual keyboard key
				// to map to (optional), ":label" = title/tooltip (optional)
				// example: \u0391 or \u0391(A) or \u0391:alpha or \u0391(A):alpha
				if (layout.hasMappedKeys) {
					if (layout.mappedKeys.hasOwnProperty(k)){
						base.lastKey = layout.mappedKeys[k];
						base.insertText( base.lastKey );
						e.preventDefault();
					}
				}
				base.checkMaxLength();

			})
			.bind('keyup.keyboard', function(e){
				switch (e.which) {
					// Insert tab key
					case 9 :
						// Added a flag to prevent from tabbing into an input, keyboard opening, then adding the tab to the keyboard preview
						// area on keyup. Sadly it still happens if you don't release the tab key immediately because keydown event auto-repeats
						if (base.tab && o.tabNavigation && !o.lockInput) {
							base.shiftActive = e.shiftKey;
							// when switching inputs, the tab keyaction returns false
							var notSwitching = $.keyboard.keyaction.tab(base);
							base.tab = false;
							if (!notSwitching) { return false; }
						} else {
							e.preventDefault();
						}
						break;

					// Escape will hide the keyboard
					case 27:
						base.close();
						return false;
				}

				// throttle the check combo function because fast typers will have an incorrectly positioned caret
				clearTimeout(base.throttled);
				base.throttled = setTimeout(function(){
					// fix error in OSX? see issue #102
					if (base.isVisible()) {
						base.checkCombos();
					}
				}, 100);

				base.checkMaxLength();
				// change callback is no longer bound to the input element as the callback could be
				// called during an external change event with all the necessary parameters (issue #157)
				if ($.isFunction(o.change)){ o.change( $.Event("change"), base, base.el ); }
				base.$el.trigger( 'change.keyboard', [ base, base.el ] );
			})
			.bind('keydown.keyboard', function(e){
				switch (e.which) {

					case 8 :
						$.keyboard.keyaction.bksp(base, null, e);
						e.preventDefault();
						break;

					// prevent tab key from leaving the preview window
					case 9 :
						if (o.tabNavigation) {
							// allow tab to pass through - tab to next input/shift-tab for prev
							base.tab = true;
							return false;
						} else {
							base.tab = true; // see keyup comment above
							return false;
						}
						break; // adding a break here to make jsHint happy

					case 13:
						$.keyboard.keyaction.enter(base, null, e);
						break;

					// Show capsLock
					case 20:
						base.shiftActive = base.capsLock = !base.capsLock;
						base.showKeySet(this);
						break;

					case 86:
						// prevent ctrl-v/cmd-v
						if (e.ctrlKey || e.metaKey) {
							if (o.preventPaste) { e.preventDefault(); return; }
							base.checkCombos(); // check pasted content
						}
						break;
				}
			})
			.bind('mouseup.keyboard touchend.keyboard', function(){
				if (base.checkCaret) { base.lastCaret = base.$preview.caret(); }
			});

		// prevent keyboard event bubbling
		base.$keyboard.bind('mousedown.keyboard click.keyboard touchstart.keyboard', function(e){
			e.stopPropagation();
			if (!base.isCurrent()) {
				base.reveal();
				$(document).trigger('checkkeyboard.keyboard');
			}
		});

		// If preventing paste, block context menu (right click)
		if (o.preventPaste){
			base.$preview.bind('contextmenu.keyboard', function(e){ e.preventDefault(); });
			base.$el.bind('contextmenu.keyboard', function(e){ e.preventDefault(); });
		}

	};

	base.bindKeys = function(){
		var allEvents = (o.keyBinding + ' repeater mouseenter mouseleave touchstart mousewheel ' +
			'mouseup click ').split(' ').join('.keyboard ') + ('mouseleave mousedown touchstart ' +
			'touchend touchmove touchcancel ').split(' ').join('.kb ');
		base.$allKeys = base.$keyboard.find('button.ui-keyboard-button')
			.unbind(allEvents)
			.bind(o.keyBinding.split(' ').join('.keyboard ') + '.keyboard repeater.keyboard', function(e){
				// prevent errors when external triggers attempt to "type" - see issue #158
				if (!base.$keyboard.is(":visible")){ return false; }
				// 'key', { action: doAction, original: n, curtxt : n, curnum: 0 }
				var txt,
					$this = $(this),
					action = $this.attr('data-action'),
					// prevent mousedown & touchstart from both firing events at the same time - see #184
					timer = new Date().getTime();
				// don't split colon key. Fixes #264
				action = action === ':' ? ':' : action.split(':')[0];
				if (timer - (base.lastEventTime || 0) < o.preventDoubleEventTime) { return; }
				base.lastEventTime = timer;
				base.$preview.focus();
				base.$lastKey = $this;
				base.lastKey = $this.attr('data-curtxt');
				// Start caret in IE when not focused (happens with each virtual keyboard button click
				if (base.checkCaret) { base.$preview.caret( base.lastCaret ); }
				if (action.match('meta')) { action = 'meta'; }
				if ($.keyboard.keyaction.hasOwnProperty(action) && $(this).hasClass('ui-keyboard-actionkey')) {
					// stop processing if action returns false (close & cancel)
					if ($.keyboard.keyaction[action](base,this,e) === false) { return false; }
				} else if (typeof action !== 'undefined') {
					txt = base.lastKey = (base.wheel && !$(this).hasClass('ui-keyboard-actionkey')) ?
						base.lastKey : action;
					base.insertText(txt);
					if (!base.capsLock && !o.stickyShift && !e.shiftKey) {
						base.shiftActive = false;
						base.showKeySet(this);
					}
				}
				// set caret if caret moved by action function; also, attempt to fix issue #131
				base.$preview.focus().caret( base.lastCaret );
				base.checkCombos();
				base.checkMaxLength();
				if ($.isFunction(o.change)){ o.change( $.Event("change"), base, base.el ); }
				base.$el.trigger( 'change.keyboard', [ base, base.el ] );
				e.preventDefault();
			})
			// Change hover class and tooltip
			.bind('mouseenter.keyboard mouseleave.keyboard touchstart.keyboard', function(e){
				if (!base.isCurrent()) { return; }
				var $this = $(this),
					txt = $this.data('layers') || base.getLayers( $this );
				// remove duplicates
				$this.data('layers', txt = $.grep(txt, function(v, k){ return $.inArray(v, txt) === k; }) );
				if ((e.type === 'mouseenter' || e.type === 'touchstart') && base.el.type !== 'password' &&
					!$this.hasClass(o.css.buttonDisabled) ){
					$this
						.addClass(o.css.buttonHover)
						.attr('title', function(i,t){
							// show mouse wheel message
							return (base.wheel && t === '' && base.sets && txt.length > 1 && e.type !== 'touchstart') ?
								o.wheelMessage : t;
						});
				}
				if (e.type === 'mouseleave'){
					$this.data({
						'curtxt' : $this.data('original'),
						'curnum' : 0
					});
					$this
						// needed or IE flickers really bad
						.removeClass( (base.el.type === 'password') ? '' : o.css.buttonHover)
						.attr('title', function(i,t){ return (t === o.wheelMessage) ? '' : t; })
						.find('span').html( $this.data('original') ); // restore original button text
				}
			})
			// Allow mousewheel to scroll through other key sets of the same key
			.bind('mousewheel.keyboard', function(e, delta){
				if (base.wheel) {
					// deltaY used by newer versions of mousewheel plugin
					delta = delta || e.deltaY;
					var n, txt, $this = $(this);
					txt = $this.data('layers') || base.getLayers( $this );
					if (txt.length > 1) {
						n = $this.data('curnum') + (delta > 0 ? -1 : 1);
						if (n > txt.length-1) { n = 0; }
						if (n < 0) { n = txt.length-1; }
					} else {
						n = 0;
					}
					$this.data({
						'curnum' : n,
						'layers' : txt,
						'curtxt' : txt[n]
					});
					$this.find('span').html( txt[n] );
					return false;
				}
			})
			// using "kb" namespace for mouse repeat functionality to keep it separate
			// I need to trigger a "repeater.keyboard" to make it work
			.bind('mouseup.keyboard mouseleave.kb touchend.kb touchmove.kb touchcancel.kb', function(e){
				if (/(mouseleave|touchend|touchcancel)/.test(e.type)) {
					$(this).removeClass(o.css.buttonHover); // needed for touch devices
				} else {
					if (base.isVisible() && base.isCurrent()) { base.$preview.focus(); }
					if (base.checkCaret) { base.$preview.caret( base.lastCaret ); }
				}
				base.mouseRepeat = [false,''];
				clearTimeout(base.repeater); // make sure key repeat stops!
				return false;
			})
			// prevent form submits when keyboard is bound locally - issue #64
			.bind('click.keyboard', function(){
				return false;
			})
			// no mouse repeat for action keys (shift, ctrl, alt, meta, etc)
			.not('.ui-keyboard-actionkey')
			// mouse repeated action key exceptions
			.add('.ui-keyboard-tab, .ui-keyboard-bksp, .ui-keyboard-space, .ui-keyboard-enter', base.$keyboard)
			.bind('mousedown.kb touchstart.kb', function(){
				if (o.repeatRate !== 0) {
					var key = $(this);
					base.mouseRepeat = [true, key]; // save the key, make sure we are repeating the right one (fast typers)
					setTimeout(function() {
						if (base.mouseRepeat[0] && base.mouseRepeat[1] === key) { base.repeatKey(key); }
					}, o.repeatDelay);
				}
				return false;
			});
	};

	// Insert text at caret/selection - thanks to Derek Wickwire for fixing this up!
	base.insertText = function(txt){
		var bksp, t, h,
			// use base.$preview.val() instead of base.preview.value (val.length includes carriage returns in IE).
			val = base.$preview.val(),
			pos = base.$preview.caret(),
			scrL = base.$preview.scrollLeft(),
			scrT = base.$preview.scrollTop(),
			len = val.length; // save original content length

		// silly IE caret hacks... it should work correctly, but navigating using arrow keys in a textarea
		// is still difficult
		// in IE, pos.end can be zero after input loses focus
		if (pos.end < pos.start) { pos.end = pos.start; }
		if (pos.start > len) { pos.end = pos.start = len; }

		if (base.preview.tagName === 'TEXTAREA') {
			// This makes sure the caret moves to the next line after clicking on enter (manual typing works fine)
			if (base.msie && val.substr(pos.start, 1) === '\n') { pos.start += 1; pos.end += 1; }
			// Set scroll top so current text is in view - needed for virtual keyboard typing, not manual typing
			// this doesn't appear to work correctly in Opera
			h = (val.split('\n').length - 1);
			base.preview.scrollTop = (h>0) ? base.lineHeight * h : scrT;
		}

		bksp = (txt === 'bksp' && pos.start === pos.end) ? true : false;
		txt = (txt === 'bksp') ? '' : txt;
		t = pos.start + (bksp ? -1 : txt.length);
		scrL += parseInt(base.$preview.css('fontSize'),10) * (txt === 'bksp' ? -1 : 1);

		base.$preview
			.val( base.$preview.val().substr(0, pos.start - (bksp ? 1 : 0)) + txt +
				base.$preview.val().substr(pos.end) )
			.scrollLeft(scrL)
			.caret(t, t);

		base.lastCaret = { start: t, end: t }; // save caret in case of bksp

	};

	// check max length
	base.checkMaxLength = function(){
		var t, p = base.$preview.val();
		if (o.maxLength !== false && p.length > o.maxLength) {
			t = Math.min(base.$preview.caret().start, o.maxLength); 
			base.$preview.val( p.substring(0, o.maxLength) );
			// restore caret on change, otherwise it ends up at the end.
			base.$preview.caret( t, t );
			base.lastCaret = { start: t, end: t };
		}
		if (base.$decBtn.length) {
			base.checkDecimal();
		}
	};

	// mousedown repeater
	base.repeatKey = function(key){
		key.trigger('repeater.keyboard');
		if (base.mouseRepeat[0]) {
			base.repeater = setTimeout(function() {
				base.repeatKey(key);
			}, base.repeatTime);
		}
	};

	base.showKeySet = function(el){
		var key = '',
		toShow = (base.shiftActive ? 1 : 0) + (base.altActive ? 2 : 0);
		if (!base.shiftActive) { base.capsLock = false; }
		// check meta key set
		if (base.metaActive) {
			// the name attribute contains the meta set # "meta99"
			key = (el && el.name && /meta/.test(el.name)) ? el.name : '';
			// save active meta keyset name
			if (key === '') {
				key = (base.metaActive === true) ? '' : base.metaActive;
			} else {
				base.metaActive = key;
			}
			// if meta keyset doesn't have a shift or alt keyset, then show just the meta key set
			if ( (!o.stickyShift && base.lastKeyset[2] !== base.metaActive) ||
				( (base.shiftActive || base.altActive) && !base.$keyboard.find('.ui-keyboard-keyset-' + key +
					base.rows[toShow]).length) ) {
				base.shiftActive = base.altActive = false;
			}
		} else if (!o.stickyShift && base.lastKeyset[2] !== base.metaActive && base.shiftActive) {
			// switching from meta key set back to default, reset shift & alt if using stickyShift
			base.shiftActive = base.altActive = false;
		}
		toShow = (base.shiftActive ? 1 : 0) + (base.altActive ? 2 : 0);
		key = (toShow === 0 && !base.metaActive) ? '-default' : (key === '') ? '' : '-' + key;
		if (!base.$keyboard.find('.ui-keyboard-keyset' + key + base.rows[toShow]).length) {
			// keyset doesn't exist, so restore last keyset settings
			base.shiftActive = base.lastKeyset[0];
			base.altActive = base.lastKeyset[1];
			base.metaActive = base.lastKeyset[2];
			return;
		}
		base.$keyboard
			.find('.ui-keyboard-alt, .ui-keyboard-shift, .ui-keyboard-actionkey[class*=meta]')
				.removeClass(o.css.buttonAction).end()
			.find('.ui-keyboard-alt')[(base.altActive) ? 'addClass' : 'removeClass'](o.css.buttonAction).end()
			.find('.ui-keyboard-shift')[(base.shiftActive) ? 'addClass' : 'removeClass'](o.css.buttonAction).end()
			.find('.ui-keyboard-lock')[(base.capsLock) ? 'addClass' : 'removeClass'](o.css.buttonAction).end()
			.find('.ui-keyboard-keyset').hide().end()
			.find('.ui-keyboard-keyset' + key + base.rows[toShow]).show().end()
			.find('.ui-keyboard-actionkey.ui-keyboard' + key).addClass(o.css.buttonAction);
		base.lastKeyset = [ base.shiftActive, base.altActive, base.metaActive ];
	};

	// check for key combos (dead keys)
	base.checkCombos = function(){
		if (!base.isVisible()) { return base.$preview.val(); }
		var i, r, t, t2,
			// use base.$preview.val() instead of base.preview.value (val.length includes carriage returns in IE).
			val = base.$preview.val(),
			pos = base.$preview.caret(),
			layout = $.keyboard.builtLayouts[base.layout],
			len = val.length; // save original content length

		// silly IE caret hacks... it should work correctly, but navigating using arrow keys in a textarea
		// is still difficult
		// in IE, pos.end can be zero after input loses focus
		if (pos.end < pos.start) { pos.end = pos.start; }
		if (pos.start > len) { pos.end = pos.start = len; }
		// This makes sure the caret moves to the next line after clicking on enter (manual typing works fine)
		if (base.msie && val.substr(pos.start, 1) === '\n') { pos.start += 1; pos.end += 1; }

		if (o.useCombos) {
			// keep 'a' and 'o' in the regex for ae and oe ligature (æ,œ)
			// thanks to KennyTM: http://stackoverflow.com/q/4275077
			// original regex /([`\'~\^\"ao])([a-z])/mig moved to $.keyboard.comboRegex
			if (base.msie) {
				// old IE may not have the caret positioned correctly, so just check the whole thing
				val = val.replace(base.regex, function(s, accent, letter){
					return (o.combos.hasOwnProperty(accent)) ? o.combos[accent][letter] || s : s;
				});
			// prevent combo replace error, in case the keyboard closes - see issue #116
			} else if (base.$preview.length) {
				// Modern browsers - check for combos from last two characters left of the caret
				t = pos.start - (pos.start - 2 >= 0 ? 2 : 0);
				// target last two characters
				base.$preview.caret(t, pos.end);
				// do combo replace
				t2 = (base.$preview.caret().text || '').replace(base.regex, function(s, accent, letter){
					return (o.combos.hasOwnProperty(accent)) ? o.combos[accent][letter] || s : s;
				});
				// add combo back
				base.$preview.val( base.$preview.caret().replace(t2) );
				val = base.$preview.val();
			}
		}

		// check input restrictions - in case content was pasted
		if (o.restrictInput && val !== '') {
			t = val;
			r = layout.acceptedKeys.length;
			for (i=0; i < r; i++){
				if (t === '') { continue; }
				t2 = layout.acceptedKeys[i];
				if (val.indexOf(t2) >= 0) {
					// escape out all special characters
					if (/[\[|\]|\\|\^|\$|\.|\||\?|\*|\+|\(|\)|\{|\}]/g.test(t2)) { t2 = '\\' + t2; }
					t = t.replace( (new RegExp(t2, "g")), '');
				}
			}
			// what's left over are keys that aren't in the acceptedKeys array
			if (t !== '') { val = val.replace(t, ''); }
		}

		// save changes, then reposition caret
		pos.start += val.length - len;
		pos.end += val.length - len;
		base.$preview.val(val);

		base.$preview.caret(pos.start, pos.end);

		// calculate current cursor scroll location and set scrolltop to keep it in view
		// find row, multiply by font-size
		base.preview.scrollTop = base.lineHeight * (val.substring(0, pos.start).split('\n').length - 1);

		base.lastCaret = { start: pos.start, end: pos.end };

		if (o.acceptValid) { base.checkValid(); }

		return val; // return text, used for keyboard closing section
	};

	// Toggle accept button classes, if validating
	base.checkValid = function(){
		var valid = true;
		if (o.validate && typeof o.validate === "function") {
			valid = o.validate(base, base.$preview.val(), false);
		}
		// toggle accept button classes; defined in the css
		base.$keyboard.find('.ui-keyboard-accept')
			[valid ? 'removeClass' : 'addClass']('ui-keyboard-invalid-input')
			[valid ? 'addClass' : 'removeClass']('ui-keyboard-valid-input');
	};

	// Decimal button for num pad - only allow one (not used by default)
	base.checkDecimal = function(){
		// Check US "." or European "," format
		if ( ( base.decimal && /\./g.test(base.preview.value) ) ||
			( !base.decimal && /\,/g.test(base.preview.value) ) ) {
			base.$decBtn
				.attr({ 'disabled': 'disabled', 'aria-disabled': 'true' })
				.removeClass(o.css.buttonDefault + ' ' + o.css.buttonHover)
				.addClass(o.css.buttonDisabled);
		} else {
			base.$decBtn
				.removeAttr('disabled')
				.attr({ 'aria-disabled': 'false' })
				.addClass(o.css.buttonDefault)
				.removeClass(o.css.buttonDisabled);
		}
	};

	// get other layer values for a specific key
	base.getLayers = function(el){
		var key, keys;
		key = el.attr('data-pos');
		keys = el.closest('.ui-keyboard').find('button[data-pos="' + key + '"]').map(function(){
			// added '> span' because jQuery mobile adds multiple spans inside the button
			return $(this).find('> span').html();
		}).get();
		return keys;
	};

	// Go to next or prev inputs
	// goToNext = true, then go to next input; if false go to prev
	// isAccepted is from autoAccept option or true if user presses shift-enter
	base.switchInput = function(goToNext, isAccepted){
		if (typeof o.switchInput === "function") {
			o.switchInput(base, goToNext, isAccepted);
		} else {
			base.$keyboard.hide();
			var kb, stopped = false,
				all = $('button, input, textarea, a').filter(':visible'),
				indx = all.index(base.$el) + (goToNext ? 1 : -1);
				base.$keyboard.show();
			if (indx > all.length - 1) {
				stopped = o.stopAtEnd;
				indx = 0; // go to first input
			}
			if (indx < 0) {
				stopped = o.stopAtEnd;
				indx = all.length - 1; // stop or go to last
			}
			if (!stopped) {
				isAccepted = base.close(isAccepted);
				if (!isAccepted) { return; }
				kb = all.eq(indx).data('keyboard');
				if (kb && kb.options.openOn.length) {
					kb.focusOn();
				} else {
					all.eq(indx).focus();
				}
			}
		}
		return false;
	};

	// Close the keyboard, if visible. Pass a status of true, if the content was accepted
	// (for the event trigger).
	base.close = function(accepted){
		if (base.isOpen) {
			clearTimeout(base.throttled);
			var val = (accepted) ?  base.checkCombos() : base.originalContent;
			// validate input if accepted
			if (accepted && o.validate && typeof(o.validate) === "function" && !o.validate(base, val, true)) {
				val = base.originalContent;
				accepted = false;
				if (o.cancelClose) { return; }
			}
			base.isCurrent(false);
			base.isOpen = false;
			// update value for always open keyboards
			base.$preview.val(val);

			base.$el
				.removeClass('ui-keyboard-input-current ui-keyboard-autoaccepted')
				// add "ui-keyboard-autoaccepted" to inputs - see issue #66
				.addClass( (accepted || false) ? accepted === true ? '' : 'ui-keyboard-autoaccepted' : '' )
				.trigger( (o.alwaysOpen) ? '' : 'beforeClose.keyboard', [ base, base.el, (accepted || false) ] )
				.val( val )
				.scrollTop( base.el.scrollHeight )
				.trigger( ((accepted || false) ? 'accepted.keyboard' : 'canceled.keyboard'), [ base, base.el ] )
				.trigger( (o.alwaysOpen) ? 'inactive.keyboard' : 'hidden.keyboard', [ base, base.el ] )
				.blur();
			if (o.openOn) {
				// rebind input focus - delayed to fix IE issue #72
				base.timer = setTimeout(function(){
					base.$el.bind( o.openOn + '.keyboard', function(){ base.focusOn(); });
					// remove focus from element (needed for IE since blur doesn't seem to work)
					if ($(':focus')[0] === base.el) { base.$el.blur(); }
				}, 500);
			}
			if (!o.alwaysOpen && base.$keyboard) {
				// free up memory
				base.$keyboard.remove();
				base.$keyboard = [];
			}
			if (!base.watermark && base.el.value === '' && base.inPlaceholder !== '') {
				base.$el
					.addClass('ui-keyboard-placeholder')
					.val(base.inPlaceholder);
			}
			// trigger default change event - see issue #146
			base.$el.trigger('change');
		}
		return !!accepted;
	};

	base.accept = function(){
		return base.close(true);
	};

	base.escClose = function(e){
		if ( e && e.type === 'keyup' ) {
			return ( e.which === 27 )  ? base.close() : '';
		}
		// keep keyboard open if alwaysOpen or stayOpen is true - fixes mutliple always open keyboards or 
		// single stay open keyboard
		if ( !base.isOpen ) { return; }
		// ignore autoaccept if using escape - good idea?

		if ( !base.isCurrent() && base.isOpen || base.isOpen && e.target !== base.el && !o.stayOpen) {
			// stop propogation in IE - an input getting focus doesn't open a keyboard if one is already open
			if ( base.allie ) {
				e.preventDefault();
			}
			// send "true" instead of a true (boolean), the input won't get a "ui-keyboard-autoaccepted"
			// class name - see issue #66
			base.close( o.autoAccept ? 'true' : false );
		}
	};

	// Build default button
	base.keyBtn = $('<button />')
		.attr({ 'role': 'button', 'type': 'button', 'aria-disabled': 'false', 'tabindex' : '-1' })
		.addClass('ui-keyboard-button');

	// Add key function
	// keyName = the name of the function called in $.keyboard.keyaction when the button is clicked
	// name = name added to key, or cross-referenced in the display options
	// newSet = keyset to attach the new button
	// regKey = true when it is not an action key
	base.addKey = function(keyName, name, regKey){
		var t, keyType, m, map, nm,
			n = (regKey === true) ? keyName : o.display[name] || keyName,
			kn = (regKey === true) ? keyName.charCodeAt(0) : keyName;
		// map defined keys - format "key(A):Label_for_key"
		// "key" = key that is seen (can any character; but it might need to be escaped using "\"
		//  or entered as unicode "\u####"
		// "(A)" = the actual key on the real keyboard to remap, ":Label_for_key" ends up in the title/tooltip
		if (/\(.+\)/.test(n)) { // n = "\u0391(A):alpha"
			map = n.replace(/\(([^()]+)\)/, ''); // remove "(A)", left with "\u0391:alpha"
			m = n.match(/\(([^()]+)\)/)[1]; // extract "A" from "(A)"
			n = map;
			nm = map.split(':');
			map = (nm[0] !== '' && nm.length > 1) ? nm[0] : map; // get "\u0391" from "\u0391:alpha"
			$.keyboard.builtLayouts[base.layout].mappedKeys[m] = map;
		}

		// find key label
		nm = n.split(':');
		// corner case of ":(:):;" reduced to "::;", split as ["", "", ";"]
		if (nm[0] === '' && nm[1] === '') { n = ':'; }
		n = (nm[0] !== '' && nm.length > 1) ? $.trim(nm[0]) : n;
		// added to title
		t = (nm.length > 1) ? $.trim(nm[1]).replace(/_/g, " ") || '' : '';

		// Action keys will have the 'ui-keyboard-actionkey' class
		// '\u2190'.length = 1 because the unicode is converted, so if more than one character,
		// add the wide class
		keyType = (n.length > 1) ? ' ui-keyboard-widekey' : '';
		keyType += (regKey) ? '' : ' ui-keyboard-actionkey';
		return base.keyBtn
			.clone()
			.attr({
				'data-value' : n,
				'name': kn,
				'data-pos': base.temp[1] + ',' + base.temp[2],
				'title' : t,
				'data-action' : keyName,
				'data-original' : n,
				'data-curtxt' : n,
				'data-curnum' : 0
			})
			// add "ui-keyboard-" + keyName, if this is an action key
			//  (e.g. "Bksp" will have 'ui-keyboard-bskp' class)
			// add "ui-keyboard-" + unicode of 1st character
			//  (e.g. "~" is a regular key, class = 'ui-keyboard-126'
			//  (126 is the unicode value - same as typing &#126;)
			.addClass( (kn === '' ? '' : 'ui-keyboard-' + kn + keyType + ' ') + o.css.buttonDefault)
			.html('<span>' + n + '</span>')
			.appendTo(base.temp[0]);
	};

	base.customHash = function(){
		/*jshint bitwise:false */
		var i, array, hash, character, len,
			layout = o.customLayout,
			arrays = [], merged = [];
		// get all layout arrays
		for (array in layout) {
			if (layout.hasOwnProperty(array)) {
				arrays.push(layout[array]);
			}
		}
		// flatten array
		merged = merged.concat.apply(merged, arrays).join(' ');
		// produce hash name - http://stackoverflow.com/a/7616484/145346
		hash = 0;
		len = merged.length;
		if (len === 0) { return hash; }
		for (i = 0; i < len; i++) {
			character = merged.charCodeAt(i);
			hash = ( (hash<<5) - hash) + character;
			hash = hash & hash; // Convert to 32bit integer
		}
		return hash;
	};

	base.buildKeyboard = function(){
		var t, action, row, newSet, isAction,
			currentSet, key, keys, margin,
			sets = 0,
			layout = $.keyboard.builtLayouts[base.layout] = {
				mappedKeys   : {},
				acceptedKeys : []
			},
			acceptedKeys = layout.acceptedKeys = [],

		container = $('<div />')
			.addClass('ui-keyboard ' + o.css.container + (o.alwaysOpen ? ' ui-keyboard-always-open' : '') )
			.attr({ 'role': 'textbox' })
			.hide();
		// verify layout or setup custom keyboard
		if (o.layout === 'custom' || !$.keyboard.layouts.hasOwnProperty(o.layout)) {
			o.layout = 'custom';
			$.keyboard.layouts.custom = o.customLayout || { 'default' : ['{cancel}'] };
		}

		// Main keyboard building loop
		$.each($.keyboard.layouts[o.layout], function(set, keySet){
			if (set !== "") {
				sets++;
				newSet = $('<div />')
					.attr('name', set) // added for typing extension
					.addClass('ui-keyboard-keyset ui-keyboard-keyset-' + set)
					.appendTo(container)[(set === 'default') ? 'show' : 'hide']();

				for ( row = 0; row < keySet.length; row++ ){

					// remove extra spaces before spliting (regex probably could be improved)
					currentSet = $.trim(keySet[row]).replace(/\{(\.?)[\s+]?:[\s+]?(\.?)\}/g,'{$1:$2}');
					keys = currentSet.split(/\s+/);

					for ( key = 0; key < keys.length; key++ ) {
						// used by addKey function
						base.temp = [ newSet, row, key ];
						isAction = false;

						// ignore empty keys
						if (keys[key].length === 0) { continue; }

						// process here if it's an action key
						if( /^\{\S+\}$/.test(keys[key])){
							action = keys[key].match(/^\{(\S+)\}$/)[1].toLowerCase();
							// add active class if there are double exclamation points in the name
							if (/\!\!/.test(action)) {
								action = action.replace('!!','');
								isAction = true;
							}

							// add empty space
							if (/^sp:((\d+)?([\.|,]\d+)?)(em|px)?$/.test(action)) {
								// not perfect globalization, but allows you to use {sp:1,1em}, {sp:1.2em} or {sp:15px}
								margin = parseFloat( action
									.replace(/,/,'.')
									.match(/^sp:((\d+)?([\.|,]\d+)?)(em|px)?$/)[1] || 0
								);
								$('<span>&nbsp;</span>')
									// previously {sp:1} would add 1em margin to each side of a 0 width span
									// now Firefox doesn't seem to render 0px dimensions, so now we set the 
									// 1em margin x 2 for the width
									.width( (action.match('px') ? margin + 'px' : (margin * 2) + 'em') )
									.addClass('ui-keyboard-button ui-keyboard-spacer')
									.appendTo(newSet);
							}

							// add empty button
							if (/^empty(:((\d+)?([\.|,]\d+)?)(em|px)?)?$/.test(action)) {
								margin = (/:/.test(action)) ? parseFloat( action
									.replace(/,/,'.')
									.match(/^empty:((\d+)?([\.|,]\d+)?)(em|px)?$/)[1] || 0
								) : '';
								base
									.addKey('', ' ')
									.addClass(o.css.buttonDisabled + ' ' + o.css.buttonEmpty)
									.attr('aria-disabled', true)
									.width( margin ? (action.match('px') ? margin + 'px' : (margin * 2) + 'em') : '' );
							}

							// meta keys
							if (/^meta\d+\:?(\w+)?/.test(action)){
								base.addKey(action, action);
								continue;
							}

							// switch needed for action keys with multiple names/shortcuts or
							// default will catch all others
							switch(action){

								case 'a':
								case 'accept':
									base
										.addKey('accept', action)
										.addClass(o.css.buttonAction);
									break;

								case 'alt':
								case 'altgr':
									base.addKey('alt', 'alt');
									break;

								case 'b':
								case 'bksp':
									base.addKey('bksp', action);
									break;

								case 'c':
								case 'cancel':
									base
										.addKey('cancel', action)
										.addClass(o.css.buttonAction);
									break;

								// toggle combo/diacritic key
								case 'combo':
									base
										.addKey('combo', 'combo')
										.addClass(o.css.buttonAction);
									break;

								// Decimal - unique decimal point (num pad layout)
								case 'dec':
									acceptedKeys.push((base.decimal) ? '.' : ',');
									base.addKey('dec', 'dec');
									break;

								case 'e':
								case 'enter':
									base
										.addKey('enter', action)
										.addClass(o.css.buttonAction);
									break;

								case 's':
								case 'shift':
									base.addKey('shift', action);
									break;

								// Change sign (for num pad layout)
								case 'sign':
									acceptedKeys.push('-');
									base.addKey('sign', 'sign');
									break;

								case 'space':
									acceptedKeys.push(' ');
									base.addKey('space', 'space');
									break;

								case 't':
								case 'tab':
									base.addKey('tab', action);
									break;

								default:
									if ($.keyboard.keyaction.hasOwnProperty(action)){
										// acceptedKeys.push(action);
										base.addKey(action, action)[isAction ? 'addClass' : 'removeClass'](o.css.buttonAction);
									}

							}

						} else {

							// regular button (not an action key)
							t = keys[key];
							acceptedKeys.push( t === ':' ? t : t.split(':')[0] );
							base.addKey(t, t, true);
						}
					}
					newSet.find('.ui-keyboard-button:last').after('<br class="ui-keyboard-button-endrow">');
				}
			}
		});
	
		if (sets > 1) { base.sets = true; }
		layout.hasMappedKeys = !( $.isEmptyObject(layout.mappedKeys) ); // $.isEmptyObject() requires jQuery 1.4+
		layout.$keyboard = container;

		return container;
	};

	base.destroy = function() {
		$(document).unbind('mousedown.keyboard keyup.keyboard touchstart.keyboard');
		if (base.$keyboard.length) { base.$keyboard.remove(); }
		var unb = $.trim(o.openOn + ' accepted beforeClose canceled change contextmenu hidden ' +
			'initialized keydown keypress keyup visible ').split(' ').join('.keyboard ');
		base.$el
			.removeClass('ui-keyboard-input ui-keyboard-lockedinput ui-keyboard-placeholder ' +
				'ui-keyboard-notallowed ui-keyboard-always-open ' + o.css.input)
			.removeAttr('aria-haspopup')
			.removeAttr('role')
			.unbind( unb + '.keyboard')
			.removeData('keyboard');
	};

		// Run initializer
		base.init();
	};

	// Action key function list
	$.keyboard.keyaction = {
		accept : function(base){
			base.close(true); // same as base.accept();
			return false;     // return false prevents further processing
		},
		alt : function(base,el){
			base.altActive = !base.altActive;
			base.showKeySet(el);
		},
		bksp : function(base){
			base.insertText('bksp'); // the script looks for the "bksp" string and initiates a backspace
		},
		cancel : function(base){
			base.close();
			return false; // return false prevents further processing
		},
		clear : function(base){
			base.$preview.val('');
		},
		combo : function(base){
			var c = !base.options.useCombos;
			base.options.useCombos = c;
			base.$keyboard.find('.ui-keyboard-combo').toggleClass(base.options.css.buttonAction, c);
			if (c) { base.checkCombos(); }
			return false;
		},
		dec : function(base){
			base.insertText((base.decimal) ? '.' : ',');
		},
		"default" : function(base,el){
			base.shiftActive = base.altActive = base.metaActive = false;
			base.showKeySet(el);
		},
		// el is the pressed key (button) object; it is null when the real keyboard enter is pressed
		enter : function(base, el, e) {
			var tag = base.el.tagName, o = base.options;
			// shift-enter in textareas
			if (e.shiftKey) {
				// textarea & input - enterMod + shift + enter = accept, then go to prev;
				//  base.switchInput(goToNext, autoAccept)
				// textarea & input - shift + enter = accept (no navigation)
				return (o.enterNavigation) ? base.switchInput(!e[o.enterMod], true) : base.close(true);
			}
			// input only - enterMod + enter to navigate
			if (o.enterNavigation && (tag !== 'TEXTAREA' || e[o.enterMod])) {
				return base.switchInput(!e[o.enterMod], o.autoAccept ? 'true' : false);
			}
			// pressing virtual enter button inside of a textarea - add a carriage return
			// e.target is span when clicking on text and button at other times
			if (tag === 'TEXTAREA' && $(e.target).closest('button').length) {
				base.insertText(' \n'); // IE8 fix (space + \n) - fixes #71 thanks Blookie!
			}
		},
		// caps lock key
		lock : function(base,el){
			base.lastKeyset[0] = base.shiftActive = base.capsLock = !base.capsLock;
			base.showKeySet(el);
		},
		left : function(base){
			var p = base.$preview.caret();
			if (p.start - 1 >= 0) {
				// move both start and end of caret (prevents text selection) & save caret position
				base.lastCaret = { start: p.start - 1, end: p.start - 1 };
			}
		},
		meta : function(base,el){
			base.metaActive = ($(el).hasClass(base.options.css.buttonAction)) ? false : true;
			base.showKeySet(el);
		},
		next : function(base) {
			base.switchInput(true, base.options.autoAccept);
			return false;
		},
		prev : function(base) {
			base.switchInput(false, base.options.autoAccept);
			return false;
		},
		right : function(base){
			var p = base.$preview.caret();
			if (p.start + 1 <= base.$preview.val().length) {
				// move both start and end of caret (prevents text selection) && save caret position
				base.lastCaret = { start: p.start + 1, end: p.start + 1 };
			}
		},
		shift : function(base,el){
			base.lastKeyset[0] = base.shiftActive = !base.shiftActive;
			base.showKeySet(el);
		},
		sign : function(base){
			if(/^\-?\d*\.?\d*$/.test( base.$preview.val() )) {
				base.$preview.val( (base.$preview.val() * -1) );
			}
		},
		space : function(base){
			base.insertText(' ');
		},
		tab : function(base) {
			var tag = base.el.tagName,
				o = base.options;
			if (tag === 'INPUT') {
				if (o.tabNavigation) {
					return base.switchInput(!base.shiftActive, true);
				} else {
					// ignore tab key in input
					return false;
				}
			}
			base.insertText('\t');
		}
	};

	// Default keyboard layouts
	$.keyboard.builtLayouts = {};
	$.keyboard.layouts = {
		'alpha' : {
			'default': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} a b c d e f g h i j [ ] \\',
				'k l m n o p q r s ; \' {enter}',
				'{shift} t u v w x y z , . / {shift}',
				'{accept} {space} {cancel}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} A B C D E F G H I J { } |',
				'K L M N O P Q R S : " {enter}',
				'{shift} T U V W X Y Z < > ? {shift}',
				'{accept} {space} {cancel}'
			]
		},
		'qwerty' : {
			'default': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} q w e r t y u i o p [ ] \\',
				'a s d f g h j k l ; \' {enter}',
				'{shift} z x c v b n m , . / {shift}',
				'{accept} {space} {cancel}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} Q W E R T Y U I O P { } |',
				'A S D F G H J K L : " {enter}',
				'{shift} Z X C V B N M < > ? {shift}',
				'{accept} {space} {cancel}'
			]
		},
		'international' : {
			'default': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} q w e r t y u i o p [ ] \\',
				'a s d f g h j k l ; \' {enter}',
				'{shift} z x c v b n m , . / {shift}',
				'{accept} {alt} {space} {alt} {cancel}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} Q W E R T Y U I O P { } |',
				'A S D F G H J K L : " {enter}',
				'{shift} Z X C V B N M < > ? {shift}',
				'{accept} {alt} {space} {alt} {cancel}'
			],
			'alt': [
				'~ \u00a1 \u00b2 \u00b3 \u00a4 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00d7 {bksp}',
				'{tab} \u00e4 \u00e5 \u00e9 \u00ae \u00fe \u00fc \u00fa \u00ed \u00f3 \u00f6 \u00ab \u00bb \u00ac',
				'\u00e1 \u00df \u00f0 f g h j k \u00f8 \u00b6 \u00b4 {enter}',
				'{shift} \u00e6 x \u00a9 v b \u00f1 \u00b5 \u00e7 > \u00bf {shift}',
				'{accept} {alt} {space} {alt} {cancel}'
			],
			'alt-shift': [
				'~ \u00b9 \u00b2 \u00b3 \u00a3 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00f7 {bksp}',
				'{tab} \u00c4 \u00c5 \u00c9 \u00ae \u00de \u00dc \u00da \u00cd \u00d3 \u00d6 \u00ab \u00bb \u00a6',
				'\u00c4 \u00a7 \u00d0 F G H J K \u00d8 \u00b0 \u00a8 {enter}',
				'{shift} \u00c6 X \u00a2 V B \u00d1 \u00b5 \u00c7 . \u00bf {shift}',
				'{accept} {alt} {space} {alt} {cancel}'
			]
		},
		'colemak' : {
			'default': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} q w f p g j l u y ; [ ] \\',
				'{bksp} a r s t d h n e i o \' {enter}',
				'{shift} z x c v b k m , . / {shift}',
				'{accept} {space} {cancel}'
			],
			'shift' : [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} Q W F P G J L U Y : { } |', 
				'{bksp} A R S T D H N E I O " {enter}',
				'{shift} Z X C V B K M < > ? {shift}',
				'{accept} {space} {cancel}'
			]
		},
		'dvorak' : {
			'default': [
				'` 1 2 3 4 5 6 7 8 9 0 [ ] {bksp}',
				'{tab} \' , . p y f g c r l / = \\',
				'a o e u i d h t n s - {enter}',
				'{shift} ; q j k x b m w v z {shift}',
				'{accept} {space} {cancel}'
			],
			'shift' : [
				'~ ! @ # $ % ^ & * ( ) { } {bksp}',
				'{tab} " < > P Y F G C R L ? + |', 
				'A O E U I D H T N S _ {enter}',
				'{shift} : Q J K X B M W V Z {shift}',
				'{accept} {space} {cancel}'
			]
		},
		'num' : {
			'default' : [
				'= ( ) {b}',
				'{clear} / * -',
				'7 8 9 +',
				'4 5 6 {sign}',
				'1 2 3 %',
				'0 . {a} {c}'
			]
		}
	};

	$.keyboard.defaultOptions = {

		// *** choose layout & positioning ***
		layout       : 'qwerty',
		customLayout : null,

		position     : {
			// optional - null (attach to input/textarea) or a jQuery object (attach elsewhere)
			of : null,
			my : 'center top',
			at : 'center top',
			// used when "usePreview" is false (centers the keyboard at the bottom of the input/textarea)
			at2: 'center bottom'
		},

		// preview added above keyboard if true, original input/textarea used if false
		usePreview   : true,

		// if true, the keyboard will always be visible
		alwaysOpen   : false,

		// give the preview initial focus when the keyboard becomes visible
		initialFocus : true,

		// if true, keyboard will remain open even if the input loses focus, but closes on escape
		// or when another keyboard opens.
		stayOpen     : false,

		// *** change keyboard language & look ***
		display : {
			// check mark - same action as accept
			'a'      : '\u2714:Accept (Shift-Enter)',
			'accept' : 'Accept:Accept (Shift-Enter)',
			// other alternatives \u2311
			'alt'    : 'Alt:\u2325 AltGr',
			// Left arrow (same as &larr;)
			'b'      : '\u232b:Backspace',
			'bksp'   : 'Bksp:Backspace',
			// big X, close - same action as cancel
			'c'      : '\u2716:Cancel (Esc)',
			'cancel' : 'Cancel:Cancel (Esc)',
			// clear num pad
			'clear'  : 'C:Clear',
			'combo'  : '\u00f6:Toggle Combo Keys',
			// decimal point for num pad (optional), change '.' to ',' for European format
			'dec'    : '.:Decimal',
			// down, then left arrow - enter symbol
			'e'      : '\u23ce:Enter',
			'empty'  : '\u00a0',
			'enter'  : 'Enter:Enter \u23ce',
			// left arrow (move caret)
			'left'   : '\u2190',
			// caps lock
			'lock'   : 'Lock:\u21ea Caps Lock',
			'next'   : 'Next \u21e8',
			'prev'   : '\u21e6 Prev',
			// right arrow (move caret)
			'right'  : '\u2192',
			// thick hollow up arrow
			's'      : '\u21e7:Shift',
			'shift'  : 'Shift:Shift',
			// +/- sign for num pad
			'sign'   : '\u00b1:Change Sign',
			'space'  : '&nbsp;:Space',
			// right arrow to bar (used since this virtual keyboard works with one directional tabs)
			't'      : '\u21e5:Tab',
			// \u21b9 is the true tab symbol (left & right arrows)
			'tab'    : '\u21e5 Tab:Tab'
		},

		// Message added to the key title while hovering, if the mousewheel plugin exists
		wheelMessage : 'Use mousewheel to see other keys',

		css : {
			// input & preview
			input          : 'ui-widget-content ui-corner-all',
			// keyboard container
			container      : 'ui-widget-content ui-widget ui-corner-all ui-helper-clearfix',
			// default state
			buttonDefault  : 'ui-state-default ui-corner-all',
			// hovered button
			buttonHover    : 'ui-state-hover',
			// Action keys (e.g. Accept, Cancel, Tab, etc); this replaces "actionClass" option
			buttonAction   : 'ui-state-active',
			// used when disabling the decimal button {dec} when a decimal exists in the input area
			buttonDisabled : 'ui-state-disabled',
			buttonEmpty    : 'ui-keyboard-empty'
		},

		// *** Useability ***
		// Auto-accept content when clicking outside the keyboard (popup will close)
		autoAccept   : false,

		// Prevents direct input in the preview window when true
		lockInput    : false,

		// Prevent keys not in the displayed keyboard from being typed in
		restrictInput: false,

		// Check input against validate function, if valid the accept button gets a class name of
		// "ui-keyboard-valid-input". If invalid, the accept button gets a class name of
		// "ui-keyboard-invalid-input"
		acceptValid  : false,

		// if acceptValid is true & the validate function returns a false, this option will cancel
		// a keyboard close only after the accept button is pressed
		cancelClose  : true,

		// tab to go to next, shift-tab for previous (default behavior)
		tabNavigation: false,

		// enter for next input; shift-enter accepts content & goes to next
		// shift + "enterMod" + enter ("enterMod" is the alt as set below) will accept content and go
		// to previous in a textarea
		enterNavigation : false,
		// mod key options: 'ctrlKey', 'shiftKey', 'altKey', 'metaKey' (MAC only)
		enterMod : 'altKey', // alt-enter to go to previous; shift-alt-enter to accept & go to previous

		// if true, the next button will stop on the last keyboard input/textarea; prev button stops at first
		// if false, the next button will wrap to target the first input/textarea; prev will go to the last
		stopAtEnd : true,

		// Set this to append the keyboard after the input/textarea (appended to the input/textarea parent).
		// This option works best when the input container doesn't have a set width & when the "tabNavigation"
		// option is true.
		appendLocally: false,
		// When appendLocally is false, the keyboard will be appended to this object
		appendTo     : 'body',

		// If false, the shift key will remain active until the next key is (mouse) clicked on; if true it will
		// stay active until pressed again
		stickyShift  : true,

		// Prevent pasting content into the area
		preventPaste : false,

		// caret places at the end of any text
		caretToEnd   : false,

		// Set the max number of characters allowed in the input, setting it to false disables this option
		maxLength    : false,

		// Mouse repeat delay - when clicking/touching a virtual keyboard key, after this delay the key will
		// start repeating
		repeatDelay  : 500,

		// Mouse repeat rate - after the repeatDelay, this is the rate (characters per second) at which the
		// key is repeated Added to simulate holding down a real keyboard key and having it repeat. I haven't
		// calculated the upper limit of this rate, but it is limited to how fast the javascript can process
		// the keys. And for me, in Firefox, it's around 20.
		repeatRate   : 20,

		// resets the keyboard to the default keyset when visible
		resetDefault : false,

		// Event (namespaced) on the input to reveal the keyboard. To disable it, just set it to ''.
		openOn       : 'focus',

		// Event (namepaced) for when the character is added to the input (clicking on the keyboard)
		keyBinding   : 'mousedown touchstart',

		// combos (emulate dead keys : http://en.wikipedia.org/wiki/Keyboard_layout#US-International)
		// if user inputs `a the script converts it to à, ^o becomes ô, etc.
		useCombos : true,
		combos    : {
			// grave
			'`' : { a:"\u00e0", A:"\u00c0", e:"\u00e8", E:"\u00c8", i:"\u00ec", I:"\u00cc", o:"\u00f2", O:"\u00d2",
					u:"\u00f9", U:"\u00d9", y:"\u1ef3", Y:"\u1ef2" },
			// acute & cedilla
			"'" : { a:"\u00e1", A:"\u00c1", e:"\u00e9", E:"\u00c9", i:"\u00ed", I:"\u00cd", o:"\u00f3", O:"\u00d3",
					u:"\u00fa", U:"\u00da", y:"\u00fd", Y:"\u00dd" },
			// umlaut/trema
			'"' : { a:"\u00e4", A:"\u00c4", e:"\u00eb", E:"\u00cb", i:"\u00ef", I:"\u00cf", o:"\u00f6", O:"\u00d6",
					u:"\u00fc", U:"\u00dc", y:"\u00ff", Y:"\u0178" },
			// circumflex
			'^' : { a:"\u00e2", A:"\u00c2", e:"\u00ea", E:"\u00ca", i:"\u00ee", I:"\u00ce", o:"\u00f4", O:"\u00d4",
					u:"\u00fb", U:"\u00db", y:"\u0177", Y:"\u0176" },
			// tilde
			'~' : { a:"\u00e3", A:"\u00c3", e:"\u1ebd", E:"\u1ebc", i:"\u0129", I:"\u0128", o:"\u00f5", O:"\u00d5",
					u:"\u0169", U:"\u0168", y:"\u1ef9", Y:"\u1ef8", n:"\u00f1", N:"\u00d1" }
		},

/*
		// *** Methods ***
		// commenting these out to reduce the size of the minified version
		// Callbacks - attach a function to any of these callbacks as desired
		initialized   : function(e, keyboard, el) {},
		beforeVisible : function(e, keyboard, el) {},
		visible       : function(e, keyboard, el) {},
		change        : function(e, keyboard, el) {},
		beforeClose   : function(e, keyboard, el, accepted) {},
		accepted      : function(e, keyboard, el) {},
		canceled      : function(e, keyboard, el) {},
		hidden        : function(e, keyboard, el) {},
		// called instead of base.switchInput
		switchInput   : function(keyboard, goToNext, isAccepted) {},
		// used if you want to create a custom layout or modify the built-in keyboard
		create        : function(keyboard) { return keyboard.buildKeyboard(); }
*/

		// this callback is called just before the "beforeClose" to check the value
		// if the value is valid, return true and the keyboard will continue as it should
		// (close if not always open, etc). If the value is not value, return false and the clear the keyboard
		// value ( like this "keyboard.$preview.val('');" ), if desired. The validate function is called after
		// each input, the "isClosing" value will be false; when the accept button is clicked,
		// "isClosing" is true
		validate    : function(keyboard, value, isClosing) { return true; }

	};

	// for checking combos
	$.keyboard.comboRegex = /([`\'~\^\"ao])([a-z])/mig;

	// store current keyboard element; used by base.isCurrent()
	$.keyboard.currentKeyboard = '';

	$.fn.keyboard = function(options){
		return this.each(function(){
			if (!$(this).data('keyboard')) {
				(new $.keyboard(this, options));
			}
		});
	};

	$.fn.getkeyboard = function(){
		return this.data("keyboard");
	};

})(jQuery);

/* Copyright (c) 2010 C. F., Wong (<a href="http://cloudgen.w0ng.hk">Cloudgen Examplet Store</a>)
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 * Highly modified from the original
 */
(function($, len, createRange, duplicate){
"use strict";
$.fn.caret = function(options,opt2) {
	if ( typeof this[0] === 'undefined' || this.is(':hidden') || this.css('visibility') === 'hidden' ) {
		return this;
	}
	var s, start, e, end, selRange, range, stored_range, te, val,
		selection = document.selection, t = this[0], sTop = t.scrollTop,
		ss = false, supportCaret = true;
	try {
		ss = typeof t.selectionStart !== 'undefined';
	} catch(err){
		supportCaret = false;
	}
	if (typeof options === 'object' && options.start && options.end) {
		start = options.start;
		end = options.end;
	} else if (typeof options === 'number' && typeof opt2 === 'number') {
		start = options;
		end = opt2;
	}
	if (supportCaret && typeof start !== 'undefined') {
		if (ss){
			t.selectionStart=start;
			t.selectionEnd=end;
		} else {
			selRange = t.createTextRange();
			selRange.collapse(true);
			selRange.moveStart('character', start);
			selRange.moveEnd('character', end-start);
			selRange.select();
		}
		// must be visible or IE8 crashes; IE9 in compatibility mode works fine - issue #56
		if (this.is(':visible') || this.css('visibility') !== 'hidden') { this.focus(); }
		t.scrollTop = sTop;
		return this;
	} else {
		if (ss) {
			s = t.selectionStart;
			e = t.selectionEnd;
		} else if (selection) {
			if (t.tagName === 'TEXTAREA') {
				val = this.val();
				range = selection[createRange]();
				stored_range = range[duplicate]();
				stored_range.moveToElementText(t);
				stored_range.setEndPoint('EndToEnd', range);
				// thanks to the awesome comments in the rangy plugin
				s = stored_range.text.replace(/\r/g, '\n')[len];
				e = s + range.text.replace(/\r/g, '\n')[len];
			} else {
				val = this.val().replace(/\r/g, '\n');
				range = selection[createRange]()[duplicate]();
				range.moveEnd('character', val[len]);
				s = (range.text === '' ? val[len] : val.lastIndexOf(range.text));
				range = selection[createRange]()[duplicate]();
				range.moveStart('character', -val[len]);
				e = range.text[len];
			}
		} else {
			// caret positioning not supported
			s = 0;
			e = (t.value || '').length;
		}
		te = (t.value || '').substring(s,e);
		return { start : s, end : e, text : te, replace : function(st){
			return t.value.substring(0,s) + st + t.value.substring(e, t.value[len]);
		}};
	}
};
})(jQuery, 'length', 'createRange', 'duplicate');
