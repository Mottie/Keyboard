/* Nepali Keyboard Layout
 * generated from http://www.microsoft.com/resources/msdn/goglobal/keyboards/kbdnepr.html
 */
jQuery.keyboard.layouts['ms-Nepali'] = {
	"name" : "ms-Nepali",
	"lang" : ["ne"],
	"normal" : [
		"\u091e \u091c\u094d\u091e \u0918 \u0919 \u091d \u091b \u091f \u0920 \u0921 \u0922 \u0923 ( . {bksp}",
		"{tab} \u0924\u094d\u0930 \u0927 \u092d \u091a \u0924 \u0925 \u0917 \u0937 \u092f \u0909 \u0943 \u0947 \u094d\u0930",
		"\u092c \u0915 \u092e \u093e \u0928 \u091c \u0935 \u092a \u093f \u0938 \u0941 {enter}",
		"{shift} \u0936 \u0939 \u0905 \u0916 \u0926 \u0932 \u092b , \u0964 / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"shift" : [
		"\u091e\u094d \u0967 \u0968 \u0969 \u096a \u096b \u096c \u096d \u096e \u096f \u0966 ) \u0902 {bksp}",
		"{tab} \u094b \u0927\u094d \u092d\u094d \u091a\u094d \u0924\u094d \u0925\u094d \u0917\u094d \u0915\u094d\u0937 \u0907 \u090f \u0930\u094d \u0948 \u094d",
		"\u092c\u094d \u0915\u094d \u092e\u094d \u0901 \u0928\u094d \u091c\u094d \u0935\u094d \u092a\u094d \u0940 \u0938\u094d \u0942 {enter}",
		"{shift} \u0936\u094d \u0939\u094d \u090b \u0916\u094d \u0926\u094d \u0932\u094d \u0903 ? \u0936\u094d\u0930 / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt" : [
		"{empty} 1 2 3 4 5 6 7 8 9 0 {empty} + {bksp}",
		"{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u090a {empty} \u0914 {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{shift} {empty} {empty} \u0906 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ne = ISO 639-1 code for Nepali
// ***********************
jQuery.keyboard.language.ne = {
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
