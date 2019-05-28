// Keyboard Language
// please update this section to match this language and email me with corrections!
// cs = ISO 639-1 code for Czech
// ***********************
jQuery.keyboard.language.cs = {
	language: 'Czech (čeština)',
	display : {
		'a'      : '\u2714:Potvrdit (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Potvrdit:Potvrdit (Shift+Enter)',
		'alt'    : 'AltGr:AltGr',
		'b'      : '\u2190:Backspace',              // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Backspace',
		'c'      : '\u2716:Zavřít (Esc)',           // big X, close - same action as cancel
		'cancel' : 'Zavřít:Zavřít (Esc)',
		'clear'  : 'C:Vymazat',                     // clear num pad
		'combo'  : '\u00f6:Slučování znaků',
		'dec'    : ',:Desetinná čárka',             // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Enter',                  // down, then left arrow - enter symbol
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock',         // caps lock
		's'      : '\u21e7:Shift',                  // thick hollow up arrow
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:Změnit znaménko',        // +/- sign for num pad
		'space'  : '&nbsp;:Mezera',
		't'      : '\u21e5:Tab',                    // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'                 // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Použijte kolečko myši pro zobrazení dalších kláves',
	comboRegex: /([`\'~\^\"ao\u02c7\u00b4])([a-z])/mig,
	combos: {
		// caron
		'\u02c7': { e: '\u011b', E: '\u011a', s: '\u0161', S: '\u0160', c: '\u010d', C: '\u010c', r: '\u0159', R: '\u0158', z: '\u017e', Z: '\u017d', d: '\u010f', D: '\u010e', t: '\u0165', T: '\u0164', n: '\u0148', N: '\u0147'},
		// acute
		'\u00b4': { a: '\u00e1', A: '\u00c1', e: '\u00e9', E: '\u00c9', i: '\u00ed', I: '\u00cd', o: '\u00f3', O: '\u00d3', u: '\u00fa', U: '\u00da', y: '\u00fd', Y: '\u00dd'}
	},
	// language direction
	rtl: false
};
