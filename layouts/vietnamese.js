/* Vietnamese keyboard layouts + Telex key combinations (see https://github.com/Mottie/Keyboard/pull/136)
 * contains layout: 'vietnamese-qwerty'
 * Vinh Can Code: tbvinh@gmail.com
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/vietnamese.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'vietnamese-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* based on http://ascii-table.com/keyboard.php/461 */
jQuery.keyboard.layouts['vietnamese-qwerty'] = {
	'name' : 'vietnamese-qwerty',
	'lang' : ['vi'],
	'normal' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; ' {enter}",
		"{shift} z x c v b n m < > , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
		"{tab} Q W E R T Y U I O P { } |",
		"A S D F G H J K L : ' {enter}",
		"{shift} Z X C V B N M < > ; : ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'{empty} \u0103 \u00e2 \u00ea \u00f4 {empty} \u031b {empty} {empty} {empty} \u0111 \u002d \u20ab {bksp}',
		"{tab} {empty} {empty} {empty} {empty} {empty} \u00ff {empty} {empty} \u0153 {empty} \u01b0 \u01a1 {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { } \u0302 {enter}",
		"{shift} {empty} {empty} \u00e7 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		'{empty} \u0102 \u00c2 \u00ca \u00d4 {empty} {empty} {empty} {empty} {empty} \u0110 \u005f + {bksp}',
		"{tab} {empty} {empty} {empty} {empty} {empty} \u0178 {empty} {empty} \u0152 {empty} \u01af \u01a0 {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { } \u0308 {enter}",
		"{shift} {empty} {empty} \u00c7 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};
