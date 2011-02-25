/*
 * jQuery UI Virtual Keyboard Autocomplete v1.0
 *
 * By Rob Garrison (aka Mottie & Fudgey)
 * Dual licensed under the MIT and GPL licenses.
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

(function($){
$.fn.addAutocomplete = function(){
	return this.each(function(){
		// make sure a keyboard is attached
		var base = $(this).data('keyboard');
		if (!base) { return; }

		// Setup
		base.autocomplete_init = function(txt, delay, accept){
			base.$el
				.bind('visible',function(){
					// look for autocomplete
					base.$autocomplete = base.$el.data('autocomplete');
					base.hasAutocomplete = (typeof(base.$autocomplete) === 'undefined') ? false : (base.$autocomplete.options.disabled) ? false : true;
					// only bind to keydown once
					if (base.hasAutocomplete && !base.autocomplete_bind) {
						base.$preview.bind('keydown',function(e){
							// send keys to the autocomplete widget (arrow, pageup/down, etc)
							base.autocomplete_input(e);
						});
						base.autocomplete_bind = true;
					}
				})
				.bind('change',function(e){
					if (base.hasAutocomplete && base.isVisible) {
						base.$el
							.val(base.$preview.val())
							.trigger('keydown.autocomplete');
					}
				})
				.bind('hidden', function(e){
					base.$el.autocomplete('close');
				})
				.bind('autocompleteopen', function(e, ui) {
					if (base.hasAutocomplete){
						// reposition autocomplete window next to the keyboard
						base.$el.data('autocomplete').menu.element.position({
							of : base.$keyboard,
							my : 'right top',
							at : 'left top',
							collision: 'flip'
						});
					}
				})
				.bind('autocompleteselect', function(e,ui){
					if (base.hasAutocomplete && ui.item.value !== ''){
						base.$preview
							.val( ui.item.value )
							.focus();
					}
				});
		};

		// Navigate and select inside autocomplete popup
		base.autocomplete_input = function(event){
			// copied from jquery ui autocomplete code to include autocomplete navigation
			// there might be a better workaround
			var t, keyCode = $.ui.keyCode;
			switch( event.keyCode ) {
			case keyCode.PAGE_UP:
				base.$autocomplete._move( "previousPage", event );
				break;
			case keyCode.PAGE_DOWN:
				base.$autocomplete._move( "nextPage", event );
				break;
			case keyCode.UP:
				base.$autocomplete._move( "previous", event );
				// prevent moving cursor to beginning of text field in some browsers
				event.preventDefault();
				break;
			case keyCode.DOWN:
				base.$autocomplete._move( "next", event );
				// prevent moving cursor to end of text field in some browsers
				event.preventDefault();
				break;
			case keyCode.ENTER:
			case keyCode.NUMPAD_ENTER:
				t = base.$autocomplete.menu.element.find('#ui-active-menuitem').text() || '';
				if (t !== '') { base.$preview.val(t); }
				break;
			}
		};

		// replace original function with this one
		base.escClose = function(e){
			// prevent selecting an item in autocomplete from closing keyboard
			if (base.hasAutocomplete && e.target.id === 'ui-active-menuitem') { return; }
			if ( !$(e.target).closest('.ui-keyboard').length ) {
				base.close( (base.options.autoAccept) ? true : false );
			}
		};

		base.autocomplete_init();

	});
};
})(jQuery);
