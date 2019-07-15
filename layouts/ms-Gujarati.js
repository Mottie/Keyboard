/* Gujarati Keyboard Layout
 * generated from http://www.microsoft.com/resources/msdn/goglobal/keyboards/kbdinguj.html
 */
jQuery.keyboard.layouts['ms-Gujarati'] = {
	"name" : "ms-Gujarati",
	"lang" : ["gu"],
	"normal" : [
		"{empty} 1 2 3 4 5 6 7 8 9 0 - \u0ac3 {bksp}",
		"{tab} \u0acc \u0ac8 \u0abe \u0ac0 \u0ac2 \u0aac \u0ab9 \u0a97 \u0aa6 \u0a9c \u0aa1 \u0abc \u0ac9",
		"\u0acb \u0ac7 \u0acd \u0abf \u0ac1 \u0aaa \u0ab0 \u0a95 \u0aa4 \u0a9a \u0a9f {enter}",
		"{shift} \u0a82 \u0aae \u0aa8 \u0ab5 \u0ab2 \u0ab8 , . \u0aaf {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"shift" : [
		"{empty} \u0a8d \u0ac5 \u0acd\u0ab0 \u0ab0\u0acd \u0a9c\u0acd\u0a9e \u0aa4\u0acd\u0ab0 \u0a95\u0acd\u0ab7 \u0ab6\u0acd\u0ab0 ( ) \u0a83 \u0a8b {bksp}",
		"{tab} \u0a94 \u0a90 \u0a86 \u0a88 \u0a8a \u0aad \u0a99 \u0a98 \u0aa7 \u0a9d \u0aa2 \u0a9e \u0a91",
		"\u0a93 \u0a8f \u0a85 \u0a87 \u0a89 \u0aab {empty} \u0a96 \u0aa5 \u0a9b \u0aa0 {enter}",
		"{shift} \u0a81 \u0aa3 {empty} {empty} \u0ab3 \u0ab6 \u0ab7 \u0964 / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt" : [
		"{empty} \u0ae7 \u0ae8 \u0ae9 \u0aea \u0aeb \u0aec \u0aed \u0aee \u0aef \u0ae6 {empty} \u0ac4 {bksp}",
		"{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0965 {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt-shift" : [
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0ae0 {bksp}",
		"{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{shift} \u0ad0 {empty} {empty} {empty} {empty} {empty} {empty} \u0abd {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// gu = ISO 639-1 code for Gujarati
// ***********************
jQuery.keyboard.language.gu = {
	display : {
		'a'      : '\u2714:Accept (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Accept:Accept (Shift+Enter)',
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
