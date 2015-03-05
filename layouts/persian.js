/* Persian (Farsi) keyboard layouts
* translate by Majid Ramezani -> majid.r830@gmail.com
* ---------------------------------------------------------------------------------------------------------
* To use:
*  Point to this js file into your page header: <script src="layouts/persian.js" type="text/javascript"></script>
*  Initialize the keyboard using: $('input').keyboard({ layout: 'Persian' });
*  in select add - > "Persian (Farsi), persian, Persian",
*
* based on http://unicode-table.com/en/#
*/

jQuery.keyboard.layouts['Persian'] = {
	'name': 'Persian (Farsi)',
	'lang': ['fa'],
	'normal': [
		'~ \u06f1 \u06f2 \u06f3 \u06f4 \u06f5 \u06f6 \u06f7 \u06f8 \u06f9 \u06f0 - = {bksp}',
		'{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u0686 \u067e',
		'{lock} \u0634 \u0633 \u06cc \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u0643 \u06af {enter}',
		'{shift} \u0638 \u0637 \u0632 \u0698 \u0631 \u0630 \u062f \u0678 \u0648 . \u061f {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'shift': [
		'\u00a9 \u0021 \u0040 \u0023 \u0024 \u0025 \u005e \u0026 \u002a \u0028 \u0029 \u005f \u002b {bksp}',
		'{tab} \u064b \u064c \u064d \u00ae \u060c \u061b \u002c \u005d \u005b \u007d \u007b \u00d7 \u00b1',
		'{lock} \u064e \u064f \u0650 \u0651 \u06c0 \u0622 \u0640 \u00ab \u00bb : " {enter}',
		'{shift} \u0629 \u064a \u00b0 \u0624 \u0625 \u0623 \u0621 \u003c \u003e \u00a6 \u00f7 {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt': [
		'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
		'{tab} q w e r t y u i o p [ ] \\',
		'{lock} a s d f g h j k l ; \' {enter}',
		'{shift} z x c v b n m , . / {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt-shift': [
		'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
		'{tab} Q W E R T Y U I O P { } |',
		'{lock} A S D F G H J K L : " {enter}',
		'{shift} Z X C V B N M < > ? {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};

jQuery.keyboard.language.fa = {
	language: 'Farsi',
	display: {
		'a': '\u2714:\u062a\u0623\u06cc\u06cc\u062f (Shift-Enter)',
		'accept': '\u062a\u0623\u06cc\u06cc\u062f:\u062a\u0623\u06cc\u06cc\u062f (Shift-Enter)',
		'alt': 'Lng:Alternate Graphemes',
		'b': '\u2190:\u2b05 Backspace',
		'bksp': '\u2b05 Bksp:\u2b05 Backspace',
		'c': '\u2716:\u0627\u0646\u0635\u0631\u0627\u0641 (Esc)',
		'cancel': '\u0627\u0646\u0635\u0631\u0627\u0641:\u0627\u0646\u0635\u0631\u0627\u0641 (Esc)',
		'clear': 'C:Clear',
		'combo': '\u00f6:Toggle Combo Keys',
		'dec': '.:Decimal',
		'e': '\u21b5:Enter',
		'enter': 'Enter:Enter',
		'lock': '\u21ea Lock:Caps Lock',
		's': '\u21e7:Shift',
		'shift': 'Shift:Shift',
		'sign': '\u00b1:Change Sign',
		'space': '&nbsp;:Space',
		't': '\u21e5:Tab',
		'tab': '\u21e5 Tab:Tab'
	},

	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage: 'Use mousewheel to see other keys',
	rtl: true

	// uncomment, then include changes to the comboRegex here
	//, comboRegex: /([`\'~\^\"ao])([a-z])/mig,
	// uncomment, then include any changes to the combos option here
	/*
	, combos : {
	// grave
	'`' : { a:"\u00e0", A:"\u00c0", e:"\u00e8", E:"\u00c8", i:"\u00ec", I:"\u00cc", o:"\u00f2", O:"\u00d2",
	u:"\u00f9", U:"\u00d9", y:"\u1ef3", Y:"\u1ef2" },
	// acute & cedilla
	"'" : { a:"\u00e1", A:"\u00c1", e:"\u00e9", E:"\u00c9", i:"\u00ed", I:"\u00cd", o:"\u00f3", O:"\u00d3",
	u:"\u00fa", U:"\u00da", y:"\u00fd", Y:"\u00dd" },
	// umlaut/trema
	'"' : { a:"\u00e4", A:"\u00c4", e:"\u00eb", E:"\u00cb", i:"\u00ef", I:"\u00cf", o:"\u00f6", O:"\u00d6",
	u:"\u00fc", U:"\u00dc", y:"\u00ff", Y:"\u0178" },
	// circumflex
	'^' : { a:"\u00e2", A:"\u00c2", e:"\u00ea", E:"\u00ca", i:"\u00ee", I:"\u00ce", o:"\u00f4", O:"\u00d4",
	u:"\u00fb", U:"\u00db", y:"\u0177", Y:"\u0176" },
	// tilde
	'~' : { a:"\u00e3", A:"\u00c3", e:"\u1ebd", E:"\u1ebc", i:"\u0129", I:"\u0128", o:"\u00f5", O:"\u00d5",
	u:"\u0169", U:"\u0168", y:"\u1ef9", Y:"\u1ef8", n:"\u00f1", N:"\u00d1" }
	}
	*/
};
