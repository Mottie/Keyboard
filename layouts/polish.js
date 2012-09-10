/* Polish keyboard layouts
 * contains layout: 'polish-qwerty'
 * Author: Piotr Roznicki
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/polish.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'polish-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

$.keyboard.layouts['polish-qwerty'] = {
	'default' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t y u i o p [ ] \u00B0",
		"a s d f g h j k l ; ' {enter}",
		"{shift} z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
		"{tab} Q W E R T Y U I O P { } |",
		'A S D F G H J K L : " {enter}',
		"{shift} Z X C V B N M < > ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w \u0119 r t y \u20ac i \u00f3 p [ ] \u00B0",
		'\u0105 \u015b d f g h j k \u0142 : " {enter}',
		"{shift} \u017c \u017a \u0107 v b \u0144 m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ***********************
if (typeof(language) === 'undefined') { var language = {}; };
language.polish = {
	display : {
		'a'      : '\u2714:Akceptuj (Shift-Enter)', // check mark - same action as accept
		'accept' : 'Accept:Akceptuj (Shift-Enter)',
		'alt'    : 'AltGr:Polskie znaki',
		'b'      : '\u2190:Cofnij',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Cofnij',
		'c'      : '\u2716:Anuluj (Esc)', // big X, close - same action as cancel
		'cancel' : 'Cancel:Anuluj (Esc)',
		'clear'  : 'C:Czyść',             // clear num pad
		'combo'  : '\u00f6:Klawisze kombo',
		'dec'    : '.:Dziesiętny',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Shift',        // thick hollow up arrow
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:Zmień znak',  // +/- sign for num pad
		'space'  : '&nbsp;:Spacja',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Użyj rolki aby zobaczyć pozozstałe klawisze',
};

// This will replace all default language options with these language options.
// it is separated out here so the layout demo will work properly.
$.extend(true, $.keyboard.defaultOptions, language.polish);
