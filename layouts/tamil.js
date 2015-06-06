/* Tamil keyboard layouts
 * contains layout: 'tamil-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/tamil.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'tamil-tamil99-mod' });
 *
 * Copyright 2013, Muthiah Annamalai
 *
 * Author :  Muthiah Annamalai <ezhillang@gmail.com>
 *
 * This file derives from general keyboard jQuery plugin.
 * You may reuse this file under MIT License
 *
 * Acknowledgements : Thamiza project contributors Mugunth, Sethu have reference implementations of
 *                    of the keyboard
 */

/* based on Tamil99 keyboard layout - modified Tamil  99 keyboard */
jQuery.keyboard.layouts['tamil-tamil99-mod'] = {
	'name' : 'tamil-tamil99-mod',
	'lang' : ['ta'],
	'normal' : [
        /* ா	ி	ீ	ு	ூ	ெ	ே	ை	ொ	ோ	ௌ	ஃ  */
		"\u0BBE \u0BBF \u0BC0 \u0BC1 \u0BC2 \u0BC6 \u0BC7 \u0BC8 \u0BCA \u0BCB \u0BCC \u0B83 {bksp}",
        /*      ஆ     ஈ      ஊ     ஐ    ஏ      ள      ற     ன     ட      ண   ச      ஞ   \   */
		"{tab} \u0b86 \u0b88 \u0b8a \u0b90 \u0b8f \u0bb3 \u0bb1 \u0ba9 \u0b9f \u0ba3 \u0b9a \u0b9e ",
        /*  அ    இ      உ     ்       எ      க      ப    ம      த      ந      ய  */
		"\u0b85 \u0b87  \u0b89 \u0bcd  \u0b8e  \u0b95 \u0baa \u0bae \u0ba4 \u0ba8 \u0baf {enter}",
        /*         ஔ    ஒ      ஓ    வ     ங     ல      ர    , . ழ    */
		"{shift} \u0b94 \u0b93 \u0b92 \u0bb5 \u0b99 \u0bb2 \u0bb0 , . \u0bb4 {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
         /* numeric key row */
		"`      1      2       3      4     5     6   7  8  9  0 -  =  {bksp}",
        /* sanskrit row */
        /*     ஸ      ஷ        ஜ      ஹ           ஶ்ரீ                       க்ஷ                       */
		"{tab} \u0bb8  \u0bb7  \u0b9c   \u0bb9  \u0bb6\u0bcd\u0bb0\u0bc0  \u0b95\u0bcd\u0bb7 \u0020  [ ]  { } ",
        /* ௹     ௺    ௸     ஃ  \u0020 \u0020 \u0020 \" : ; \' {enter} */
		"\u0bf9 \u0bfa \u0bf8 \u0b83 \u0020 \u0020 \u0020 \" : ; \' {enter}",
        /* ௳ ௴ ௵ ௶ ௷ */
        "{shift} \u0bf3 \u0bf4 \u0bf5 \u0bf6 \u0bf7 \u0020 / \u0020 \u0020 / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"\u0060 1 2 3 4 5 6 7 8 9 0 - \u003D {bksp}",
		"{tab} q w e r t y u i o p \u005B \u005D \u005C",
		"a s d f g h j k l ; \u0027 {enter}",
		"{shift} z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		"\u007E | @ # $ % \u00ac & * ( ) _ + {bksp}",
		"{tab} Q W E R T Y U I O P ! \u00a6 \u00a2",
		"A S D F G H J K L : \"  {enter}",
		"{shift} Z X C V B N M { } ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};
