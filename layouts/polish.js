/* Polish keyboard layouts
 * contains layout: 'polish-qwerty'
 * Author: Piotr Roznicki
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/polish.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'polish-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

jQuery.keyboard.layouts['polish-qwerty'] = {
	'name' : 'polish-qwerty',
	'lang' : ['pl'],
	'normal' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t y u i o p [ ] \u00B0",
		"a s d f g h j k l ; ' {enter}",
		"{shift} z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
		"{tab} Q W E R T Y U I O P { } |",
		'A S D F G H J K L : " {enter}',
		"{shift} Z X C V B N M < > ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w \u0119 r t y \u20ac i \u00f3 p [ ] \u00B0",
		'\u0105 \u015b d f g h j k \u0142 : " {enter}',
		"{shift} \u017c \u017a \u0107 v b \u0144 m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};
