/* Latvian keyboard layouts
 * contains layout: 'latvian-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/latvian.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'latvian-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */
jQuery.keyboard.layouts['latvian-qwerty'] = {
	'name' : 'latvian-qwerty',
	'lang' : ['lv'],
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
		"\u00ac 1 \u00AB \u00BB \u20AC 5 \u2019 7 8 9 0 \u2013 = {bksp}",
		"{tab} q w \u0113 \u0157 t y \u016B \u012B \u014D p [ ] \u00B0",
		"\u0101 \u0161 d f \u0123 h j \u0137 \u013C ; \u00B4 {enter}",
		"{shift} \u017E x \u010D v b \u0146 m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		'~ 1 2 3 4 \u00A7 \u00AB 7 \u00B1 \u00D7 0 \u2014 = {bksp}',
		"{tab} Q W \u0112 \u0156 T Y \u016A \u012A \u014C P { } |",
		'\u0100 \u0160 D F \u0122 H J \u0136 \u013B : \u00A8 {enter}',
		"{shift} \u017D X \u010C V B \u0145 M < > ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};
