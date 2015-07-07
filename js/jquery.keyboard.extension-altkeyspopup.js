/*! jQuery UI Virtual Keyboard Alt Key Popup v1.0.1 *//*
 * for Keyboard v1.18+ only (7/7/2015)
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

	$.extend( $keyboard.css, {
		altKeyPopup   : 'ui-keyboard-popup',
		altKeyOverlay : 'ui-keyboard-overlay'
	});

	$keyboard.altKeys = $.extend({
		a : '\u00e5 \u00e6 \u0101 \u0103 \u0105 \u00e0 \u00e1 \u00e2 \u00e3 \u00e4', // å æ ā ă ą à á â ã ä
		A : '\u00c5 \u00c6 \u0100 \u0102 \u0104 \u00c0 \u00c1 \u00c2 \u00c3 \u00c4', // Å Æ Ā Ă Ą À Á Â Ã Ä
		c : '\u00e7 \u0107 \u0109 \u010b \u010d', // ç ć ĉ ċ č
		C : '\u00c7 \u0106 \u0108 \u010a \u010c', // Ç Ć Ĉ Ċ Č
		d : '\u010f \u00f0 \u010f', // ď ð ď
		D : '\u010e \u00d0 \u010e', // Ď Ð Ď
		e : '\u0117 \u0119 \u0115 \u011b \u0259 \u00e8 \u00e9 \u00ea \u00eb \u0113', // ė ę ĕ ě ə è é ê ë ē
		E : '\u0116 \u0118 \u0114 \u011a \u018e \u00c8 \u00c9 \u00ca \u00cb \u0112', // Ė Ę Ĕ Ě Ǝ È É Ê Ë Ē
		g : '\u0123 \u011f \u011d \u0121', // ģ ğ ĝ ġ
		G : '\u0122 \u011e \u011c \u0120', // Ģ Ğ Ĝ Ġ
		h : '\u0125 \u0127', // ĥ ħ
		H : '\u0124 \u0126', // Ĥ Ħ
		i : '\u0131 \u012f \u012b \u00ef \u00ee \u00ed \u00ec \u0129 \u012d', // ı į ī ï î í ì ĩ ĭ
		I : '\u0130 \u012e \u012a \u00cf \u00ce \u00cd \u00cc \u0128 \u012c', // İ Į Ī Ï Î Í Ì Ĩ Ĭ
		j : '\u0135', // ĵ
		J : '\u0134', // Ĵ
		k : '\u0137', // ķ
		K : '\u0136', // Ķ
		l : '\u0141 \u013d \u013b \u0139 \u013f', // Ł Ľ Ļ Ĺ Ŀ
		L : '\u0142 \u013e \u013c \u013a \u0140', // ł ľ ļ ĺ ŀ
		n : '\u0149 \u0148 \u0146 \u0144 \u00f1', // ŉ ň ņ ń ñ
		N : '\u0149 \u0147 \u0145 \u0143 \u00d1', // ŉ Ň Ņ Ń Ñ
		o : '\u0153 \u0151 \u00f8 \u00f6 \u00f5 \u00f4 \u00f3 \u00f2 \u014d \u014f', // œ ő ø ö õ ô ó ò ō ŏ
		O : '\u0152 \u0150 \u00d8 \u00d6 \u00d5 \u00d4 \u00d3 \u00d2 \u014c \u014e', // Œ Ő Ø Ö Õ Ô Ó Ò Ō Ŏ
		r : '\u0155 \u0159 \u0157', // ŕ ř ŗ
		R : '\u0154 \u0158 \u0156', // Ŕ Ř Ŗ
		s : '\u015b \u0161 \u015f \u00df \u00a7 \u015d', // ś š ş ß § ŝ
		S : '\u015a \u0160 \u015e \u1e9e \u00a7 \u015c', // Ś Š Ş ẞ § Ŝ
		t : '\u00fe \u0165 \u021b \u0163 \u0167', // þ ť ț ţ ŧ
		T : '\u00de \u0164 \u021a \u0162 \u0166', // Þ Ť Ț Ţ Ŧ
		u : '\u0173 \u0171 \u016f \u016b \u00fc \u00fb \u00fa \u00f9 \u0169 \u016d', // ų ű ů ū ü û ú ù ũ ŭ
		U : '\u0172 \u0170 \u016e \u016a \u00dc \u00db \u00da \u00d9 \u0168 \u016c', // Ų Ű Ů Ū Ü Û Ú Ù Ũ Ŭ
		w : '\u0175', // ŵ
		W : '\u0174', // Ŵ
		y : '\u00fd', // ý
		Y : '\u00dd', // Ý
		z : '\u017a \u017c \u017e', // ź ż ž
		Z : '\u0179 \u017b \u017d', // Ź Ż Ž
		'!' : '\u00a1', // ¡
		'$' : '\u20ac \u00a3 \u00a4 \u00a5 \u00a2 \u20a1 \u20b1 \u20a9 \u20b9 \u20aa \u20ad \u20ae \u20a6 \u20a4', // €£¤¥¢₡₱₩₹₪₭₮₦₤
		'?' : '\u00bf', // ¿
		"'" : '\u3008 \u300c \u300e \u201c', // 〈 「 『 “
		'"' : '\u3009 \u300d \u300f \u201d', // 〉 」 』 ”
		'(' : '\u300a \u3010 \u3014', // « 【 〔
		')' : '\u300b \u3011 \u3015'  // » 】 〕
	}, $keyboard.altKeys );

	$.fn.addAltKeyPopup = function( options ) {
		//Set the default values, use comma to separate the settings, example:
		var defaults = {
			// time to hold down a button in ms to trigger a popup
			holdTime : 500,
			// event triggered when popup is visible
			popupVisible : 'popup-visible'
		};
		return this.each( function() {
			// make sure a keyboard is attached
			var namespace,
				base = $( this ).data( 'keyboard' );
			if (!base) { return; }

			// variables
			base.altkeypopup_options = $.extend( {}, defaults, options );
			namespace = base.altkeypopup_namespace = base.namespace + 'AltKeyPopup';
			base.extensionNamespace.push( namespace );

			base.altkeypopup_setup = function() {
				var timer,
					start = 'mousedown touchstart '.split( ' ' ).join( namespace + ' ' ),
					end = 'mouseup touchend touchcancel '.split( ' ' ).join( namespace + ' ' );

				// force disable repeat keys
				base.options.repeatRate = 0;

				// add hold key functionality for popups
				base.$allKeys
					.bind( start, function() {
						clearTimeout( timer );
						var $key = $( this ),
							key = $key.attr( 'data-action' ) || '';
						if ( key in $keyboard.altKeys ) {
							timer = setTimeout( function() {
								base.altKeyPopup_popup( key, $key );
							}, base.altkeypopup_options.holdTime );
						}
					})
					.bind( end, function() {
						clearTimeout( timer );
					});
			};

			base.altKeyPopup_popup = function( key, $key ) {
				var keys, $keys, positionHoriz, positionVert, top,
					kbcss = $keyboard.css,
					kbWidth = base.$keyboard.outerWidth(),
					kbHeight = base.$keyboard.outerHeight();
				// overlay keyboard
				base.altKeyPopup_$overlay = $( '<div class="' + kbcss.altKeyOverlay + '" />' )
					.css({
						width : kbWidth,
						height: kbHeight
					})
					.appendTo( base.$keyboard )
					.bind( 'click touchstart', function() {
						base.altKeyPopup_$overlay.remove();
					});

				// remove character added when key was initially pressed, unless it was a backspace key
				if ( key !== 'bksp' ) {
					$keyboard.keyaction.bksp( base );
				}

				// make popup; use the same classes as the keyboard container
				$keys = $( '<div class="' + kbcss.altKeyPopup + ' ' + base.options.css.container + '" />' );
				keys = $keyboard.altKeys[ key ].split( /\s+/ );
				// make popup keys
				base.buildRow( $keys, 0, keys, [] );
				// add popup & add bindings
				$keys
					.appendTo( base.altKeyPopup_$overlay )
					.children()
					.bind( 'mousedown touchstart', function( event ) {
						var action = $( this ).attr( 'data-action' );
						// make action keys work in popup
						if ( action in $keyboard.keyaction && $.isFunction($keyboard.keyaction[ action ] ) ) {
							$keyboard.keyaction[ action ]( base, this, event );
						} else {
							base.insertText( action );
						}
						base.altKeyPopup_$overlay.remove();
					})
					.bind( 'mouseover mouseleave', function( event ){
						$( this ).toggleClass( base.options.css.buttonHover, event.type === 'mouseover' );
					});

				// position popup within $keyboard container
				positionHoriz = $key.position().left - ( $keys.outerWidth() / 2 ) + ( $key.outerWidth() / 2 );
				if ( positionHoriz + $keys.outerWidth() > kbWidth ) {
					positionHoriz = kbWidth - $keys.outerWidth();
					if ( positionHoriz < 0 ) {
						$keys.css({
							width : kbWidth,
							height : 'auto'
						});
					}
				}
				positionVert = $key.position().top - $key.outerHeight() - 5;
				top = base.$keyboard.find( '.' + kbcss.keySet ).position().top;
				if ( positionVert + $keys.outerHeight() > kbHeight ) {
					positionVert = kbHeight - $keys.outerHeight();
					if ( positionVert < top ) {
						$keys.css({
							height : kbHeight - top,
							width : 'auto'
						});
					}
				}
				$keys.css({
					position : 'relative',
					top : positionVert < top ? top : positionVert,
					left : positionHoriz < 0 ? 0 : positionHoriz
				});
				// trigger popup visible event
				base.$el.trigger( base.altkeypopup_options.popupVisible, [ base ] );
			};

			// visible event is fired before this extension is initialized, so check!
			if ( base.options.alwaysOpen && base.isVisible() ) {
				base.altkeypopup_setup();
			}
			// setup altkey popup
			base.$el
				.unbind( $keyboard.events.kbBeforeVisible + namespace )
				.bind( $keyboard.events.kbBeforeVisible + namespace, function() {
					base.altkeypopup_setup();
				});

		});
	};

}));
