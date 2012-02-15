/* Scandinavian keyboard layouts
 * contains layout: 'bengali-qwerty-1' & 'bengali-qwerty-2'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/bengali.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'bengali-qwerty-1' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* based on http://ascii-table.com/keyboard.php/480 & http://www.gate2home.com/?language=bn&sec=2 */
$.keyboard.layouts['bengali-qwerty-1'] = {
	'default' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; ' {enter}",
		"{shift} z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		"~ ! @ # $ % ^ & * ( ) _ + {bksp}",
		"{tab} Q W E R T Y U I O P { } |",
		'A S D F G H J K L : " {enter}',
		"{shift} Z X C V B N M < > ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'` \u09e7 \u09e8 \u09e9 \u09ea \u09eb \u09ec \u09ed \u09ee \u09ef \u09e6 - \u09c3 {bksp}',
		'{tab} \u09cc \u09c8 \u09be \u09c0 \u09c2 \u09ac \u09b9 \u0997 \u09a6 \u099c \u09a1 \u09bc \\',
		'\u09cb \u09c7 \u09cd \u09bf \u09c1 \u09aa \u09b0 \u0995 \u09a4 \u099a \u099f {enter}',
		'{shift} \u09ce \u0982 \u09ae \u09a8 \u09ac \u09b2 \u09b8 , . \u09df {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt-shift' : [
		'~ \u09e7 \u09e8 \u09b0 \u09cd \u099c \u09a4 \u0995 \u09b6 ( ) \u0983 \u09c3 {bksp}',
		'{tab} \u0994 \u0990 \u0986 \u0988 \u098a \u09ad \u0999 \u0998 \u09a7 \u099d \u09a2 \u099e |',
		'\u0993 \u098f \u0985 \u0987 \u0989 \u09ab \u09b0 \u0996 \u09a5 \u099b \u09a0 {enter}',
		'{shift} ? \u0981 \u09a3 \u09a8 \u09ac \u09b2 \u09b6 \u09b7 \u0964 \u09af {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};

/* based on http://www.google.com/webelements/#!/virtualkeyboard */
$.keyboard.layouts['bengali-qwerty-2'] = {
	'default' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; ' {enter}",
		"{shift} z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		"~ ! @ # $ % ^ & * ( ) _ + {bksp}",
		"{tab} Q W E R T Y U I O P { } |",
		'A S D F G H J K L : " {enter}',
		"{shift} Z X C V B N M < > ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'\u0982 \u0981 \u09bc \u0983 \u09fa \u09f8 \u09f9 \u09f2 \u09f3 \u09e6 \u09f4 \u09e7 \u09f5 {bksp}',
		'{tab} \u09e8 \u09f6 \u09e9 \u09f7 \u09ea \u09eb \u09ec \u09ed \u09ee \u09ef \u0985 \u0986 \u0987',
		'\u0988 \u0989 \u098a \u098b \u09e0 \u098c \u09e1 \u098f \u0990 \u0993 \u0994 {enter}',
		'{shift} \u0995 \u0996 \u0997 \u0998 \u0999 \u099a \u099b \u099c \u099d \u099e {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt-shift' : [
		'\u099f \u09a0 \u09a1 \u09dc \u09a2 \u09dd \u09a3 \u09a4 \u09ce \u09a5 \u09a6 \u09a7 \u09a8 {bksp}',
		'{tab} \u09aa \u09ab \u09ac \u09ad \u09ae \u09af \u09df \u09b0 \u09f0 \u09b2 \u09f1 \u09b6 \u09b7',
		'\u09b8 \u09b9 \u09bd \u09be \u09bf \u09c0 \u09c1 \u09c2 \u09c3 \u09c4 \u09e2 {enter}',
		'{shift} \u09e3 \u09c7 \u09c8 \u09cb \u09cc \u09cd \u09d7 {sp:3} {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ***********************
if (typeof(language) === 'undefined') { var language = {}; };
language.bengali = {
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

// This will replace all default language options with these language options.
// it is separated out here so the layout demo will work properly.
$.extend(true, $.keyboard.defaultOptions, language.bengali);
