// Keyboard Language
// please update this section to match this language and email me with corrections!
// sq = ISO 639-1 code for Albanian
// ***********************
jQuery.keyboard.language.sq = {
	language : 'Shqip (Albanian)',
	display : {
		'a'      : '\u2714:Prano (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Prano:Prano (Shift+Enter)',
		'alt'    : 'Alt:Alternativ',
		'b'      : '\u2190:Hap\u00ebsir\u00ebn Mbrapa',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Hap\u00ebsir\u00ebn Mbrapa',
		'c'      : '\u2716:Anuloj (Arratisjes)', // big X, close - same action as cancel
		'cancel' : 'Anuloj:Anuloj (Arratisjes)',
		'clear'  : 'C:Qart\u00eb',             // clear num pad
		'combo'  : '\u00f6:Kombinimi',
		'dec'    : '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Shkruani',        // down, then left arrow - enter symbol
		'enter'  : 'Shkruani:Shkruani',
		'lock'   : '\u21ea Bllokoj:Caps Lock', // caps lock
		'next'   : 'Next \u21e8',
		'prev'   : '\u21e6 Prev',
		's'      : '\u21e7:Ndryshim',        // thick hollow up arrow
		'shift'  : 'Ndryshim:Ndryshim',
		'sign'   : '\u00b1:Ndryshimi Regjistrohu',  // +/- sign for num pad
		'space'  : '&nbsp;:Hap\u00ebsir\u00eb',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'P\u00ebrdorimi mousewheel p\u00ebr t\u00eb par\u00eb \u00e7el\u00ebsat e tjera',

	// New combos using specific accents
	// Not sure what to do with these accents:  ˇ ˘ ˙ ° ˛ ˝
	comboRegex : /([`\'~\^\"ao\/])([a-z])/gim,
	combos : {
		// new combos below ( forward slash + d, forward slash + l )
		'/' : { d:"\u0111", D:"\u0110", l:"\u0142", L:"\u0141" } // stroke đ Đ ł Ł
	}
};
