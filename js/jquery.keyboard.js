/*
jQuery UI Virtual Keyboard
Version 1.7.3

Author: Jeremy Satterfield
Modified: Rob G (Mottie on github)
-----------------------------------------
Creative Commons Attribution-Share Alike 3.0 Unported License
http://creativecommons.org/licenses/by-sa/3.0/

Caret code from jquery.caret.1.02.js
Licensed under the MIT License:
http://www.opensource.org/licenses/mit-license.php
-----------------------------------------

An on-screen virtual keyboard embedded within the browser window which
will popup when a specified entry field is focused. The user can then
type and preview their input before Accepting or Canceling.

As a plugin to jQuery UI styling and theme will automatically
match that used by jQuery UI with the exception of the required
CSS listed below.

Requires:
	jQuery
	jQuery UI (this version no longer requires the widget factory)

Usage:
	$('input[type=text], input[type=password], textarea')
		.keyboard({
			layout:"qwerty",
			customLayout:
				[["q w e r t y {bksp}","Q W E R T Y {bksp}"],
				["s a m p l e {shift}","S A M P L E {shift}"],
				["{accept} {space} {cancel}","{accept} {space} {cancel}"]]
		});

Options:
	layout
		[String] specify which keyboard layout to use
		qwerty - Standard QWERTY layout (Default)
		international - US international layout
		alpha  - Alphabetical layout
		dvorak - Dvorak Simplified layout
		num    - Numerical (ten-key) layout
		custom - Uses a custom layout as defined by the customLayout option

	customLayout
		[Array] Specify a custom layout
			An Array of arrays.
			Each internal array is a new keyboard row.
			Each internal array can contain one to four rows (default, shifted, alt and alt-shift... respectively).
			String elements (Lower case and Upper case, alt lower case and alt-upper case respectively).
			Each string element must have each character or key seperated by a space.
			In the list below where two special/"Action" keys are shown, both keys have the same action but different appearances.
			Special/"Action" keys include:
				{a}, {accept} - Updates element value and closes keyboard
				{alt},{altgr} - AltGr for International keyboard
				{b}, {bksp}   - Backspace
				{c}, {cancel} - Clears changes and closes keyboard
				{clear}       - Clear input window - used in num pad
				{dec}         - Decimal for numeric entry, only allows one decimal (optional use in num pad)
				{e}, {enter}  - Return/New Line
				{s}, {shift}  - Shift/Capslock
				{sign}        - Change sign of numeric entry (positive or negative)
				{sp:#}        - Replace # with a numerical value, adds blank space, value of 1 ~ width of one key
				{space}       - Spacebar
				{t}, {tab}    - Tab

CSS:
	.ui-keyboard { padding: .3em; position: absolute; left: 0; top: 0; z-index: 16000; }
	.ui-keyboard div { font-size: 1.1em; }
	.ui-keyboard-button { height: 2em; width: 2em; margin: .1em; }
	.ui-keyboard-widekey { width: 4em; }
	.ui-keyboard-space { width: 15em; }
	.ui-keyboard-preview { width: 100%; text-align: left; margin-bottom: 3px; }
	.ui-keyboard-keyset { text-align: center; }
	.ui-keyboard-input { text-align: left; }
	.ui-keyboard-overlay { height: 100%; width: 100%; background: transparent; position: absolute; top: 0; left: 0; z-index: 15999; }
*/

