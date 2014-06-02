/*
 * jQuery UI Virtual Keyboard for jQuery Mobile Themes v1.2 for Keyboard v1.18+ (updated 6/1/2014)
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
(function($){
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
		buttonActive : { theme:'b', cssClass:'ui-btn-active' }
	};

	return this.each(function(){
		var base = $(this).data('keyboard');

		// Stop if no keyboard attached or if jQuery Mobile isn't loaded
		if (!base || typeof($.fn.textinput) === 'undefined') { return; }

		base.mobile_options = o = $.extend(true, {}, defaults, options);

		// Setup
		base.mobile_init = function(){

			// Add theme to input - if not already done through the markup
			$('.ui-keyboard-input').textinput();

			// visible event is fired before this extension is initialized, so check!
			if (base.options.alwaysOpen && base.isVisible) {
				base.mobile_setup();
			}

			// Setup mobile theme on keyboard once it is visible.
			// Note: There is a 10ms delay after the keyboard is displayed before it actually fires 'visible.keyboard'.
			// Since we are restyling here, the user will experience FlashOfUnstyledContent (FOUC).
			// This is avoided by first setting the visibility to hidden, then after the mobile styles are applied we
			// set it visible.
			//
			base.$el
			.on('beforeVisible.keyboard', function () {
				base.$keyboard.css("visibility", "hidden");
			})
			.on('visible.keyboard', function () {
				base.mobile_setup();
				base.$keyboard.css("visibility", "visible");
				base.$preview.focus();
			});

		};

		base.mobile_setup = function(){
			var p,
				opts = base.options,
				markup = o.buttonMarkup.cssClass || '',
				actions = opts.css.buttonAction;

			opts.css.buttonAction += ' ' + o.buttonAction.cssClass;

			base.$keyboard
				// 'ui-bar ui-bar-a' classes to apply swatch theme
				.addClass( base.modOptions(o.container, o.container) )
				// preview input
				.find('.ui-keyboard-preview').addClass( base.modOptions(o.input, o.input) ).end()
				// removing 'ui-widget-content' will prevent jQuery UI theme from applying to the keyboard
				.removeClass('ui-widget ui-widget-content')
				.find('.' + actions).addClass( base.modOptions(o.buttonAction, o.buttonMarkup) ).end()
				// apply jQuery Mobile button markup
				// removed call to jQuery Mobile buttonMarkup function; replaced with base.modOptions
				.find('button')
				.removeClass('ui-corner-all ui-state-default')
				.addClass( base.modOptions(o.buttonMarkup) )
				.hover(function(){
					$(this)
						.removeClass( markup ? markup + '-' + o.buttonMarkup.theme : '' )
						.addClass( base.modOptions(o.buttonHover, o.buttonMarkup) );
				},function(){
					$(this)
						.removeClass( markup ? markup + '-' + o.buttonHover.theme : '' )
						.addClass( base.modOptions(o.buttonMarkup, o.buttonMarkup) );
				});

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
})(jQuery);
