/*
 * jQuery UI Virtual Keyboard Autocomplete v1.6 for Keyboard v1.18+ only (11/19/2014)
 *
 * By Rob Garrison (aka Mottie & Fudgey)
 * Licensed under the MIT License
 *
 * Use this extension with the Virtual Keyboard to get
 * the jQuery UI Autocomplete widget to work seamlessly
 *
 * Requires:
 *  jQuery
 *  jQuery UI & css
 *  Keyboard plugin : https://github.com/Mottie/Keyboard
 *
 * Setup:
 *  $('.ui-keyboard-input')
 *   .keyboard(options)
 *   .autocomplete(options)
 *   .addAutoComplete();
 *
 *  // or if targeting a specific keyboard
 *  $('#keyboard1')
 *   .keyboard(options)     // keyboard plugin
 *   .autocomplete(options) // jQuery UI autocomplete
 *   .addAutoComplete();    // this keyboard extension
 *
 */
/*jshint browser:true, jquery:true, unused:false */
(function($){
"use strict";
$.fn.addAutocomplete = function(){
	return this.each(function(){
		// make sure a keyboard is attached
		var base = $(this).data('keyboard');
		if (!base) { return; }

		// jQuery UI versions 1.9+ are different >= 1.9;
		base.autocomplete_new_version = (function(version) {
			version[0] = parseInt(version[0], 10);
			return (version[0] > 1) || (version[0] === 1 && parseInt(version[1], 10) >= 9);
		})($.ui.version.split("."));

		// Setup
		base.autocomplete_init = function(){

			// visible event is fired before this extension is initialized, so check!
			if (base.options.alwaysOpen && base.isVisible()) {
				base.autocomplete_setup();
			}

			base.$el
				.bind('visible.keyboard',function(){
					base.autocomplete_setup();
				})
				.bind('change.keyboard',function(){
					if (base.hasAutocomplete && base.isVisible()) {
						base.$el
							.val(base.$preview.val())
							.trigger('keydown.autocomplete');
					}
				})
				.bind('hidden.keyboard', function(){
					base.$el.autocomplete('close');
				})
				.bind('autocompleteopen', function() {
					if (base.hasAutocomplete){
						// reposition autocomplete window next to the keyboard
						base.$autocomplete.menu.element.position({
							of : base.$keyboard,
							my : 'right top',
							at : 'left top',
							collision: 'flip'
						});
					}
				})
				.bind('autocompleteselect', function(e, ui){
					var v = ui.item && ui.item.value || '';
					if (base.hasAutocomplete && v !== ''){
						base.$preview
							.val( v )
							.focus();
						// see issue #95 - thanks banku!
						base.lastCaret = { start: v.length, end: v.length };
					}
				});
		};

		// set up after keyboard is visible
		base.autocomplete_setup = function(){
			// look for autocomplete
			base.$autocomplete = base.$el.data('autocomplete') || base.$el.data('uiAutocomplete') || base.$el.data('ui-autocomplete');
			base.hasAutocomplete = (typeof(base.$autocomplete) === 'undefined') ? false : (base.$autocomplete.options.disabled) ? false : true;
			// only bind to keydown once
			if (base.hasAutocomplete) {
				base.$preview.bind('keydown', function(e){
					// send keys to the autocomplete widget (arrow, pageup/down, etc)
					base.$el.val( base.$preview.val() ).triggerHandler(e);
				});
				base.$allKeys.bind('mouseup mousedown mouseleave touchstart touchend touchcancel',function(){
					clearTimeout( base.$autocomplete.searching );
					base.$autocomplete.searching = setTimeout(function() {
						// only search if the value has changed
						if ( base.$autocomplete.term !== base.$autocomplete.element.val() ) {
							base.$autocomplete.selectedItem = null;
							base.$autocomplete.search( null, event );
						}
					}, base.$autocomplete.options.delay );

				});
			}
		};

		base.origEscClose = base.escClose;

		// replace original function with this one
		base.escClose = function(e){
			// prevent selecting an item in autocomplete from closing keyboard
			if ( base.hasAutocomplete && (e.target.id === 'ui-active-menuitem' || $(e.target).closest('ul').hasClass('ui-autocomplete')) ) { return; }
			base.origEscClose(e);
		};

		base.autocomplete_init();

	});
};
})(jQuery);
