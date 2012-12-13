/*
 * jQuery UI Virtual Keyboard Navigation v1.2 for Keyboard v1.8.14+ only
 *
 * By Rob Garrison (aka Mottie & Fudgey)
 * Licensed under the MIT License
 *
 * Use this extension with the Virtual Keyboard to navigate
 * the virtual keyboard keys using the arrow, page, home and end keys
 * Using this extension WILL prevent keyboard navigation inside of all
 * input and textareas
 *
 * Requires:
 *  jQuery
 *  Keyboard plugin : https://github.com/Mottie/Keyboard
 *
 * Setup:
 *  $('.ui-keyboard-input')
 *   .keyboard(options)
 *   .addNavigation();
 *
 *  // or if targeting a specific keyboard
 *  $('#keyboard1')
 *   .keyboard(options)     // keyboard plugin
 *   .addNavigation();    // this keyboard extension
 * 
 */
/*jshint browser:true, jquery:true, unused:false */
(function($){
"use strict";
$.keyboard = $.keyboard || {};

$.keyboard.navigationKeys = {
	// all keys
	toggle     : 112, // toggle key; F1 = 112 (event.which value for function 1 key)
	enter      : 13,
	pageup     : 33,
	pagedown   : 34,
	end        : 35,
	home       : 36,
	left       : 37,
	up         : 38,
	right      : 39,
	down       : 40
};

$.fn.addNavigation = function(options){

	return this.each(function(){
		// make sure a keyboard is attached
		var o, k, base = $(this).data('keyboard'),
			defaults = {
				position   : [0,0],     // set start position [row-number, key-index]
				toggleMode : false,     // true = navigate the virtual keyboard, false = navigate in input/textarea
				
				focusClass : 'hasFocus' // css class added when toggle mode is on
			};
		if (!base) { return; }

		base.navigation_options = o = $.extend({}, defaults, options);
		base.navigation_keys = k = $.extend({}, $.keyboard.navigationKeys);
		// save navigation settings - disabled when the toggled
		base.saveNav = [ base.options.tabNavigation, base.options.enterNavigation ];
		base.allNavKeys = $.map(k, function(v,i){ return v; });

		// Setup
		base.navigation_init = function(){

			base.$keyboard[(o.toggleMode) ? 'addClass' : 'removeClass'](o.focusClass)
				.find('.ui-keyboard-keyset:visible')
				.find('.ui-keyboard-button[data-pos="' + o.position[0] + ',' + o.position[1] + '"]')
				.addClass('ui-state-hover');

			base.$preview
			.unbind('keydown.keyboardNav')
			.bind('keydown.keyboardNav',function(e){
				return base.checkKeys(e.which);
			});

		};

		base.checkKeys = function(key, disable){
			var k = base.navigation_keys;
			if (key === k.toggle || disable) {
				o.toggleMode = (disable) ? false : !o.toggleMode;
				base.options.tabNavigation = (o.toggleMode) ? false : base.saveNav[0];
				base.options.enterNavigation = (o.toggleMode) ? false : base.saveNav[1];
			}
			base.$keyboard[(o.toggleMode) ? 'addClass' : 'removeClass'](o.focusClass);
			if ( o.toggleMode && key === k.enter ) {
				base.$keyboard
					.find('.ui-keyboard-keyset:visible')
					.find('.ui-keyboard-button[data-pos="' + o.position[0] + ',' + o.position[1] + '"]')
					.trigger('repeater.keyboard');
				return false;
			}
			if ( o.toggleMode && $.inArray(key, base.allNavKeys) >= 0 ) {
				base.navigateKeys(key);
				return false;
			}
		};

		base.navigateKeys = function(key, row, indx){
			indx = indx || o.position[1];
			row = row || o.position[0];
			var vis = base.$keyboard.find('.ui-keyboard-keyset:visible'),
				maxRow = vis.find('.ui-keyboard-button-endrow').length - 1,
				maxIndx = vis.find('.ui-keyboard-button[data-pos^="' + row + ',"]').length - 1,
				k = base.navigation_keys;

			switch(key){
				case k.pageup   : row = 0; break; // pageUp
				case k.pagedown : row = maxRow; break; // pageDown
				case k.end      : indx = maxIndx; break; // End
				case k.home     : indx = 0; break; // Home
				case k.left     : indx += (indx > 0) ? -1 : 0; break; // Left
				case k.up       : row += (row > 0) ? -1 : 0; break; // Up
				case k.right    : indx += 1; break; // Right
				case k.down     : row += (row + 1 > maxRow) ? 0 : 1; break; // Down
			}

			// get max index of new row
			maxIndx = vis.find('.ui-keyboard-button[data-pos^="' + row + ',"]').length - 1;
			if (indx > maxIndx) { indx = maxIndx; }

			vis.find('.ui-state-hover').removeClass('ui-state-hover');
			vis.find('.ui-keyboard-button[data-pos="' + row + ',' + indx + '"]').addClass('ui-state-hover');
			o.position = [ row, indx ];
		};

		// visible event is fired before this extension is initialized, so check!
		if (base.options.alwaysOpen && base.isVisible) {
			base.$keyboard.find('.ui-state-hover').removeClass('ui-state-hover');
			base.navigation_init();
		}
		// capture and simulate typing
		base.$el
			.bind('visible.keyboard', function(e){
				base.$keyboard.find('.ui-state-hover').removeClass('ui-state-hover');
				base.navigation_init();
			})
			.bind('inactive.keyboard hidden.keyboard', function(e){
				base.checkKeys(e.which, true); // disable toggle mode & revert navigation options
			})
			.bind('navigate navigateTo', function(e, row, indx){
				// no row given, check if it's a key name
				row = isNaN(row) ? row.toLowerCase() : row;
				if (base.navigation_keys.hasOwnProperty(row)) {
					base.checkKeys( base.navigation_keys[row] );
				} else {
					base.navigateKeys(null, row, indx);
				}
			});

	});
};
})(jQuery);
