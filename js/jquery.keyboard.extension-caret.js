/*! jQuery UI Virtual Keyboard Virtual Caret v1.0.1 (beta) *//*
 * for Keyboard v1.18+ only (7/7/2015)
 * modified from https://github.com/component/textarea-caret-position
 *
 * By Rob Garrison (aka Mottie)
 * Licensed under the MIT License
 *
 * CSS changes
 * NOTE: caret margin-top => is added to the caret height (top & bottom)
 * .ui-keyboard-preview-wrapper { position: relative; overflow: hidden; }
 * .ui-keyboard-caret { background: red; width: 1px; margin-top: 3px; }
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

	$keyboard.firefox = typeof window.mozInnerScreenX !== 'undefined';

	$.extend( $keyboard.css, {
		caret : 'ui-keyboard-caret'
	});

	$.fn.addCaret = function( options ) {
		var defaults = {
			caretClass : '',
			// *** for future use ***
			// data-attribute containing the character(s) next to the caret
			charAttr   : 'data-character',
			// # character(s) next to the caret (can be negative for RTL)
			charIndex  : 1,
			offsetX    : 0,
			offsetY    : 0,
			adjustHt   : 0
		};
		return this.each( function() {
			// make sure a keyboard is attached
			var o, base = $( this ).data( 'keyboard' );
			if ( !base ) { return; }

			// variables
			o = base.caret_options = $.extend( {}, defaults, options );
			base.caret_namespace = base.namespace + 'caret';
			base.extensionNamespace.push( base.caret_namespace );

			// modified from https://github.com/component/textarea-caret-position
			// The properties that we copy into a mirrored div.
			// Note that some browsers, such as Firefox,
			// do not concatenate properties, i.e. padding-top, bottom etc. -> padding,
			// so we have to do every single property specifically.
			base.textareaCaretProperties = [
				'direction', 'boxSizing', 'width', 'height', 'overflowX', 'overflowY',
				'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth', 'borderStyle',
				'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
				'fontStyle', 'fontVariant', 'fontWeight', 'fontStretch', 'fontSize', 'fontSizeAdjust',
				'lineHeight', 'fontFamily', 'textAlign', 'textTransform', 'textIndent', 'textDecoration',
				'letterSpacing', 'wordSpacing', 'tabSize', 'MozTabSize'
			];

			base.caret_setup = function() {
				var events = 'keyup keypress mouseup mouseleave '.split( ' ' ).join( base.caret_namespace + ' ' ),
					style = 'position:absolute;visibility:hidden;top:-9999em;left:-9999em;' +
						'white-space:pre-wrap;' +
						( base.preview.nodeName === 'INPUT' ? '' : 'word-wrap:break-word;' );
				// add mirrored div
				base.caret_$div = $( '<div class="ui-keyboard-mirror-div" style="' + style + '">' )
					.appendTo( base.$keyboard );

				base.$caret = $( '<div class="ui-keyboard-caret ' + o.caretClass + '" style="position:absolute;">' )
					.insertAfter( base.$preview );

				base.$el
					.unbind( $keyboard.events.kbChange + base.caret_namespace )
					.bind( $keyboard.events.kbChange + base.caret_namespace, function() {
						base.findCaretPos();
					});
				base.$preview
					.unbind( events )
					.bind( events, function() {
						base.findCaretPos();
					});
			};

			// getCaretCoordinatesFn = function (element, position, recalculate) {
			base.findCaretPos = function() {
				var style, computed, margin, pos, position, txt,
					element = base.preview,
					isInput = element.nodeName === 'INPUT',
					div = base.caret_$div[0];

				style = div.style;
				computed = window.getComputedStyle ? getComputedStyle( element ) : element.currentStyle;
				// get caret position based on text-direction
				pos = $keyboard.caret( base.$preview );
				position = Math[ computed.direction === 'ltr' ? 'max' : 'min' ]( pos.start, pos.end );

				// transfer the element's properties to the div
				base.textareaCaretProperties.forEach(function ( prop ) {
					style[ prop ] = computed[ prop ];
				});

				if ( $keyboard.firefox ) {
					// Firefox adds 2 pixels to the padding - https://bugzilla.mozilla.org/show_bug.cgi?id=753662
					style.width = parseInt( computed.width, 10 ) - 2 + 'px';
					// Firefox lies about the overflow property for textareas:
					// https://bugzilla.mozilla.org/show_bug.cgi?id=984275
					if ( element.scrollHeight > parseInt( computed.height, 10 ) ) {
						style.overflowY = 'scroll';
					}
				} else {
					// for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
					// style.overflow = 'hidden';
					style.width = parseInt( isInput ? element.scrollWidth : computed.width, 10 ) +
						// add 50 extra px if it's an input to prevent wrap
						( isInput ? 50 : 0 ) + 'px';
				}

				div.textContent = element.value.substring( 0, position );
				// the second special handling for input type="text" vs textarea:
				// spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
				if ( element.nodeName === 'INPUT' ) {
					div.textContent = div.textContent.replace( /\x20/g, '\xa0' );
				}

				var span = document.createElement( 'span' );
				// Wrapping must be replicated *exactly*, including when a long word gets
				// onto the next line, with whitespace at the end of the line before (#7).
				// The *only* reliable way to do that is to copy the *entire* rest of the
				// textarea's content into the <span> created at the caret position.
				// for inputs, just '.' would be enough, but why bother?
				// || because a completely empty faux span doesn't render at all
				span.textContent = element.value.substring( position ) || '.';
				div.appendChild( span );

				base.caretPos = {
					top: span.offsetTop + parseInt( computed.borderTopWidth, 10 ) + o.offsetY,
					left: span.offsetLeft + parseInt( computed.borderLeftWidth, 10 ) + o.offsetX
				};

				// make caret height = font-size + any margin-top x2 added by the css
				margin = parseInt( base.$caret.css( 'margin-top' ), 10 );
				style = Math.round( parseFloat( base.$preview.css( 'font-size' ) ) + margin * 2 ) + o.adjustHt;

				base.$caret.css({
					top: element.offsetTop - element.scrollTop + base.caretPos.top - margin,
					left: element.offsetLeft - element.scrollLeft + base.caretPos.left,
					height: style
				});
				txt = element.value.substring( position, position + o.charIndex ).replace(/\s/, '\xa0' ) || '\xa0';
				base.$caret.attr( o.charAttr, txt );
			};

			// visible event is fired before this extension is initialized, so check!
			if ( base.options.alwaysOpen && base.isVisible() ) {
				base.caret_setup();
			}
			// setup caret when keyboard is visible
			base.$el
				.unbind( base.caret_namespace )
				.bind( $keyboard.events.kbBeforeVisible + base.caret_namespace, function() {
					base.caret_setup();
				})
				.bind( $keyboard.events.kbHidden + base.caret_namespace, function() {
					base.$caret = null;
					base.caret_$div = null;
				});

		});
	};

}));
