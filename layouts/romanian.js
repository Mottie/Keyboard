/* Romanian keyboard layouts
 * contains layout: Romanian National Standard SR 13392:2004
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/romanian.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'romanian' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* based on http://en.wikipedia.org/wiki/Romanian_keyboard_layout for the actual (standard) layout. 
More details http://www.microsoft.com/resources/msdn/goglobal/keyboards/kbdrost.html  and http://ascii-table.com/keyboard.php/446 (for the actual codes)*/

/* Submitted July 2014 - Alex Florea <alecz.fia@gmail.com>*/

$.keyboard.layouts['romanian'] = {
	'default' : [
		"\u201e 1 2 3 4 5 6 7 8 9 0 \u002d \u003d {bksp}",
		"{tab} q w e r t y u i o p \u0103 \u00ee \u00e2",
		"a s d f g h j k l \u0219 \u021b {enter}",
		"{shift} \u005c z x c v b n m \u002c \u002e \u002f {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		"\u201d \u0021 \u0040 \u0023 \u0024 \u0025 \u005e \u0026 \u002a \u0028 \u0029 \u005f \u002b {bksp}",
		"{tab} Q W E R T Y U I O P \u0102 \u00ce \u00c2",
		"A S D F G H J K L \u0218 \u021a {enter}",
		"{shift} \u007c Z X C V B N M \u003b \u003a ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"\u0060 \u0303 \u030c \u0302 \u0306 \u030a \u0328 \u0300 \u0307 \u0301 \u030b \u0308 \u0327 {bksp}",
		"{tab} a z \u20ac r t y u i o p \u007b \u007d \u005c",
		"a \u00df \u0111 f g h j k \u0142 \u003b \u0027 {enter}",
		"{shift} \u005c z x \u00a9 v b n m \u003c \u003e \u002f {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		"\u007e 1 2 3 4 5 6 7 8 9 0 \u2013 \u00b1 {bksp}",
		"{tab} q w e r t y u i o p \u007b \u007d \u007c",
		"a s \u0110 f g h j k \u0141 \u003a \u0022 {enter}",
		"{shift} \u005c z x c v b n m \u00ab \u00bb \u002f {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
};


// Keyboard Language
// please update this section to match this language and email me with corrections!
// ***********************
if (typeof(language) === 'undefined') { var language = {}; };
language.romanian = {
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
		'dec'    : ',:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Shift',        // thick hollow up arrow
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:Schimba semnul',  // +/- sign for num pad
		'space'  : '&nbsp;:Spatiu',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Foloseste rotita mouse-ului pentru a vedea si celelalte caractere',
};

// This will replace all default language options with these language options.
// it is separated out here so the layout demo will work properly.
$.extend(true, $.keyboard.defaultOptions, language.romanian);
