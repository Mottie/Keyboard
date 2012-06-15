/* Hebrew keyboard layouts
 * contains layout: 'hebrew-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/hebrew.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'hebrew-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* based on http://ascii-table.com/keyboard.php/212 */
$.keyboard.layouts['hebrew-qwerty'] = {
	'default' : [
		'; 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
		"{tab} / ' \u05e7 \u05e8 \u05d0 \u05d8 \u05d5 \u05df \u05dd \u05e4 [ ] \\",
		"\u05e9 \u05d3 \u05d2 \u05db \u05e2 \u05d9 \u05d7 \u05dc \u05da \u05e3 , {enter}",
		"{shift} \u05d6 \u05e1 \u05d1 \u05d4 \u05e0 \u05de \u05e6 \u05ea \u05e5 . {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		"~ ! @ # $ % ^ & * ( ) _ + {bksp}",
		"{tab} Q W E R T Y U I O P { } |",
		'A S D F G H J K L : " {enter}',
		"{shift} Z X C V B N M < > ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
		"{tab} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; ' {enter}",
		"{shift} z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ***********************
if (typeof(language) === 'undefined') { var language = {}; };
language.hebrew = {
	display : {
		'a'      : '\u2714:אישור (Shift-Enter)', // check mark - same action as accept
		'accept' : 'אישור:אישור (Shift-Enter)',
		'alt'    : 'Alt:תווים נוספים',
		'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Backspace',
		'c'      : '\u2716:ביטול (Esc)', // big X, close - same action as cancel
		'cancel' : 'ביטול:ביטול (Esc)',
		'clear'  : 'C:ניקוי',             // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : '.:נקודה עשרונית',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Shift',        // thick hollow up arrow
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:שינוי סימן',  // +/- sign for num pad
		'space'  : '&nbsp;:רווח',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'ניתן להשתמש בגלגלת העכבר כדי לראות מקשים נוספים',
};

// This will replace all default language options with these language options.
// it is separated out here so the layout demo will work properly.
$.extend(true, $.keyboard.defaultOptions, language.hebrew);
