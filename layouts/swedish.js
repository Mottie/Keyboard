/* Swedish keyboard layouts
 * contains layout: 'swedish-qwerty' & 'swedish-dvorak'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/scandinavian.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'swedish-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* qwerty by Mika Perreri Korhonen (https://github.com/jouk0) -  */
jQuery.keyboard.layouts['swedish-qwerty'] = {
	'name' : 'swedish-qwerty',
	'lang' : ['sv'],
	'normal' : [
		"\u00a7 1 2 3 4 5 6 7 8 9 0 + \u0301 {bksp}",
		"{tab} q w e r t y u i o p \u00e5 \u0308",
		"a s d f g h j k l \u00f6 \u00e4 ' {enter}",
		"{shift} < z x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'\u00bd ! " # \u00a4 % & / ( ) = ? \u0300 {bksp}',
		"{tab} Q W E R T Y U I O P \u00c5 \u0302",
		"A S D F G H J K L \u00d6 \u00c4 * {enter}",
		"{shift} > Z X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'\u00a7 1 @ \u00a3 $ 5 6 { [ ] } \\ \u0301 {bksp}',
		'{tab} q w € r t y u i o p \u00e5 \u0303',
		"a s d f g h j k l \u00f6 \u00e4 ' {enter}",
		'{shift} | z x c v b n \u00b5 , . - {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};

/* dvorak - from http://www.ludd.luth.se/~torger/se_dvorak.html */
jQuery.keyboard.layouts['swedish-dvorak'] = {
	'name' : 'swedish-qwerty',
	'lang' : ['sv'],
	'normal' : [
		"\u00a7 1 2 3 4 5 6 7 8 9 0 + \u0301 {bksp}",
		"{tab} \u00f6 \u00e5 \u00e4 p y f g c r l q \u00a8",
		"a o e u i d h t n s - < {enter}",
		"{shift} ' , . j k x b m w v z {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'\u00bd ! " # \u00a4 % & / ( ) = ? ` {bksp}',
		"{tab} \u00d6 \u00c5 \u00c4 P Y F G C R L Q ^",
		"A O E U I D H T N S _ > {enter}",
		"{shift} * ; : J K X B M W V Z {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"\u00a7 1 @ \u00a3 $ 5 6 { [ ] } \\ \u00b4 {bksp}",
		"{tab} \u00f6 \u00e5 \u00e4 p y f g c r l q ~",
		"a o e u i d h t n s - | {enter}",
		"{shift} ' , . j k x b m w v z {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};
