/*! jQuery UI Virtual Keyboard Autocomplete v1.11.3 *//*
 * for Keyboard v1.18+ only (3/29/2017)
 *
 * By Rob Garrison (Mottie)
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
$.fn.addAutocomplete = function(options) {
	var defaults = {
		position : {
			of : null,
			my : 'right top',
			at : 'left top',
			collision: 'flip'
		},
		events: 'autocomplete',
		data: ''
	};

	return this.each(function() {
		// make sure a keyboard is attached
		var o, namespace,
			base = $(this).data('keyboard');

		if (!base) { return; }

		namespace = base.namespace + 'Autocomplete';
		base.autocomplete_namespace = namespace;
		base.extensionNamespace.push( namespace );

		// Setup
		base.autocomplete_init = function() {

			// variables
			o = base.autocomplete_options = $.extend( true, {}, defaults, options );
			var events = o.events || o.data || 'autocomplete';

			// visible event is fired before this extension is initialized, so check!
			if (base.options.alwaysOpen && base.isVisible()) {
				base.autocomplete_setup();
			}

			base.$el
				.unbind(namespace)
				.bind($.keyboard.events.kbVisible + namespace, function() {
					base.autocomplete_setup();
				})
				.bind($.keyboard.events.kbHidden + namespace, function() {
					base.$el[o.data || 'autocomplete']('close');
				})
				.bind($.keyboard.events.kbChange + namespace, function() {
					if (base.hasAutocomplete && base.isVisible()) {
						base.$el.val(base.$preview.val());
					}
				})
				.bind(events + 'open' + namespace, function() {
					if (base.hasAutocomplete) {
						// default to $keyboard if no position.of defined
						var position = $.extend( {}, o.position );
						// refresh base.$keyboard (it gets destroyed after use); fixes #382
						position.of = position.of || base.$keyboard;
						// reposition autocomplete window next to the keyboard
						base.$autocomplete.menu.element.position( position );
					}
				})
				.bind(events + 'select' + namespace, function(e, ui) {
					base.autocomplete_getVal(ui.item);
				});
		};

		base.autocomplete_getVal = function(val) {
			var v;
			switch (typeof val) {
				case 'string':
					v = val || '';
					break;
				case 'object':
					v = val.label || val.value || '';
					break;
				default:
					v = base.preview && base.preview.value || base.el.value;
			}
			v = v.toString();
			if (base.hasAutocomplete && v !== '') {
				// fallback to original input if undefined, see #520
				(base.$preview || base.$el)
					.val( v )
					.focus();
				// see issue #95 - thanks banku!
				base.last.start = v.length;
				base.last.end = v.length;
				base.last.val = v;
			}
		};

		base.autocomplete_update = function(event) {
			clearTimeout( base.$autocomplete.searching );
			base.$autocomplete.searching = setTimeout(function() {
				// only search if the value has changed
				if ( base.$autocomplete.term !== base.$autocomplete.element.val() ) {
					base.$autocomplete.selectedItem = null;
					base.$autocomplete.search( null, event );
				}
			}, base.$autocomplete.options.delay );
		};

		base.autocomplete_navKeys = {
			8: 'backSpace',
			9: 'tab',
			13: 'enter',
			20: 'capsLock',
			27: 'escape',
			32: 'space',
			33: 'pageup',
			34: 'pagedown',
			35: 'end',
			36: 'home',
			37: 'left',
			38: 'up',
			39: 'right',
			40: 'down',
			45: 'insert',
			46: 'delete'
		};

		// set up after keyboard is visible
		base.autocomplete_setup = function() {
			var key;
			// look for autocomplete
			base.$autocomplete = base.$el.data(base.autocomplete_options.data) ||
				// data changes based on jQuery UI version
				base.$el.data('uiAutocomplete') ||
				base.$el.data('ui-autocomplete') ||
				base.$el.data('autocomplete');
			base.hasAutocomplete = (typeof(base.$autocomplete) === 'undefined') ?
				false : (base.$autocomplete.options.disabled) ? false : true;
			// only bind to keydown once
			if (base.hasAutocomplete) {
				base.$preview.bind('keydown' + namespace + ' keypress' + namespace, function(event) {
					// send keys to the autocomplete widget (arrow, pageup/down, etc)
					if (base.$preview && event.namespace !== base.$autocomplete.eventNamespace) {
						event.namespace = base.$autocomplete.eventNamespace.slice(1);
						key = base.autocomplete_navKeys[event.which];
						if (key) {
							if (base.el !== base.preview) {
								base.$el.triggerHandler(event);
								if (key === 'enter') {
									// update preview with the selected item
									setTimeout(function(){
										base.$preview.val(base.$autocomplete.selectedItem.value);
										base.$preview.focus();
									}, 100);
								}
							}
						} else {
							// only search when a non-navigation key is pressed
							base.autocomplete_update(event);
						}
					}
				});
				var events = 'mouseup mousedown mouseleave touchstart touchend touchcancel '
					.split(' ')
					.join(namespace + ' ');
				base.$allKeys.bind(events, function(event) {
					base.autocomplete_update(event);
				});
			}
			if (!base.escCloseCallback.autocomplete) {
				base.escCloseCallback.autocomplete = base.checkAutocompleteMenu;
			}
		};

		base.checkAutocompleteMenu = function($target) {
			// prevent selecting an item in autocomplete from closing keyboard
			// return a "shouldStayOpen" boolean state for this extension
			return base.hasAutocomplete &&
				$target.closest('ul').hasClass('ui-autocomplete');
		};

		base.autocomplete_init();

	});
};

}));
