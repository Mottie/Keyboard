/* Telugu Keyboard Layout
 * generated from http://www.microsoft.com/resources/msdn/goglobal/keyboards/kbdintel.html
 */
jQuery.keyboard.layouts['ms-Telugu'] = {
	"name" : "ms-Telugu",
	"lang" : ["te"],
	"normal" : [
		"\u0c4a 1 2 3 4 5 6 7 8 9 0 - \u0c43 {bksp}",
		"{tab} \u0c4c \u0c48 \u0c3e \u0c40 \u0c42 \u0c2c \u0c39 \u0c17 \u0c26 \u0c1c \u0c21 {empty}",
		"\u0c4b \u0c47 \u0c4d \u0c3f \u0c41 \u0c2a \u0c30 \u0c15 \u0c24 \u0c1a \u0c1f {enter}",
		"{shift} \u0c46 \u0c02 \u0c2e \u0c28 \u0c35 \u0c32 \u0c38 , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"shift" : [
		"\u0c12 {empty} {empty} \u0c4d\u0c30 {empty} \u0c1c\u0c4d\u0c1e \u0c24\u0c4d\u0c30 \u0c15\u0c4d\u0c37 \u0c36\u0c4d\u0c30 ( ) \u0c03 \u0c0b {bksp}",
		"{tab} \u0c14 \u0c10 \u0c06 \u0c08 \u0c0a \u0c2d \u0c19 \u0c18 \u0c27 \u0c1d \u0c22 \u0c1e",
		"\u0c13 \u0c0f \u0c05 \u0c07 \u0c09 \u0c2b \u0c31 \u0c16 \u0c25 \u0c1b \u0c20 {enter}",
		"{shift} \u0c0e \u0c01 \u0c23 \u0c28 {empty} \u0c33 \u0c36 \u0c37 {empty} / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt" : [
		"{empty} \u0c67 \u0c68 \u0c69 \u0c6a \u0c6b \u0c6c \u0c6d \u0c6e \u0c6f \u0c66 {empty} \u0c44 {bksp}",
		"{tab} {empty} \u0c56 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} \u0c55 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt-shift" : [
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0c60 {bksp}",
		"{tab} {empty} {empty} {empty} \u0c61 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} \u0c0c {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// te = ISO 639-1 code for Telugu
// ***********************
jQuery.keyboard.language.te = {
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
