// Keyboard Language
// please update this section to match this language and email me with corrections!
// th = ISO 639-1 code for Thai
// ***********************
jQuery.keyboard.language.th = {
	language: '\u0e44\u0e17\u0e22 (Thai)',
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
};
