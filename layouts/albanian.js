/* Albanian keyboard layouts
 * contains layout: 'albanian-qwertz' & 'albanian-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/albanian.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'albanian-qwertz' });
 *
 * To do: add combos appropriate to the Albanian language
 *  missing caron, breve, ring, ogonek, double acute accent, diaeresis and cedilla accents.
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* qwertz-albanian
 combined from http://en.wikipedia.org/wiki/File:Albanian_keyboard_layout.jpg,
 http://ascii-table.com/keyboard.php/448 & http://www.google.com/webelements/ */

$.keyboard.layouts['albanian-qwertz'] = {
	'default' : [
		"\\ 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t z u i o p \u00e7 '",
		"a s d f g h j k l \u00eb [ ] {enter}",
		"{shift} < y x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'| ! " # $ % ^ & * ( ) _ + {bksp}',
		"{tab} Q W E R T Z U I O P \u00c7 @",
		"A S D F G H J K L \u00cb { } {enter}",
		"{shift} > Y X C V B N M ; : ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"\\ ~ \u02c7 ^ \u02d8 \u00b0 \u02db ` \u02d9 \u00b4 \u02dd \u00a8 \u00b8 {bksp}",
		"{tab} q w \u20ac r t z u i o p \u00f7 \u00d7",
		"\u00e4 \u0111:Shortcut_(\/d) \u0110:Shortcut_(\/D) f g h j \u0142:Shortcut_(\/l) \u0141:Shortcut_(\/L) $ \u00df \u00a4 {enter}",
		"{shift} < y x c @ { } \u00a7 < > / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* based on http://ascii-table.com/keyboard.php/452 */
$.keyboard.layouts['albanian-qwerty'] = {
	'default' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t y u i o p \u00eb '",
		"a s d f g h j k l ; \u00e7 # {enter}",
		"{shift} \\ z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"],
	'shift' : [
		'\u00ac ! " \u00a7 $ % ^ & * ( ) _ + {bksp}',
		"{tab} Q W E R T Y U I O P \u00cb @",
		"A S D F G H J K L : \u00c7 ~ {enter}",
		"{shift} \u00a6 Z X C V B N M < > ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"| 1 2 3 4 5 6 { } [ ] - = {bksp}",
		"{tab} q w \u20ac r t y u i o p \u00f7 \u00d7",
		"a s d f g h j k l ; \u00e7 # {enter}",
		"{shift} \\ z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		'| ! " \u00a7 $ % ^ & * ( ) _ + {bksp}',
		"{tab} Q W \u20AC R T Y U I O P \u00cb @",
		"A S D F G H J K L : \u00c7 ~ {enter}",
		"{shift} \u00a6 Z X C V B N M < > ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

// New combos using specific accents
// Not sure what to do with these accents:  ˇ ˘ ˙ ° ˛ ˝
$.extend(true, $.keyboard.defaultOptions.combos, {
	// duplicated from regular combos, used specific accents here instead ("); \u00a8 = ¨
	'\u00a8' : { a:"\u00e4", A:"\u00c4", e:"\u00eb", E:"\u00cb", i:"\u00ef", I:"\u00cf", o:"\u00f6", O:"\u00d6", u:"\u00fc", U:"\u00dc", y:"\u00ff", Y:"\u0178" }, // umlaut/trema
	'\u00b8' : { c:"\u00e7", C:"\u00c7" }, // cedilla ç Ç

	// new combos below
	'/'      : { d:"\u0111", D:"\u0110", l:"\u0142", L:"\u0141" } // stroke đ Đ ł Ł
});

// Update regex for the combos above
$.keyboard.comboRegex = /([`\'~\^\"ao\/\u00a8\u00b8])([a-z])/gim;
