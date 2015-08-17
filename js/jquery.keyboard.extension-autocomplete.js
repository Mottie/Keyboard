/*! jQuery UI Virtual Keyboard Autocomplete v1.9.2 *//*
 * for Keyboard v1.18+ only (8/17/2015)
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
'use strict';
$.fn.addAutocomplete = function(options){
	var defaults = {
		position : {
			of : null,
			my : 'right top',
			at : 'left top',
			collision: 'flip'
		}
	};

	return this.each(function(){
		// make sure a keyboard is attached
		var o, base = $(this).data('keyboard');
		if (!base) { return; }

		base.autocomplete_namespace = base.namespace + 'Autocomplete';
		base.extensionNamespace.push( base.autocomplete_namespace );

		// Setup
		base.autocomplete_init = function(){

			// variables
			o = base.autocomplete_options = $.extend( true, {}, defaults, options );

			// visible event is fired before this extension is initialized, so check!
			if (base.options.alwaysOpen && base.isVisible()) {
				base.autocomplete_setup();
			}

			base.$el
				.unbind(base.autocomplete_namespace)
				.bind($.keyboard.events.kbVisible + base.autocomplete_namespace,function(){
					base.autocomplete_setup();
				})
				.bind($.keyboard.events.kbChange + base.autocomplete_namespace,function(){
					if (base.hasAutocomplete && base.isVisible()) {
						base.$el
							.val(base.$preview.val())
							.trigger('keydown.autocomplete');
					}
				})
				.bind($.keyboard.events.kbHidden + base.autocomplete_namespace, function(){
					base.$el.autocomplete('close');
				})
				.bind('autocompleteopen' + base.autocomplete_namespace, function() {
					if (base.hasAutocomplete){
						// default to $keyboard if no position.of defined
						var position = $.extend( {}, o.position );
						// refresh base.$keyboard (it gets destroyed after use); fixes #382
						position.of = position.of || base.$keyboard;
						// reposition autocomplete window next to the keyboard
						base.$autocomplete.menu.element.position( position );
					}
				})
				.bind('autocompleteselect' + base.autocomplete_namespace, function(e, ui){
					var v = ui.item && ui.item.value || '';
					if (base.hasAutocomplete && v !== ''){
						base.$preview
							.val( v )
							.focus();
						// see issue #95 - thanks banku!
						base.last.start = v.length;
						base.last.end = v.length;
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
				base.$preview.bind('keydown' + base.autocomplete_namespace, function(e){
					// send keys to the autocomplete widget (arrow, pageup/down, etc)
					base.$el.val( base.$preview.val() ).triggerHandler(e);
				});
				base.$allKeys.bind('mouseup mousedown mouseleave touchstart touchend touchcancel '.split(' ').join(base.autocomplete_namespace + ' '),function(event){
					clearTimeout( base.$autocomplete.searching );
					var evt = event;
					base.$autocomplete.searching = setTimeout(function() {
						// only search if the value has changed
						if ( base.$autocomplete.term !== base.$autocomplete.element.val() ) {
							base.$autocomplete.selectedItem = null;
							base.$autocomplete.search( null, evt );
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

}));
