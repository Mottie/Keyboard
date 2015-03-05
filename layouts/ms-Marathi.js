/* Marathi Keyboard Layout
 * generated from http://www.microsoft.com/resources/msdn/goglobal/keyboards/kbdinmar.html
 */
jQuery.keyboard.layouts['ms-Marathi'] = {
	"name" : "ms-Marathi",
	"lang" : ["mr"],
	"normal" : [
		"{empty} \u0967 \u0968 \u0969 \u096a \u096b \u096c \u096d \u096e \u096f \u0966 - \u0943 {bksp}",
		"{tab} \u094c \u0948 \u093e \u0940 \u0942 \u092c \u0939 \u0917 \u0926 \u091c \u0921 \u093c \u0949",
		"\u094b \u0947 \u094d \u093f \u0941 \u092a \u0930 \u0915 \u0924 \u091a \u091f {enter}",
		"{shift} \u0949 \u0902 \u092e \u0928 \u0935 \u0932 \u0938 , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"shift" : [
		"{empty} \u090d \u0945 \u094d\u0930 \u0930\u094d \u091c\u094d\u091e \u0924\u094d\u0930 \u0915\u094d\u0937 \u0936\u094d\u0930 ( ) \u0903 \u090b {bksp}",
		"{tab} \u0914 \u0910 \u0906 \u0908 \u090a \u092d \u0919 \u0918 \u0927 \u091d \u0922 \u091e \u0911",
		"\u0913 \u090f \u0905 \u0907 \u0909 \u092b \u0931 \u0916 \u0925 \u091b \u0920 {enter}",
		"{shift} \u0911 \u0901 \u0923 {empty} {empty} \u0933 \u0936 \u0937 \u0964 / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt" : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} [ ] \\",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ; ' {enter}",
		"{shift} {empty} {empty} {empty} {empty} {empty} {empty} {empty} , . {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt-shift" : [
		"~ ! @ # $ % ^ & * ( ) _ + {bksp}",
		"{tab} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { } |",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} : \" {enter}",
		"{shift} {empty} \u093d \u0950 {empty} {empty} {empty} {empty} < > {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// mr = ISO 639-1 code for Marathi
// ***********************
jQuery.keyboard.language.mr = {
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
