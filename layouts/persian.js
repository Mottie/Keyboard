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
