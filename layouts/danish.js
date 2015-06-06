/* Danish keyboard layouts
 * contains layout: 'danish-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/danish.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'danish-qwerty' });
 *
 * license for this file: WTFPL
 */

/* qwerty by Torben Junker Kjær (jordbo.dk) -  */
jQuery.keyboard.layouts['danish-qwerty'] = {
	'name' : 'danish-qwerty',
	'lang' : ['da'],
	'normal' : [
		"\u00a7 1 2 3 4 5 6 7 8 9 0 + \u0301 {b}",
		"{tab} q w e r t y u i o p \u00e5 \u00a8",
		"a s d f g h j k l \u00e6 \u00f8 ' {enter}",
		"{shift} < z x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'\u00bd ! " # \u00a4 % & / ( ) = ? \u0300 {b}',
		"{tab} Q W E R T Y U I O P \u00c5 ^",
		"A S D F G H J K L \u00c6 \u00d8 * {enter}",
		"{shift} > Z X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'\u00a7 1 @ \u00a3 $ 5 6 { [ ] } + | {b}',
		'{tab} q w € r t y u i o p \u00e5 ~',
		"a s d f g h j k l \u00e6 \u00f8 ' {enter}",
		'{shift} \\ z x c v b n \u00b5 , . - {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};
