/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);

/*
 * jQuery UI Virtual Keyboard Autocomplete v1.5 for Keyboard v1.18+ only (3/1/2014)
 *
 * By Rob Garrison (aka Mottie & Fudgey)
 * Licensed under the MIT License
 *
 * Use this extension with the Virtual Keyboard to get
 * the jQuery UI Autocomplete widget to work seamlessly
 *
 * Requires:
 *  jQuery
 *  jQuery UI & css
 *  Keyboard plugin : https://github.com/Mottie/Keyboard
 *
 * Setup:
 *  $('.ui-keyboard-input')
 *   .keyboard(options)
 *   .autocomplete(options)
 *   .addAutoComplete();
 *
 *  // or if targeting a specific keyboard
 *  $('#keyboard1')
 *   .keyboard(options)     // keyboard plugin
 *   .autocomplete(options) // jQuery UI autocomplete
 *   .addAutoComplete();    // this keyboard extension
 * 
 */
/*jshint browser:true, jquery:true, unused:false */
(function($){
"use strict";
$.fn.addAutocomplete = function(){
	return this.each(function(){
		// make sure a keyboard is attached
		var base = $(this).data('keyboard');
		if (!base) { return; }

		// jQuery UI versions 1.9+ are different >= 1.9;
		base.autocomplete_new_version = (function(version) {
			version[0] = parseInt(version[0], 10);
			return (version[0] > 1) || (version[0] === 1 && parseInt(version[1], 10) >= 9);
		})($.ui.version.split("."));

		// Setup
		base.autocomplete_init = function(txt, delay, accept){

			// visible event is fired before this extension is initialized, so check!
			if (base.options.alwaysOpen && base.isVisible()) {
				base.autocomplete_setup();
			}

			base.$el
				.bind('visible.keyboard',function(){
					base.autocomplete_setup();
				})
				.bind('change.keyboard',function(){
					if (base.hasAutocomplete && base.isVisible()) {
						base.$el
							.val(base.$preview.val())
							.trigger('keydown.autocomplete');
					}
				})
				.bind('hidden.keyboard', function(e){
					base.$el.autocomplete('close');
				})
				.bind('autocompleteopen', function(e, ui) {
					if (base.hasAutocomplete){
						// reposition autocomplete window next to the keyboard
						base.$autocomplete.menu.element.position({
							of : base.$keyboard,
							my : 'right top',
							at : 'left top',
							collision: 'flip'
						});
					}
				})
				.bind('autocompleteselect', function(e,ui){
					var v = ui.item.value;
					if (base.hasAutocomplete && v !== ''){
						base.$preview
							.val( v )
							.focus();
						// see issue #95 - thanks banku!
						base.lastCaret = { start: v.length, end: v.length };
					}
				});
		};

		// set up after keyboard is visible
		base.autocomplete_setup = function(){
			// look for autocomplete
			base.$autocomplete = base.$el.data('autocomplete') || base.$el.data('uiAutocomplete');
			base.hasAutocomplete = (typeof(base.$autocomplete) === 'undefined') ? false : (base.$autocomplete.options.disabled) ? false : true;
			// only bind to keydown once
			if (base.hasAutocomplete) {
				base.$preview.bind('keydown',function(e){
					// send keys to the autocomplete widget (arrow, pageup/down, etc)
					return base.autocomplete_input(e);
				});
				base.$allKeys.bind('mouseup mousedown mouseleave touchstart touchend touchcancel',function(e){
					base.autocomplete_input(e);
				});
			}
		};

		// Navigate and select inside autocomplete popup
		base.autocomplete_input = function(event){
			// copied from jquery ui autocomplete code to include autocomplete navigation
			// there might be a better workaround
			var t, keyCode = $.ui.keyCode;
			switch( event.keyCode ) {
			case keyCode.PAGE_UP:
				base.$autocomplete._move( "previousPage", event );
				event.preventDefault(); // stop page from moving up
				break;
			case keyCode.PAGE_DOWN:
				base.$autocomplete._move( "nextPage", event );
				event.preventDefault(); // stop page from moving down
				break;
			case keyCode.UP:
				base.$autocomplete._move( "previous", event );
				// prevent moving cursor to beginning of text field in some browsers
				event.preventDefault();
				break;
			case keyCode.DOWN:
				base.$autocomplete._move( "next", event );
				// prevent moving cursor to end of text field in some browsers
				event.preventDefault();
				break;
			case keyCode.ENTER:
			case keyCode.NUMPAD_ENTER:
				t = base.$autocomplete.menu.element.find('#ui-active-menuitem,.ui-state-focus').text() || '';
				if (t !== '') { base.$preview.val(t); }
				if (base.autocomplete_new_version) { base.$autocomplete.menu.select( event ); }
				break;
			default:
				// keypress is triggered before the input value is changed
				clearTimeout( base.$autocomplete.searching );
				base.$autocomplete.searching = setTimeout(function() {
					// only search if the value has changed
					if ( base.$autocomplete.term !== base.$autocomplete.element.val() ) {
						base.$autocomplete.selectedItem = null;
						base.$autocomplete.search( null, event );
					}
				}, base.$autocomplete.options.delay );
				break;
			}
		};

		base.origEscClose = base.escClose;

		// replace original function with this one
		base.escClose = function(e){
			// prevent selecting an item in autocomplete from closing keyboard
			if ( base.hasAutocomplete && (e.target.id === 'ui-active-menuitem' || $(e.target).closest('ul').hasClass('ui-autocomplete')) ) { return; }
			base.origEscClose(e);
		};

		base.autocomplete_init();

	});
};
})(jQuery);

