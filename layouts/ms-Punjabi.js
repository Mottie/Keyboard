/* Punjabi Keyboard Layout
 * generated from http://www.microsoft.com/resources/msdn/goglobal/keyboards/kbdinpun.html
 */
jQuery.keyboard.layouts['ms-Punjabi'] = {
	"name" : "ms-Punjabi",
	"lang" : ["pa"],
	"normal" : [
		"{empty} 1 2 3 4 5 6 7 8 9 0 - {empty} {bksp}",
		"{tab} \u0a4c \u0a48 \u0a3e \u0a40 \u0a42 \u0a2c \u0a39 \u0a17 \u0a26 \u0a1c \u0a21 \u0a3c",
		"\u0a4b \u0a47 \u0a4d \u0a3f \u0a41 \u0a2a \u0a30 \u0a15 \u0a24 \u0a1a \u0a1f {enter}",
		"{shift} \u0a70 \u0a2e \u0a28 \u0a35 \u0a32 \u0a38 , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"shift" : [
		"\u0a4d\u0a39 \u0a4d\u0a35 \u0a4d\u0a2f \u0a4d\u0a30 \u0a71 {empty} {empty} {empty} {empty} ( ) {empty} {empty} {bksp}",
		"{tab} \u0a14 \u0a10 \u0a06 \u0a08 \u0a0a \u0a2d \u0a19 \u0a18 \u0a27 \u0a1d \u0a22 \u0a1e",
		"\u0a13 \u0a0f \u0a05 \u0a07 \u0a09 \u0a2b \u0a5c \u0a16 \u0a25 \u0a1b \u0a20 {enter}",
		"{shift} \u0a02 \u0a23 {empty} \u0a72 \u0a33 \u0a36 {empty} \u0964 / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt" : [
		"{empty} \u0a67 \u0a68 \u0a69 \u0a6a \u0a6b \u0a6c \u0a6d \u0a6e \u0a6f \u0a66 {empty} {empty} {bksp}",
		"{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0a5a {empty} \u0a5b \u0a5c {empty}",
		"{empty} {empty} {empty} {empty} {empty} \u0a5e {empty} \u0a59 {empty} {empty} {empty} {enter}",
		"{shift} {empty} {empty} {empty} \u0a73 {empty} {empty} {empty} \u0965 {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt-shift" : [
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {bksp}",
		"{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{shift} \u0a74 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// pa = ISO 639-1 code for Punjabi
// ***********************
jQuery.keyboard.language.pa = {
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
