/* Arabic keyboard layouts
 * contains layout: 'arabic-azerty', 'arabic-qwerty-1', 'arabic-qwerty-2', 'arabic-qwerty-3', 'arabic-qwerty-4'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/arabic.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'arabic-azerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* based on http://ascii-table.com/keyboard.php/462 */
jQuery.keyboard.layouts['arabic-azerty'] = {
	'name': 'Arabic-azerty',
	'lang': ['ar'],
	'normal' : [
		'\u00b2 & \u00e9 " \' ( - \u00e8 _ \u00e7 \u00e0 ) = {bksp}',
		"{tab} a z e r t y u i o p ` $",
		"q s d f g h j k l m \u00f9 \u066d {enter}",
		"{shift} < w x c v b n , ; : ! {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		"\u00b2 1 2 3 4 5 6 7 8 9 0 \u00b0 + {bksp}",
		"{tab} A Z E R T Y U I O P \u0308 \u00a3",
		"Q S D F G H J K L M \u066a \u00b5 {enter}",
		"{shift} > W X C V B N ? . / \u00a7 {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'> & \u00e9 # { [ | \u0300 \\ ^ @ ] } {bksp}',
		'{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u062f',
		'\u0634 \u0633 \u064a \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u0643 \u0637 \u0630 {enter}',
		'{shift} \u0640 \u0626 \u0621 \u0624 \u0631 \ufefb \u0649 \u0629 \u0648 \u0632 \u0638 {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt-shift' : [
		'< 1 2 3 4 5 6 7 8 9 0 \u00b0 + {bksp}',
		'{tab} \u064e \u064b \u064f \u064c \ufef9 \u0625 \u0060 \u00f7 \u00d7 \u061b \u062c \u00a4',
		'\\ \u0633 [ ] \ufef7 \u0623 \u0640 \u060c / : \u00a8 \u0651 {enter}',
		'{shift} | ~ \u0652 \u0650 \u064d \ufef5 \u0622 \' , . \u061f {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};

/* based on http://ascii-table.com/keyboard.php/470 */
jQuery.keyboard.layouts['arabic-qwerty-1'] = {
	'name': 'Arabic-qwerty-1',
	'lang': ['ar'],
	'normal' : [
		'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
		"{tab} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; ' {enter}",
		"{shift} z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		"~ ! @ # $ % ^ & * ( ) _ + {bksp}",
		"{tab} Q W E R T Y U I O P { } |",
		'A S D F G H J K L : " {enter}',
		"{shift} Z X C V B N M < > ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'\u0630 \u0661 \u0662 \u0663 \u0664 \u0665 \u0666 \u0667 \u0668 \u0669 \u0660 - = {bksp}',
		'{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u062f \\',
		'\u0634 \u0633 \u064a \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u0643 \u0637 {enter}',
		'{shift} \u0626 \u0621 \u0624 \u0631 \ufefb \u0649 \u0629 \u0648 \u0632 \u0638 {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt-shift' : [
		'\u0651 ! @ # $ % ^ & * ( ) _ + {bksp}',
		'{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u00f7 \u00d7 \u061b > < |',
		'\u0634 \u0633 \u064a \u0628 \u0644 \u0623 \u0640 \u060c / : " {enter}',
		'{shift} \u0626 \u0621 \u0624 \u0631 \ufef5 \u0622 \u0629 , . \u061f {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};

/* based on keyboard layout from http://ascii-table.com/keyboard.php/238 */
jQuery.keyboard.layouts['arabic-qwerty-2'] = {
	'name': 'Arabic-qwerty-2',
	'lang': ['ar'],
	'normal' : [
		'< 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
		"{tab} q w e r t y u i o p [ ]",
		"a s d f g h j k l ; ' ` {enter}",
		"{shift} \\ z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		"> ! @ # $ % ^ & * ( ) _ + {bksp}",
		"{tab} Q W E R T Y U I O P { }",
		'A S D F G H J K L : " ~ {enter}',
		"{shift} | Z X C V B N M , . ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'< \u0661 \u0662 \u0663 \u0664 \u0665 \u0666 \u0667 \u0668 \u0669 \u0660 - = {bksp}',
		'{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u062f',
		'\u0634 \u0633 \u064a \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u0643 \u0637 \u0630 {enter}',
		'{shift} \u0640 \u0626 \u0621 \u0624 \u0631 \ufefb \u0649 \u0629 \u0648 \u0632 \u0638 {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt-shift' : [
		'> ! @ # $ % ^ & * ( ) _ + {bksp}',
		'{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u00f7 \u00d7 \u061b { }',
		'\\ \u0633 \u064a \u0628 \ufef7 \u0623 \u062a \u060c \u0645 : " \u0651 {enter}',
		'{shift} | \u0626 \u0621 \u0624 \u0631 \ufef5 \u0622 \u0629 , . \u061f {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};

/* based on keyboard layout from http://ascii-table.com/keyboard.php/239 */
jQuery.keyboard.layouts['arabic-qwerty-3'] = {
	'name': 'Arabic-qwerty-3',
	'lang': ['ar'],
	'normal' : [
		'< 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
		"{tab} q w e r t y u i o p \u00a2 |",
		"a s d f g h j k l ; ' ` {enter}",
		"{shift} \u0640 z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		"> ! @ # $ % \u00ac & * ( ) _ + {bksp}",
		"{tab} Q W E R T Y U I O P \u00a3 |",
		'A S D F G H J K L : " ~ {enter}',
		"{shift} \u00a6 Z X C V B N M , . ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'< \u0661 \u0662 \u0663 \u0664 \u0665 \u0666 \u0667 \u0668 \u0669 \u0660 - = {bksp}',
		'{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u062f',
		'\u0634 \u0633 \u064a \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u0643 \u0637 \u0630 {enter}',
		'{shift} \u0640 \u0626 \u0621 \u0624 \u0631 \ufefb \u0649 \u0629 \u0648 \u0632 \u0638 {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt-shift' : [
		'> ! @ # $ % \u00ac & * ( ) _ + {bksp}',
		'{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u00f7 \u00d7 \u061b \u00a3 |',
		'\u0634 \u0633 \u064a \u0628 \ufef7 \u0623 \u062a \u060c / : " \u0651 {enter}',
		'{shift} \u00a6 \u0626 \u0621 \u0624 \u0631 \ufef5 \u0622 \u0629 , . \u061f {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};

/* based on keyboard layout from http://ascii-table.com/keyboard.php/253 */
jQuery.keyboard.layouts['arabic-qwerty-4'] = {
	'name': 'Arabic-qwerty-4',
	'lang': ['ar'],
	'normal' : [
		'< 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
		"{tab} q w e r t y u i o p [ ]",
		"a s d f g h j k l ; ' ` {enter}",
		"{shift} \\ z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		"> ! @ # $ % ^ & * ( ) _ + {bksp}",
		"{tab} Q W E R T Y U I O P { }",
		'A S D F G H J K L : " ~ {enter}',
		"{shift} | Z X C V B N M , . ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'< \u0661 \u0662 \u0663 \u0664 \u0665 \u0666 \u0667 \u0668 \u0669 \u0660 - = {bksp}',
		'{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u062f',
		'\u0634 \u0633 \u064a \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u0643 \u0637 \u0630 {enter}',
		'{shift} \u0640 \u0626 \u0621 \u0624 \u0631 \ufefb \u0649 \u0629 \u0648 \u0632 \u0638 {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt-shift' : [
		'> ! @ # $ % ^ & * ( ) _ + {bksp}',
		'{tab} \u064e \u064b \u064f \u064c \ufef9 \u0625 \u0639 \u00f7 \u00d7 \u061b { }',
		'\\ \u0633 \u064a \u0628 \ufef7 \u0623 \u062a \u060c \u002f : " \u0651 {enter}',
		'{shift} | \u0626 \u0652 \u0650 \u064d \ufef5 \u0622 \u0629 , . \u061f {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};