/*
 * jQuery UI Virtual Keyboard for jQuery Mobile Themes v1.2 for Keyboard v1.18+ (updated 6/1/2014)
 *
 * By Rob Garrison (aka Mottie & Fudgey)
 * Licensed under the MIT License
 *
 * Use this extension with the Virtual Keyboard to apply
 * the necessary themes to make the keyboard compatible with
 * jQuery Mobile themes
 *
 * Requires:
 *  jQuery - http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js
 *  jQuery Mobile - http://code.jquery.com/mobile/1.0.1/jquery.mobile-1.0.1.min.js
 *  jQuery Mobile themes -  http://code.jquery.com/mobile/1.0.1/jquery.mobile-1.0.1.min.css
 *
 * Setup:
 *  $('.ui-keyboard-input')
 *   .keyboard(options)
 *   .addMobile(mobile-options);
 *
 *  // or if targeting a specific keyboard
 *  $('#keyboard1')
 *   .keyboard(options)     // keyboard plugin
 *   .addMobile(mobile-options);    // this keyboard extension
 *
 */
/*jshint browser:true, jquery:true, unused:false */
(function($){
$.fn.addMobile = function(options){

	var o, defaults = {
		// keyboard wrapper theme
		container    : { theme:'b', cssClass:'ui-body' },
		// keyboard duplicate input
		input        : { theme:'b', cssClass:'' },
		// theme added to all regular buttons
		buttonMarkup : { theme:'b', cssClass:'ui-btn', shadow:'true', corners:'true' },
		// theme added to all buttons when they are being hovered
		buttonHover  : { theme:'b', cssClass:'ui-btn-hover' },
		// theme added to action buttons (e.g. tab, shift, accept, cancel);
		// parameters here will override the settings in the buttonMarkup
		buttonAction : { theme:'b', cssClass:'ui-btn-active' },
		// theme added to button when it is active (e.g. shift is down)
		// All extra parameters will be ignored
		buttonActive : { theme:'b', cssClass:'ui-btn-active' }
	};

	return this.each(function(){
		var base = $(this).data('keyboard');

		// Stop if no keyboard attached or if jQuery Mobile isn't loaded
		if (!base || typeof($.fn.textinput) === 'undefined') { return; }

		base.mobile_options = o = $.extend(true, {}, defaults, options);

		// Setup
		base.mobile_init = function(){

			// Add theme to input - if not already done through the markup
			$('.ui-keyboard-input').textinput();

			// visible event is fired before this extension is initialized, so check!
			if (base.options.alwaysOpen && base.isVisible) {
				base.mobile_setup();
			}

			// Setup mobile theme on keyboard once it is visible.
			// Note: There is a 10ms delay after the keyboard is displayed before it actually fires 'visible.keyboard'.
			// Since we are restyling here, the user will experience FlashOfUnstyledContent (FOUC).
			// This is avoided by first setting the visibility to hidden, then after the mobile styles are applied we
			// set it visible.
			//
			base.$el
			.on('beforeVisible.keyboard', function () {
				base.$keyboard.css("visibility", "hidden");
			})
			.on('visible.keyboard', function () {
				base.mobile_setup();
				base.$keyboard.css("visibility", "visible");
				base.$preview.focus();
			});

		};

		base.mobile_setup = function(){
			var p,
				opts = base.options,
				markup = o.buttonMarkup.cssClass || '',
				actions = opts.css.buttonAction;

			opts.css.buttonAction += ' ' + o.buttonAction.cssClass;

			base.$keyboard
				// 'ui-bar ui-bar-a' classes to apply swatch theme
				.addClass( base.modOptions(o.container, o.container) )
				// preview input
				.find('.ui-keyboard-preview').addClass( base.modOptions(o.input, o.input) ).end()
				// removing 'ui-widget-content' will prevent jQuery UI theme from applying to the keyboard
				.removeClass('ui-widget ui-widget-content')
				.find('.' + actions).addClass( base.modOptions(o.buttonAction, o.buttonMarkup) ).end()
				// apply jQuery Mobile button markup
				// removed call to jQuery Mobile buttonMarkup function; replaced with base.modOptions
				.find('button')
				.removeClass('ui-corner-all ui-state-default')
				.addClass( base.modOptions(o.buttonMarkup) )
				.hover(function(){
					$(this)
						.removeClass( markup ? markup + '-' + o.buttonMarkup.theme : '' )
						.addClass( base.modOptions(o.buttonHover, o.buttonMarkup) );
				},function(){
					$(this)
						.removeClass( markup ? markup + '-' + o.buttonHover.theme : '' )
						.addClass( base.modOptions(o.buttonMarkup, o.buttonMarkup) );
				});

			// update keyboard width if preview is showing... after applying mobile theme
			if (base.msie && base.$preview[0] !== base.el) {
				base.$preview.hide();
				base.$keyboard.css('width','');
				base.width = base.$keyboard.outerWidth();
				// add about 1em to input width for extra padding
				base.$keyboard.width(base.width + parseInt(base.$preview.css('fontSize'),10));
				base.$preview.width(base.width);
				base.$preview.show();
			}

			// adjust keyboard position after applying mobile theme
			if ($.ui && $.ui.position) {
				p = opts.position;
				p.of = p.of || base.$el.data('keyboardPosition') || base.$el;
				p.collision = p.collision || 'flipfit flipfit';
				base.$keyboard.position(p);
			}

		};

		base.modOptions = function(t, btn){
			var css = ' ' + ( t.cssClass || '' );
			// Using this instead of the jQuery Mobile buttonMarkup because it is expecting <a>'s instead of <button>
			// theme:'a', shadow:'true', inline:'true', corners:'false'
			return css + ' ' + (btn && btn.cssClass ? btn.cssClass + '-' + (t.theme || '') : '') +
				(t.shadow == 'true' ? ' ui-shadow' : '') +
				(t.corners == 'true' ? ' ui-corner-all' : '');
		};

		base.mobile_init();

	});
};
})(jQuery);

