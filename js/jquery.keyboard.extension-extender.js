/*! jQuery UI Virtual Keyboard Extender v1.0.3 *//*
 * for Keyboard v1.18+ only (12/5/2015)
 *
 * By Rob Garrison (aka Mottie)
 * Licensed under the MIT License
 *
*/
/*jshint browser:true, jquery:true, unused:false */
/*global require:false, define:false, module:false */
;( function( factory ) {
	if ( typeof define === 'function' && define.amd ) {
		define( [ 'jquery' ], factory );
	} else if ( typeof module === 'object' && typeof module.exports === 'object' ) {
		module.exports = factory( require( 'jquery' ) );
	} else {
		factory( jQuery );
	}
}( function( $ ) {
'use strict';

	var $keyboard = $.keyboard;

	$keyboard.css.extender = 'ui-keyboard-extender';
	$keyboard.language.en.display.extender = ' :toggle_numpad';

	$keyboard.layouts.numpad = {
		'normal' : [
			'{clear} / * -',
			'7 8 9 +',
			'4 5 6 %',
			'1 2 3 =',
			'0 {dec} {left} {right}'
		]
	};

	// add {extender} keyaction
	$keyboard.keyaction.extender = function( base, el ) {
		base.extender_toggle();
		return false;
	};

	$.fn.addExtender = function(options) {
		//Set the default values, use comma to separate the settings, example:
		var defaults = {
			layout     : 'numpad',
			showing    : false,
			reposition : true
		};
		return this.each( function() {
			var base = $( this ).data( 'keyboard' );

			// make sure a keyboard is attached
			if ( !base ) { return; }

			// variables
			base.extender_options = $.extend(
				{},
				defaults,
				base.extender_options, // restore prev options on layout update
				options
			);

			// already initialized & switching layouts
			if ( base.extender_namespace ) {
				return base.extender_layoutSwitcher();
			}

			base.extender_namespace = base.namespace + 'extender';
			base.extensionNamespace.push( base.extender_namespace );

			base.extender_layoutSwitcher = function() {
				base.extender_lastKeyset = base.last.keyset;
				base.extender_bindEvents( false );
				base.$el.one( $keyboard.events.kbBeforeVisible, function() {
					// preserve active keysets; redraw resets them - see #510
					base.shiftActive = base.extender_lastKeyset[ 0 ];
					base.altActive = base.extender_lastKeyset[ 1 ];
					base.metaActive = base.extender_lastKeyset[ 2 ];
					base.showKeySet();
					base.extender_setup();
					base.extender_bindEvents();
				});
				base.redraw();
			};

			base.extender_bindEvents = function( bind ) {
				var event = $keyboard.events.kbBeforeVisible + base.extender_namespace;
				// setup extender
				base.$el.unbind( event );
				if ( bind !== false ) {
					base.$el.bind( event, function() {
						base.extender_setup();
					});
				}
			};

			base.extender_setup = function() {
				var $extender,
					layout = base.extender_options.layout;
				if ( typeof $keyboard.builtLayouts[ layout ] === 'undefined' ) {
					base.buildKeyboard( layout );
				}
				$extender = $keyboard.builtLayouts[ layout ].$keyboard
					// only use the "normal" layout in the extender
					.find( '.' + $keyboard.css.keySet + '-normal' )
					.clone();
				$extender
					.removeClass()
					.removeAttr( 'name' )
					.addClass( $keyboard.css.extender )
					.children( 'button' )
					.removeAttr( 'data-pos' );

				// show extender using inline-block - allows the removal of css float
				$extender[ 0 ].style.display = base.extender_options.showing ?
					'inline-block' :
					'none';

				// remove previous extender... just-in-case
				base.$keyboard.find( 'div.' + $keyboard.css.extender ).remove();
				base.$keyboard.append( $extender );
				base.extender_toggle( base.extender_options.showing );
				base.bindKeys();
			};

			base.extender_toggle = function( set ) {
				base.extender_options.showing = typeof set === 'undefined' ?
					!base.extender_options.showing : set;
				base.$keyboard
					.find( 'button.' + $keyboard.css.extender )
					.toggleClass(
						base.options.css.buttonActive,
						base.extender_options.showing
					)
					.end()
					.find( 'div.' + $keyboard.css.extender )[ 0 ].style.display =
						base.extender_options.showing ? 'inline-block' : 'none';

				// force keyboard reposition
				if ( base.extender_options.reposition ) {
					$( window ).trigger( 'resize' );
				}
			};

			// visible event is fired before this extension is initialized, so check!
			if ( base.options.alwaysOpen && base.isVisible() ) {
				base.extender_setup();
			}

			base.extender_bindEvents();

		});
	};

}));
