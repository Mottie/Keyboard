/* Serbian keyboard layouts
 * contains layout: 'sr-Cyrl' & 'sr'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/russian.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'russian-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* Serbian Cyrillic Keyboard Layout (српски) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["sr-Cyrl"] = {
	'name' : "Serbian Cyrillic (sr-Cyrl)",
	'lang' : ['sr'],
	"default" : [
		"` 1 2 3 4 5 6 7 8 9 0 ' + {bksp}",
		"{tab} \u0459 \u045a \u0435 \u0440 \u0442 \u0437 \u0443 \u0438 \u043e \u043f \u0448 \u0452 \u0436",
		" \u0430 \u0441 \u0434 \u0444 \u0433 \u0445 \u0458 \u043a \u043b \u0447 \u045b {enter}",
		"{shift} < \u0455 \u045f \u0446 \u0432 \u0431 \u043d \u043c , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'~ ! " # $ % & / ( ) = ? * {bksp}',
		"{tab} \u0409 \u040a \u0415 \u0420 \u0422 \u0417 \u0423 \u0418 \u041e \u041f \u0428 \u0402 \u0416",
		" \u0410 \u0421 \u0414 \u0424 \u0413 \u0425 \u0408 \u041a \u041b \u0427 \u040b {enter}",
		"{shift} > \u0405 \u040f \u0426 \u0412 \u0411 \u041d \u041c ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"` 1 2 3 4 5 6 7 8 9 0 ' + {bksp}",
		"{tab} \u0459 \u045a \u0435 \u0440 \u0442 \u0437 \u0443 \u0438 \u043e \u043f \u0448 \u0452 \u0436",
		" \u0430 \u0441 \u0434 \u0444 \u0433 \u0445 \u0458 \u043a \u043b \u0447 \u045b {enter}",
		"{shift} < \u0455 \u045f \u0446 \u0432 \u0431 \u043d \u043c , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* Serbian Latin Keyboard Layout (Srpski) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts.sr = {
	'name' : "Serbian Latin (sr)",
	'lang' : ['sr'],
	"default" : [
		"\u00b8 1 2 3 4 5 6 7 8 9 0 ' + {bksp}",
		"{tab} q w e r t z u i o p \u0161 \u0111 \u017e",
		" a s d f g h j k l \u010d \u0107 {enter}",
		"{shift} < y x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	shift : [
		'\u00a8 ! " # $ % & / ( ) = ? * {bksp}',
		"{tab} Q W E R T Z U I O P \u0160 \u0110 \u017d",
		" A S D F G H J K L \u010c \u0106 {enter}",
		"{shift} > Y X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	alt : [
		"\u00b8 1 2 3 4 5 6 7 8 9 0 ' + {bksp}",
		"{tab} q w e r t z u i o p \u0161 \u0111 \u017e",
		" a s d f g h j k l \u010d \u0107 {enter}",
		"{shift} < y x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* Serbian Cyrillic Keyboard Layout (српски) for Mac */
jQuery.keyboard.layouts["sr-Cyrl-mac"] = {
	'name' : "Serbian Cyrillic for Mac (sr-Cyrl)",
	'lang' : ['sr'],
	"default" : [
		"< 1 2 3 4 5 6 7 8 9 0 ' + {bksp}",
		"{tab} \u0459 \u045a \u0435 \u0440 \u0442 \u0437 \u0443 \u0438 \u043e \u043f \u0448 \u0452 \u0436",
		" \u0430 \u0441 \u0434 \u0444 \u0433 \u0445 \u0458 \u043a \u043b \u0447 \u045b {enter}",
		"{shift} \u0455 \u045f \u0446 \u0432 \u0431 \u043d \u043c , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	shift : [
		'> ! " # $ % & / ( ) = ? * {bksp}',
		"{tab} \u0409 \u040a \u0415 \u0420 \u0422 \u0417 \u0423 \u0418 \u041e \u041f \u0428 \u0402 \u0416",
		" \u0410 \u0421 \u0414 \u0424 \u0413 \u0425 \u0408 \u041a \u041b \u0427 \u040b {enter}",
		"{shift} \u0405 \u040f \u0426 \u0412 \u0411 \u041d \u041c ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	alt : [
		"` \u2020 \u00b0 \u20ac \u201e \u2122 \u221e \u00a3 \u0490 \u00b6 \u2022 \u2013 = {bksp}",
		"{tab} q w e r t y u i o p [ ] \u2018",
		' a s d f g h j k l ; " {enter}',
		"{shift} z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt-shift" : [
		"~ ! @ # \u201c % ^ & * ( ) \u2014 + {bksp}",
		"{tab} Q W E R T Y U I O P { } \u2019",
		" A S D F G H J K L : \u201d {enter}",
		"{shift} Z X C V B N M < > ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* Serbian Latin Keyboard Layout (Srpski) for Mac */
jQuery.keyboard.layouts["sr-mac"] = {
	'name' : "Serbian Latin for Mac (sr)",
	'lang' : ['sr'],
	"default" : [
		"< 1 2 3 4 5 6 7 8 9 0 / + {bksp}",
		"{tab} q w e r t z u i o p \u0161 \u0111 \u017e",
		" a s d f g h j k l \u010d \u0107 {enter}",
		"{shift} y x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	shift : [
		"> ! \" # $ % & ' ( ) = ? * {bksp}",
		"{tab} Q W E R T Z U I O P \u0160 \u0110 \u017d",
		" A S D F G H J K L \u010c \u0106 {enter}",
		"{shift} Y X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	alt : [
		"` \u00a1 \u2122 \u00a3 \u00a2 \u221e \u00a7 \u00b6 \u2022 \u00aa \u00ba - \u2260 {bksp}",
		"{tab} \u0153 \u2211 \u00b4 \u00ae \u2020 \u2014 \u00a8 ^ \u00f8 \u03c0 [ ]  ",
		"\u00e5 \u00df \u2202 \u0192 \u00a9  \u030f \u2206  \u0311 \u00ac \u2026 ^ {enter}",
		"{shift} \u03a9 \u2248 \u00e7 \u221a \u222b ~ \u00b5 \u2264 \u2265 \u00f7 {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt-shift" : [
		"~ \u2044 @ \u2039 \u203a \u20ac \u0131 \u2013 \u00b0 \u00b7 \u201a _ \u00b1 {bksp}",
		"{tab} \u0152 \u201e \u2030 \u201c \u2018 \u201d \u2019 \u00c9 \u00d8 \u220f { } |",
		"\u00c5 \u00cd \u00ce \u00cf \u00cc \u00d3 \u00d4 \uf8ff \u00d2 \u00e6 \u00c6 {enter}",
		"{shift} \u00ab \u00bb \u00c7 \u25ca \u00d1 \u02c6 \u00af \u00c8 \u02c7 \u00bf {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};
