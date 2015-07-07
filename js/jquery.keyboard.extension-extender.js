/*! jQuery UI Virtual Keyboard Extender v1.0.1 *//*
 * for Keyboard v1.18+ only (7/7/2015)
 *
 * By Rob Garrison (aka Mottie)
 * Licensed under the MIT License
 *
*/
/*jshint browser:true, jquery:true, unused:false */
/*global require:false, define:false, module:false */
;(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
}(function($) {
'use strict';

	var $keyboard = $.keyboard;

	$.extend( $keyboard.css, {
		extender : 'ui-keyboard-extender'
	});

	$.extend( $keyboard.layouts, {
		'numpad' : {
			'normal' : [
				'{clear} / * -',
				'7 8 9 +',
				'4 5 6 %',
				'1 2 3 =',
				'0 {dec} {left} {right}'
			]
		}
	});

	// add {extender} keyaction
	$.extend( $keyboard.keyaction, {
		extender: function( base, el ) {
			base.extender_toggle();
			return false;
		}
	});

	$.fn.addExtender = function(options) {
		//Set the default values, use comma to separate the settings, example:
		var defaults = {
			layout     : 'numpad',
			showing    : false,
			reposition : true
		};
		return this.each( function() {
			// make sure a keyboard is attached
			var o, base = $( this ).data( 'keyboard' );
			if (!base) { return; }

			// variables
			o = base.extender_options = $.extend( {}, defaults, options );
			$.extend( true, $keyboard.language.en, {
				display : {
					'extender' : ' '
				}
			});
			base.extender_namespace = base.namespace + 'extender';
			base.extensionNamespace.push( base.extender_namespace );

			base.extender_setup = function() {
				var $kb,
					layout = o.layout;
				if ( typeof $keyboard.builtLayouts[ layout ] === 'undefined' ) {
					base.buildKeyboard( layout );
				}
				$kb = $keyboard.builtLayouts[ layout ].$keyboard.find( '.' + $keyboard.css.keySet + '-normal' ).clone();
				$kb
					.removeClass()
					.removeAttr('name')
					.addClass( $keyboard.css.extender )
					.toggle( o.showing )
					.children('button')
					.removeAttr('data-pos');
				base.$keyboard.append( $kb );
				base.extender_toggle( base.extender_options.showing );
				base.bindKeys();
			};

			base.extender_toggle = function(set) {
				base.extender_options.showing = typeof set === 'undefined' ? !base.extender_options.showing : set;
				base.$keyboard
					.find( 'div.' + $keyboard.css.extender )
					.toggle( base.extender_options.showing )
					.end()
					.find( '.' + $keyboard.css.keySet )
					.css('float', base.extender_options.showing ? 'left' : 'none')
					.end()
					.find( 'button.' + $keyboard.css.extender )
					.toggleClass( base.options.css.buttonActive, base.extender_options.showing );
				// force keyboard reposition
				if (base.extender_options.reposition) {
					$(window).trigger('resize');
				}
			};

			// visible event is fired before this extension is initialized, so check!
			if (base.options.alwaysOpen && base.isVisible()) {
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