/*
 * jQuery UI Virtual Keyboard Navigation v1.4 for Keyboard v1.18+ only (updated 3/1/2014)
 *
 * By Rob Garrison (aka Mottie & Fudgey)
 * Licensed under the MIT License
 *
 * Use this extension with the Virtual Keyboard to navigate
 * the virtual keyboard keys using the arrow, page, home and end keys
 * Using this extension WILL prevent keyboard navigation inside of all
 * input and textareas
 *
 * Requires:
 *  jQuery
 *  Keyboard plugin : https://github.com/Mottie/Keyboard
 *
 * Setup:
 *  $('.ui-keyboard-input')
 *   .keyboard(options)
 *   .addNavigation();
 *
 *  // or if targeting a specific keyboard
 *  $('#keyboard1')
 *   .keyboard(options)     // keyboard plugin
 *   .addNavigation();    // this keyboard extension
 * 
 */
/*jshint browser:true, jquery:true, unused:false */
(function($){
"use strict";
$.keyboard = $.keyboard || {};

$.keyboard.navigationKeys = {
	// all keys
	toggle     : 112, // toggle key; F1 = 112 (event.which value for function 1 key)
	enter      : 13,
	pageup     : 33,
	pagedown   : 34,
	end        : 35,
	home       : 36,
	left       : 37,
	up         : 38,
	right      : 39,
	down       : 40,
	caretrt    : 45, // Insert key
	caretlt    : 46  // delete key
};

$.fn.addNavigation = function(options){
	return this.each(function(){
		// make sure a keyboard is attached
		var o, k, base = $(this).data('keyboard'),
			defaults = {
				position   : [0,0],     // set start position [row-number, key-index]
				toggleMode : false,     // true = navigate the virtual keyboard, false = navigate in input/textarea
				
				focusClass : 'hasFocus' // css class added when toggle mode is on
			};
		if (!base) { return; }

		base.navigation_options = o = $.extend({}, defaults, options);
		base.navigation_keys = k = $.extend({}, $.keyboard.navigationKeys);
		// save navigation settings - disabled when the toggled
		base.saveNav = [ base.options.tabNavigation, base.options.enterNavigation ];
		base.allNavKeys = $.map(k, function(v,i){ return v; });

		// Setup
		base.navigation_init = function(){

			base.$keyboard.toggleClass(o.focusClass, o.toggleMode)
				.find('.ui-keyboard-keyset:visible')
				.find('.ui-keyboard-button[data-pos="' + o.position[0] + ',' + o.position[1] + '"]')
				.addClass('ui-state-hover');

			base.$preview
			.unbind('keydown.keyboardNav')
			.bind('keydown.keyboardNav',function(e){
				return base.checkKeys(e.which);
			});

		};

		base.checkKeys = function(key, disable){
			if (typeof(key) === "undefined") {
				return;
			}
			var k = base.navigation_keys;
			if (key === k.toggle || disable) {
				o.toggleMode = (disable) ? false : !o.toggleMode;
				base.options.tabNavigation = (o.toggleMode) ? false : base.saveNav[0];
				base.options.enterNavigation = (o.toggleMode) ? false : base.saveNav[1];
			}
			base.$keyboard.toggleClass(o.focusClass, o.toggleMode);
			if ( o.toggleMode && key === k.enter ) {
				base.$keyboard
					.find('.ui-keyboard-keyset:visible')
					.find('.ui-keyboard-button[data-pos="' + o.position[0] + ',' + o.position[1] + '"]')
					.trigger('repeater.keyboard');
				return false;
			}
			if ( o.toggleMode && $.inArray(key, base.allNavKeys) >= 0 ) {
				base.navigateKeys(key);
				return false;
			}
		};

		base.navigateKeys = function(key, row, indx){
			indx = indx || o.position[1];
			row = row || o.position[0];
			var vis = base.$keyboard.find('.ui-keyboard-keyset:visible'),
				maxRow = vis.find('.ui-keyboard-button-endrow').length - 1,
				maxIndx = vis.find('.ui-keyboard-button[data-pos^="' + row + ',"]').length - 1,
				p = base.lastCaret,
				l = base.$preview.val().length,
				k = base.navigation_keys;

			switch(key){
				case k.pageup   : row = 0; break; // pageUp
				case k.pagedown : row = maxRow; break; // pageDown
				case k.end      : indx = maxIndx; break; // End
				case k.home     : indx = 0; break; // Home
				case k.left     : indx += (indx > 0) ? -1 : 0; break; // Left
				case k.up       : row += (row > 0) ? -1 : 0; break; // Up
				case k.right    : indx += 1; break; // Right
				case k.down     : row += (row + 1 > maxRow) ? 0 : 1; break; // Down
				case k.caretRt  : p.start++; break; // caret right
				case k.caretLt  : p.start--; break; // caret right
			}

			// move caret
			if (key === k.caretRt || key === k.caretLt) {
				p.start = p.start < 0 ? 0 : p.start > l ? l : p.start;
				p.end = p.start;
				base.lastCaret = p;
				base.$preview.focus().caret( p.start, p.start );
			}

			// get max index of new row
			maxIndx = vis.find('.ui-keyboard-button[data-pos^="' + row + ',"]').length - 1;
			if (indx > maxIndx) { indx = maxIndx; }

			vis.find('.ui-state-hover').removeClass('ui-state-hover');
			vis.find('.ui-keyboard-button[data-pos="' + row + ',' + indx + '"]').addClass('ui-state-hover');
			o.position = [ row, indx ];
		};

		// visible event is fired before this extension is initialized, so check!
		if (base.options.alwaysOpen && base.isVisible) {
			base.$keyboard.find('.ui-state-hover').removeClass('ui-state-hover');
			base.navigation_init();
		}
		// capture and simulate typing
		base.$el
			.bind('visible.keyboard', function(e){
				base.$keyboard.find('.ui-state-hover').removeClass('ui-state-hover');
				base.navigation_init();
			})
			.bind('inactive.keyboard hidden.keyboard', function(e){
				base.checkKeys(e.which, true); // disable toggle mode & revert navigation options
			})
			.bind('navigate navigateTo', function(e, row, indx){
				// no row given, check if it's a key name
				row = isNaN(row) ? row.toLowerCase() : row;
				if (base.navigation_keys.hasOwnProperty(row)) {
					base.checkKeys( base.navigation_keys[row] );
				} else {
					base.navigateKeys(null, row, indx);
				}
			});

	});
};
})(jQuery);

