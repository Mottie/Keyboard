/* Spanish keyboard layouts
 * contains layouts: 'spanish-qwerty' and 'spanish-qwerty-sp'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/spanish.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'spanish-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 *
 * Spanish layouts by Paco Alcantara (https://github.com/pacoalcantara)  
 * Based on: http://ascii-table.com/keyboard.php/171 and http://ascii-table.com/keyboard.php/071-2
 */
$.keyboard.layouts['spanish-qwerty'] = {
	'default' : [
		"\u007c 1 2 3 4 5 6 7 8 9 0 \' \u00bf {bksp}",
		"{tab} q w e r t y u i o p \u0301 +",
		"a s d f g h j k l \u00f1 \u007b \u007d {enter}",
		"{shift} < z x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		"\u00b0 ! \" # $ % & / ( ) = ? \u00a1 {bksp}",
		"{tab} Q W E R T Y U I O P \u0308 *",
		"A S D F G H J K L \u00d1 \u005b \u005d {enter}",
		"{shift} > Z X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"\u00ac 1 2 3 4 5 6 7 8 9 0 \\ \u00bf {bksp}",
		"{tab} \@ w e r t y u i o p \u0301 \u0303",
		"a s d f g h j k l \u00f1 \u0302 \u0300 {enter}",
		"{shift} < z x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		"\u00b0 ! \" # $ % & / ( ) = ? \u00a1 {bksp}",
		"{tab} Q W E R T Y U I O P \u0308 *",
		"A S D F G H J K L \u00d1 \u005b \u005d {enter}",
		"{shift} > Z X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

$.keyboard.layouts['spanish-qwerty-sp'] = {
	'default' : [
		"\u00ba 1 2 3 4 5 6 7 8 9 0 \' \u00a1 {bksp}",
		"{tab} q w e r t y u i o p \u0300 +",
		"a s d f g h j k l \u00f1 \u0301 \u00e7 {enter}",
		"{shift} < z x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		"\u00aa ! \" \u00b7 $ % & / ( ) = ? \u00bf {bksp}",
		"{tab} Q W E R T Y U I O P \u005e *",
		"A S D F G H J K L \u00d1 \u0308 \u00c7 {enter}",
		"{shift} > Z X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"\\ \u007c @ # 4 5 \u00ac 7 8 9 0 \u0027 \u00a1 {bksp}",
		"{tab} q w e r t y u i o p [ ]",
		"a s d f g h j k l \u00f1 { } {enter}",
		"{shift} \u007c z x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		"\u00aa ! \" \u00b7 $ % & / ( ) = ? \u00bf {bksp}",
		"{tab} Q W E R T Y U I O P [ ]",
		"A S D F G H J K L \u00d1 { } {enter}",
		"{shift} > Z X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ***********************
if (typeof(language) === 'undefined') { var language = {}; };
language.spanish = {
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
	wheelMessage : 'Utilice la rueda del mouse para ver otras teclas', 
};

// This will replace all default language options with these language options.
// it is separated out here so the layout demo will work properly.
$.extend(true, $.keyboard.defaultOptions, language.spanish);
