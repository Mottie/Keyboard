/* Latvian keyboard layouts
 * contains layout: 'latvian-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/latvian.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'latvian-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */
$.keyboard.layouts['latvian-qwerty'] = {
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
		"\u00ac 1 \u00AB \u00BB \u20AC 5 \u2019 7 8 9 0 \u2013 = {bksp}",
		"{tab} q w \u0113 \u0157 t y \u016B \u012B \u014D p [ ] \u00B0",
		"\u0101 \u0161 d f \u0123 h j \u0137 \u013C ; \u00B4 {enter}",
		"{shift} \u017E x \u010D v b \u0146 m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		'~ 1 2 3 4 \u00A7 \u00AB 7 \u00B1 \u00D7 0 \u2014 = {bksp}',
		"{tab} Q W \u0112 \u0156 T Y \u016A \u012A \u014C P { } |",
		'\u0100 \u0160 D F \u0122 H J \u0136 \u013B : \u00A8 {enter}',
		"{shift} \u017D X \u010C V B \u0145 M < > ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ***********************
if (typeof(language) === 'undefined') { var language = {}; };
language.latvian = {
	display : {
		'a'      : '\u2714:Pie\u0146emt (Shift-Enter)', // check mark - same action as accept
		'accept' : 'Pie\u0146emt:Pie\u0146emt (Shift-Enter)',
		'alt'    : 'AltGr:Altern\u0113\u0161anas tausti\u0146\u0161',
		'b'      : '\u2190:Atpaka\u013Catk\u0101pe',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Atpaka\u013Catk\u0101pe',
		'c'      : '\u2716:Atcelt (Esc)', // big X, close - same action as cancel
		'cancel' : 'Atcelt:Atcelt (Esc)',
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
	wheelMessage : 'Izmanto peles riten\u012Bti, lai apskat\u012Btu citus tausti\u0146us',
};

// This will replace all default language options with these language options.
// it is separated out here so the layout demo will work properly.
$.extend(true, $.keyboard.defaultOptions, language.latvian);
