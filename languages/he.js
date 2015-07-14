// Keyboard Language
// please update this section to match this language and email me with corrections!
// he = ISO 639-1 code for Hebrew
// ***********************
jQuery.keyboard.language.he = {
	language: '\u05e2\u05d1\u05e8\u05d9\u05ea (Hebrew)',
	display : {
		'a'      : '\u2714:אישור (Shift+Enter)', // check mark - same action as accept
		'accept' : 'אישור:אישור (Shift+Enter)',
		'alt'    : 'Alt:תווים נוספים',
		'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Backspace',
		'c'      : '\u2716:ביטול (Esc)', // big X, close - same action as cancel
		'cancel' : 'ביטול:ביטול (Esc)',
		'clear'  : 'C:ניקוי',             // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : '.:נקודה עשרונית',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Shift',        // thick hollow up arrow
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:שינוי סימן',  // +/- sign for num pad
		'space'  : '&nbsp;:רווח',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'ניתן להשתמש בגלגלת העכבר כדי לראות מקשים נוספים',
	// language direction
	rtl : true
};
