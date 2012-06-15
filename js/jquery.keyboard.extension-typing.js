/*
 * jQuery UI Virtual Keyboard Typing Simulator v1.3 for Keyboard v1.8.14+ only
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
			base.typing_event = base.typing_flag = false;
			// no manual typing simulation if lockInput is true; but the typeIn() function still works
//			if (base.options.lockInput) { base.typing_options.showTyping = false; }

			base.typing_setup = function(){
				if (base.typing_flag) { return; }
				base.typing_flag = true;
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
			}

			// Store typing text
			base.typeIn = function(txt, delay, callback, e){
				if (!base.isVisible) {
					// keyboard was closed
					base.typing_options.init = false;
					clearTimeout(base.typing_timer);
					return;
				}
				var o = base.typing_options, tar, m, n, k, key, ks, meta, set;
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
						tar = (base.mappedKeys.hasOwnProperty(m)) ? '.ui-keyboard-button[data-value="' + base.mappedKeys[m]  + '"]' : '.ui-keyboard-' + (e.charCode || e.which);
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
					if (!base.isVisible) { return; } // keyboard was closed, abort!!
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
					if (!base.isVisible) { return; }
					if (!base.typing_event) {
						base.insertText(txt);
						base.checkCombos();
					}
				}, base.typing_options.delay/3);
			};

			if (base.typing_options.showTyping) {
				// visible event is fired before this extension is initialized, so check!
				if (base.options.alwaysOpen && base.isVisible) {
					base.typing_setup();
				}
				// capture and simulate typing
				base.$el.bind('visible.keyboard', function(e){
					base.typing_setup();
				});
			}

		});
	};
})(jQuery);
