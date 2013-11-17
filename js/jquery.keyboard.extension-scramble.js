/*
 * jQuery UI Virtual Keyboard Scramble Extension v1.0 for Keyboard
 *
 * By Rob Garrison (aka Mottie & Fudgey)
 * Licensed under the MIT License
 *
 * Use this extension with the Virtual Keyboard to scramble the
 * specified keyboard keys
 *
 * Requires:
 *  jQuery v1.4.4+
 *  Keyboard v1.17.14+ - https://github.com/Mottie/Keyboard
 *
 * Setup:
 *  $('.ui-keyboard-input')
 *   .keyboard(options)
 *   .addScramble();
 *
 *  // or if targeting a specific keyboard
 *  $('#keyboard1')
 *   .keyboard(options) // keyboard plugin
 *   .addScramble();    // this keyboard extension
 * 
 */
/*jshint browser:true, jquery:true, unused:false */
(function($) {
"use strict";
$.keyboard = $.keyboard || {};

	$.fn.addScramble = function(options) {
		//Set the default values, use comma to separate the settings, example:
		var defaults = {
			targetKeys    : /[a-z\d]/i, // keys to randomize
			byRow         : true, // randomize by row, otherwise randomize all keys
			randomizeOnce : true  // if true, randomize only once on keyboard visible
		};
		return this.each(function() {
			// make sure a keyboard is attached
			var o, base = $(this).data('keyboard');
			if (!base) { return; }
			o = base.scramble_options = $.extend({}, defaults, options);

			base.scramble_setup = function($keyboard) {
				var $sets, set, $keys, key, index, tmp,
					rowIndex, keyboardmap, map, keyboard, row;
				if (base.randomizeOnce && base.randomizeComplete) {
					return;
				}
				$sets = $keyboard.find('.ui-keyboard-keyset');
				if ($keyboard.length) {
					for (set = 0; set < $sets.length; set++) {
						/*jshint loopfunc:true */
						$keys = $sets.eq(set);
						rowIndex = 0;
						row = [];
						map = [];
						keyboardmap = [];
						keyboard = [];
						$keys.find('button, br').each(function() {
							if (this.tagName === 'BR') {
								if (o.byRow) {
									row.push(this);
									map.push(false);
									keyboard[rowIndex] = row;
									keyboardmap[rowIndex] = map;
									row = [];
									map = [];
									rowIndex++;
								} else {
									keyboard[rowIndex] = this;
									keyboardmap[rowIndex] = false;
									rowIndex++;
								}
							} else {
								tmp = $(this).attr('data-value') || '';
								tmp = tmp.length === 1 && o.targetKeys.test(tmp) ? tmp : false;
								if (o.byRow) {
									row.push( this );
									map.push ( tmp );
								} else {
									keyboard[rowIndex] = this;
									keyboardmap[rowIndex] = tmp;
									rowIndex++;
								}
							}
						});
						// remove original <br> elements
						$keys.find('.ui-keyboard-button-endrow').remove();
						// re-map keys
						if (!o.byRow) {
							row = base.shuffle( keyboard, keyboardmap );
							for (key = 0; key < row.length; key++) {
								$keys.append(row[key]);
							}
						} else {
							for (index = 0; index < keyboard.length; index++) {
								row = base.shuffle( keyboard[index], keyboardmap[index] );
								for (key = 0; key < row.length; key++) {
									$keys.append(row[key]);
								}
							}
						}
					}

					if ( !base.randomizeOnce && !base.randomizeComplete ) {
						base.$el.bind('beforeVisible.keyboard', function() {
							if (base.rescramble) {
								base.$keyboard = base.scramble_setup(base.$keyboard);
							}
							// make sure rescramble isn't run twice during initialization
							base.rescramble = true;
						});
					}
					base.randomizeComplete = true;
					return $keyboard;
				}
			};

			// modified from Fisher-Yates shuffle ( http://bost.ocks.org/mike/shuffle/ )
			// to allow not shuffling specifically mapped array elements
			base.shuffle = function(array, map) {
				var swap, random,
					index = array.length;
				// While there remain elements to shuffle...
				while (index > 0) {
					// Pick a remaining element...
					random = Math.floor(Math.random() * index);
					if (map[index - 1] === false) {
						index--;
					}
					// skip elements that are mapped to false
					if (map[index - 1] !== false && map[random] !== false) {
						// And swap it with the current element
						index--;
						swap = array[index];
						array[index] = array[random];
						array[random] = swap;
					}
				}
				return array;
			};

			// capture and simulate typing
			base.options.create = function() {
				var $keyboard = base.buildKeyboard();
				return base.scramble_setup($keyboard);
			};

		});
	};

})(jQuery);