/*
 * jQuery UI Virtual Keyboard Scramble Extension v1.3 for Keyboard v1.18+ (updated 7/18/2014)
 *
 * By Rob Garrison (aka Mottie & Fudgey)
 * Licensed under the MIT License
 *
 * Use this extension with the Virtual Keyboard to scramble the
 * specified keyboard keys
 *
 * Requires:
 *  jQuery v1.4.4+
 *  Keyboard v1.17.14+ - https://github.com/Mottie/Keyboard
 *
 * Setup:
 *  $('.ui-keyboard-input')
 *   .keyboard(options)
 *   .addScramble();
 *
 *  // or if targeting a specific keyboard
 *  $('#keyboard1')
 *   .keyboard(options) // keyboard plugin
 *   .addScramble();    // this keyboard extension
 * 
 */
/*jshint browser:true, jquery:true, unused:false */
(function($) {
"use strict";
$.keyboard = $.keyboard || {};
	$.fn.addScramble = function(options) {
		//Set the default values, use comma to separate the settings, example:
		var defaults = {
			targetKeys    : /[a-z\d]/i, // keys to randomize
			byRow         : true, // randomize by row, otherwise randomize all keys
			byKeySet      : false,// if true, randomize one keyset & duplicate
			randomizeOnce : true  // if true, randomize only once on keyboard visible
		};
		return this.each(function() {
			// make sure a keyboard is attached
			var o,
				base = $(this).data('keyboard'),
				opts = base.options;

			if (!base || base.scramble_options) { return; }
			o = base.scramble_options = $.extend({}, defaults, options);

			base.scramble_setup = function($keyboard) {
				var $sets, set, $keys, key, index, tmp,
					rowIndex, keyboardmap, map, keyboard, row;
				$sets = $keyboard.find('.ui-keyboard-keyset');
				if ($keyboard.length) {
					if (o.byKeySet) {
						$sets = $sets.eq(0);
					}
					for (set = 0; set < $sets.length; set++) {
						/*jshint loopfunc:true */
						$keys = $sets.eq(set);
						rowIndex = 0;
						row = [];
						map = [];
						keyboardmap = [];
						keyboard = [];
						$keys.children('button, span, br').each(function() {
							if (this.tagName === 'BR') {
								if (o.byRow) {
									row.push(this);
									map.push(false);
									keyboard[rowIndex] = row;
									keyboardmap[rowIndex] = map;
									row = [];
									map = [];
									rowIndex++;
								} else {
									keyboard[rowIndex] = this;
									keyboardmap[rowIndex] = false;
									rowIndex++;
								}
							} else {
								tmp = $(this).attr('data-value') || '';
								tmp = tmp.length === 1 && o.targetKeys.test(tmp) ? tmp : false;
								if (o.byRow) {
									row.push( this );
									map.push ( tmp );
								} else {
									keyboard[rowIndex] = this;
									keyboardmap[rowIndex] = tmp;
									rowIndex++;
								}
							}
						});
						// remove original <br> elements
						$keys.find('.ui-keyboard-button-endrow').remove();
						// re-map keys
						if (!o.byRow) {
							row = base.shuffle( keyboard, keyboardmap );
							for (key = 0; key < row.length; key++) {
								$keys.append(row[key]);
							}
						} else {
							for (index = 0; index < keyboard.length; index++) {
								row = base.shuffle( keyboard[index], keyboardmap[index] );
								for (key = 0; key < row.length; key++) {
									$keys.append(row[key]);
								}
							}
						}
					}
					if (o.byKeySet) {
						$keyboard = base.realign($keyboard);
					}
					return $keyboard;
				}
			};

			// modified from Fisher-Yates shuffle ( http://bost.ocks.org/mike/shuffle/ )
			// to allow not shuffling specifically mapped array elements
			base.shuffle = function(array, map) {
				var swap, random,
					index = array.length;
				// While there remain elements to shuffle...
				while (index > 0) {
					// Pick a remaining element...
					random = Math.floor(Math.random() * index);
					if (map[index - 1] === false) {
						index--;
					}
					// skip elements that are mapped to false
					if (map[index - 1] !== false && map[random] !== false) {
						// And swap it with the current element
						index--;
						swap = array[index];
						array[index] = array[random];
						array[random] = swap;
					}
				}
				return array;
			};

			// make other keysets "line-up" with scrambled keyset
			base.realign = function($keyboard) {
				var selector, typ, pos,
					$sets = $keyboard.find('.ui-keyboard-keyset'),
					$orig = $sets.eq(0);
				$sets = $sets.filter(':gt(0)');
				$orig.children().each(function(i, cell){
					typ = cell.tagName === 'BR';
					pos = $(cell).attr('data-pos');
					/*jshint loopfunc:true */
					$sets.each(function(j, k){
						selector = typ ? 'br:first' : 'button[data-pos="' + pos + '"]';
						$(k).find(selector).appendTo( k );
					});
				});
				return $keyboard;
			};

			// create scrambled keyboard layout
			opts.create = function() {
				var layout = opts.layout;
				$.keyboard.builtLayouts[layout] = {
					mappedKeys   : {},
					acceptedKeys : [],
					$keyboard: null
				};
				if ( typeof $.keyboard.builtLayouts[base.orig_layout] === 'undefined' ) {
					base.layout = opts.layout = base.orig_layout;
					// build original layout, if not already built, e.g. "qwerty"
					base.buildKeyboard();
					base.layout = opts.layout = layout;
				}
				// clone, scramble then save layout
				$.keyboard.builtLayouts[layout] = $.extend(true, {}, $.keyboard.builtLayouts[base.orig_layout]);
				if (o.randomizeOnce) {
					$.keyboard.builtLayouts[layout].$keyboard = base.scramble_setup( $.keyboard.builtLayouts[base.orig_layout].$keyboard.clone() );
				}
				base.$keyboard = $.keyboard.builtLayouts[layout].$keyboard;
				if ( !o.randomizeOnce ) {
					base.$el.bind('beforeVisible.keyboard', function(e, kb) {
						kb.$keyboard = kb.scramble_setup(kb.$keyboard);
					});
				}
			};

			base.orig_layout = opts.layout;
			opts.layout = "scrambled" + Math.round(Math.random() * 10000);

			// special case when keyboard is set to always be open
			if (opts.alwaysOpen && base.$keyboard.length) {
				setTimeout(function(){
					base.$keyboard = base.scramble_setup(base.$keyboard);
				}, 0);
			}

		});
	};
})(jQuery);

