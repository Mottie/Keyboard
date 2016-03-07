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
			var opts,
				base = $( this ).data( 'keyboard' );

			// make sure a keyboard is attached
			if ( !base ) { return; }

			// variables
			opts = base.extender_options = $.extend( {}, defaults, options );

			base.extender_namespace = base.namespace + 'extender';
			base.extensionNamespace.push( base.extender_namespace );

			base.extender_setup = function() {
				var $kb,
					layout = opts.layout;
				if ( typeof $keyboard.builtLayouts[ layout ] === 'undefined' ) {
					base.buildKeyboard( layout );
				}
				$kb = $keyboard.builtLayouts[ layout ].$keyboard.find( '.' + $keyboard.css.keySet + '-normal' ).clone();
				$kb
					.removeClass()
					.removeAttr( 'name' )
					.addClass( $keyboard.css.extender )
					.children( 'button' )
					.removeAttr( 'data-pos' );

				// show extender using inline-block - allows the removal of css float
				$kb[ 0 ].style.display = opts.showing ? 'inline-block' : 'none';

				// remove previous extender... just-in-case
				base.$keyboard.find( 'div.' + $keyboard.css.extender ).remove();
				base.$keyboard.append( $kb );
				base.extender_toggle( opts.showing );
				base.bindKeys();
			};

			base.extender_toggle = function( set ) {
				opts.showing = typeof set === 'undefined' ? !opts.showing : set;
				base.$keyboard
					.find( 'button.' + $keyboard.css.extender )
					.toggleClass( base.options.css.buttonActive, opts.showing )
					.end()
					.find( 'div.' + $keyboard.css.extender )[ 0 ].style.display = opts.showing ? 'inline-block' : 'none';

				// force keyboard reposition
				if ( opts.reposition ) {
					$( window ).trigger( 'resize' );
				}
			};

			// visible event is fired before this extension is initialized, so check!
			if ( base.options.alwaysOpen && base.isVisible() ) {
				base.extender_setup();
			}
			// setup extender
			base.$el
				.unbind( $keyboard.events.kbBeforeVisible + base.extender_namespace )
				.bind( $keyboard.events.kbBeforeVisible + base.extender_namespace, function() {
					base.extender_setup();
				});

		});
	};

}));
