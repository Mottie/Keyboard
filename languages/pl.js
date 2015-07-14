// Keyboard Language
// please update this section to match this language and email me with corrections!
// pl = ISO 639-1 code for Polish
// ***********************
jQuery.keyboard.language.pl = {
	language: 'Polski (Polish)',
	display : {
		'a'      : '\u2714:Akceptuj (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Accept:Akceptuj (Shift+Enter)',
		'alt'    : 'AltGr:Polskie znaki',
		'b'      : '\u2190:Cofnij',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Cofnij',
		'c'      : '\u2716:Anuluj (Esc)', // big X, close - same action as cancel
		'cancel' : 'Cancel:Anuluj (Esc)',
		'clear'  : 'C:Czyść',             // clear num pad
		'combo'  : '\u00f6:Klawisze kombo',
		'dec'    : '.:Dziesiętny',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Shift',        // thick hollow up arrow
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:Zmień znak',  // +/- sign for num pad
		'space'  : '&nbsp;:Spacja',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Użyj rolki aby zobaczyć pozozstałe klawisze',
};