/*
 * jQuery UI Virtual Keyboard Typing Simulator v1.4 for Keyboard v1.18+ only (3/1/2014)
 *
 * By Rob Garrison (aka Mottie & Fudgey)
 * Licensed under the MIT License
 *
 * Use this extension with the Virtual Keyboard to simulate
 * typing for tutorials or whatever else use you can find
 *
 * Requires:
 *  jQuery
 *  Keyboard plugin : https://github.com/Mottie/Keyboard
 *
 * Setup:
 *  $('.ui-keyboard-input')
 *   .keyboard(options)
 *   .addTyping(typing-options);
 *
 *  // or if targeting a specific keyboard
 *  $('#keyboard1')
 *   .keyboard(options)
 *   .addTyping(typing-options);
 *
 * Basic Usage:
 *  // To disable manual typing on the virtual keyboard, just set "showTyping" option to false
 *  $('#keyboard-input').keyboard(options).addTyping({ showTyping: false });
 *
 *  // Change the default typing delay (time the virtual keyboard highlights the manually typed key) - default = 250 milliseconds
 *  $('#keyboard-input').keyboard(options).addTyping({ delay: 500 });
 *
 *  // get keyboard object, open it, then start typing simulation
 *  $('#keyboard-input').getkeyboard().reveal().typeIn('Hello World', 700);
 *
 *  // get keyboard object, open it, type in "This is a test" with 700ms delay between types, then accept & close the keyboard
 *  $('#keyboard-input').getkeyboard().reveal().typeIn('This is a test', 700, function(){ $('#keyboard-input').getkeyboard().close(true); });
 */