(function($){
	$.keyboard = function(el, options){
		var base = this;

		// Access to jQuery and DOM versions of element
		base.$el = $(el);
		base.el = el;

		// Add a reverse reference to the DOM object
		base.$el.data("keyboard", base);

		base.init = function(){
			base.options = $.extend(true, {}, $.keyboard.defaultOptions, options);

			// Shift and Alt key toggles
			base.shiftActive = false;
			base.altActive   = false;
			base.metaActive  = false;
			// true if a layout has more than one keyset - used for mousewheel message
			base.sets = false;
			// Class names of the basic key set - meta keysets are handled by the keyname
			base.rows = ['ui-keyboard-keyset-default', 'ui-keyboard-keyset-shift', 'ui-keyboard-keyset-alt', 'ui-keyboard-keyset-alt-shift' ];
			base.acceptedKeys = [];
			base.msie = $.browser.msie;
			base.inPlaceholder = base.$el.attr('placeholder') || '';
			base.watermark = (typeof(document.createElement('input').placeholder) !== 'undefined' && base.inPlaceholder !== ''); // html 5 placeholder/watermark

			// Bind events
			$.each('visible change hidden canceled accepted'.split(' '), function(i,o){
				if ($.isFunction(base.options[o])){
					base.$el.bind(o, base.options[o]);
				}
			});

			// Close with esc key & clicking outside
			$(document).bind('mousedown keyup', function(e){
				if (base.isVisible && ( e.type === 'mousedown' || (e.type === 'keyup' && e.which === 27) )){
					base.escClose(e);
				}
			});

			// Display keyboard on focus
			base.$el
				.addClass('ui-keyboard-input ui-widget-content ui-corner-all')
				.attr({ 'aria-haspopup' : 'true', 'role' : 'textbox' })
				.bind('focus', function(){
					if (!base.isVisible) {
						base.reveal();
						setTimeout(function(){ base.$preview.focus(); }, 100); // needed for Opera
					}
				});

			if (!base.watermark && base.$el.val() === '' && base.$el.attr('placeholder') !== '') {
				base.$el
					.addClass('placeholder') // css watermark style (darker text)
					.val( base.inPlaceholder );
			}

		};

		base.reveal = function(){
			// close all keyboards
			$('.ui-keyboard').hide();

			// build keyboard if it doesn't exist
			if (typeof(base.$keyboard) === 'undefined') { base.startup(); }

			// clear watermark 
			if (!base.watermark && base.el.value === base.inPlaceholder) {
				base.$el
					.removeClass('placeholder')
					.val('');
			}
			// save starting content, in case we cancel
			base.originalContent = base.$el.val();
			base.$preview.val( base.originalContent );

			// show & position keyboard
			base.$keyboard
				// position and show the keyboard before positioning (required for UI position utility)
				.css({ position: 'absolute', left: 0, top: 0 })
				.show()
				.position({
					// get single target position || target stored in element data (multiple targets) || default, at the element
					of: base.options.position.of || base.$el.data('keyboardPosition') || base.$el,
					my: base.options.position.my,
					at: base.options.position.at,
					collision: 'fit'
				});
			// adjust keyboard preview window width
			base.$preview
				.css('width', ((base.msie) ? base.$keyboard.width() : '100%' )) // IE thinks 100% means across the screen
				.focus();
			base.isVisible = true;

			base.checkDecimal();

			// IE caret haxx0rs
			if (base.msie){
				// ensure caret is at the end of the text (needed for IE)
				var caret = base.$preview.val().length;
				base.$preview.caret(caret, caret);
				// Add overlay under the keyboard to prevent clicking in and not opening a new keyboard while one is open
				$('<div class="ui-keyboard-overlay"></div>')
					.click(function(){
						$(this).remove();
						base.close();
					})
					.appendTo('body');
			}
			base.$el.trigger( 'visible', base.$el );
			return base;
		};

		base.startup = function(){
			base.$keyboard = base.buildKeyboard();
			base.$allKeys = base.$keyboard.find('.ui-keyboard-button');
			base.$preview = base.$keyboard.find('.ui-keyboard-preview');
			base.preview = base.$preview[0];
			base.$decBtn = base.$keyboard.find('.ui-keyboard-dec');
			base.wheel = $.isFunction( $.fn.mousewheel ); // is mousewheel plugin loaded?

			base.$preview
				.keypress(function(e){
					// restrict input
					if (base.options.restrictInput) {
						var k = (!e.charCode) ? String.fromCharCode(e.which) : String.fromCharCode(e.charCode);
						if (base.acceptedKeysStr.indexOf(k) === -1) { e.preventDefault(); }
					}
				})
				.bind('keyup', function(e){
					switch (e.which) {
						// Insert tab key
						case 9 :
							// Added a flag to prevent from tabbing into an input, keyboard opening, then adding the tab to the keyboard preview
							// area on keyup. Sadly it still happens if you don't release the tab key immediately because keydown event auto-repeats
							if (base.tab) {
								base.keyaction.tab();
								base.tab = false;
							}
							break;

						// Escape will hide the keyboard
						case 27:
							base.close();
							break;
					}
					base.$el.trigger( 'change', base.$el );
				})
				.bind('keydown', function(e){
					switch (e.which) {
						// prevent tab key from leaving the preview window
						case 9 :
							base.tab = true; // see keyup comment above
							e.preventDefault(); // Opera ignores this =(
							break;

						case 13:
							// Accept content - shift-enter
							if (e.shiftKey) {
								base.close(true);
								e.preventDefault();
							}
							break;

						case 86:
							// prevent ctrl-v
							if (e.ctrlKey) {
								if (base.options.preventPaste) { e.preventDefault(); return; }
								base.$preview.val( base.checkCombos(base.$preview.val())[0] ); // check pasted content
							}
							break;
					}
				});
			// If preventing paste, block context menu (right click)
			if (base.options.preventPaste){
				base.$preview.bind('contextmenu', function(e){ e.preventDefault(); });
				base.$el.bind('contextmenu', function(e){ e.preventDefault(); });
			}

			base.$keyboard.appendTo('body');

			base.$allKeys
				.bind(base.options.keyBinding, function(e){
					// 'key', { action: doAction, original: n, curTxt : n, curNum: 0 }
					var txt, key = $.data(this, 'key'), action = key.action.split(':')[0];
					if (action.match('meta')) { action = 'meta'; }
					if (base.keyaction.hasOwnProperty(action)) {
						base.keyaction[action](this);
					} else if (typeof key.action !== 'undefined') {
						txt = (base.wheel && !$(this).is('.ui-keyboard-actionkey')) ? key.curTxt : key.action;
						base.insertText(txt);
					}
					base.$el.trigger( 'change', base.$el );
					base.$preview.focus();
					e.preventDefault();
				})
				// Change hover class and tooltip
				.bind('mouseenter mouseleave', function(e){
					var el = this, $this = $(this),
						// 'key' = { action: doAction, original: n, curTxt : n, curNum: 0 }
						key = $.data(el, 'key');
					if (e.type === 'mouseenter' && base.el.type !== 'password' ){
						$this
							.addClass('ui-state-hover')
							.attr('title', function(i,t){
								// show mouse wheel message
								return (base.wheel && t === '' && base.sets) ? base.options.wheelMessage : t;
							});
					}
					if (e.type === 'mouseleave'){
						key.curTxt = key.original;
						key.curNum = 0;
						$.data(el, 'key', key);
						$this
							.removeClass( (base.el.type === 'password') ? '' : 'ui-state-hover') // needed or IE flickers really bad
							.attr('title', function(i,t){ return (t === base.options.wheelMessage) ? '' : t; })
							.val( key.original ); // restore original button text
					}
				})
				// Allow mousewheel to scroll through other key sets of the same key
				.bind('mousewheel', function(e, delta){
					if (base.wheel) {
						var txt, $this = $(this), key = $.data(this, 'key');
						txt = key.layers || base.getLayers( $this );
						key.curNum += (delta > 0) ? -1 : 1;
						if (key.curNum > txt.length-1) { key.curNum = 0; }
						if (key.curNum < 0) { key.curNum = txt.length-1; }
						key.layers = txt;
						key.curTxt = txt[key.curNum];
						$.data(this, 'key', key);
						$this.val( txt[key.curNum] );
						return false;
					}
				})
				.bind('mouseup', function(e){
					base.$preview.focus();
				});

			if (base.$decBtn.length) {
				base.$allKeys.click(function(){
					base.checkDecimal();
				});
			}
		};

	base.insertText = function(txt){
		var i, t,
			caret = base.$preview.caret().start,
			prevw = base.$preview.val(),
			len = prevw.length;

		if (base.msie) {
			//  silly IE hacks... it still messes up with in a text area with lots of carriage returns (in Opera too)
			t = caret;
			i = t - 1;
			// count how many enters there are before the caret and subtract that from the caret position
			if (caret < len){
				while (i--) {
					if (prevw.substring(i - 1, i) === '\n') { caret -= 1; }
				}
			}
			// if the content ends in a return, adjust the caret
			if (prevw.slice(-1) === '\n' && t === len - 1) { caret += 1; }
		}

		if (txt === 'bksp') {
			// backspace
			t = [prevw.substring(0, caret-1) + prevw.substring(caret, len)];
			caret -= 1;
		} else {
			// inject text at caret
			prevw = prevw.substring(0, caret) + txt + prevw.substring(caret, len);
			t = base.checkCombos(prevw); // t = [ text, length change ];
			caret += t[1] + txt.length;
		}
		base.$preview
			.val(t[0])
			.caret(caret, caret); // move caret to correct position

		// set scrollTop to 0 if caret is in the first 1/2 of content, it'll have to do =/
		base.preview.scrollTop = (caret > len/2) ? base.preview.scrollHeight : 0;
		return base;
	};

	base.showKeySet = function(el){
		var key, toShow;
		base.$keyboard.find('.ui-keyboard-actionkey[name*=key_meta]').removeClass('ui-state-active');
		if (base.metaActive) {
			key = el.name.split('_')[1];
			base.$keyboard
				.find('.ui-keyboard-alt, .ui-keyboard-shift, .ui-keyboard-actionkey[class*=meta]').removeClass('ui-state-active').end()
				.find('.ui-keyboard-actionkey.ui-keyboard-' + key).addClass('ui-state-active').end()
				.find('.ui-keyboard-keyset').hide().end()
				.find('.ui-keyboard-keyset-' + key ).show();
		} else {
			toShow = (base.shiftActive) ? 1 : 0;
			toShow += (base.altActive) ? 2 : 0;
			base.$keyboard
				.find('.ui-keyboard-alt')[(base.altActive) ? 'addClass' : 'removeClass']('ui-state-active').end()
				.find('.ui-keyboard-shift')[(base.shiftActive) ? 'addClass' : 'removeClass']('ui-state-active').end()
				.find('.ui-keyboard-keyset').hide().end()
				.find('.' + base.rows[toShow]).show();
		}
	};

	// check for key combos (dead keys)
	base.checkCombos = function(txt){
		var i, s = txt.length, t;
		if (base.options.useCombos) {
			// keep 'a' and 'o' in the regex for ae and oe ligature (æ,œ)
			// thanks to KennyTM: http://stackoverflow.com/questions/4275077/replace-characters-to-make-international-letters-diacritics
			txt = txt.replace(/([`\'~\^\"ao])([a-z])/ig, function(s, accent, letter){
				return (base.options.combos.hasOwnProperty(accent)) ? base.options.combos[accent][letter] || s : s;
			});
		}
		// check restrictions - to do: figure out how to check this on keydown
		if (base.options.restrictInput) {
			t = txt.split('');
			for (i=0; i<s; i++){
				if ($.inArray( t[i], base.acceptedKeys ) < 0) { txt = txt.replace(t[i], ''); }
			}
		}
		// check max length too!
		if (base.options.maxLength !== false && txt.length > base.options.maxLength) { txt = txt.substring(0, base.options.maxLength); }
		return [ txt, txt.length - s ]; // return new text and change in length
	};

	// Decimal button for num pad - only allow one (not used by default)
	base.checkDecimal = function(){
		if (/\./.test(base.$decBtn.closest('.ui-keyboard').find('.ui-keyboard-preview').val())) {
			base.$decBtn
				.attr({ 'disabled': 'disabled', 'aria-disabled': 'true' })
				.removeClass('ui-state-default ui-state-hover')
				.addClass('ui-state-disabled');
		} else {
			base.$decBtn
				.removeAttr('disabled')
				.attr({ 'aria-disabled': 'false' })
				.addClass('ui-state-default')
				.removeClass('ui-state-disabled');
		}
	};

	// get other layer values for a specific key
	base.getLayers = function(el){
		var key, keys;
		key = el.attr('name');
		keys = el.closest('.ui-keyboard').find('input[name=' + key + ']').map(function(){
			return this.value;
		}).get();
		return keys;
	};

	// Close the keyboard, if visible. Pass a status of true, if the content was accepted (for the event trigger).
	base.close = function(accepted){
		if (base.$keyboard.is(':visible')) {
			base.$keyboard.hide();
			base.isVisible = false;
			base.el.value = (accepted) ? base.checkCombos(base.preview.value)[0] : base.originalContent;
			base.$el
				.scrollTop( base.el.scrollHeight )
				.trigger( (accepted || false) ? 'accepted' : 'canceled', base.$el )
				.trigger( 'hidden', base.$el )
				.blur();
			if (!base.watermark && base.el.value === '') {
				base.$el
					.addClass('placeholder')
					.val(base.inPlaceholder);
			}
		}
	};

	base.accept = function(){
		base.close(true);
	};

	base.escClose = function(e){
		if ( !$(e.target).closest('.ui-keyboard').length ) {
			base.close( (base.options.autoAccept) ? true : false );
		}
	};

	// build default button
	base.keyBtn = $('<input />')
		.attr({ 'type': 'button', 'role': 'button', 'aria-disabled': 'false' })
		.addClass('ui-keyboard-button ui-state-default ui-corner-all');

	// Add key function
	// keyName = name added to key, name = display option name (e.g. tab or t),
	// doAction = what is done/added when the button is clicked, regKey = true when it is not an action key
	base.addKey = function(keyName, name, regKey ){
		var t, keyType, n = (regKey === true) ? keyName : base.options.display[name] || keyName,
			nm = n.split(':'); // find key label
			n = (nm[0] !== '' && nm.length > 1) ? $.trim(nm[0]) : n;
			t = (nm.length > 1) ? $.trim(nm[1]).replace(/_/g, " ") || '' : ''; // added to title
			// Action keys will have the 'ui-keyboard-actionkey' class
			// '\u2190'.length = 1 because the unicode is converted, so if more than one character, add the wide class
			keyType = (n.length > 1) ? ' ui-keyboard-widekey' : '';
			keyType += (regKey !== true) ? ' ui-keyboard-actionkey' : '';
		return base.keyBtn
			.clone()
			.attr({ 'name': 'key_' + keyName, 'title' : t })
			.data('key', { action: keyName, original: n, curTxt : n, curNum: 0 })
			.val( n )
			// add "ui-keyboard-" + keyName, if this is an action key (e.g. "Bksp" will have 'ui-keyboard-bskp' class)
			// add "ui-keyboard-" + unicode of 1st character (e.g. "~" is a regular key, class = 'ui-keyboard-126' (126 is the unicode value - same as typing &#126;)
			.addClass('ui-keyboard-' + ((regKey === true) ? keyName.charCodeAt(0) : keyName) + keyType );
	};

	base.buildKeyboard = function(){
		var action, row, newRow, newSet,
			currentSet, key, keys, margin,
			sets = 0,

		container = $('<div />')
			.addClass('ui-keyboard ui-widget-content ui-widget ui-corner-all ui-helper-clearfix')
			.attr({ 'role': 'textbox' })
			.hide();

		// build preview display
		base.$preview = base.$el.clone(false)
			.removeAttr('id')
			.removeAttr('placeholder')
			.show() // for hidden inputs
			.attr( (base.options.lockInput) ? { 'readonly': 'readonly'} : {} )
			.removeClass('placeholder')
			.addClass('ui-widget-content ui-keyboard-preview ui-corner-all')
			.bind('keyup', function(){
				var caret = base.$preview.caret().start,
					t = base.checkCombos( base.$preview.val() );
				if (t[1] !== 0) {
					caret += t[1];
					base.$preview
						.val(t[0])
						.caret( caret, caret); // reposition caret based on # of replacments
				}
			});

		// build preview container and append preview display
		$('<div />')
			.append(base.$preview)
			.appendTo(container);

		// setup custom keyboard
		if (base.options.layout === 'custom') {
			$.keyboard.layouts.custom = base.options.customLayout || { 'default' : ['{cancel}'] };
		}

		// Main keyboard building loop
		$.each($.keyboard.layouts[base.options.layout], function(set, keySet){
			if (set !== "") {
				sets++;
				newSet = $('<div />')
					.attr('name', set) // added for typing extension
					.addClass('ui-keyboard-keyset ui-keyboard-keyset-' + set)
					.appendTo(container)[(set === 'default') ? 'show' : 'hide']();

				for ( row = 0; row < keySet.length; row++ ){
					newRow = $('<div />')
						.addClass('ui-keyboard-row ui-keyboard-row' + row )
						.appendTo(newSet);

					// remove extra spaces before spliting (regex probably could be improved)
					currentSet = $.trim(keySet[row]).replace(/\{(\.?)[\s+]?:[\s+]?(\.?)\}/g,'{$1:$2}');
					keys = currentSet.split(/\s+/);

					for ( key = 0; key < keys.length; key++ ) {
						// ignore empty keys
						if (keys[key].length === 0) { continue; }

						// process here if it's an action key
						if( /^\{\S+\}$/.test(keys[key])){
							action = keys[key].match(/^\{(\S+)\}$/)[1].toLowerCase();

							// add empty space
							if (/^sp:(\.?\d+)$/.test(action)) {
								margin = action.match(/^sp:(\.?\d+)$/)[1] || 0;
								$('<span>&nbsp;</span>')
									.css('margin','0 ' + margin + 'em')
									.appendTo(newRow);
							}

							// meta keys
							if (/^meta\d+\:?(\w+)?/.test(action)){
								base.addKey(action, action).appendTo(newRow);
								continue;
							}

							switch(action){

								case 'a':
								case 'accept':
									base.addKey('accept', action)
									.addClass(base.options.actionClass)
									.appendTo(newRow);
									break;

								case 'alt':
								case 'altgr':
									base.addKey('alt', 'alt').appendTo(newRow);
									break;

								case 'b':
								case 'bksp':
									base.addKey('bksp', action).appendTo(newRow);
									break;

								case 'c':
								case 'cancel':
									base.addKey('cancel', action)
									.addClass(base.options.actionClass)
									.appendTo(newRow);
									break;

								// for NumPad
								case 'clear':
									base.addKey('clear', 'clear').appendTo(newRow);
									break;

								// Decimal - unique decimal point (num pad layout)
								case 'dec':
									base.acceptedKeys.push('.');
									base.addKey('dec', 'dec').appendTo(newRow);
									break;

								case 'e':
								case 'enter':
									base.addKey('enter', action).appendTo(newRow);
									break;

								case 's':
								case 'shift':
									base.addKey('shift', action).appendTo(newRow);
									break;

								// Change sign (for num pad layout)
								case 'sign':
									base.acceptedKeys.push('-');
									base.addKey('sign', 'sign').appendTo(newRow);
									break;

								case 'space':
									base.acceptedKeys.push(' ');
									base.addKey('space', 'space').appendTo(newRow);
									break;

								case 't':
								case 'tab':
									base.addKey('tab', action).appendTo(newRow);
									break;

							}

						} else {

							// regular button (not an action key)
							base.acceptedKeys.push(keys[key].split(':')[0]);
							base.addKey(keys[key], keys[key], true)
								.attr('name','key_' + row + '_'+key)
								.appendTo(newRow);

						}
					}
				}
			}
		});
	
		if (sets > 1) { base.sets = true; }
		base.acceptedKeysStr = base.acceptedKeys.join('');
		return container;
	};

	base.destroy = function() {
		$(document).unbind('mousedown keyup', base.escClose );
		base.$keyboard.remove();
		base.$el
			.removeClass('ui-keyboard-input ui-widget-content ui-corner-all')
			.removeAttr('aria-haspopup')
			.removeAttr('role')
			.unbind('focus accepted canceled hidden visible')
			.removeData('keyboard');
	};

	// Action key function list
	base.keyaction = {
		accept : function(){
			base.close(true);
		},
		alt : function(el){
			base.altActive = !base.altActive;
			base.metaActive = false;
			base.showKeySet(el);
		},
		bksp : function(){
			base.insertText('bksp');
		},
		cancel : function(){
			base.close();
		},
		clear : function(){
			base.$preview.val('');
		},
		dec : function(){
			base.insertText('.');
		},
		enter : function() {
			base.insertText('\r\n');
		},
		meta : function(el){
			base.metaActive = ($(el).is('.ui-state-active')) ? false : true;
			base.showKeySet(el);
		},
		shift : function(el){
			base.shiftActive = !base.shiftActive;
			base.metaActive = false;
			base.showKeySet(el);
		},
		sign : function(){
			if(/^\-?\d*\.?\d*$/.test( base.$preview.val() )) {
				base.$preview.val( (base.$preview.val() * -1) );
			}
		},
		space : function(){
			base.insertText(' ');
		},
		tab : function() {
			base.insertText('\t');
		}
	};

		// Run initializer
		base.init();
	};

	// Default keyboard layouts
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
				'{accept} {space} {alt} {cancel}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} Q W E R T Y U I O P { } |',
				'A S D F G H J K L : " {enter}',
				'{shift} Z X C V B N M < > ? {shift}',
				'{accept} {space} {alt} {cancel}'
			],
			'alt': [
				'~ \u00a1 \u00b2 \u00b3 \u00a4 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00d7 {bksp}',
				'{tab} \u00e4 \u00e5 \u00e9 \u00ae \u00fe \u00fc \u00fa \u00ed \u00f3 \u00f6 \u00ab \u00bb \u00ac',
				'\u00e1 \u00df \u00f0 f g h j k \u00f8 \u00b6 \u00b4 {enter}',
				'{shift} \u00e6 x \u00a9 v b \u00f1 \u00b5 \u00e7 > \u00bf {shift}',
				'{accept} {space} {alt} {cancel}'
			],
			'alt-shift': [
				'~ \u00b9 \u00b2 \u00b3 \u00a3 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00f7 {bksp}',
				'{tab} \u00c4 \u00c5 \u00c9 \u00ae \u00de \u00dc \u00da \u00cd \u00d3 \u00d6 \u00ab \u00bb \u00a6',
				'\u00c4 \u00a7 \u00d0 F G H J K \u00d8 \u00b0 \u00a8 {enter}',
				'{shift} \u00c6 X \u00a2 V B \u00d1 \u00b5 \u00c7 . \u00bf {shift}',
				'{accept} {space} {alt} {cancel}'
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
			of : null, // optional - null (attach to input/textarea) or a jQuery object (attach elsewhere)
			my : 'center top',
			at : 'center top'
		},

		// *** change keyboard language & look ***
		display : {
			'a'      : '\u2714:Accept (Shift-Enter)', // check mark - same action as accept
			'accept' : 'Accept:Accept (Shift-Enter)',
			'alt'    : 'AltGr:Alternate Graphemes',
			'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
			'bksp'   : 'Bksp:Backspace',
			'c'      : '\u2716:Cancel (Esc)', // big X, close - same action as cancel
			'cancel' : 'Cancel:Cancel (Esc)',
			'clear'  : 'C:Clear',             // clear num pad
			'dec'    : '.:Decimal',           // decimal point for num pad (optional) - if used, only one decimal point is allowed
			'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
			'enter'  : 'Enter:Enter',
			's'      : '\u21e7:Shift',        // thick hollow up arrow
			'shift'  : 'Shift:Shift',
			'sign'   : '\u00b1:Change Sign',  // +/- sign for num pad
			'space'  : 'Space:Space',
			't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
			'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
		},

		// Message added to the key title while hovering, if the mousewheel plugin exists
		wheelMessage : 'Use mousewheel to see other keys',

		// Class added to the Accept and cancel buttons (originally 'ui-state-highlight')
		actionClass  : 'ui-state-active',

		// *** Useability ***
		// Auto-accept content when clicking outside the keyboard (popup will close)
		autoAccept   : false,

		// Prevents direct input in the preview window when true
		lockInput    : false,

		// Prevent keys not in the displayed keyboard from being typed in
		restrictInput: false,

		// Prevent pasting content into the area
		preventPaste : false,

		// Set the max number of characters allowed in the input, setting it to false disables this option
		maxLength    : false,

		// When the character is added to the input (clicking on the keyboard)
		keyBinding   : 'mousedown',

		// combos (emulate dead keys : http://en.wikipedia.org/wiki/Keyboard_layout#US-International)
		// if user inputs `a the script converts it to à, ^o becomes ô, etc.
		useCombos : true,
		combos    : {
			'`' : { a:"\u00e0", A:"\u00c0", e:"\u00e8", E:"\u00c8", i:"\u00ec", I:"\u00cc", o:"\u00f2", O:"\u00d2", u:"\u00f9", U:"\u00d9"},
			"'" : { a:"\u00e1", A:"\u00c1", e:"\u00e9", E:"\u00c9", i:"\u00ed", I:"\u00cd", o:"\u00f3", O:"\u00d3", u:"\u00fa", U:"\u00da", y:"\u00fd", Y:"\u00dd", c:"\u00e7", C:"\u00c7"},
			'"' : { a:"\u00e4", A:"\u00c4", e:"\u00eb", E:"\u00cb", i:"\u00ef", I:"\u00cf", o:"\u00f6", O:"\u00d6", u:"\u00fc", U:"\u00dc"},
			'^' : { a:"\u00e2", A:"\u00c2", e:"\u00ea", E:"\u00ca", i:"\u00ee", I:"\u00ce", o:"\u00f4", O:"\u00d4", u:"\u00fb", U:"\u00db"},
			'~' : { a:"\u00e3", A:"\u00c3", e:"\u1ebd", E:"\u1ebc", i:"\u0129", I:"\u0128", o:"\u00f5", O:"\u00d5", u:"\u0169", U:"\u0168", n:"\u00f1", N:"\u00d1"},
			'a' : { e: '\u00e6' },
			'A' : { E: '\u00c6' },
			'o' : { e: '\u0153' },
			'O' : { E: '\u0152' }
		},

		// *** Methods ***
		// Callbacks - attach a function to any of these callbacks as desired
		accepted : null,
		canceled : null,
		hidden   : null,
		visible  : null

	};

	$.fn.keyboard = function(options){
		return this.each(function(){
			(new $.keyboard(this, options));
		});
	};

	// This function breaks the chain, but returns
	// the keyboard if it has been attached to the object.
	$.fn.getkeyboard = function(){
		return this.data("keyboard");
	};

})(jQuery);

/*
 *
 * Copyright (c) 2010 C. F., Wong (<a href="http://cloudgen.w0ng.hk">Cloudgen Examplet Store</a>)
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
(function($, len, createRange, duplicate){
$.fn.caret = function(options,opt2) {
	var s, start, e, end, selRange, range, stored_range, te, val,
		selection = document.selection, t = this[0], sTop = t.scrollTop, browser = $.browser.msie;
	if (typeof(t) === 'undefined') { return; }
	if (typeof options === "number" && typeof opt2 === "number") {
		start = options;
		end = opt2;
	}
	if (typeof start !== "undefined") {
		if (browser){
			selRange = t.createTextRange();
			selRange.collapse(true);
			selRange.moveStart('character', start);
			selRange.moveEnd('character', end-start);
			selRange.select();
		} else {
			t.selectionStart=start;
			t.selectionEnd=end;
		}
		t.focus();
		t.scrollTop = sTop;
		return this;
	} else {
		if (browser) {
			if (t.tagName.toLowerCase() !== "textarea") {
				val = this.val();
				range = selection[createRange]()[duplicate]();
				range.moveEnd("character", val[len]);
				s = (range.text === "" ? val[len] : val.lastIndexOf(range.text));
				range = selection[createRange]()[duplicate]();
				range.moveStart("character", -val[len]);
				e = range.text[len];
			} else {
				range = selection[createRange]();
				stored_range = range[duplicate]();
				stored_range.moveToElementText(t);
				stored_range.setEndPoint('EndToEnd', range);
				s = stored_range.text[len] - range.text[len];
				e = s + range.text[len];
			}
		} else {
			s = t.selectionStart;
			e = t.selectionEnd;
		}
		te = t.value.substring(s,e);
		return { start : s, end : e, text : te, replace : function(st){
			return t.value.substring(0,s) + st + t.value.substring(e, t.value[len]);
		}};
	}
};
})(jQuery, "length", "createRange", "duplicate");