/* French keyboard layouts
 * contains layout: french-azerty-1 and 'french-azerty-2'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/french.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'french-azerty-1' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* based on http://ascii-table.com/keyboard.php/189 & thanks to Nathana�l SEMHOUN: http://nathanael.semhoun.net */
$.keyboard.layouts['french-azerty-1'] = {
	'default' : [
		"\u00b2 & \u00e9 \" ' ( - \u00e8 _ \u00e7 \u00e0 ) = {bksp}",
		"{tab} a z e r t y u i o p ^ $",
		"q s d f g h j k l m  \u00f9 * {enter}",
		"{shift} < w x c v b n , ; : ! {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		"{sp:1} 1 2 3 4 5 6 7 8 9 0 \u00b0 + {bksp}",
		"{tab} A Z E R T Y U I O P \u00a8 \u00a3",
		"Q S D F G H J K L M % \u00b5 {enter}",
		"{shift} > W X C V B N ? . / \u00a7 {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"\u00b2 & ~ # { [ | ` \\ ^ @ ] } {bksp}",
		"{tab} a z \u20ac r t y u i o p ^ \u00a4",
		"q s d f g h j k l m  \u00f9 * {enter}",
		"{shift} < w x c v b n , ; : ! {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		"{sp:1} 1 ~ # { [ | ` \\ ^ @ ] } {bksp}",
		"{tab} A Z \u20ac R T Y U I O P \u00a8 \u00a4",
		"Q S D F G H J K L M % \u00b5 {enter}",
		"{shift} > W X C V B N ? . / \u00a7 {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
};

$.keyboard.layouts['french-azerty-2'] = {
	'default' : [
		"\u00b2 & \u00e9 \" ' ( - \u00e8 _ \u00e7 \u00e0 ) = {b}",
		"{t} a z e r t y u i o p ^ $",
		"q s d f g h j k l m  \u00f9 * {e}",
		"{s} < w x c v b n , ; : ! {s}",
		"{a} {alt} {space} {alt} {c}"
	],
	'shift' : [
		"{sp:1} 1 2 3 4 5 6 7 8 9 0 \u00b0 + {b}",
		"{t} A Z E R T Y U I O P \u00a8 \u00a3",
		"Q S D F G H J K L M % \u00b5 {e}",
		"{s} > W X C V B N ? . / \u00a7 {s}",
		"{accept} {alt} {space} {alt} {c}"
	],
	'alt' : [
		"\u00b2 & ~ # { [ | ` \\ ^ @ ] } {b}",
		"{t} a z \u20ac r t y u i o p ^ \u00a4",
		"q s d f g h j k l m  \u00f9 * {e}",
		"{s} < w x c v b n , ; : ! {s}",
		"{a} {alt} {space} {alt} {c}"
	],
	'alt-shift' : [
		"{sp:1} 1 ~ # { [ | ` \\ ^ @ ] } {b}",
		"{t} A Z \u20ac R T Y U I O P \u00a8 \u00a4",
		"Q S D F G H J K L M % \u00b5 {e}",
		"{s} > W X C V B N ? . / \u00a7 {s}",
		"{a} {alt} {space} {alt} {c}"
	],
};

$.keyboard.layouts['french-bepo-V1.0rc2'] = {
	'default' : [
		"$ \" \u00AB \u00BB ( ) @ + - / * = % {b}",
		"{t} b \u00E9 p o \u00E8 ^ v d l j z w",
		"a u i e , c t s r n m {e}",
		"{s} \u00E0 y x . k \' q g h f \u00E7 {s}",
		"{a} {alt} {space} {alt} {c}"
	],
	'shift' : [
		"# 1 2 3 4 5 6 7 8 9 0 \u00B0 `{b}",
		"{t} B \u00C9 P O \u00C8 ! V D L J Z W",
		"A U I E ; C T S R N M {e}",
		"{s} \u00C0 Y X : K ? Q G H F \u00C7 {s}",
		"{accept} {alt} {space} {alt} {c}"
	],
	'alt' : [
		"\u2014 < > [ ] ^ \u00B1 \u2212 \u00F7 \u00D7 \u2260 \u2030 {b}",
		"{t} | \' & \u0153 ` \u00A1 \u02C7 \u00F0 / \u0133 \u0259 \u02D8",
		"\u00E6 \u00F9 \" \u20AC \u2019 \u00A9 \u00FE \u00DF \u00AE ~ \u00AF {e}",
		"{s} \\ { } \u2026 ~ \u00BF \u00B0 \u00B5 \u2020 \u02DB \u00B8 {s}",
		"{a} {alt} {space} {alt} {c}"
	],
	'alt-shift' : [
		"{sp:1} \u00B6 \u201E \u201C \u201D \u2264 \u2265 \u00AC \u00BC \u00BD \u00BE \u2032 \u2033 {b}",
		"{t} \u00A6 \u02DD\u00A7 \u0152 `   \u00D0  \u0132 \u018F",
		"Æ Ù ? ¤ ? ? Þ ? ™  º {e}",
		"{s} \u2018 \u2019 \u00B7 \u2328 \u0309 \u0323  \u2021 \u00AA , {s}",
		"{a} {alt} {space} {alt} {c}"
	],
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ***********************
if (typeof(language) === 'undefined') { var language = {}; };
language.french = {
	display : {
		'a'      : '\u2714:Valider (Shift-Enter)', // check mark - same action as accept
		'accept' : 'Valider:Valider (Shift-Enter)',
		'alt'    : 'AltGr:Charact\u00e8re alternatif',
		'b'      : '\u2190:Suppr arri\u00e8re',    // Left arrow (same as &larr;)
		'bksp'   : '\u2190Suppr:Suppr arri\u00e8re',
		'c'      : '\u2716:Annuler', // big X, close - same action as cancel
		'cancel' : 'Annuler:Annuler (\u00c9chap)',
		'clear'  : 'C:Effacer',             // clear num pad
		'combo'  : '\u00f6:Bacsuler les touches combo',
		'dec'    : '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Entr\u00e9e',        // down, then left arrow - enter symbol
		'enter'  : 'Entr\u00e9e:Entr\u00e9e',
		'lock'   : '\u21ea Verr Mag:Verouillage majuscule', // caps lock
		's'      : '\u21e7:Majuscule',        // thick hollow up arrow
		'shift'  : 'Maj:Majuscule',
		'sign'   : '\u00b1:Change de signe',  // +/- sign for num pad
		'space'  : '&nbsp;:Espace',
		't'      : '\u21e5:Tabulation',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tabulation'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Utiliser la molette de la souris pour voir les autres lettres',
};

// This will replace all default language options with these language options.
// it is separated out here so the layout demo will work properly.
$.extend(true, $.keyboard.defaultOptions, language.french);
