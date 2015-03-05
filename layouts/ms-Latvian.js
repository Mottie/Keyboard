/* Latvian Keyboard Layout
 * generated from http://www.microsoft.com/resources/msdn/goglobal/keyboards/kbdlv.html
 */
jQuery.keyboard.layouts['ms-Latvian'] = {
	"name" : "ms-Latvian",
	"lang" : ["lv"],
	"normal" : [
		"\u00ad 1 2 3 4 5 6 7 8 9 0 - f {bksp}",
		"{tab} \u016b g j r m v n z \u0113 \u010d \u017e h \u0137",
		"\u0161 u s i l d a t e c \u00b4 {enter}",
		"{shift} \u0123 \u0146 b \u012b k p o \u0101 , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"shift" : [
		"? ! \u00ab \u00bb $ % / & \u00d7 ( ) _ F {bksp}",
		"{tab} \u016a G J R M V N Z \u0112 \u010c \u017d H \u0136",
		"\u0160 U S I L D A T E C \u00b0 {enter}",
		"{shift} \u0122 \u0145 B \u012a K P O \u0100 ; : / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt" : [
		"{empty} \u00ab {empty} {empty} \u20ac \" \u2019 {empty} : {empty} {empty} \u2013 = {bksp}",
		"{tab} q \u0123 {empty} \u0157 w y {empty} {empty} {empty} {empty} [ ] {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u20ac {empty} \u00b4 {enter}",
		"{shift} \\ {empty} x {empty} \u0137 {empty} \u00f5 {empty} < > {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt-shift" : [
		"{empty} {empty} @ # $ ~ ^ \u00b1 {empty} {empty} {empty} \u2014 ; {bksp}",
		"{tab} Q \u0122 {empty} \u0156 W Y {empty} {empty} {empty} {empty} { } {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00a8 {enter}",
		"{shift} | {empty} X {empty} \u0136 {empty} \u00d5 {empty} {empty} {empty} {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* Latvian (QWERTY) Keyboard Layout
 * generated from http://www.microsoft.com/resources/msdn/goglobal/keyboards/kbdlv1.html
 */
jQuery.keyboard.layouts['ms-Latvian (QWERTY)'] = {
	"name" : "ms-Latvian (QWERTY)",
	"lang" : ["lv"],
	"normal" : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t y u i o p [ ] {empty}",
		"a s d f g h j k l ; ' {enter}",
		"{shift} \\ z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"shift" : [
		"~ ! @ # $ % ^ & * ( ) _ + {bksp}",
		"{tab} Q W E R T Y U I O P { } |",
		"A S D F G H J K L : \" {enter}",
		"{shift} | Z X C V B N M < > / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt" : [
		"\u00ad {empty} \u00ab \u00bb \u20ac {empty} \u2019 {empty} {empty} {empty} {empty} \u2013 {empty} {bksp}",
		"{tab} {empty} {empty} \u0113 \u0157 {empty} {empty} \u016b \u012b \u00f5 {empty} {empty} {empty} {empty}",
		"\u0101 \u0161 {empty} {empty} \u0123 {empty} {empty} \u0137 \u013c {empty} \u00b4 {enter}",
		"{shift} {empty} \u017e {empty} \u010d {empty} {empty} \u0146 {empty} {empty} {empty} {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt-shift" : [
		"{empty} {empty} {empty} {empty} \u00a7 \u00b0 {empty} \u00b1 \u00d7 {empty} {empty} \u2014 {empty} {bksp}",
		"{tab} {empty} {empty} \u0112 \u0156 {empty} {empty} \u016a \u012a \u00d5 {empty} {empty} {empty} {empty}",
		"\u0100 \u0160 {empty} {empty} \u0122 {empty} {empty} \u0136 \u013b {empty} \u00a8 {enter}",
		"{shift} {empty} \u017d {empty} \u010c {empty} {empty} \u0145 {empty} {empty} {empty} {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ***********************
jQuery.keyboard.language.lv = {
	display : {
		'a'      : '\u2714:Accept (Shift-Enter)', // check mark - same action as accept
		'accept' : 'Accept:Accept (Shift-Enter)',
		'alt'    : 'AltGr:Alternate Graphemes',
		'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Backspace',
		'c'      : '\u2716:Cancel (Esc)', // big X, close - same action as cancel
		'cancel' : 'Cancel:Cancel (Esc)',
		'clear'  : 'C:Clear',             // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Shift',        // thick hollow up arrow
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:Change Sign',  // +/- sign for num pad
		'space'  : '&nbsp;:Space',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Use mousewheel to see other keys',
	// New combos using specific accents
	combos : {
		// duplicated from regular combos, used specific accents here instead
		// acute & cedilla c C é É n N ó Ó s S z Z
		"'" : { c:"\u0107", C:"\u0106", e:"\u00e9", E:"\u00c9", n:"\u0144", N:"\u0143", o:"\u00f3", O:"\u00d3", s:"\u015b", S:"\u015a", z:"\u017a", Z:"\u0179" },
		// diaeresis: ä Ä ö Ö ü Ü
		'\u00a8' : { a:"\u00e4", A:"\u00c4", o:"\u00f6", O:"\u00d6", u:"\u00fc", U:"\u00dc" },
		// degree sign å Å ė Ė ġ ż Ż
		'\u00b0' : { a:"\u00e5", A:"\u00c5", e:"\u0117", E:"\u0116", g:"\u0121", z:"\u017c", Z:"\u017b" },
	},
	comboRegex : /([`\'~\^\"ao\u00a8\u00b0])([a-z])/mig
};
