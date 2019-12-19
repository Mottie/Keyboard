// Keyboard Language
// please update this section to match this language and email me with corrections!
// ko = ISO 639-1 code for Korean
// ***********************
var combos = {};
var comboRegex = null;
(function () {
	var initialStart = 4352;
	var medialStart = 4449;
	var finalStart = 4519;
	var medialOffset = 20;
	// See: https://en.wikipedia.org/wiki/Korean_language_and_computers#Hangul_in_Unicode
	var finals = jQuery.map([1, 2, 4, 7, null, 8, 16, 17, null, 19, 20, 21, 22, null, 23, 24, 25, 26, 27], function (offset) {
		if (offset === null) {
			return;
		}

		return String.fromCharCode(finalStart + offset);
	});
	var initials = jQuery.map(finals, function (_, offset) {
		return String.fromCharCode(initialStart + offset);
	});
	var medials = [];
	for (var medialCharCode = medialStart; medialCharCode <= medialStart + medialOffset; medialCharCode++) {
		var medial = String.fromCharCode(medialCharCode);
		medials.push(medial);
		combos[medial] = {};
		jQuery.each(finals, function (initialIndex, final) {
			if (final) {
				var initial = initials[initialIndex];
				combos[medial][initial] = medial + final;
			}
		});
	}
	comboRegex = new RegExp('([' + medials.join('') + '])([' + initials.join('') + '])', 'mig');
})();

jQuery.keyboard.language.ko = {
	language: '\ud55c\uad6d\uc5b4 (Korean)',
	display: {
		'a': '\u2714:\uC218\uB77D (Shift+Enter)', // check mark - same action as accept
		'accept': '\uC218\uB77D:\uC218\uB77D (Shift+Enter)',
		'alt': 'AltGr:\uB300\uCCB4 \uADF8\uB798\uD504',
		'b': '\u2190:\uC5ED\uD589 \uD0A4\uC774',    // Left arrow (same as &larr;)
		'bksp': '\u21e6:\uC5ED\uD589 \uD0A4\uC774',
		'c': '\u2716:\uCDE8\uC18C (Esc)', // big X, close - same action as cancel
		'cancel': '\uCDE8\uC18C:\uCDE8\uC18C (Esc)',
		'clear': 'C:\uBA85\uD655\uD55C',             // clear num pad
		'combo': '\u00f6:Toggle Combo Keys',
		'dec': '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e': '\u21b5:\uB4E4\uC5B4\uAC00\uB2E4',        // down, then left arrow - enter symbol
		'enter': '\u21b5:\uB4E4\uC5B4\uAC00\uB2E4',
		'lock': '\u21ea Lock:Caps Lock', // caps lock
		's': '\u21e7:\uC2DC\uD504\uD2B8',        // thick hollow up arrow
		'shift': '\u21e7:\uC2DC\uD504\uD2B8',
		'sign': '\u00b1:\uD45C\uC9C0\uD310 \uBCC0\uACBD',  // +/- sign for num pad
		'space': '\uACF5\uAC04:',
		't': '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab': '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage: '\uB2E4\uB978 \uD0A4\uB97C \uBCF4\uB824\uBA74 \uB9C8\uC6B0\uC2A4 \uD720\uC744 \uC0AC\uC6A9\uD558\uC2ED\uC2DC\uC624',

	comboRegex: comboRegex,
	combos: combos,

	// language direction
	rtl: false
};
