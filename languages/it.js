// Keyboard Language
// please update this section to match this language and email me with corrections!
// "all" is used here for example purposes, by convention it should be the ISO 639-1 code for the specified language
// ***********************
jQuery.keyboard.language.it = {
	language: 'Italiano (Italian)', // e.g. 'Русский (Russian)'
	display : {
		'a'      : '\u2714:Accetta (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Accetta:Accetta (Shift+Enter)',
		'alt'    : 'AltGr:Grafemi Alternativi',
		'b'      : '\u2190:Cancella',    // Left arrow (same as &larr;)
		'bksp'   : 'Canc:Cancella',
		'c'      : '\u2716:Annulla (Esc)', // big X, close - same action as cancel
		'cancel' : 'Annulla:Annulla (Esc)',
		'clear'  : 'C:Pulisci',             // clear num pad
		'combo'  : '\u00f6:Tasti Combinati',
		'dec'    : ',:Decimale',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Invio',        // down, then left arrow - enter symbol
		'enter'  : 'Invio:Invio',
		'lock'   : '\u21ea Bloc:Bloc Maiusc', // caps lock
		's'      : '\u21e7:Maiusc',        // thick hollow up arrow
		'shift'  : 'Maiusc:Maiusc',
		'sign'   : '\u00b1:Cambia Segno',  // +/- sign for num pad
		'space'  : '&nbsp;:Spazio',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Usa la rotella del mouse per vedere altri tasti'

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
