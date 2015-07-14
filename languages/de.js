// Keyboard Language
// please update this section to match this language and email me with corrections!
// de = ISO 639-1 code for German
// ***********************
jQuery.keyboard.language.de = {
	language: 'Deutsch (German)',
	display : {
		'a'      : '\u2714:\u00dcbernehmen (Umschalt+Enter)', // check mark - same action as accept
		'accept' : '\u00dcbernehmen:\u00dcbernehmen (Umschalt+Enter)',
		'alt'    : 'AltGr:Alt Graph',
		'b'      : '\u2190:R\u00fccktaste', // Left arrow (same as &larr;)
		'bksp'   : 'R\u00fcck:R\u00fccktaste',
		'c'      : '\u2716:Abbrechen (Esc)', // big X, close - same action as cancel
		'cancel' : 'Abbrechen:Abbrechen (Esc)',
		'clear'  : 'C:L\u00f6schen', // clear num pad
		'combo'  : '\u00f6:Tottasten umschalten',
		'dec'    : ',:Dezimal', // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Eingabe', // down, then left arrow - enter symbol
		'enter'  : 'Enter:Eingabe',
		'lock'   : '\u21E9:Feststelltaste', // caps lock
		's'      : '\u21e7:Umschalttaste', // thick hollow up arrow
		'shift'  : 'Umschalt:Umschalttaste',
		'sign'   : '\u00b1:Vorzeichen wechseln', // +/- sign for num pad
		'space'  : '&nbsp;:Leertaste',
		't'      : '\u21e5:Tabulatortaste', // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tabulatortaste' // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Mausrad benutzen, um weitere Tasten zu sehen',
};
