/*
 * jQuery UI Virtual Keyboard Navigation v1.0 for Keyboard v1.8.14+ only
 *
 * By Rob Garrison (aka Mottie & Fudgey)
 * Dual licensed under the MIT and GPL licenses.
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

(function($){
$.fn.addNavigation = function(){
	return this.each(function(){
		// make sure a keyboard is attached
		var base = $(this).data('keyboard');
		if (!base) { return; }

		// Start on top left key
		base.nav = [0,0];

		// Setup
		base.navigation_init = function(){

			base.$keyboard
				.find('.ui-keyboard-keyset:visible')
				.find('.ui-keyboard-button[data-pos="' + base.nav[0] + ',' + base.nav[1] + '"]')
				.addClass('ui-state-hover');

			base.$preview.bind('keydown.keyboard',function(e){
				if ( e.which > 32 && e.which < 41 ) {
					base.navigateKeys(e.which);
					return false;
				}
				if ( e.which === 13 ) {
					base.$keyboard
						.find('.ui-keyboard-keyset:visible')
						.find('.ui-keyboard-button[data-pos="' + base.nav[0] + ',' + base.nav[1] + '"]')
						.trigger(base.options.keyBinding);
				}
			});

		};

		base.navigateKeys = function(key){
			var maxIndx, indx = base.nav[1],
				row = base.nav[0],
				vis = base.$keyboard.find('.ui-keyboard-keyset:visible'),
				maxRow = vis.find('.ui-keyboard-button-endrow').length - 1,
				maxIndx = vis.find('.ui-keyboard-button[data-pos^="' + row + ',"]').length - 1,
				end = parseInt( vis.find('.ui-keyboard-button:last').attr('data-pos').split(',')[1], 10);

			switch(key){
				case 33: row = 0; break; // pageUp
				case 34: row = maxRow; break; // pageDown
				case 35: indx = maxIndx; break; // End
				case 36: indx = 0; break; // Home
				case 37: indx += (indx > 0) ? -1 : 0; break; // Left
				case 38: row += (row > 0) ? -1 : 0; break; // Up
				case 39: indx += 1; break; // Right
				case 40: row += (row + 1 > maxRow) ? 0 : 1; break; // Down
			}

			// get max index of new row
			maxIndx = vis.find('.ui-keyboard-button[data-pos^="' + row + ',"]').length - 1;
			if (indx > maxIndx) { indx = maxIndx; }

			vis.find('.ui-state-hover').removeClass('ui-state-hover');
			vis.find('.ui-keyboard-button[data-pos="' + row + ',' + indx + '"]').addClass('ui-state-hover');
			base.nav = [ row, indx ];
		};

		// visible event is fired before this extension is initialized, so check!
		if (base.options.alwaysOpen && base.isVisible) {
			base.navigation_init();
		}
		// capture and simulate typing
		base.$el.bind('visible.keyboard', function(e){
			base.navigation_init();
		});

	});
};
})(jQuery);
