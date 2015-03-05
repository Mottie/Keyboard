/* Hebrew Keyboard Layout
 * generated from http://www.microsoft.com/resources/msdn/goglobal/keyboards/kbdheb.html
 */
jQuery.keyboard.layouts['ms-Hebrew'] = {
	"name" : "ms-Hebrew",
	"lang" : ["he"],
	"normal" : [
		"; 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} / ' \u05e7 \u05e8 \u05d0 \u05d8 \u05d5 \u05df \u05dd \u05e4 ] [ \\",
		"\u05e9 \u05d3 \u05d2 \u05db \u05e2 \u05d9 \u05d7 \u05dc \u05da \u05e3 , {enter}",
		"{shift} \\ \u05d6 \u05e1 \u05d1 \u05d4 \u05e0 \u05de \u05e6 \u05ea \u05e5 / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"shift" : [
		"~ ! @ # $ % ^ & * ) ( _ + {bksp}",
		"{tab} Q W E R T Y U I O P } { |",
		"A S D F G H J K L : \" {enter}",
		"{shift} | Z X C V B N M > < / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt" : [
		"{empty} {empty} {empty} {empty} \u20aa {empty} {empty} {empty} {empty} {empty} {empty} \u05bf {empty} {bksp}",
		"{tab} {empty} {empty} \u20ac {empty} {empty} {empty} \u05f0 {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} \u05f2 \u05f1 {empty} {empty} {empty} {empty} {enter}",
		"{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// he = ISO 639-1 code for Hebrew
// ***********************
jQuery.keyboard.language.he = {
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
	// language direction
	rtl : true
};
