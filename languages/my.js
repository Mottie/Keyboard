/**
 * Burmese Keyboard Language
 * please update this section to match this language and email me with corrections!
 * my = ISO 639-1 code for Burmese
 * thanks to @laminko (https://github.com/laminko);
 * see https://github.com/Mottie/Keyboard/pull/507
 * license for this file: WTFPL
 */
jQuery.keyboard.language.my = {
	language: '\u1017\u1019\u102c (Burmese)', // e.g. 'Русский (Russian)'
	display : {
		'a'      : '\u2714:Accept (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Accept:Accept (Shift+Enter)',
		'alt'    : 'AltGr:Alternate Graphemes',
		'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Backspace',
		'c'      : '\u2716:Cancel (Esc)', // big X, close - same action as cancel
		'cancel' : 'Cancel:Cancel (Esc)',
		'clear'  : 'C:\u101b\u103e\u1004\u103a\u1038\u101c\u1004\u103a\u1038\u101b\u1014\u103a', // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : '.:\u1012\u101e\u1019',           // decimal point for num pad (optional), change '.' to ',' for European format
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
	wheelMessage : '\u1021\u1001\u103c\u102c\u1038\u1001\u101c\u102f\u1010\u103a\u1019\u103b\u102c\u1038\u1000\u102d\u102f \u1019\u103c\u1004\u103a\u101b\u1005\u1031\u101b\u1014\u103a \u1019\u1031\u102c\u1000\u103a\u1005\u103a\u101d\u103e\u102e\u1038\u101c\u103a\u1000\u102d\u102f \u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1015\u102b'

	// uncomment, then include changes to the comboRegex here
	/*
	, comboRegex : /([`\'~\^\"ao])([a-z])/mig,
	*/

	// uncomment, then include any changes to the combos option here
	/*
	, combos : {
		// grave
		'`' : { a:"\u00e0", A:"\u00c0", e:"\u00e8", E:"\u00c8", i:"\u00ec", I:"\u00cc", o:"\u00f2", O:"\u00d2",
				u:"\u00f9", U:"\u00d9", y:"\u1ef3", Y:"\u1ef2" },
		// acute & cedilla
		"'" : { a:"\u00e1", A:"\u00c1", e:"\u00e9", E:"\u00c9", i:"\u00ed", I:"\u00cd", o:"\u00f3", O:"\u00d3",
				u:"\u00fa", U:"\u00da", y:"\u00fd", Y:"\u00dd" },
		// umlaut/trema
		'"' : { a:"\u00e4", A:"\u00c4", e:"\u00eb", E:"\u00cb", i:"\u00ef", I:"\u00cf", o:"\u00f6", O:"\u00d6",
				u:"\u00fc", U:"\u00dc", y:"\u00ff", Y:"\u0178" },
		// circumflex
		'^' : { a:"\u00e2", A:"\u00c2", e:"\u00ea", E:"\u00ca", i:"\u00ee", I:"\u00ce", o:"\u00f4", O:"\u00d4",
				u:"\u00fb", U:"\u00db", y:"\u0177", Y:"\u0176" },
		// tilde
		'~' : { a:"\u00e3", A:"\u00c3", e:"\u1ebd", E:"\u1ebc", i:"\u0129", I:"\u0128", o:"\u00f5", O:"\u00d5",
				u:"\u0169", U:"\u0168", y:"\u1ef9", Y:"\u1ef8", n:"\u00f1", N:"\u00d1" }
	},
	// language direction
	rtl : false
	*/
};
