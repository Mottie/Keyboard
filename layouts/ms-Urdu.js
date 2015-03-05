/* Urdu Keyboard Layout
 * generated from http://www.microsoft.com/resources/msdn/goglobal/keyboards/kbdurdu.html
 */
jQuery.keyboard.layouts['ms-Urdu'] = {
	"name" : "ms-Urdu",
	"lang" : ["ur"],
	"normal" : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} \u0637 \u0635 \u06be \u062f \u0679 \u067e \u062a \u0628 \u062c \u062d ] [ \\",
		"\u0645 \u0648 \u0631 \u0646 \u0644 \u06c1 \u0627 \u06a9 \u06cc \u061b ' {enter}",
		"{shift} \\ \u0642 \u0641 \u06d2 \u0633 \u0634 \u063a \u0639 \u060c \u06d4 / {shift}",
		"{accept} {space} {cancel}"
	],
	"shift" : [
		"~ ! @ # $ \u066a ^ \u06d6 \u066d ) ( _ + {bksp}",
		"{tab} \u0638 \u0636 \u0630 \u0688 \u062b \u0651 \u06c3 \u0640 \u0686 \u062e } { |",
		"\u0698 \u0632 \u0691 \u06ba \u06c2 \u0621 \u0622 \u06af \u064a : \" {enter}",
		"{shift} | \u200d \u200c \u06d3 \u200e \u0624 \u0626 \u200f > < / {shift}",
		"{accept} {space} {cancel}"
	]
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ur = ISO 639-1 code for Urdu
// ***********************
jQuery.keyboard.language.ur = {
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
