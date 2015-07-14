// Keyboard Language
// please update this section to match this language and email me with corrections!
// vi = ISO 639-1 code for Vietnamese
// ***********************
jQuery.keyboard.language.vi = {
	language: 'Ti\u1ebfng Vi\u1ec7t (Vietnamese)',
	display : {
		'a'      : '\u2714:Validate (Shift+Enter)', // check mark - same action as accept
		'accept' : 'accept (Shift+Enter)',
		'alt'    : 'Alt:More Characters',
		'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Backspace',
		'c'      : '\u2716:Escape (Esc)', // big X, close - same action as cancel
		'cancel' : 'Cancel (Esc)',
		'clear'  : 'C:Clear',             // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : '.:Decimal point',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Shift',        // thick hollow up arrow
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:Sign for num pad',  // +/- sign for num pad
		'space'  : 'Space',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'You can use the mouse wheel to see additional keys',

	comboRegex : /([ueoaidy\u01B0\u01A1\u0103\u00E2\u0055\u01AF\u01A0\u0102\u00C2\u00E2\u00F4\u00EA\u00C2\u00D4\u00CA])([a-z,0-9])/gim,
	combos : {

		'u' : { s:"\u00FA", f:"\u00F9", r:"\u1EE7", x:"\u0169", j:"\u1EE5", w:"\u01B0" },
		'e' : { s:"\u00E9", f:"\u00E8", r:"\u1EBB", x:"\u1EBD", j:"\u1EB9", e:"\u00EA"  },
		'o' : { s:"\u00F3", f:"\u00F2", r:"\u1ECF", x:"\u00F5", j:"\u1ECD", w:"\u01A1", o:"\u00F4" },
		'a' : { s:"\u00E1", f:"\u00E0", r:"\u1EA3", x:"\u00E3", j:"\u1EA1", w:"\u0103", a:"\u00E2" },
		'i' : { s:"\u00ED", f:"\u00EC", r:"\u1EC9", x:"\u0129", j:"\u1ECB"  },
		'y' : { s:"\u00FD", f:"\u1EF3", r:"\u1EF7", x:"\u1EF9", j:"\u1EF5"  },
		"\u01B0"  : { s:"\u1EE9", f:"\u1EEB", r:"\u1EED", x:"\u1EEF", j:"\u1EF1"  }, //u+
		"\u01A1"  : { s:"\u1EDB", f:"\u1EDD", r:"\u1EDF", x:"\u1EE1", j:"\u1EE3"  }, //o+
		"\u0103"  : { s:"\u1EAF", f:"\u1EB1", r:"\u1EB3", x:"\u1EB5", j:"\u1EB7"  }, //a(
		"\u00E2"  : { s:"\u1EA5", f:"\u1EA7", r:"\u1EA9", x:"\u1EAB", j:"\u1EAD"  }, //a^

		'd' : { d:"\u0111" }, 'D' : { D:"\u0110" },

		"\u0055"  : { S:"\u00DA", F:"\u00D9", R:"\u1EE6", X:"\u0168", J:"\u1EE4", W:"\u01AF" }, //U+
		'E' : { S:"\u00C9", F:"\u00C8", R:"\u1EBA", X:"\u1EBC", J:"\u1EB8", E:"\u00CA" },
		'O' : { S:"\u00D3", F:"\u00D2", R:"\u1ECE", X:"\u00D5", J:"\u1ECC", W:"\u01A0", O:"\u00D4"},
		'A' : { S:"\u00C1", F:"\u00C0", R:"\u1EA2", X:"\u00C3", J:"\u1EA0", W:"\u0102", A:"\u00C2" },
		'I' : { S:"\u00CD", F:"\u00CC", R:"\u1EC8", X:"\u0128", J:"\u1ECA" },
		'Y' : { S:"\u00DD", F:"\u1EF2", R:"\u1EF6", X:"\u1EF8", J:"\u1EF4" },

		"\u01AF"  : { S:"\u1EE8", F:"\u1EEA", R:"\u1EEC", X:"\u1EEE", J:"\u1EF0" }, //U+
		"\u01A0"  : { S:"\u1EDA", F:"\u1EDC", R:"\u1EDE", X:"\u1EE0", J:"\u1EE2" }, // O+
		"\u0102"  : { S:"\u1EAE", F:"\u1EB0", R:"\u1EB2", X:"\u1EB4", J:"\u1EB6" }, //A(
		"\u00C2"  : { S:"\u1EA4", F:"\u1EA6", R:"\u1EA8", X:"\u1EAA", J:"\u1EAC" }, //A^

		"\u00F4" : { s:"\u1ED1", f:"\u1ED3", r:"\u1ED5", x:"\u1ED7", j:"\u1ED9" }, //o^
		"\u00EA" : { s:"\u1EBF", f:"\u1EC1", r:"\u1EC3", x:"\u1EC5", j:"\u1EC7" }, //e^

		"\u00D4" : { S:"\u1ED0", F:"\u1ED2", R:"\u1ED4", X:"\u1ED6", J:"\u1ED8" }, //O^
		"\u00CA" : { S:"\u1EBE", F:"\u1EC0", R:"\u1EC2", X:"\u1EC4", J:"\u1EC6" }  //E^

	}
};
