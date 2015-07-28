// Keyboard Language
// please update this section to match this language and email me with corrections!
// lv = ISO 639-1 code for Latvian
// ***********************
jQuery.keyboard.language.lv = {
	language: 'Latvie\u0161u (Latvian)',
	display : {
		'a'      : '\u2714:Pie\u0146emt (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Pie\u0146emt:Pie\u0146emt (Shift+Enter)',
		'alt'    : 'AltGr:Altern\u0113\u0161anas tausti\u0146\u0161',
		'b'      : '\u2190:Atpaka\u013Catk\u0101pe',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Atpaka\u013Catk\u0101pe',
		'c'      : '\u2716:Atcelt (Esc)', // big X, close - same action as cancel
		'cancel' : 'Atcelt:Atcelt (Esc)',
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
	wheelMessage : 'Izmanto peles riten\u012Bti, lai apskat\u012Btu citus tausti\u0146us',
	// New combos using specific accents
	combos : {
		// duplicated from regular combos, used specific accents here instead
		// acute & cedilla c C é É n N ó Ó s S z Z
		"'" : { c:"\u0107", C:"\u0106", e:"\u00e9", E:"\u00c9", n:"\u0144", N:"\u0143", o:"\u00f3", O:"\u00d3", s:"\u015b", S:"\u015a", z:"\u017a", Z:"\u0179" },
		// diaeresis: ä Ä ö Ö ü Ü
		'\u00a8' : { a:"\u00e4", A:"\u00c4", o:"\u00f6", O:"\u00d6", u:"\u00fc", U:"\u00dc" },
		// degree sign å Å e E g z Z
		'\u00b0' : { a:"\u00e5", A:"\u00c5", e:"\u0117", E:"\u0116", g:"\u0121", z:"\u017c", Z:"\u017b" },
	},
	comboRegex : /([`\'~\^\"ao\u00a8\u00b0])([a-z])/mig
};