// EXAMPLES:
// $('#inter').getkeyboard().reveal().typeIn('\tHello \b\n\tWorld', 500);
// $('#meta').getkeyboard().reveal().typeIn('abCDd11123\u2648\u2649\u264A\u264B', 700, function(){ alert('all done!'); });
/*jshint browser:true, jquery:true, unused:false */
(function($){
	$.fn.addTyping = function(options){
		//Set the default values, use comma to separate the settings, example:
		var defaults = {
			showTyping : true,
			delay      : 250
		};
		return this.each(function(){
			// make sure a keyboard is attached
			var base = $(this).data('keyboard');
			if (!base) { return; }

			// variables
			base.typing_options = $.extend({}, defaults, options);
			base.typing_keymap = {
				' '  : 'space',
				'"'  : '34',
				"'"  : '39',
				'&nbsp;' : 'space',
				'\b' : 'bksp',
				'\n' : 'Enter',
				'\r' : 'Enter',
				'\t' : 'tab'
			};
			base.typing_xref = {
				8  : 'bksp',
				9  : 'tab',
				13 : 'enter',
				32 : 'space'
			};
			base.typing_event = false;
			// no manual typing simulation if lockInput is true; but the typeIn() function still works
//			if (base.options.lockInput) { base.typing_options.showTyping = false; }

			base.typing_setup = function(){
				var el = (base.$preview) ? base.$preview : base.$el;

				el
				.bind('keyup.keyboard', function(e){
					if (e.which >= 37 && e.which <=40) { return; } // ignore arrow keys
					if (e.which === 16) { base.shiftActive = false; }
					if (e.which === 18) { base.altActive = false; }
					if (e.which === 16 || e.which === 18) {
						base.showKeySet();
						setTimeout(function(){ base.$preview.focus(); }, 200); // Alt key will shift focus to the menu - doesn't work in Windows
						return;
					}
				})
				// change keyset when either shift or alt is held down
				.bind('keydown.keyboard', function(e){
					e.temp = false; // prevent repetitive calls while keydown repeats.
					if (e.which === 16) { e.temp = (base.shiftActive) ? false : true; base.shiftActive = true; }
					// it should be ok to reset e.temp, since both alt and shift will call this function separately
					if (e.which === 18) { e.temp = (base.altActive) ? false : true; base.altActive = true; }
					if (e.temp) {
						base.showKeySet();
						base.$preview.focus(); // Alt shift focus to the menu
					}
					base.typing_event = true;
					// Simulate key press for tab and backspace since they don't fire the keypress event
					if (e.which === 8 || e.which === 9) {
						base.typeIn( '', base.typing_options.delay || 250, function(){
							base.typing_event = false;
						}, e); // pass event object
					}

				})
				.bind('keypress.keyboard', function(e){
					// Simulate key press on virtual keyboard
					if (base.typing_event && !base.options.lockInput) {
						base.typeIn( '', base.typing_options.delay || 250, function(){
							base.typing_event = false;
						}, e); // pass event object
					}
				});
			};

			// Store typing text
			base.typeIn = function(txt, delay, callback, e){
				if (!base.isVisible()) {
					// keyboard was closed
					base.typing_options.init = false;
					clearTimeout(base.typing_timer);
					return;
				}
				var o = base.typing_options, tar, m, n, k, key, ks, meta, set,
					mappedKeys = $.keyboard.builtLayouts[base.layout].mappedKeys;
				if (base.typing_options.init !== true) {
					o.init = true;
					o.text = txt;
					o.len = txt.length;
					o.delay = delay || 300;
					o.current = 0; // position in text string
					o.callback = callback;
				}

				// function that loops through and types each character
				txt = o.text.substring( o.current, ++o.current );
				ks = base.$keyboard.find('.ui-keyboard-keyset');
				k = (base.typing_keymap.hasOwnProperty(txt)) ? base.typing_keymap[txt] : txt;

				// typing_event is true when typing on the actual keyboard - look for actual key
				// All of this breaks when the CapLock is on... unable to find a cross-browser method that works.
				tar = '.ui-keyboard-button[data-value="' + k + '"]';
				if (base.typing_event && e) {
					if (base.typing_xref.hasOwnProperty(e.keyCode || e.which)) {
						// special named keys: bksp, tab and enter
						tar = '.ui-keyboard-' + base.typing_xref[e.keyCode || e.which];
					} else {
						m = String.fromCharCode(e.charCode || e.which);
						tar = (mappedKeys.hasOwnProperty(m)) ? '.ui-keyboard-button[data-value="' + mappedKeys[m]  + '"]' : '.ui-keyboard-' + (e.charCode || e.which);
					}
				}
				// find key
				key = ks.filter(':visible').find(tar);
				if (key.length) {
					// key is visible, simulate typing
					base.typing_simulateKey(key,txt);
				} else {
					// key not found, check if it is in the keymap (tab, space, enter, etc)
					if (base.typing_event) {
						key = ks.find(tar);
					} else {
						// key not found, check if it is in the keymap (tab, space, enter, etc)
						n = (base.typing_keymap.hasOwnProperty(txt)) ? base.typing_keymap[txt] : txt.charCodeAt(0);
						if (n === 'bksp') { txt = n; }
						// find actual key on keyboard
						key = ks.find('.ui-keyboard-' + n);
					}

					// find the keyset
					set = key.closest('.ui-keyboard-keyset');

					// figure out which keyset the key is in then simulate clicking on that meta key, then on the key
					if (set.attr('name')) {
						// get meta key name
						meta = set.attr('name');
						// show correct key set
						base.shiftActive = /shift/.test(meta);
						base.altActive = /alt/.test(meta);
						base.metaActive = base.lastKeyset[2] = (meta).match(/meta\d+/) || false;
						// make the plugin think we're passing it a jQuery object with a name

						base.showKeySet({ name : base.metaActive});

						// Add the key
						base.typing_simulateKey(key,txt);
					} else {
						if (!base.typing_event) {
							// Key doesn't exist on the keyboard, so just enter it
							base.insertText(txt);
							base.checkCombos();
						}
					}

				}

				if (o.current < o.len){
					if (!base.isVisible()) { return; } // keyboard was closed, abort!!
					setTimeout(function(){ base.typeIn(); }, o.delay);
				} else {
					o.init = false;
					if ($.isFunction(o.callback)) {
						// ensure all typing animation is done before the callback
						setTimeout(function(){
							o.callback(base);
						}, o.delay);
					}
					return;
				}
			};

			// mouseover the key, add the text directly, then mouseout on the key
			base.typing_simulateKey = function(el,txt){
				var e = el.length;
				if (e) { el.filter(':visible').trigger('mouseenter.keyboard'); }
				base.typing_timer = setTimeout(function(){
					if (e) { setTimeout(function(){ el.trigger('mouseleave.keyboard'); }, base.typing_options.delay/3); }
					if (!base.isVisible()) { return; }
					if (!base.typing_event) {
						base.insertText(txt);
						base.checkCombos();
					}
				}, base.typing_options.delay/3);
			};

			if (base.typing_options.showTyping) {
				// visible event is fired before this extension is initialized, so check!
				if (base.options.alwaysOpen && base.isVisible()) {
					base.typing_setup();
				}
				// capture and simulate typing
				base.$el.bind('visible.keyboard', function(){
					base.typing_setup();
				});
			}

		});
	};
})(jQuery);
