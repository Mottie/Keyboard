/* Catalan keyboard layouts
 * contains layout: 'catalan-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/catalan.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'catalan-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* based on http://ascii-table.com/keyboard.php/173-1 */
jQuery.keyboard.layouts['catalan-qwerty'] = {
	'name' : 'catalan-qwerty',
	'lang' : ['ca'],
	'normal' : [
		"\u00ba 1 2 3 4 5 6 7 8 9 0 ' \u00a1 {bksp}",
		"{tab} q w e r t y u i o p \u0300 +",
		"a s d f g h j k l \u00f1 \u0301 \u00e7 {enter}",
		"{shift} < z x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'\u00aa ! " \u00b7 $ % & / ( ) = ? \u00bf {bksp}',
		"{tab} Q W E R T Y U I O P \u0302 *",
		"A S D F G H J K L \u00d1 \u0308 \u00c7 {enter}",
		"{shift} > Z X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'\\ \u007c @ # \u0303 5 \u00ac 7 8 9 0 \u0027 \u00a1 {bksp}',
		"{tab} q w \u20ac r t y u i o p [ ]",
		"a s d f g h j k l \u00f1 { } {enter}",
		"{shift} \u007c z x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		'\u00aa ! " \u00b7 $ % & / ( ) = ? \u00bf {bksp}',
		"{tab} Q W E R T Y U I O P [ ]",
		"A S D F G H J K L \u00d1 { } {enter}",
		"{shift} > Z X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};
