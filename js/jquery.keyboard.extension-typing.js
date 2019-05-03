/*! jQuery UI Virtual Keyboard Typing Simulator v1.12.0 *//*
 * for Keyboard v1.18+ only (2019-05-02)
 *
 * By Rob Garrison (aka Mottie)
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
 *  // To disable manual typing on the virtual keyboard, just set "showTyping"
 *  // option to false
 *  $('#keyboard-input').keyboard(options).addTyping({ showTyping: false });
 *
 *  // Change the default typing delay (time the virtual keyboard highlights the
 *  // manually typed key) - default = 250 milliseconds
 *  $('#keyboard-input').keyboard(options).addTyping({ delay: 500 });
 *
 *  // get keyboard object, open it, then start typing simulation
 *  $('#keyboard-input').getkeyboard().reveal().typeIn('Hello World', 700);
 *
 *  // get keyboard object, open it, type in "This is a test" with 700ms delay
 *  // between types, then accept & close the keyboard
 *  $('#keyboard-input')
 *    .getkeyboard()
 *    .reveal()
 *    .typeIn('This is a test', 700, function(keyboard) {
 *      keyboard.accept();
 *    });
 */
/* More Examples:
 * $('#inter').getkeyboard().reveal().typeIn('\tHello \b\n\tWorld', 500);
 * $('#meta')
 *  .getkeyboard().reveal()
 *  .typeIn('abCDd11123\u2648\u2649\u264A\u264B', 700, function() {
 *    alert('all done!');
 *  });
*/
/* jshint browser:true, jquery:true, unused:false */
/* global require:false, define:false, module:false */
;( function( factory ) {
	if ( typeof define === 'function' && define.amd ) {
		define( ['jquery'], factory );
	} else if (
			typeof module === 'object' &&
			typeof module.exports === 'object'
	) {
		module.exports = factory( require( 'jquery' ) );
	} else {
		factory( jQuery );
	}
}( function( $ ) {
	$.fn.addTyping = function( options ) {
		//Set the default values, use comma to separate the settings, example:
		var defaults = {
			showTyping : true,
			lockTypeIn : false,
			delay      : 250,
			hoverDelay : 250
		},
		$keyboard = $.keyboard;
		return this.each( function() {
			// make sure a keyboard is attached
			var o, base = $( this ).data( 'keyboard' );
			if ( !base ) {
				return;
			}

			// variables
			o = base.typing_options = $.extend( {}, defaults, options );
			base.typing_keymap = {
				' '   : 'space',
				'"'   : '34',
				"'"   : '39',
				'&nbsp;' : 'space',
				'\b'  : 'bksp', // delete character to the left
				'{b}' : 'bksp',
				'{d}' : 'del',  // delete character to the right
				'{l}' : 'left', // move caret left
				'{r}' : 'right', // move caret right
				'\n'  : 'enter',
				'\r'  : 'enter',
				'{e}' : 'enter',
				'\t'  : 'tab',
				'{t}' : 'tab'
			};
			base.typing_xref = {
				8  : 'bksp',
				9  : 'tab',
				13 : 'enter',
				32 : 'space',
				37 : 'left',
				39 : 'right',
				46 : 'del'
			};
			base.typing_event = false;
			base.typing_namespace = base.namespace + 'typing';
			base.extensionNamespace.push( base.typing_namespace );
			// save lockInput setting
			o.savedLockInput = base.options.lockInput;

			base.typing_setup_reset = function() {
				var kbevents = $keyboard.events,
					namespace = base.typing_namespace,
					events = [ kbevents.kbHidden, kbevents.kbInactive, '' ]
						.join( namespace + ' ' );
				// reset "typeIn" when keyboard is closed
				base.$el
					.unbind( namespace )
					.bind( events, function() {
						base.typing_reset();
					});
				base
					.unbindButton( namespace )
					.bindButton( 'mousedown' + namespace, function() {
						base.typing_reset();
					});
			};

			base.typing_setup = function() {
				var namespace = base.typing_namespace;
				base.typing_setup_reset();
				base.$el
					.bind( $keyboard.events.kbBeforeVisible + namespace, function() {
						base.typing_setup();
					});
				base.$preview
					.unbind( namespace )
					.bind( 'keyup' + namespace, function( e ) {
						if ( o.init && o.lockTypeIn || !o.showTyping ) {
							return false;
						}
						if ( e.which >= 37 && e.which <=40 ) {
							return; // ignore arrow keys
						}
						if ( e.which === 16 ) {
							base.shiftActive = false;
						}
						if ( e.which === 18 ) {
							base.altActive = false;
						}
						if ( e.which === 16 || e.which === 18 ) {
							base.showSet();
							// Alt key will shift focus to the menu - doesn't work in Windows
							setTimeout( function() {
								if (base.$preview) {
									base.$preview.focus();
								}
							}, 200 );
							return;
						}
					})
					// change keyset when either shift or alt is held down
					.bind( 'keydown' + namespace, function( e ) {
						if ( o.init && o.lockTypeIn || !o.showTyping ) {
							return false;
						}
						e.temp = false; // prevent repetitive calls while keydown repeats.
						if ( e.which === 16 ) {
							e.temp = !base.shiftActive; base.shiftActive = true;
						}
						// it should be ok to reset e.temp, since both alt and shift will
						// call this function separately
						if ( e.which === 18 ) {
							e.temp = !base.altActive; base.altActive = true;
						}
						if ( e.temp ) {
							base.showSet();
							base.$preview.focus(); // Alt shift focus to the menu
						}
						base.typing_event = true;
						// Simulate key press for tab and backspace since they don't fire
						// the keypress event
						if ( base.typing_xref[ e.which ] ) {
							base.typing_findKey( '', e ); // pass event object
						}

					})
					.bind( 'keypress' + namespace, function( e ) {
						if ( o.init && o.lockTypeIn ) {
							return false;
						}
						// Simulate key press on virtual keyboard
						if ( base.typing_event && !base.options.lockInput ) {
							base.typing_reset();
							base.typing_event = true;
							base.typing_findKey( '', e ); // pass event object
						}
					});
			};

			base.typing_reset = function() {
				base.typing_event = o.init = false;
				o.text = '';
				o.len = o.current = 0;
				base.options.lockInput = o.savedLockInput;
				// clearTimeout( base.typing_timer );
			};

			// Store typing text
			base.typeIn = function( txt, delay, callback, e ) {
				if ( !base.isVisible() ) {
					// keyboard was closed
					clearTimeout( base.typing_timer );
					base.typing_reset();
					return;
				}
				if ( !base.typing_event ) {

					if ( o.init !== true ) {
						o.init = true;
						base.options.lockInput = o.lockTypeIn;
						o.text = txt || o.text || '';
						o.len = o.text.length;
						o.delay = delay || o.delay;
						o.current = 0; // position in text string
						if ( callback ) {
							o.callback = callback;
						}
					}
					// function that loops through and types each character
					txt = o.text.substring( o.current, ++o.current );
					// add support for curly-wrapped single character: {l}, {r}, {d}, etc.
					if (
						txt === '{' &&
						o.text.substring( o.current + 1, o.current + 2 ) === '}'
					) {
						txt += o.text.substring( o.current, o.current += 2 );
					}
					base.typing_findKey( txt, e );
				} else if ( typeof txt === 'undefined' ) {
					// typeIn called by user input
					base.typing_event = false;
					base.options.lockInput = o.savedLockInput;
					return;
				}

			};

			base.typing_findKey = function( txt, e ) {
				var tar, m, n, k, key, ks, meta, set,
					kbcss = $keyboard.css,
					mappedKeys = $keyboard.builtLayouts[base.layout].mappedKeys;
				// stop if keyboard is closed
				if ( !base.isOpen || !base.$keyboard.length ) {
					return;
				}
				ks = base.$keyboard.find( '.' + kbcss.keySet );
				k = txt in base.typing_keymap ? base.typing_keymap[ txt ] : txt;
				// typing_event is true when typing on the actual keyboard - look for
				// actual key; All of this breaks when the CapLock is on... unable to
				// find a cross-browser method that works.
				tar = '.' + kbcss.keyButton + '[data-action="' + k + '"]';
				if ( base.typing_event && e ) {
					// xref used for keydown
					// ( 46 = delete in keypress & period on keydown )
					if (
						e.type !== 'keypress' &&
						base.typing_xref.hasOwnProperty( e.keyCode || e.which )
					) {
						// special named keys: bksp, tab and enter
						tar = '.' +
							kbcss.keyPrefix +
							base.processName( base.typing_xref[ e.keyCode || e.which ] );
					} else {
						m = String.fromCharCode( e.charCode || e.which );
						tar = ( mappedKeys.hasOwnProperty( m ) ) ?
							'.' + kbcss.keyButton + '[data-value="' +
								mappedKeys[ m ].replace(/"/g, '\\"') + '"]' :
							'.' + kbcss.keyPrefix + base.processName( m );
					}
				}
				// find key
				key = ks.filter( ':visible' ).find( tar );
				if ( key.length ) {
					// key is visible, simulate typing
					base.typing_simulateKey( key, txt, e );
				} else {
					// key not found, check if it is in the keymap
					// (tab, space, enter, etc)
					if ( base.typing_event ) {
						key = ks.find( tar );
					} else {
						// key not found, check if it is in the keymap
						// (tab, space, enter, etc)
						n = txt in base.typing_keymap ?
							base.typing_keymap[ txt ] :
							base.processName( txt );
						// find actual key on keyboard
						key = ks.find( '.' + kbcss.keyPrefix + n );
					}
					// find the keyset
					set = key.closest( '.' + kbcss.keySet );
					// figure out which keyset the key is in then simulate clicking on
					// that meta key, then on the key
					if ( set.attr('name' ) ) {
						if ( o.showTyping ) {
							// get meta key name
							meta = set.attr( 'name' );
							// show correct key set
							base.shiftActive = /shift/.test( meta );
							base.altActive = /alt/.test( meta );
							base.metaActive = base.last.keyset[ 2 ] = /\bmeta/.test(meta) ?
								( meta ).match(/meta[\w-]+/)[0] : false;
							base.showSet( base.metaActive );
						}
						// Add the key
						base.typing_simulateKey( key, txt, e );
					} else {
						if ( !base.typing_event ) {
							// Key doesn't exist on the keyboard, so just enter it
							if (
								txt in base.typing_keymap &&
								base.typing_keymap[txt] in $keyboard.keyaction
							) {
								$keyboard.keyaction[ base.typing_keymap[ txt ] ]( base, key, e );
							} else {
								base.insertText( txt );
							}
							base.checkCombos();
							base.$el.trigger( $keyboard.events.kbChange, [ base, base.el ] );
						}
					}
				}

				if ( o.current <= o.len && o.len !== 0 ) {
					if ( !base.isVisible() ) {
						return; // keyboard was closed, abort!!
					}
					base.typing_timer = setTimeout( function() {
						base.typeIn();
					}, o.delay );
				} else if ( o.len !== 0 ) {
					// o.len is zero when the user typed on the actual keyboard during
					// simulation
					base.typing_reset();
					if ( typeof o.callback === 'function' ) {
						// ensure all typing animation is done before the callback
						base.typing_timer = setTimeout( function() {
							// if the user typed during the key simulation, the "o" variable
							// may sometimes be undefined
							if ( typeof o.callback === 'function' ) {
								o.callback( base );
							}
						}, o.delay );
					}
					return;
				} else {
					base.typing_reset();
				}
			};

			// mouseover the key, add the text directly, then mouseout on the key
			base.typing_simulateKey = function( el, txt, e ) {
				var len = el.length;
				if ( !base.isVisible() ) {
					return;
				}
				if ( o.showTyping && len ) {
					el.filter( ':visible' ).trigger( 'mouseenter' + base.namespace );
					if ( o.showTyping && len ) {
						setTimeout( function() {
							el.trigger( 'mouseleave' + base.namespace );
						}, Math.min( o.hoverDelay, o.delay ) );
					}
				}
				if ( !base.typing_event ) {
					// delay required or initial tab does not get added
					// in the main demo (international keyboard)
					setTimeout( function() {
						if (
							txt in base.typing_keymap &&
							base.typing_keymap[ txt ] in $keyboard.keyaction
						) {
							e = e || $.Event( 'keypress' );
							e.target = el; // "Enter" checks for the e.target
							$keyboard.keyaction[ base.typing_keymap[ txt ] ]( base, el, e );
						} else {
							base.insertText( txt );
						}
						base.checkCombos();
						base.$el.trigger( $keyboard.events.kbChange, [ base, base.el ] );
				}, o.delay/3 );
				}
			};

			// visible event is fired before this extension is initialized, so check!
			if ( o.showTyping && base.options.alwaysOpen && base.isVisible() ) {
				base.typing_setup();
			} else {
				// capture and simulate typing
				base.$el
					.unbind( $keyboard.events.kbBeforeVisible + base.typing_namespace )
					.bind( $keyboard.events.kbBeforeVisible + base.typing_namespace, function() {
						if ( o.showTyping ) {
							base.typing_setup();
						} else {
							base.typing_setup_reset();
						}
					});
			}
		});
	};

}));
