/*
 * jQuery UI Virtual Keyboard for jQuery Mobile Themes v1.0.1 (updated 2/23/2012)
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

(function($){
$.fn.addMobile = function(options){

	var o, defaults = {
		// keyboard wrapper theme
		container    : { theme:'a' },
		// theme added to all regular buttons
		buttonMarkup : { theme:'a', shadow:'true', corners:'true' },
		// theme added to all buttons when they are being hovered
		buttonHover  : { theme:'c' },
		// theme added to action buttons (e.g. tab, shift, accept, cancel);
		// parameters here will override the settings in the buttonMarkup
		buttonAction : { theme:'b' },
		// theme added to button when it is active (e.g. shift is down)
		// All extra parameters will be ignored
		buttonActive : { theme:'e' }
	};

	return this.each(function(){
		var base = $(this).data('keyboard');

		// Stop if no keyboard attached or if jQuery Mobile isn't loaded
		if (!base || typeof($.fn.textinput) === 'undefined') { return; }

		base.mobile_options = o = $.extend({}, defaults, options);
		base.mobile_initialized = false;

		// Setup
		base.mobile_init = function(){

			// Add theme to input - if not already done through the markup
			$('.ui-keyboard-input').textinput();

			// visible event is fired before this extension is initialized, so check!
			if (base.options.alwaysOpen && base.isVisible) {
				base.mobile_setup();
			}

			// Setup mobile theme on keyboard once it is visible
			base.$el.bind('visible.keyboard', function() {
				if (base.mobile_initialized !== true) {
					base.mobile_setup();
				}
			});

		}

		base.mobile_setup = function(){
			var p, actn = $.extend({}, o.buttonMarkup, o.buttonAction);

			base.$keyboard
				// 'ui-bar ui-bar-a' classes to apply swatch theme
				.addClass('ui-bar ui-bar-' + o.container.theme)
				// removing 'ui-widget-content' will prevent jQuery UI theme from applying to the keyboard
				.removeClass('ui-widget ui-widget-content')
				// apply jQuery Mobile button markup
				// removed call to jQuery Mobile buttonMarkup function; replaced with base.modButton
				.find('button:not(.' + base.options.css.buttonAction + ')').addClass( base.modButton(o.buttonMarkup) ).end()
				.find('.' + base.options.css.buttonAction).addClass( base.modButton(actn) ).end()
				.find('button').removeClass('ui-corner-all ui-state-default')
				.hover(function(){
					$(this).addClass('ui-btn-hover-' + o.buttonHover.theme);
				},function(){
					$(this).removeClass('ui-btn-hover-' + o.buttonHover.theme);
				});

			// set actionClass (default for jQuery UI = 'ui-state-active'),
			// which is the active state of the button (shift is down)
			base.options.css.buttonAction = 'ui-btn-down-' + o.buttonActive.theme;

			// update keyboard width if preview is showing... after applying mobile theme
			if (base.msie && base.$preview[0] !== base.el) {
				base.$preview.hide();
				base.$keyboard.css('width','');
				base.width = base.$keyboard.outerWidth();
				base.$keyboard.width(base.width + parseInt(base.$preview.css('fontSize'),10)); // add about 1em to input width for extra padding
				base.$preview.width(base.width);
				base.$preview.show();
			}

			// adjust keyboard position after applying mobile theme
			p = base.options.position;
			p.of = p.of || base.$el.data('keyboardPosition') || base.$el;
			p.collision = (base.options.usePreview) ? p.collision || 'fit fit' : 'flip flip';
			base.$keyboard.position(p);

			base.mobile_initialized = true;
		};

		base.modButton = function(t){
			// Using this instead of the jQuery Mobile buttonMarkup because it is expecting <a>'s instead of <button>
			// theme:'a', shadow:'true', inline:'true', corners:'false'
			return 'ui-btn ui-btn-up-' + t.theme + (t.shadow == 'true' ? ' ui-shadow' : '') + (t.corners == 'true' ? ' ui-btn-corner-all' : '');
		};

		base.mobile_init();

	});
};
})(jQuery);
