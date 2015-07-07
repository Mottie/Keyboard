/*! jQuery UI Virtual Keyboard for jQuery Mobile Themes v1.4.1 *//*
 * for Keyboard v1.18+ (updated 7/7/2015)
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
		buttonActive : { theme:'b', cssClass:'ui-btn-active' },
		// if more than 3 mobile themes are used, add them here
		allThemes : 'a b c'
	};

	return this.each(function(){
		var base = $(this).data('keyboard');

		// Stop if no keyboard attached or if jQuery Mobile isn't loaded
		if (!base || typeof($.fn.textinput) === 'undefined') { return; }

		base.mobile_options = o = $.extend(true, {}, defaults, options);
		// create a list of theme class names to remove
		base.mobile_themes = $.trim(
			(' ' + o.allThemes).split(' ').join(' ' + o.buttonMarkup.cssClass + '-') +
			(' ' + o.allThemes).split(' ').join(' ' + o.buttonAction.cssClass + '-') +
			(' ' + o.allThemes).split(' ').join(' ' + o.buttonActive.cssClass + '-')
		);

		// save original action class because it gets removed when this theme switches swatches
		if (typeof base.options.mobile_savedActiveClass === 'undefined') {
			base.options.mobile_savedActiveClass = '' + base.options.css.buttonActive;
		}

		// Setup
		base.mobile_init = function() {

			var namespace = base.namespace + 'Mobile';

			// Add theme to input - if not already done through the markup
			$('.' + $.keyboard.css.input).textinput();

			// visible event is fired before this extension is initialized, so check!
			if (base.options.alwaysOpen && base.isVisible) {
				base.mobile_setup();
			}

			base.extensionNamespace.push( namespace );

			// Setup mobile theme on keyboard once it is visible.
			// Note: There is a 10ms delay after the keyboard is displayed before it actually fires 'visible.keyboard'.
			// Since we are restyling here, the user will experience FlashOfUnstyledContent (FOUC).
			// This is avoided by first setting the visibility to hidden, then after the mobile styles are applied we
			// set it visible.
			base.$el
				.unbind(namespace)
				.bind($.keyboard.events.kbBeforeVisible + namespace, function() {
					if ( base && base.el.active && base.$keyboard.length ) {
						base.$keyboard.css('visibility', 'hidden');
					}
				})
				.bind($.keyboard.events.kbVisible + namespace, function() {
					if ( base && base.el.active && base.$keyboard.length ) {
						base.mobile_setup();
						base.$keyboard.css('visibility', 'visible');
						base.$preview.focus();
					}
				});

		};

		base.mobile_setup = function(){
			var p,
				kbcss = $.keyboard.css,
				opts = base.options,
				themes = base.mobile_themes;

			base.mobile_$actionKeys = base.$keyboard.find('.' + base.options.css.buttonAction);

			opts.css.buttonActive = opts.mobile_savedActiveClass + ' ' + base.modOptions(o.buttonActive, o.buttonMarkup);

			base.$keyboard
				// 'ui-body ui-body-a' classes to apply swatch theme
				.addClass( base.modOptions(o.container, o.container) )
				// preview input
				.find('.' + kbcss.preview)
				// removing 'ui-widget-content' will prevent jQuery UI theme from applying to the keyboard
				.removeClass('ui-widget ui-widget-content')
				.addClass( base.modOptions(o.input, o.input) ).end()
				// apply jQuery Mobile button markup
				// removed call to jQuery Mobile buttonMarkup function; replaced with base.modOptions
				.find('button')
				.removeClass( $.trim('ui-corner-all ui-state-default ' + themes) )
				.addClass( base.modOptions(o.buttonMarkup, o.buttonMarkup) )
				.not( base.mobile_$actionKeys )
				.hover(function(){
					$(this)
						.removeClass( themes )
						.addClass( base.modOptions(o.buttonHover, o.buttonMarkup) );
				},function(){
					$(this)
						.removeClass( themes + ' ' + o.buttonHover.cssClass )
						.addClass( base.modOptions(o.buttonMarkup, o.buttonMarkup) );
				});

				base.mobile_$actionKeys
					.removeClass( themes )
					.addClass( base.modOptions(o.buttonAction, o.buttonMarkup) );

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

}));
