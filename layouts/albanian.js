/* Albanian keyboard layouts
 * contains layout: 'albanian-qwertz' & 'albanian-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/albanian.js" type="text/javascript"></script>
 *  Initialize the keyboard using: jQuery('input').keyboard({ layout: 'albanian-qwertz' });
 *
 * To do: add combos appropriate to the Albanian language
 *  missing caron, breve, ring, ogonek, double acute accent, diaeresis and cedilla accents.
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* qwertz-albanian
 combined from http://en.wikipedia.org/wiki/File:Albanian_keyboard_layout.jpg,
 http://ascii-table.com/keyboard.php/448 & http://www.google.com/webelements/ */
jQuery.keyboard.layouts['albanian-qwertz'] = {
	'name' : 'Albanian-qwertz',
	'lang' : ['sq'],
	'normal' : [
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
jQuery.keyboard.layouts['albanian-qwerty'] = {
	'name' : 'Albanian-qwerty',
	'lang' : ['sq'],
	'normal' : [
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

// Keyboard Language
// please update this section to match this language and email me with corrections!
// sq = ISO 639-1 code for Albanian
// ***********************
jQuery.keyboard.language.sq = {
	language : 'Albanian',
	display : {
		'a'      : '\u2714:Prano (Shift-Enter)', // check mark - same action as accept
		'accept' : 'Prano:Prano (Shift-Enter)',
		'alt'    : 'Alt:Alternativ',
		'b'      : '\u2190:Hap\u00ebsir\u00ebn Mbrapa',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Hap\u00ebsir\u00ebn Mbrapa',
		'c'      : '\u2716:Anuloj (Arratisjes)', // big X, close - same action as cancel
		'cancel' : 'Anuloj:Anuloj (Arratisjes)',
		'clear'  : 'C:Qart\u00eb',             // clear num pad
		'combo'  : '\u00f6:Kombinimi',
		'dec'    : '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Shkruani',        // down, then left arrow - enter symbol
		'enter'  : 'Shkruani:Shkruani',
		'lock'   : '\u21ea Bllokoj:Caps Lock', // caps lock
		'next'   : 'Next \u21e8',
		'prev'   : '\u21e6 Prev',
		's'      : '\u21e7:Ndryshim',        // thick hollow up arrow
		'shift'  : 'Ndryshim:Ndryshim',
		'sign'   : '\u00b1:Ndryshimi Regjistrohu',  // +/- sign for num pad
		'space'  : '&nbsp;:Hap\u00ebsir\u00eb',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'P\u00ebrdorimi mousewheel p\u00ebr t\u00eb par\u00eb \u00e7el\u00ebsat e tjera',

	// New combos using specific accents
	// Not sure what to do with these accents:  ˇ ˘ ˙ ° ˛ ˝
	comboRegex : /([`\'~\^\"ao\/])([a-z])/gim,
	combos : {
		// new combos below ( forward slash + d, forward slash + l )
		'/' : { d:"\u0111", D:"\u0110", l:"\u0142", L:"\u0141" } // stroke đ Đ ł Ł
	}
};
