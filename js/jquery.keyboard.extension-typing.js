/*
 * jQuery UI Virtual Keyboard Typing Simulator v1.0.1 for Keyboard v1.7.6+ only
 *
 * By Rob Garrison (aka Mottie & Fudgey)
 * Dual licensed under the MIT and GPL licenses.
 *
 * Use this extension with the Virtual Keyboard to simulate
 * typing for tutorials or whatever else use you can find
 *
 * Requires:
 *  jQuery
 *  jQuery UI & css
 *  Keyboard plugin : https://github.com/Mottie/Keyboard
 *
 * Setup:
 *  $('.ui-keyboard-input')
 *   .keyboard(options)
 *   .addTyping();
 *
 *  // or if targeting a specific keyboard
 *  $('#keyboard1')
 *   .keyboard(options)
 *   .addTyping();
 * 
 * Basic Usage:
 *  // get keyboard object, open it, then start typing simulation
 *  $('#keyboard-input').getkeyboard().reveal().typeIn('Hello World', 700);
 *
 *  // get keyboard object, open it, type in "This is a test" with 700ms delay between types, then accept & close the keyboard
 *  $('#keyboard-input').getkeyboard().reveal().typeIn('This is a test', 700, function(){ $('#keyboard-input').getkeyboard().close(true); });
 */

 //  TO DO: Make the "enter" work "This\ntest"

 // EXAMPLES:
 // $('#inter').getkeyboard().reveal().typeIn('\tHello \b\n\tWorld', 500);
 // $('#meta').getkeyboard().reveal().typeIn('abCDd11123\u2648\u2649\u264A\u264B', 700, function(){ alert('all done!'); });

(function($){
$.fn.addTyping = function(){
	return this.each(function(){
		// make sure a keyboard is attached
		var base = $(this).data('keyboard');
		if (!base) { return; }

		// variables
		base.typing_options = {};
		base.typing_keymap = {
			' '  : 'space',
			'&nbsp;' : 'space',
			'\b' : 'bksp',
			'\t' : 'tab'
		};
		base.typing_timer;

		// Store typing text
		base.typeIn = function(txt, delay, callback){
			if (!base.isVisible) {
				// keyboard was closed
				base.typing_options.init = false;
				clearTimeout(base.typing_timer);
				return;
			}
			var t = base.typing_options, n, k, key, ks, meta, set;
			if (base.typing_options.init !== true) {
				t.init = true;
				t.text = txt;
				t.len = txt.length;
				t.delay = delay || 300;
				t.current = 0;
				t.callback = callback;
			}

			// function that loops through and types each character
			txt = t.text.substring( t.current, ++t.current );
			ks = base.$keyboard.find('.ui-keyboard-keyset');
			k = (txt === '\n' || txt === '\r') ? 'Enter' : txt;
			key = ks.filter(':visible').find('input.ui-keyboard-button[value="' + k + '"]');

			// key is visible, simulate typing
			if (key.length) {
				base.typing_simulateKey(key,txt);
			} else {

				// key not found, check if it is in the keymap (tab, space, enter, etc)
				n = (txt in base.typing_keymap) ? base.typing_keymap[txt] : txt.charCodeAt(0);
				if (n === 'bksp') { txt = n; }
				// find actual key on keyboard
				key = ks.find('input.ui-keyboard-' + n);
				// find the keyset it is in
				set = key.closest('.ui-keyboard-keyset');
				// figure out which keyset the key is in then simulate clicking on that meta key, then on the key
				if (set.attr('name')) {
					// get meta key name
					meta = set.attr('name');

					// reset back to default keys
					if (meta === 'default'){
						base.metaActive = base.shiftActive = base.altActive = false;
						base.showKeySet();

					// Meta Key: If it's a meta key we have to do something a little
					// different because "meta" will have a number following it
					} else if (meta.match('meta')){
						// make the plugin think we're passing it an jQuery object with a name
						set = { name : '_' + meta};
						base.metaActive = true;
						base.showKeySet(set);

					// Shift or Alt key
					} else if ($.keyboard.keyaction.hasOwnProperty(base.meta)) {
						$.keyboard.keyaction[meta](base);
					}

					// Add the key
					base.typing_simulateKey(key,txt);

				// Key doesn't exist on the keyboard, so just enter it
				} else {
					base.insertText(txt);
				}

			}

			if (t.current < t.len){
				if (!base.isVisible) { return; } // keyboard was closed, abort!!
				setTimeout(function(){ base.typeIn(); }, t.delay);
			} else {
				t.init = false;
				if ($.isFunction(t.callback)) {
					// ensure all typing animation is done before the callback
					setTimeout(function(){
						t.callback();
					}, t.delay);
				}
				return;
			}
		};

		// mouseover the key, add the text directly, then mouseout on the key
		base.typing_simulateKey = function(el,txt){
			var e = el.length;
			if (e) { el.filter(':visible').trigger('mouseenter'); }
			base.typing_timer = setTimeout(function(){
				if (!base.isVisible) { return; }
				base.insertText(txt);
				if (e) { setTimeout(function(){ el.filter(':visible').trigger('mouseleave'); }, base.typing_options.delay/3); }
			}, base.typing_options.delay/3);
		};

	});
};
})(jQuery);
