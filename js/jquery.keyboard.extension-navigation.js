/*! jQuery UI Virtual Keyboard Navigation v1.6.2 *//*
 * for Keyboard v1.18+ only (updated 4/28/2017)
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
	down       : 40,
	// move caret WITH navigate toggle active
	caretrt    : 45, // Insert key
	caretlt    : 46, // delete key

	// ** custom navigationKeys functions **
	// move caret without navigate toggle active
	caretright : function(kb){
		$.keyboard.keyaction.right(kb);
	},
	caretleft : function(kb){
		$.keyboard.keyaction.left(kb);
	}

};

$.fn.addNavigation = function(options){
	return this.each(function(){
		// make sure a keyboard is attached
		var o, k,
			base = $(this).data('keyboard'),
			opts = base.options,
			defaults = {
				position   : [0,0],     // set start position [row-number, key-index]
				toggleMode : false,     // true = navigate the virtual keyboard, false = navigate in input/textarea
				focusClass : 'hasFocus',// css class added when toggle mode is on
				toggleKey  : null       // defaults to $.keyboard.navigationKeys.toggle value
			},
			kbevents = $.keyboard.events;
		if (!base) { return; }

		base.navigation_options = o = $.extend({}, defaults, options);
		base.navigation_keys = k = $.extend({}, $.keyboard.navigationKeys);
		base.navigation_namespace = base.namespace + 'Nav';
		base.extensionNamespace.push( base.navigation_namespace );

		// save navigation settings - disabled when the toggled
		base.saveNav = [ base.options.tabNavigation, base.options.enterNavigation ];
		base.allNavKeys = $.map(k, function(v,i){ return v; });

		// Setup
		base.navigation_init = function(){
			var kbcss = $.keyboard.css;
			base.$keyboard.toggleClass(o.focusClass, o.toggleMode)
				.find('.' + kbcss.keySet + ':visible')
				.find('.' + kbcss.keyButton + '[data-pos="' + o.position[0] + ',' + o.position[1] + '"]')
				.addClass(opts.css.buttonHover);

			base.$preview
				.unbind(base.navigation_namespace)
				.bind('keydown' + base.navigation_namespace,function(e){
					return base.checkKeys(e.which);
				});

		};

		base.checkKeys = function(key, disable){
			if (typeof(key) === "undefined") {
				return;
			}
			var k = base.navigation_keys,
				kbcss = $.keyboard.css;
			if (key === ( o.toggleKey || k.toggle ) || disable) {
				o.toggleMode = (disable) ? false : !o.toggleMode;
				base.options.tabNavigation = (o.toggleMode) ? false : base.saveNav[0];
				base.options.enterNavigation = (o.toggleMode) ? false : base.saveNav[1];
			}
			base.$keyboard.toggleClass(o.focusClass, o.toggleMode);
			if ( o.toggleMode && key === k.enter ) {
				base.$keyboard
					.find('.' + kbcss.keySet + ':visible')
					.find('.' + kbcss.keyButton + '[data-pos="' + o.position[0] + ',' + o.position[1] + '"]')
					.trigger(kbevents.kbRepeater);
				return false;
			}
			if ( o.toggleMode && $.inArray(key, base.allNavKeys) >= 0 ) {
				base.navigateKeys(key);
				return false;
			}
		};

		base.navigateKeys = function(key, row, indx) {
			if (!base.isVisible()) {
				return;
			}
			indx = typeof indx === 'number' ? indx : o.position[1];
			row = typeof row === 'number' ? row : o.position[0];
			var kbcss = $.keyboard.css,
				vis = base.$keyboard.find('.' + kbcss.keySet + ':visible'),
				maxRow = vis.find('.' + kbcss.endRow).length - 1,
				maxIndx = vis.find('.' + kbcss.keyButton + '[data-pos^="' + row + ',"]').length - 1,
				p = base.last,
				l = base.$preview.val().length,
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
				case k.caretrt  : p.start++; break; // caret right
				case k.caretlt  : p.start--; break; // caret left
			}

			// move caret
			if (key === k.caretrt || key === k.caretlt) {
				p.start = p.start < 0 ? 0 : p.start > l ? l : p.start;
				base.last.start = base.last.end = p.end = p.start;
				$.keyboard.caret( base.$preview, base.last );
			}

			// get max index of new row
			maxIndx = vis.find('.' + kbcss.keyButton + '[data-pos^="' + row + ',"]').length - 1;
			if (indx > maxIndx) { indx = maxIndx; }

			vis.find('.' + opts.css.buttonHover).removeClass(opts.css.buttonHover);
			vis.find('.' + kbcss.keyButton + '[data-pos="' + row + ',' + indx + '"]').addClass(opts.css.buttonHover);
			o.position = [ row, indx ];
		};

		// visible event is fired before this extension is initialized, so check!
		if (base.options.alwaysOpen && base.isVisible()) {
			base.$keyboard.find('.' + opts.css.buttonHover).removeClass(opts.css.buttonHover);
			base.navigation_init();
		}
		// navigation bindings
		base.$el
			.unbind(base.navigation_namespace)
			.bind(kbevents.kbVisible, function(){
				base.$keyboard.find('.' + opts.css.buttonHover).removeClass(opts.css.buttonHover);
				base.navigation_init();
			})
			.bind(kbevents.kbInactive + ' ' + kbevents.kbHidden, function(e){
				base.checkKeys(e.which, true); // disable toggle mode & revert navigation options
			})
			.bind(kbevents.kbKeysetChange, function(){
				base.navigateKeys(null);
			})
			.bind('navigate navigateTo', function(e, row, indx){
				var key;
				// no row given, check if it's a navigation key or keyaction
				row = isNaN(row) ? row.toLowerCase() : row;
				if (row in base.navigation_keys) {
					key = base.navigation_keys[row];
					if (isNaN(key) && key in $.keyboard.keyaction) {
						// defined navigation_keys string name is a defined keyaction
						$.keyboard.keyaction[key]( base, this, e );
					} else if ($.isFunction(key)) {
						// custom function defined in navigation_keys
						key(base);
					} else {
						// key (e.which value) is defined in navigation_keys
						base.checkKeys(key);
					}
				} else if ( typeof row === 'string' && row in $.keyboard.keyaction ) {
					// navigate called directly with a keyaction name
					$.keyboard.keyaction[row]( base, this, e );
				} else {
					base.navigateKeys(null, row, indx);
				}
			});

	});
};

}));
