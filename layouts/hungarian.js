/* hungarian keyboard layouts
 * file codepage: this file use utf8 without bom, non ansi
 * contains layout: 'hungarian-qwertz-1' & 'hungarian-qwertz-2'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/hungarian.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'hungarian-qwerty-2' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* qwertz by Tóth Gergely (https://github.com/tgely) -  */
$.keyboard.layouts['hungarian-qwertz-1'] = {
	'default' : [
		"0 1 2 3 4 5 6 7 8 9 ö ü ó ű {bksp}",
		"{tab} q w e r t z u i o p ő ú",
		"a s d f g h j k l é á {enter}",
		"{shift} í y x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'§ \u0027 " + ! % / = ( ) Ö Ü Ó Ű {bksp}',
		"{tab} Q W E R T Z U I O P Ő Ú",
		"A S D F G H J K L É Á {enter}",
		"{shift} Í Y X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
    '{sp:1} ~ ˇ ^ ˘ ° ˛ ` ˙ ´ ˝ ¨ ¸ ¤ {bksp}',  // most of non used
    '{tab} \\ | Ä {sp:1} {sp:1} {sp:1} € Í {sp:1} {sp:1} ÷ ×',
    'ä đ Đ [ ] {sp:1} í ł Ł $ ß {enter}',
    '{shift} < > # & @ { } < ; > * {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};

$.keyboard.layouts['hungarian-qwertz-2'] = {
	'default' : [
		"0 1 2 3 4 5 6 7 8 9 ö ü ó {bksp}",
		"{tab} q w e r t z u i o p ő ú",
		"a s d f g h j k l é á ű {enter}",
		"{shift} í y x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'§ \u0027 " + ! % / = ( ) Ö Ü Ó {bksp}',
		"{tab} Q W E R T Z U I O P Ő Ú",
		"A S D F G H J K L É Á Ű {enter}",
		"{shift} Í Y X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
    '{sp:1} ~ ˇ ^ ˘ ° ˛ ` ˙ ´ ˝ ¨ ¸ {bksp}',  // most of non used
    '{tab} \\ | Ä {sp:1} {sp:1} {sp:1} € Í {sp:1} {sp:1} ÷ ×',
    'ä đ Đ [ ] {sp:1} í ł Ł $ ß ¤ {enter}',
    '{shift} < > # & @ { } < ; > * {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ***********************
if (typeof(language) === 'undefined') { var language = {}; };
language.hungarian = {
	display : {
		'a'      : '\u2714:Accept (Shift-Enter)', // check mark - same action as accept
		'accept' : 'Rendben:Accept (Shift-Enter)',
		'alt'    : 'AltGr:Alternate Graphemes',
		'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
		'bksp'   : 'Töröl:Backspace',
		'c'      : '\u2716:Cancel (Esc)', // big X, close - same action as cancel
		'cancel' : 'Mégsem:Cancel (Esc)',
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
	wheelMessage : 'Használd az egér görgetőt a többi billentyű átváltáshoz',
};

// This will replace all default language options with these language options.
// it is separated out here so the layout demo will work properly.
$.extend(true, $.keyboard.defaultOptions, language.hungarian);
