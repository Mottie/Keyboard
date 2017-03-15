/*! jQuery UI Virtual Keyboard previewKeyset v1.1.1 *//*
 * for Keyboard v1.18+ only (updated 7/7/2015)
 *
 * By Rob Garrison (aka Mottie & Fudgey)
 * Licensed under the MIT License
 *
 * Use this extension with the Virtual Keyboard to add a preview
 * of other keysets to the main keyboard.
 *
 * Requires:
 *  jQuery
 *  Keyboard plugin : https://github.com/Mottie/Keyboard
 *
 * Setup:
 *  $('.ui-keyboard-input')
 *   .keyboard(options)
 *   .previewKeyset();
 *
 *  // or if targeting a specific keyboard
 *  $('#keyboard1')
 *   .keyboard(options)     // keyboard plugin
 *   .previewKeyset();    // this keyboard extension
 *
 */
/* jshint browser:true, jquery:true, unused:false */
/* global require:false, define:false, module:false */
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
$.keyboard = $.keyboard || {};

$.fn.previewKeyset = function( options ) {
	return this.each( function() {
		// make sure a keyboard is attached
		var base = $( this ).data( 'keyboard' ),
			namespace = base.namespace + 'Preview',
			defaults = {
				sets : [ 'normal', 'shift', 'alt', 'alt-shift' ]
			};

		if ( !base ) { return; }

		base.previewKeyset_options = $.extend( {}, defaults, options );
		base.extensionNamespace.push( namespace );

		base.previewKeyset = function() {
			var kbcss = $.keyboard.css,
				sets = base.previewKeyset_options.sets,
				// only target option defined sets
				$sets = base.$keyboard.find( '.' + kbcss.keySet ).filter( '[name="' + sets.join('"],[name="') + '"]' );
			if ( $sets.length > 1 ) {
				// start with normal keyset & find all non-action buttons
				$sets.eq( 0 ).find( '.' + kbcss.keyButton ).not( '.' + kbcss.keyAction ).each(function(){
					var indx, nam,
						data = {},
						len = sets.length,
						// find all keys with the same position
						$sibs = $sets.find( 'button[data-pos="' + $(this).attr('data-pos') + '"]' );
					for ( indx = 0; indx < len; indx++ ) {
						nam = $sibs.eq( indx ).parent().attr( 'name' );
						if ( $.inArray( nam, sets ) >= 0 ) {
							data[ 'data-' + nam ] = $sibs.eq( indx ).find( '.' + kbcss.keyText ).text();
						}
					}
					$sibs.attr( data );
				});
			}
		};

		// visible event is fired before this extension is initialized, so check!
		if (base.options.alwaysOpen && base.isVisible()) {
			base.previewKeyset();
		} else {
			base.$el
				.unbind($.keyboard.events.kbBeforeVisible + namespace)
				.bind($.keyboard.events.kbBeforeVisible + namespace, function() {
					base.previewKeyset();
				});
		}

	});
};

}));
