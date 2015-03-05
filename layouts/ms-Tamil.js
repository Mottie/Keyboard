/* Tamil Keyboard Layout
 * generated from http://www.microsoft.com/resources/msdn/goglobal/keyboards/kbdintam.html
 */
jQuery.keyboard.layouts['ms-Tamil'] = {
	"name" : "ms-Tamil",
	"lang" : ["ta"],
	"normal" : [
		"\u0bca 1 2 3 4 5 6 7 8 9 0 - {empty} {bksp}",
		"{tab} \u0bcc \u0bc8 \u0bbe \u0bc0 \u0bc2 \u0baa \u0bb9 \u0b95 \u0ba4 \u0b9c \u0b9f \u0b9e",
		"\u0bcb \u0bc7 \u0bcd \u0bbf \u0bc1 \u0baa \u0bb0 \u0b95 \u0ba4 \u0b9a \u0b9f {enter}",
		"{shift} \u0bc6 {empty} \u0bae \u0ba8 \u0bb5 \u0bb2 \u0bb8 , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"shift" : [
		"\u0b92 {empty} {empty} {empty} {empty} {empty} \u0ba4\u0bcd\u0bb0 \u0b95\u0bcd\u0bb7 \u0bb7\u0bcd\u0bb0 {empty} {empty} \u0b83 {empty} {bksp}",
		"{tab} \u0b94 \u0b90 \u0b86 \u0b88 \u0b8a \u0baa \u0b99 \u0b95 \u0ba4 \u0b9a \u0b9f \u0b9e",
		"\u0b93 \u0b8f \u0b85 \u0b87 \u0b89 \u0baa \u0bb1 \u0b95 \u0ba4 \u0b9a \u0b9f {enter}",
		"{shift} \u0b8e {empty} \u0ba3 \u0ba9 \u0bb4 \u0bb3 \u0bb7 \u0bb7 \u0bb8\u0bcd\u0bb0\u0bc0 / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt" : [
		"{empty} \u0be7 \u0be8 \u0be9 \u0bea \u0beb \u0bec \u0bed \u0bee \u0bef \u0bf0 \u0bf1 \u0bf2 {bksp}",
		"{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ta = ISO 639-1 code for Tamil
// ***********************
jQuery.keyboard.language.ta = {
	display : {
		'a'      : '\u2714:Accept (Shift-Enter)', // check mark - same action as accept
		'accept' : 'Accept:Accept (Shift-Enter)',
		'alt'    : 'AltGr:Alternate Graphemes',
		'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Backspace',
		'c'      : '\u2716:Cancel (Esc)', // big X, close - same action as cancel
		'cancel' : 'Cancel:Cancel (Esc)',
		'clear'  : 'C:Clear',             // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
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
	wheelMessage : 'Use mousewheel to see other keys',
};
