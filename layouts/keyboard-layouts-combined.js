/*** This file is dynamically generated ***
█████▄ ▄████▄   █████▄ ▄████▄ ██████   ███████▄ ▄████▄ █████▄ ██ ██████ ██  ██
██  ██ ██  ██   ██  ██ ██  ██   ██     ██ ██ ██ ██  ██ ██  ██ ██ ██     ██  ██
██  ██ ██  ██   ██  ██ ██  ██   ██     ██ ██ ██ ██  ██ ██  ██ ██ ██▀▀   ▀▀▀▀██
█████▀ ▀████▀   ██  ██ ▀████▀   ██     ██ ██ ██ ▀████▀ █████▀ ██ ██     █████▀
*/
/*! jQuery UI Virtual Keyboard - Original Layouts */
/* Albanian keyboard layouts
 * contains layout: 'albanian-qwertz' & 'albanian-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/albanian.js" type="text/javascript"></script>
 *  Initialize the keyboard using: jQuery('input').keyboard({ layout: 'albanian-qwertz' });
 *
 * To do: add combos appropriate to the Albanian language
 *  missing caron, breve, ring, ogonek, double acute accent, diaeresis and cedilla accents.
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* qwertz-albanian
 combined from http://en.wikipedia.org/wiki/File:Albanian_keyboard_layout.jpg,
 http://ascii-table.com/keyboard.php/448 & http://www.google.com/webelements/ */
jQuery.keyboard.layouts['albanian-qwertz'] = {
	'name' : 'Albanian-qwertz',
	'lang' : ['sq'],
	'normal' : [
		"\\ 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t z u i o p \u00e7 '",
		"a s d f g h j k l \u00eb [ ] {enter}",
		"{shift} < y x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'| ! " # $ % ^ & * ( ) _ + {bksp}',
		"{tab} Q W E R T Z U I O P \u00c7 @",
		"A S D F G H J K L \u00cb { } {enter}",
		"{shift} > Y X C V B N M ; : ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"\\ ~ \u02c7 ^ \u02d8 \u00b0 \u02db ` \u02d9 \u00b4 \u02dd \u00a8 \u00b8 {bksp}",
		"{tab} q w \u20ac r t z u i o p \u00f7 \u00d7",
		"\u00e4 \u0111:Shortcut_(\/d) \u0110:Shortcut_(\/D) f g h j \u0142:Shortcut_(\/l) \u0141:Shortcut_(\/L) $ \u00df \u00a4 {enter}",
		"{shift} < y x c @ { } \u00a7 < > / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* based on http://ascii-table.com/keyboard.php/452 */
jQuery.keyboard.layouts['albanian-qwerty'] = {
	'name' : 'Albanian-qwerty',
	'lang' : ['sq'],
	'normal' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t y u i o p \u00eb '",
		"a s d f g h j k l ; \u00e7 # {enter}",
		"{shift} \\ z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"],
	'shift' : [
		'\u00ac ! " \u00a7 $ % ^ & * ( ) _ + {bksp}',
		"{tab} Q W E R T Y U I O P \u00cb @",
		"A S D F G H J K L : \u00c7 ~ {enter}",
		"{shift} \u00a6 Z X C V B N M < > ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"| 1 2 3 4 5 6 { } [ ] - = {bksp}",
		"{tab} q w \u20ac r t y u i o p \u00f7 \u00d7",
		"a s d f g h j k l ; \u00e7 # {enter}",
		"{shift} \\ z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		'| ! " \u00a7 $ % ^ & * ( ) _ + {bksp}',
		"{tab} Q W \u20AC R T Y U I O P \u00cb @",
		"A S D F G H J K L : \u00c7 ~ {enter}",
		"{shift} \u00a6 Z X C V B N M < > ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

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

/* Belarusian keyboard layouts
 * contains layout: 'belarusian-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/belarusian.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'belarusian-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* based on http://ascii-table.com/keyboard.php/463 & http://www.google.com/webelements/ */
jQuery.keyboard.layouts['belarusian-qwerty'] = {
	'name' : 'belarusian-qwerty',
	'lang' : ['be'],
	'normal' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t y u i o p [ ] \\",
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
		"\u0451 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} \u0439 \u0446 \u0443 \u043a \u0435 \u043d \u0433 \u0448 \u045e \u0437 \u0445 ' \\",
		"\u0444 \u044b \u0432 \u0430 \u043f \u0440 \u043e \u043b \u0434 \u0436 \u044d {enter}",
		"{shift} \u044f \u0447 \u0441 \u043c \u0456 \u0442 \u044c \u0431 \u044e . {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		'\u0401 ! " \u2116 ; \u20ac : ? * ( ) _ + {bksp}',
		"{tab} \u0419 \u0426 \u0423 \u041a \u0415 \u041d \u0413 \u0428 \u040e \u0417 \u0425 ' /",
		"\u0424 \u042b \u0412 \u0410 \u041f \u0420 \u041e \u041b \u0414 \u0416 \u042d {enter}",
		"{shift} \u042f \u0427 \u0421 \u041c \u0406 \u0422 \u042c \u0411 \u042e , {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* Scandinavian keyboard layouts
 * contains layout: 'bengali-qwerty-1' & 'bengali-qwerty-2'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/bengali.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'bengali-qwerty-1' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* based on http://ascii-table.com/keyboard.php/480 & http://www.gate2home.com/?language=bn&sec=2 */
jQuery.keyboard.layouts['bengali-qwerty-1'] = {
	'name' : 'bengali-qwerty-1',
	'lang' : ['bn'],
	'normal' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
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
		'` \u09e7 \u09e8 \u09e9 \u09ea \u09eb \u09ec \u09ed \u09ee \u09ef \u09e6 - \u09c3 {bksp}',
		'{tab} \u09cc \u09c8 \u09be \u09c0 \u09c2 \u09ac \u09b9 \u0997 \u09a6 \u099c \u09a1 \u09bc \\',
		'\u09cb \u09c7 \u09cd \u09bf \u09c1 \u09aa \u09b0 \u0995 \u09a4 \u099a \u099f {enter}',
		'{shift} \u09ce \u0982 \u09ae \u09a8 \u09ac \u09b2 \u09b8 , . \u09df {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt-shift' : [
		'~ \u09e7 \u09e8 \u09b0 \u09cd \u099c \u09a4 \u0995 \u09b6 ( ) \u0983 \u09c3 {bksp}',
		'{tab} \u0994 \u0990 \u0986 \u0988 \u098a \u09ad \u0999 \u0998 \u09a7 \u099d \u09a2 \u099e |',
		'\u0993 \u098f \u0985 \u0987 \u0989 \u09ab \u09b0 \u0996 \u09a5 \u099b \u09a0 {enter}',
		'{shift} ? \u0981 \u09a3 \u09a8 \u09ac \u09b2 \u09b6 \u09b7 \u0964 \u09af {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};

/* based on http://www.google.com/webelements/#!/virtualkeyboard */
jQuery.keyboard.layouts['bengali-qwerty-2'] = {
	'name' : 'bengali-qwerty-2',
	'lang' : ['bn'],
	'normal' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
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
		'\u0982 \u0981 \u09bc \u0983 \u09fa \u09f8 \u09f9 \u09f2 \u09f3 \u09e6 \u09f4 \u09e7 \u09f5 {bksp}',
		'{tab} \u09e8 \u09f6 \u09e9 \u09f7 \u09ea \u09eb \u09ec \u09ed \u09ee \u09ef \u0985 \u0986 \u0987',
		'\u0988 \u0989 \u098a \u098b \u09e0 \u098c \u09e1 \u098f \u0990 \u0993 \u0994 {enter}',
		'{shift} \u0995 \u0996 \u0997 \u0998 \u0999 \u099a \u099b \u099c \u099d \u099e {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt-shift' : [
		'\u099f \u09a0 \u09a1 \u09dc \u09a2 \u09dd \u09a3 \u09a4 \u09ce \u09a5 \u09a6 \u09a7 \u09a8 {bksp}',
		'{tab} \u09aa \u09ab \u09ac \u09ad \u09ae \u09af \u09df \u09b0 \u09f0 \u09b2 \u09f1 \u09b6 \u09b7',
		'\u09b8 \u09b9 \u09bd \u09be \u09bf \u09c0 \u09c1 \u09c2 \u09c3 \u09c4 \u09e2 {enter}',
		'{shift} \u09e3 \u09c7 \u09c8 \u09cb \u09cc \u09cd \u09d7 {sp:3} {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};

/* Belarusian keyboard layouts
 * contains layout: 'bulgarian-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/belarusian.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'bulgarian-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* from http://ascii-table.com/keyboard.php/442 */
jQuery.keyboard.layouts['bulgarian-qwerty'] = {
	'name' : 'bulgarian-qwerty',
	'lang' : ['bg'],
	'normal' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t y u i o p [ ] \\",
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
		'` 1 2 3 4 5 6 7 8 9 0 - . {bksp}',
		"{tab} , \u0443 \u0435 \u0438 \u0448 \u0449 \u043a \u0441 \u0434 \u0437 \u0446 ; (",
		"\u044c \u044f \u0430 \u043e \u0436 \u0433 \u0442 \u043d \u0432 \u043c \u0447 {enter}",
		"{shift} \u044e \u0439 \u044a \u044d \u0444 \u0445 \u043f \u0440 \u043b \u0431 {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		'~ ! ? + " % = : / _ \u2116 I V {bksp}',
		"{tab} \u044b \u0423 \u0415 \u0418 \u0428 \u0429 \u041a \u0421 \u0414 \u0417 \u0426 \u00a7 )",
		"\u042c \u042f \u0410 \u041e \u0416 \u0413 \u0422 \u041d \u0412 \u041c \u0427 {enter}",
		"{shift} \u042e \u0419 \u042a \u042d \u0424 \u0425 \u041f \u0420 \u041b \u0411 {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* Bermese keyboard layouts
 * contains layout: 'burmese'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/burmese.js"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'burmese' });
 *
 * thanks to @laminko (https://github.com/laminko);
 * see https://github.com/Mottie/Keyboard/pull/507
 * license for this file: WTFPL
 */
jQuery.keyboard.layouts['burmese'] = {
	'name' : 'burmese',
	'lang' : ['my'], // this setting must match the "all" language definition below
	'normal': [
		'\u1050 \u1041 \u1042 \u1043 \u1044 \u1045 \u1046 \u1047 \u1048 \u1049 \u1040 - = {bksp}',
		'{tab} \u1006 \u1010 \u1014 \u1019 \u1021 \u1015 \u1000 \u1004 \u101e \u1005 \u101f \u1029 \u104f',
		'\u1031 \u103b \u102d \u103a \u102b \u1037 \u103c \u102f \u1030 \u1038 \' {enter}',
		'{shift} \u1016 \u1011 \u1001 \u101c \u1018 \u100a \u102c , . / {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'shift': [
		'\u100e \u100d \u1052 \u100b \u1053 \u1054 \u1055 \u101b * ( ) _ + {bksp}',
		'{tab} \u1008 \u101d \u1023 \u104e \u1024 \u104c \u1025 \u104d \u103f \u100f \u1027 \u102a \u1051',
		'\u1017 \u103e \u102e \u1039 \u103d \u1036 \u1032 \u1012 \u1013 \u1002 " {enter}',
		'{shift} \u1007 \u100c \u1003 \u1020 \u101a \u1009 \u1026 \u104a \u104b ? {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt': [
		'~ \u00a1 \u00b2 \u00b3 \u00a4 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00d7 {bksp}',
		'{tab} \u00e4 \u00e5 \u00e9 \u00ae \u00fe \u00fc \u00fa \u00ed \u00f3 \u00f6 \u00ab \u00bb \u00ac',
		'\u00e1 \u00df \u00f0 f g h j k \u00f8 \u00b6 \u00b4 {enter}',
		'{shift} \u00e6 x \u00a9 v b \u00f1 \u00b5 \u00e7 > \u00bf {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt-shift': [
		'~ \u00b9 \u00b2 \u00b3 \u00a3 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00f7 {bksp}',
		'{tab} \u00c4 \u00c5 \u00c9 \u00ae \u00de \u00dc \u00da \u00cd \u00d3 \u00d6 \u00ab \u00bb \u00a6',
		'\u00c4 \u00a7 \u00d0 F G H J K \u00d8 \u00b0 \u00a8 {enter}',
		'{shift} \u00c6 X \u00a2 V B \u00d1 \u00b5 \u00c7 . \u00bf {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};

/* Catalan keyboard layouts
 * contains layout: 'catalan-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/catalan.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'catalan-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* based on http://ascii-table.com/keyboard.php/173-1 */
jQuery.keyboard.layouts['catalan-qwerty'] = {
	'name' : 'catalan-qwerty',
	'lang' : ['ca'],
	'normal' : [
		"\u00ba 1 2 3 4 5 6 7 8 9 0 ' \u00a1 {bksp}",
		"{tab} q w e r t y u i o p \u0300 +",
		"a s d f g h j k l \u00f1 \u0301 \u00e7 {enter}",
		"{shift} < z x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'\u00aa ! " \u00b7 $ % & / ( ) = ? \u00bf {bksp}',
		"{tab} Q W E R T Y U I O P \u0302 *",
		"A S D F G H J K L \u00d1 \u0308 \u00c7 {enter}",
		"{shift} > Z X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'\\ \u007c @ # \u0303 5 \u00ac 7 8 9 0 \u0027 \u00a1 {bksp}',
		"{tab} q w \u20ac r t y u i o p [ ]",
		"a s d f g h j k l \u00f1 { } {enter}",
		"{shift} \u007c z x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		'\u00aa ! " \u00b7 $ % & / ( ) = ? \u00bf {bksp}',
		"{tab} Q W E R T Y U I O P [ ]",
		"A S D F G H J K L \u00d1 { } {enter}",
		"{shift} > Z X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* Chinese keyboard layouts
* contains layout: 'chinese'
*
* To use:
*  Point to this js file into your page header: <script src="layouts/chinese.js" type="text/javascript"></script>
*  Initialize the keyboard using: $('input').keyboard({ layout: 'chinese' });
*
* license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
*/
jQuery.keyboard.layouts['chinese'] = {
	'name' : 'chinese',
	'lang' : ['zh'],
	'normal' : [
		'\u20AC 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
		'{tab} \u624B \u7530 \u6C34 \u53E3 \u5EFF \u535C \u5C71 \u6208 \u4EBA \u5FC3 [ ] \\',
		'\u65E5 \u5C38 \u6728 \u706B \u571F \u7AF9 \u5341 \u5927 \u4E2D ; \' {enter}',
		'{shift} \uFF3A \u96E3 \u91D1 \u5973 \u6708 \u5F13 \u4E00 . - / {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'shift' : [
		'~ ! @ # $ % ^ & * ) ( _ + {bksp}',
		'{tab} q w e r t y u i o p { } |',
		'a s d f g h j k l : " {enter}',
		'{shift} z x c v b n m , < > ? {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; ' {enter}",
		"{shift} z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		"~ ! @ # $ % ^ & * ( ) _ + {bksp}",
		"{tab} Q W E R T Y U I O P { } |",
		'A S D F G H J K L : " {enter}',
		"{shift} Z X C V B N M < > ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* Danish keyboard layouts
 * contains layout: 'danish-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/danish.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'danish-qwerty' });
 *
 * license for this file: WTFPL
 */

/* qwerty by Torben Junker Kjær (jordbo.dk) -  */
jQuery.keyboard.layouts['danish-qwerty'] = {
	'name' : 'danish-qwerty',
	'lang' : ['da'],
	'normal' : [
		"\u00a7 1 2 3 4 5 6 7 8 9 0 + \u0301 {b}",
		"{tab} q w e r t y u i o p \u00e5 \u00a8",
		"a s d f g h j k l \u00e6 \u00f8 ' {enter}",
		"{shift} < z x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'\u00bd ! " # \u00a4 % & / ( ) = ? \u0300 {b}',
		"{tab} Q W E R T Y U I O P \u00c5 ^",
		"A S D F G H J K L \u00c6 \u00d8 * {enter}",
		"{shift} > Z X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'\u00a7 1 @ \u00a3 $ 5 6 { [ ] } + | {b}',
		'{tab} q w € r t y u i o p \u00e5 ~',
		"a s d f g h j k l \u00e6 \u00f8 ' {enter}",
		'{shift} \\ z x c v b n \u00b5 , . - {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};

/* keyboard layout template (copy of "international" from the core plugin)
 */
jQuery.keyboard.layouts['ethiopic'] = {
	'name' : 'Amharic',
	'lang' : ['amh'],
	'normal': [
		'` \u1369 \u136A \u136B \u136C \u136D \u136E \u136F \u1370 \u1371 0 \u1365 = {bksp}',
		'{tab} \u1240 \u12c8 \u01dd \u1228 \u1270 \u12e8 u i o \u1330 \u1248 \u1288 \\',
		'a \u1230 \u12f0 \u1348 \u1308 \u1200 \u1338 \u12a8 \u1208:Shortcut_(l_+_e_=_\u120d) ; \u12a0 {enter}',
		'{shift} \u12d8 \u1280 \u1278 \u1238 \u1260 \u1290 \u1218 \u1361 \u1362 / {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'shift': [
		'~ \u1372 \u1373 \u1374 \u1375 \u1376 \u1377 \u1378 \u1379 \u137A \u137B \u137C + {bksp}',
		'{tab} \u1250 \u12d0 \u018e \u122f \u1320 Y U I O \u1350 \u1310 \u12b0 \u1384',
		'\u0101 \u1220 \u1300 \u1358 \u1318 \u1210 \u1340 \u12b8 \u12f8 \u12A5\u130D\u12DA\u12A0\u1265\u1214\u122D\u1361 " {enter}',
		'{shift} \u12e0 \u1359 \u1328 \u135A \u1268 \u1298 \u1380 \u1388 \u138C \u1208\u130D\u12DA\u12A0\u1265\u1214\u122D\u1361 {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt': [
		'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
		'{tab} q \u02b7 e r t y u i o \u1e57 [ ] \\',
		'a \u0161 d f \u01e7 \u1e2b j k l ; \u02be {enter}',
		'{shift} \u017e x \u010d\u0323 \u010d b \u00f1 m , . / {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt-shift': [
		'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
		'{tab} Q W E R T Y U I O \u1E56 { } |',
		'A \u0160 D F \u01e6 \u1e2a J K L : \u02bf {enter}',
		'{shift} \u017d X \u010c\u0323 \u010c B \u00d1 M < > ? {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};

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
jQuery.keyboard.layouts['french-azerty-1'] = {
	'name' : 'french-azerty-1',
	'lang' : ['fr'],
	'normal' : [
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

jQuery.keyboard.layouts['french-azerty-2'] = {
	'name' : 'french-azerty-2',
	'lang' : ['fr'],
	'normal' : [
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
		"{a} {alt} {space} {alt} {c}"
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

jQuery.keyboard.layouts['french-bepo-V1.0rc2'] = {
	'name' : 'french-bepo-V1.0rc2',
	'lang' : ['fr'],
	'normal' : [
		"$ \" \u00AB \u00BB ( ) @ + - / * = % {b}",
		"{t} b \u00e9 p o \u00e8 \u02c6 v d l j z w",
		"a u i e , c t s r n m \u00E7 {enter}",
		"{s} \u00ea \u00E0 y x . k \' q g h f {s}",
		"{a} {alt} {space} {alt} {c}"
	],
	'shift' : [
		"# 1 2 3 4 5 6 7 8 9 0 \u00b0 ` {b}",
		"{t} B \u00c9 P O \u00c8 ! V D L J Z W",
		"A U I E ; C T S R N M \u00c7 {enter}",
		"{s} \u00ca \u00c0 Y X : K ? Q G H F {s}",
		"{a} {alt} {space} {alt} {c}"
	],
	'alt' : [
		"\u2013 \u2014 < > [ ] ^ \u00b1 \u2212 \u00f7 \u00d7 \u2260 \u2030 {b}",
		"{t} | \u00b4 & \u0153 ` \u00a1 \u02c7 \u00f0 / \u0133 \u0259 \u02d8",
		"\u00e6 \u00f9 \u00a8 \u20ac \u2019 \u00a9 \u00fe \u00df \u00ae ~ \u00af \u00b8 {enter}",
		"{s} / \\ { } \u2026 ~ \u00bf \u00b0 \u00b5 \u2020 \u02db {s}",
		"{a} {alt} {space} {alt} {c}"
	],
	'alt-shift' : [
		"\u00b6 \u201e \u201c \u201d \u2264 \u2265 {empty} \u00ac \u00bc \u00bd \u00be \u2032 \u2033 {b}",
		"{t} \u00A6 \u02DD \u00A7 \u0152 ` \u00A1 {empty} \u00D0 {empty} \u0132 \u018F \u02d8",
		"\u00c6 \u00d9 \u02d9 \u00a4 \u031b \u017f \u00de \u1e9e \u2122 {empty} \u00ba , {enter}",
		"{s} {empty} {empty} \u2018 \u2019 \u00B7 {empty} \u0309 \u0323 {empty} \u2021 \u00AA {s}",
		"{a} {alt} {space} {alt} {c}"
	]
};

/* German keyboard layouts
 * contains layout: 'german-qwertz-1' & 'german-qwertz-2'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/german.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'german-qwertz-1' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* from http://ascii-table.com/keyboard.php/129 */
jQuery.keyboard.layouts['german-qwertz-1'] = {
	'name' : 'german-qwertz-1',
	'lang' : ['de'],
	'normal' : [
		"\u0302 1 2 3 4 5 6 7 8 9 0 \u00df \u0301 {bksp}",
		"{tab} q w e r t z u i o p \u00fc +",
		"a s d f g h j k l \u00f6 \u00e4 # {enter}",
		"{shift} < y x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'\u00b0 ! " \u00a7 $ % & / ( ) = ? \u0300 {bksp}',
		"{tab} Q W E R T Z U I O P \u00dc *",
		"A S D F G H J K L \u00d6 \u00c4 ' {enter}",
		"{shift} > Y X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'\u0302 1 \u00b2 \u00b3 4 5 6 { [ ] } \\ \u0301 {bksp}',
		"{tab} @ w \u20ac r t z u i o p \u00fc \u0303",
		"a s d f g h j k l \u00f6 \u00e4 # {enter}",
		"{shift} \u007c y x c v b n \u00b5 , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* from http://ascii-table.com/keyboard.php/150G-1 */
jQuery.keyboard.layouts['german-qwertz-2'] = {
	'name' : 'german-qwertz-2',
	'lang' : ['de'],
	'normal' : [
		"\u00a7 1 2 3 4 5 6 7 8 9 0 ' \u0302 {bksp}",
		"{tab} q w e r t z u i o p \u00fc \u0308",
		"a s d f g h j k l \u00f6 \u00e4 $ {enter}",
		"{shift} < y x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'\u00b0 + " * \u00e7 % & / ( ) = ? \u0300 {bksp}',
		"{tab} Q W E R T Z U I O P \u00e8 !",
		"A S D F G H J K L \u00e9 \u00e0 \u00a3 {enter}",
		"{shift} > Y X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"\u00a7 \u007c @ # 4 5 \u00ac \u00a6 \u00a2 9 0 \u0301 \u0303 {bksp}",
		"{tab} q w \u20ac r t z u i o p [ ]",
		"a s d f g h j k l \u00f6 { } {enter}",
		"{shift} \\ y x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

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
jQuery.keyboard.layouts['hebrew-qwerty'] = {
	'name' : 'hebrew-qwerty',
	'lang' : ['he'],
	'normal' : [
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

/* Hindi keyboard layouts
* contains layout: 'hindi'
*
* To use:
*  Point to this js file into your page header: <script src="layouts/hindi.js" type="text/javascript"></script>
*  Initialize the keyboard using: $('input').keyboard({ layout: 'hindi' });
*
* license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
*/

jQuery.keyboard.layouts['hindi'] = {
	'name' : 'hindi',
	'lang' : ['hi'],
	'normal' : [
		'` \u090D \u0945 \u094D\u0930 \u0930\u094D \u091C\u094D\u091E \u0924\u094D\u0930 \u0915\u094D\u0937 \u0936\u094D\u0930 \u096F \u0966 - \u0943 {bksp}',
		'{tab} \u094C \u0948 \u093E \u0940 \u0942 \u092C \u0939 \u0917 \u0926 \u091C \u0921 \u093C \u0949 \\',
		'\u094B \u0947 \u094D \u093F \u0941 \u092A \u0930 \u0915 \u0924 \u091A \u091F {enter}',
		'{shift} \u0902 \u092E \u0928 \u0935 \u0932 \u0938 , . \u092F {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'shift' : [
		'~ \u0967 \u0968 \u0969 \u096A \u096B \u096C \u096D \u096E \u096F \u0966 \u0903 \u090B {bksp}',
		'{tab} \u0914 \u0910 \u0906 \u0908 \u090A \u092D \u0919 \u0918 \u0927 \u091D \u0922 \u091E \u0911',
		'\u0913 \u090F \u0905 \u0907 \u0909 \u092B \u0931 \u0916 \u0925 \u091B \u0920 {enter}',
		'{shift} "" \u0901 \u0923 \u0928 \u0935 \u0933 \u0936 \u0937 \u0964 \u095F {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; ' {enter}",
		"{shift} z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		"~ ! @ # $ % ^ & * ( ) _ + {bksp}",
		"{tab} Q W E R T Y U I O P { } |",
		'A S D F G H J K L : " {enter}',
		"{shift} Z X C V B N M < > ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

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

/* qwertz by Tóth Gergely (https://github.com/tgely) - */
jQuery.keyboard.layouts['hungarian-qwertz-1'] = {
	'name' : 'hungarian-qwertz-1',
	'lang' : ['hu'],
	"default" : [
		"0 1 2 3 4 5 6 7 8 9 \u00f6 \u00fc \u00f3 \u0171 {bksp}",
		"{tab} q w e r t z u i o p \u0151 \u00fa",
		"a s d f g h j k l \u00e9 \u00e1 {enter}",
		"{shift} \u00ed y x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"shift" : [
		"\u00a7 ' \" + ! % / = ( ) \u00d6 \u00dc \u00d3 \u0170 {bksp}",
		"{tab} Q W E R T Z U I O P \u0150 \u00da",
		"A S D F G H J K L \u00c9 \u00c1 {enter}",
		"{shift} \u00cd Y X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt" : [
		"{sp:1} ~ \u02c7 ^ \u02d8 \u00b0 \u02db ` \u02d9 \u00b4 \u02dd \u00a8 \u00b8 \u00a4 {bksp}",
		"{tab} \\ | \u00c4 {sp:1} {sp:1} {sp:1} \u20ac \u00cd {sp:1} {sp:1} \u00f7 \u00d7",
		"\u00e4 \u0111 \u0110 [ ] {sp:1} \u00ed \u0142 \u0141 $ \u00df {enter}",
		"{shift} < > # & @ { } < ; > * {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

jQuery.keyboard.layouts['hungarian-qwertz-2'] = {
	'name' : 'hungarian-qwertz-2',
	'lang' : ['hu'],
	"default" : [
		"0 1 2 3 4 5 6 7 8 9 \u00f6 \u00fc \u00f3 {bksp}",
		"{tab} q w e r t z u i o p \u0151 \u00fa",
		"a s d f g h j k l \u00e9 \u00e1 \u0171 {enter}",
		"{shift} \u00ed y x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"shift" : [
		"\u00a7 ' \" + ! % / = ( ) \u00d6 \u00dc \u00d3 {bksp}",
		"{tab} Q W E R T Z U I O P \u0150 \u00da",
		"A S D F G H J K L \u00c9 \u00c1 \u0170 {enter}",
		"{shift} \u00cd Y X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt" : [
		"{sp:1} ~ \u02c7 ^ \u02d8 \u00b0 \u02db ` \u02d9 \u00b4 \u02dd \u00a8 \u00b8 {bksp}",
		"{tab} \\ | \u00c4 {sp:1} {sp:1} {sp:1} \u20ac \u00cd {sp:1} {sp:1} \u00f7 \u00d7",
		"\u00e4 \u0111 \u0110 [ ] {sp:1} \u00ed \u0142 \u0141 $ \u00df \u00a4 {enter}",
		"{shift} < > # & @ { } < ; > * {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* hungarian ansi keyboard layouts
 * file codepage: ansi
 * contains layout: 'hungariansi-qwertz-1' & 'hungariansi-qwertz-2'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/hungarianansi.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'hungarianansi-qwerty-2' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* qwertz by Tóth Gergely (https://github.com/tgely) -  helped :http://www.fileformat.info/info/unicode/char/search.htm */
jQuery.keyboard.layouts['hungarianansi-qwertz-1'] = {
	'name' : 'hungarianansi-qwertz-1',
	'lang' : ['hu'],
	'normal' : [
		"0 1 2 3 4 5 6 7 8 9 \u00f6 \u00fc \u00f3 \u0171 {bksp}",
		"{tab} q w e r t z u i o p \u0151 \u00fa",
		"a s d f g h j k l \u00e9 \u00e1 {enter}",
		"{shift} \u00ed y x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'\u00a7 \u0027 " + ! % / = ( ) \u00d6 \u00dc \u00d3 \u0170 {bksp}',
		"{tab} Q W E R T Z U I O P \u0150 \u00da",
		"A S D F G H J K L \u00c9 \u00c1 {enter}",
		"{shift} \u00cd Y X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
    '{sp:1} \u007e \u02c7 \u005e \u02d8 \u00b0 \u02db \u0060 \u02d9 \u00b4 \u02dd \u00a8 \u00b8 \u00a4 {bksp}', // most of non used
    '{tab} \\ | \u00c4 {sp:1} {sp:1} {sp:1} \u20ac \u00cd {sp:1} {sp:1} \u00f7 \u00d7',
    '\u00e4 \u0111 \u0110 [ ] {sp:1} \u00ed \u0142 \u0141 $ \u00df {enter}',
    '{shift} < > # & @ { } < ; > * {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};

jQuery.keyboard.layouts['hungarianansi-qwertz-2'] = {
	'name' : 'hungarianansi-qwertz-2',
	'lang' : ['hu'],
	'normal' : [
		"0 1 2 3 4 5 6 7 8 9 \u00f6 \u00fc \u00f3 {bksp}",
		"{tab} q w e r t z u i o p \u0151 \u00fa",
		"a s d f g h j k l \u00e9 \u00e1 \u0171 {enter}",
		"{shift} \u00ed y x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'\u00a7 \u0027 " + ! % / = ( ) \u00d6 \u00dc \u00d3 {bksp}',
		"{tab} Q W E R T Z U I O P \u0150 \u00da",
		"A S D F G H J K L \u00c9 \u00c1 \u0170 {enter}",
		"{shift} \u00cd Y X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'{sp:1} \u007e \u02c7 \u005e \u02d8 \u00b0 \u02db \u0060 \u02d9 \u00b4 \u02dd \u00a8 \u00b8 {bksp}', // most of non used
		'{tab} \\ | \u00c4 {sp:1} {sp:1} {sp:1} \u20ac \u00cd {sp:1} {sp:1} \u00f7 \u00d7',
		'\u00e4 \u0111 \u0110 [ ] {sp:1} \u00ed \u0142 \u0141 $ \u00df \u00a4 {enter}',
		'{shift} < > # & @ { } < ; > * {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};

/* Japanese (hiragana and katakana) keyboard layouts
 * contains layouts for: 'japanese-kana' & 'japanese-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/japanese.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'japanese-kana' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 *
 * Japanese layout by Paco Alcantara (https://github.com/pacoalcantara), based on:
 * http://www.fileformat.info/info/unicode/char/search.htm
 * http://www.tamasoft.co.jp/en/general-info/unicode.html
 * http://ascii-table.com/keyboard.php/194
 * Preferably use 'japanese-kana' unless roma-ji characters are needed on input.
 */
jQuery.keyboard.layouts['japanese-kana'] = {
	'name' : 'japanese-kana',
	'lang' : ['ja'],
	'normal' : [
		'0 1 2 3 4 5 6 7 8 9',
		'\u3042 \u3044 \u3046 \u3048 \u304a \u306f \u3072 \u3075 \u3078 \u307b',
		'\u304b \u304d \u304f \u3051 \u3053 \u307e \u307f \u3080 \u3081 \u3082',
		'\u3055 \u3057 \u3059 \u305b \u305d \u3084 \u3086 \u3088 {bksp}',
		'\u305f \u3061 \u3064 \u3066 \u3068 \u3089 \u308a \u308b \u308c \u308d',
		'\u306a \u306b \u306c \u306d \u306e \u308f \u3092 \u3093 \u3090 \u3091',
		'\u3041 \u3043 \u3045 \u3047 \u3049 \u3099 \u309a \u0301 {shift}',
		'\u3083 \u3085 \u3087 \u3063 \u0301 \u30fb \u30fc \u301c {alt}',
		'{accept} {space} {cancel} {enter}'
	],
	'shift' : [
		'0 1 2 3 4 5 6 7 8 9',
		'\u30a2 \u30a4 \u30a6 \u30a8 \u30aa \u30cf \u30d2 \u30d5 \u30d8 \u30db',
		'\u30ab \u30ad \u30af \u30b1 \u30b3 \u30de \u30df \u30e0 \u30e1 \u30e2',
		'\u30b5 \u30b7 \u30b9 \u30bb \u30bd \u30e4 \u30e6 \u30e8  {bksp}',
		'\u30bf \u30c1 \u30c4 \u30c6 \u30c8 \u30e9 \u30ea \u30eb \u30ec \u30ed',
		'\u30ca \u30cb \u30cc \u30cd \u30ce \u30ef \u30f2 \u30f3 \u30f0 \u30f1',
		'\u30a1 \u30a3 \u30a5 \u30a7 \u30a9 \u3099 \u309a \u0301 {shift}',
		'\u30e3 \u30e5 \u30e7 \u30c3 \u0301 \u30fb \u30fc \u301c {alt}',
		'{accept} {space} {cancel} {enter}'
	],
	'alt' : [
		'0 1 2 3 4 5 6 7 8 9 - ^ \uffe5 {bksp}',
		"{tab} q w e r t y u i o p \u0040 [",
		"a s d f g h j k l ; : ] {enter}",
		" {shift} z x c v b n m , . / \\  {shift}",
		"{accept} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		'0 1 2 3 4 5 6 7 8 9 - ^ \uffe5 {bksp}',
		"{tab} Q W E R T Y U I O P \u0040 [",
		"A S D F G H J K L ; : ] {enter}",
		" {shift} Z X C V B N M , . / \\ {shift}",
		"{accept} {space} {alt} {cancel}"
	]
};

jQuery.keyboard.layouts['japanese-qwerty'] = {
	'name' : 'japanese-qwerty',
	'lang' : ['ja'],
	'normal' : [
		"1 2 3 4 5 6 7 8 9 0 - ^ \u00a5 {bksp}",
		"{tab} q w e r t y u i o p \u0040 [",
		"a s d f g h j k l ; : ] {enter}",
		"{shift} z x c v b n m , . / \\ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		"! \" # $ % & \' ( ) \u0301 = ~ | {bksp}",
		"{tab} Q W E R T Y U I O P \u0060 {",
		"A S D F G H J K L + * } {enter}",
		"{shift} Z X C V B N M < > ? _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"\u306c \u3075 \u3042 \u3046 \u3048 \u304a \u3084 \u3086 \u3088 \u308f \u307b \u3078 \uff70 {bksp}",
		"{tab} \u305f \u3066 \u3044 \u3059 \u304b \u3093 \u306a \u306b \u3089 \u305b \uff9e \uff9f",
		"\u3061 \u3068 \u3057 \u306f \u304d \u304f \u307e \u306e \u308a \u308c \u3051 \u3080 {enter}",
		"{shift} \u3064 \u3055 \u305d \u3072 \u3053 \u307f \u3082 \u306d \u308b \u3081 \u308d {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		"\u0301 \u0301 \u3041 \u3045 \u3047 \u3049 \u3083 \u3085 \u3087 \u3092 \u0301 \u0301 \u0301 {bksp}",
		"{tab} \u0301 \u0301 \u3043 \u0301 \u0301 \u0301 \u0301 \u0301 \u0301 \u0301 \u0301 \uff62",
		"\u0301 \u0301 \u0301 \u0301 \u0301 \u0301 \u0301 \u0301 \u0301 \u0301 \u30f6 \uff63 {enter}",
		"{shift} \u3063 \u0301 \u0301 \u0301 \u0301 \u0301 \u0301 \uff64 \uff61 \uff65 \u00a6 {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* Latvian keyboard layouts
 * contains layout: 'latvian-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/latvian.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'latvian-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */
jQuery.keyboard.layouts['latvian-qwerty'] = {
	'name' : 'latvian-qwerty',
	'lang' : ['lv'],
	'normal' : [
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

/* Mongolian keyboard layouts
* contains layout: 'mongolian'
*
* To use:
*  Point to this js file into your page header: <script src="layouts/mongolian.js" type="text/javascript"></script>
*  Initialize the keyboard using: $('input').keyboard({ layout: 'mongolian' });
*
* license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
*/
jQuery.keyboard.layouts['mongolian'] = {
	'name' : 'mongolian',
	'lang' : ['mn'],
	'normal' : [
		'= \u2116 - " \u20AE : . _ , % ? \u0435 \u0449 {bksp}',
		'{tab} \u0444 \u0446 \u0443 \u0436 \u044d \u043D \u0433 \u0448 \u04af \u0437 \u043A \u044A \\',
		'\u0439 \u044B \u0431 \u04e9 \u0430 \u0445 \u0440 \u043e \u043B \u0434 \u043f {enter}',
		'{shift} \u044F \u0447 \u0451 \u0441 \u043c \u0438 \u0442 \u044c \u0432 \u044e {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],

	'shift' : [
		'+ 1 2 3 4 5 6 7 8 9 0 \u0415 \u0429 {bksp}',
		'{tab} \u0424 \u0426 \u0423 \u0416 \u042d \u041D \u0413 \u0428 \u04AE \u0417 \u041a \u042A |',
		'\u0419 \u042B \u0411 \u04e8 \u0410 \u0425 \u0420 \u041e \u041b \u0414 \u041f {enter}',
		'{shift} \u042F \u0427 \u0401 \u0421 \u041c \u0418 \u0422 \u042c \u0412 \u042e {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; ' {enter}",
		"{shift} z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		"~ ! @ # $ % ^ & * ( ) _ + {bksp}",
		"{tab} Q W E R T Y U I O P { } |",
		'A S D F G H J K L : " {enter}',
		"{shift} Z X C V B N M < > ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

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

/* Polish keyboard layouts
 * contains layout: 'polish-qwerty'
 * Author: Piotr Roznicki
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/polish.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'polish-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

jQuery.keyboard.layouts['polish-qwerty'] = {
	'name' : 'polish-qwerty',
	'lang' : ['pl'],
	'normal' : [
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
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w \u0119 r t y \u20ac i \u00f3 p [ ] \u00B0",
		'\u0105 \u015b d f g h j k \u0142 : " {enter}',
		"{shift} \u017c \u017a \u0107 v b \u0144 m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* Portuguese (pt) keyboard layout
 * contains layout: 'portuguese-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/portuguese-pt.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'portuguese-pt' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference

 * Portuguese-pt layout by Luiz Castelo-Branco ( translations at Castelo-Branco . org ), based on:
 * http://ascii-table.com/keyboard.php/163 and/with
 * Unicode 6.2 from http://www.unicode.org/Public/6.2.0/charts/CodeCharts.pdf

*/

// portuguese-pt
jQuery.keyboard.layouts['portuguese-qwerty'] = {
	'name' : 'portuguese-qwerty',
	'lang' : ['pt'],
	'normal' : [
		"\u005C 1 2 3 4 5 6 7 8 9 0 \u0027 \u00ab {bksp}",
		"{tab} q w e r t y u i o p \u002b \u00b4",
		"a s d f g h j k l \u00e7 \u00ba \u007e {enter}",
		"{shift} \u003c z x c v b n m \u002c \u002e \u002d {shift}",
		"{cancel} {space} {alt} {combo} {accept}"
	],
	'shift' : [
		"\u007c \u0021 \u0022 \u0023 \u0024 \u0025 \u0026 \u002f \u0028 \u0029 \u003d \u003F \u00bb {bksp}",
		"{tab} Q W E R T Y U I O P \u002a \u0060",
		"A S D F G H J K L \u00c7 \u00aa \u005e {enter}",
		"{shift} \u003e Z X C V B N M \u003b \u003a \u005f {shift}",
		"{cancel} {space} {alt} {combo} {accept}"
	],
	// AltGr
	'alt' : [
		"\u005C 1 \u0040 \u00a3 \u00a7 \u20ac 6 \u007b \u005b \u005d \u007d \u0027 \u00ab {bksp}",
		"{tab} q w \u20ac r t y u i o p \u0308 \u00b4",
		"a s d f g h j k l \u00e7 \u00ba \u007e {enter}",
		"{shift} \u003c z x c v b n m \u002c \u002e \u002d {shift}",
		"{cancel} {space} {alt} {combo} {accept}"
	],
	'alt-shift' : [
		"\u007c \u0021 \u0022 \u0023 \u0024 \u0025 \u0026 \u002f \u0028 \u0029 \u003d \u003F \u00bb {bksp}",
		"{tab} Q W \u20ac R T Y U I O P \u0308 \u0060",
		"A S D F G H J K L \u00c7 \u00aa \u005e {enter}",
		"{shift} \u003e Z X C V B N M \u003b \u003a \u005f {shift}",
		"{cancel} {space} {alt} {combo} {accept}"
	]

};

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

jQuery.keyboard.layouts['romanian'] = {
	'normal' : [
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

/* Russian keyboard layouts
 * contains layout: 'russian-qwerty' & 'russian-mac'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/russian.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'russian-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* Thanks to Yury Kotlyarov (https://github.com/yura) */
jQuery.keyboard.layouts['russian-qwerty'] = {
	'name' : 'Russian-qwerty',
	'lang' : ['ru'],
	'normal' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t y u i o p [ ] \\",
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
		"\u0451 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} \u0439 \u0446 \u0443 \u043a \u0435 \u043d \u0433 \u0448 \u0449 \u0437 \u0445 \u044a \\",
		"\u0444 \u044b \u0432 \u0430 \u043f \u0440 \u043e \u043b \u0434 \u0436 \u044d {enter}",
		"{shift} \u044f \u0447 \u0441 \u043c \u0438 \u0442 \u044c \u0431 \u044e . {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		'\u0401 ! " \u2116 ; \u20ac : ? * ( ) _ + {bksp}',
		"{tab} \u0419 \u0426 \u0423 \u041a \u0415 \u041d \u0413 \u0428 \u0429 \u0417 \u0425 \u042a /",
		"\u0424 \u042b \u0412 \u0410 \u041f \u0420 \u041e \u041b \u0414 \u0416 \u042d {enter}",
		"{shift} \u042f \u0427 \u0421 \u041c \u0418 \u0422 \u042c \u0411 \u042e , {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

jQuery.keyboard.layouts["russian-mac"] = {
	'name' : 'Russian-mac',
	'lang' : ['ru'],
	"default": [
		"] 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} \u0439 \u0446 \u0443 \u043a \u0435 \u043d \u0433 \u0448 \u0449 \u0437 \u0445 \u044a \u0451",
		"\u0444 \u044b \u0432 \u0430 \u043f \u0440 \u043e \u043b \u0434 \u0436 \u044d {enter}",
		"{shift} \u044f \u0447 \u0441 \u043c \u0438 \u0442 \u044c \u0431 \u044e / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	shift: [
		'[ ! " \u2116 % : , . ; ( ) _ + {bksp}',
		"{tab} \u0419 \u0426 \u0423 \u041a \u0415 \u041d \u0413 \u0428 \u0429 \u0417 \u0425 \u042a \u0401",
		"\u0424 \u042b \u0412 \u0410 \u041f \u0420 \u041e \u041b \u0414 \u0416 \u042d {enter}",
		"{shift} \u042f \u0427 \u0421 \u041c \u0418 \u0422 \u042c \u0411 \u042e ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	alt: [
		"] ! @ # $ % ^ & * ( ) \u2013 \u00bb {bksp}",
		"{tab} \u0458 \u045f \u045c \u00ae \u2020 \u045a \u0453 \u0455 \u045e \u2018 \u201c \u044a \u0451",
		"\u0192 \u044b \u045b \u00f7 \u00a9 } \u00b0 \u0459 \u2206 \u2026 \u044d {enter}",
		"{shift} \u0452 \u2248 \u2260 \u00b5 \u0438 \u2122 ~ \u2264 \u2265 \u201c {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt-shift": [
		"[ | \" \u00a3 \u20ac \u221e \u00ac \u00b6 \u221a ' ` \u2014 \u00ab {bksp}",
		"{tab} \u0408 \u040f \u040c \u00ae \u2020 \u040a \u0403 \u0405 \u040e \u2019 \u201d \u042a \u0401 ",
		"\u0192 \u042b \u040b \u00f7 \u00a9 { \u2022 \u0409 \u2206 \u2026 \u042d {enter}",
		"{shift} \u0402 \u2248 \u2260 \u00b5 \u0418 \u2122 ~ < > \u201e {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

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
jQuery.keyboard.layouts['spanish-qwerty'] = {
	'name' : 'spanish-qwerty',
	'lang' : ['es'],
	'normal' : [
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
		"{tab} @ w e r t y u i o p \u0301 \u0303",
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

jQuery.keyboard.layouts['spanish-qwerty-sp'] = {
	'name' : 'spanish-qwerty-sp',
	'lang' : ['es'],
	'normal' : [
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

/* Swedish keyboard layouts
 * contains layout: 'swedish-qwerty' & 'swedish-dvorak'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/scandinavian.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'swedish-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* qwerty by Mika Perreri Korhonen (https://github.com/jouk0) -  */
jQuery.keyboard.layouts['swedish-qwerty'] = {
	'name' : 'swedish-qwerty',
	'lang' : ['sv'],
	'normal' : [
		"\u00a7 1 2 3 4 5 6 7 8 9 0 + \u0301 {bksp}",
		"{tab} q w e r t y u i o p \u00e5 \u0308",
		"a s d f g h j k l \u00f6 \u00e4 ' {enter}",
		"{shift} < z x c v b n m , . - {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'\u00bd ! " # \u00a4 % & / ( ) = ? \u0300 {bksp}',
		"{tab} Q W E R T Y U I O P \u00c5 \u0302",
		"A S D F G H J K L \u00d6 \u00c4 * {enter}",
		"{shift} > Z X C V B N M ; : _ {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'\u00a7 1 @ \u00a3 $ 5 6 { [ ] } \\ \u0301 {bksp}',
		'{tab} q w € r t y u i o p \u00e5 \u0303',
		"a s d f g h j k l \u00f6 \u00e4 ' {enter}",
		'{shift} | z x c v b n \u00b5 , . - {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};

/* dvorak - from http://www.ludd.luth.se/~torger/se_dvorak.html */
jQuery.keyboard.layouts['swedish-dvorak'] = {
	'name' : 'swedish-qwerty',
	'lang' : ['sv'],
	'normal' : [
		"\u00a7 1 2 3 4 5 6 7 8 9 0 + \u0301 {bksp}",
		"{tab} \u00f6 \u00e5 \u00e4 p y f g c r l q \u00a8",
		"a o e u i d h t n s - < {enter}",
		"{shift} ' , . j k x b m w v z {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'\u00bd ! " # \u00a4 % & / ( ) = ? ` {bksp}',
		"{tab} \u00d6 \u00c5 \u00c4 P Y F G C R L Q ^",
		"A O E U I D H T N S _ > {enter}",
		"{shift} * ; : J K X B M W V Z {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"\u00a7 1 @ \u00a3 $ 5 6 { [ ] } \\ \u00b4 {bksp}",
		"{tab} \u00f6 \u00e5 \u00e4 p y f g c r l q ~",
		"a o e u i d h t n s - | {enter}",
		"{shift} ' , . j k x b m w v z {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* Tamil keyboard layouts
 * contains layout: 'tamil-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/tamil.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'tamil-tamil99-mod' });
 *
 * Copyright 2013, Muthiah Annamalai
 *
 * Author :  Muthiah Annamalai <ezhillang@gmail.com>
 *
 * This file derives from general keyboard jQuery plugin.
 * You may reuse this file under MIT License
 *
 * Acknowledgements : Thamiza project contributors Mugunth, Sethu have reference implementations of
 *                    of the keyboard
 */

/* based on Tamil99 keyboard layout - modified Tamil  99 keyboard */
jQuery.keyboard.layouts['tamil-tamil99-mod'] = {
	'name' : 'tamil-tamil99-mod',
	'lang' : ['ta'],
	'normal' : [
        /* ா	ி	ீ	ு	ூ	ெ	ே	ை	ொ	ோ	ௌ	ஃ  */
		"\u0BBE \u0BBF \u0BC0 \u0BC1 \u0BC2 \u0BC6 \u0BC7 \u0BC8 \u0BCA \u0BCB \u0BCC \u0B83 {bksp}",
        /*      ஆ     ஈ      ஊ     ஐ    ஏ      ள      ற     ன     ட      ண   ச      ஞ   \   */
		"{tab} \u0b86 \u0b88 \u0b8a \u0b90 \u0b8f \u0bb3 \u0bb1 \u0ba9 \u0b9f \u0ba3 \u0b9a \u0b9e ",
        /*  அ    இ      உ     ்       எ      க      ப    ம      த      ந      ய  */
		"\u0b85 \u0b87  \u0b89 \u0bcd  \u0b8e  \u0b95 \u0baa \u0bae \u0ba4 \u0ba8 \u0baf {enter}",
        /*         ஔ    ஒ      ஓ    வ     ங     ல      ர    , . ழ    */
		"{shift} \u0b94 \u0b93 \u0b92 \u0bb5 \u0b99 \u0bb2 \u0bb0 , . \u0bb4 {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
         /* numeric key row */
		"`      1      2       3      4     5     6   7  8  9  0 -  =  {bksp}",
        /* sanskrit row */
        /*     ஸ      ஷ        ஜ      ஹ           ஶ்ரீ                       க்ஷ                       */
		"{tab} \u0bb8  \u0bb7  \u0b9c   \u0bb9  \u0bb6\u0bcd\u0bb0\u0bc0  \u0b95\u0bcd\u0bb7 \u0020  [ ]  { } ",
        /* ௹     ௺    ௸     ஃ  \u0020 \u0020 \u0020 \" : ; \' {enter} */
		"\u0bf9 \u0bfa \u0bf8 \u0b83 \u0020 \u0020 \u0020 \" : ; \' {enter}",
        /* ௳ ௴ ௵ ௶ ௷ */
        "{shift} \u0bf3 \u0bf4 \u0bf5 \u0bf6 \u0bf7 \u0020 / \u0020 \u0020 / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"\u0060 1 2 3 4 5 6 7 8 9 0 - \u003D {bksp}",
		"{tab} q w e r t y u i o p \u005B \u005D \u005C",
		"a s d f g h j k l ; \u0027 {enter}",
		"{shift} z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		"\u007E | @ # $ % \u00ac & * ( ) _ + {bksp}",
		"{tab} Q W E R T Y U I O P ! \u00a6 \u00a2",
		"A S D F G H J K L : \"  {enter}",
		"{shift} Z X C V B N M { } ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* Thai keyboard layouts
 * contains layout: 'thai-qwerty'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/thai.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'thai-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* based on http://ascii-table.com/keyboard.php/190 */
jQuery.keyboard.layouts['thai-qwerty'] = {
	'name' : 'thai-qwerty',
	'lang' : ['th'],
	'normal' : [
		"\u005F \u0E45 \u002F \u002D \u0E20 \u0E16 \u0E38 \u0E36 \u0E04 \u0E05 \u0E08 \u0E02 \u0E0A {bksp}",
		"{tab} \u0E46 \u0E44 \u0E33 \u0E1E \u0E30 \u0E31 \u0E35 \u0E23 \u0E19 \u0E22 \u0E1A \u0E25 \u0E03 ",
		"\u0E1F \u0E2B \u0E01 \u0E14 \u0E40 \u0E49 \u0E48 \u0E32 \u0E2A \u0E27 \u0E07 {enter}",
		"{shift} \u0E1C \u0E1B \u0E41 \u0E2D \u0E34 \u0E37 \u0E17 \u0E21 \u0E43 \u0E1D {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		"% + \u0E51 \u0E52 \u0E53 \u0E54 \u0E39 \u0E3F \u0E55 \u0E56 \u0E57 \u0E58 \u0E59 {bksp}",
		"{tab} \u0E50 \u0022 \u0E0E \u0E11 \u0E18 \u0E4D \u0E4A \u0E13 \u0E2F \u0E0D \u0E10 \u002C \u0E05",
		"\u0E24 \u0E06 \u0E0F \u0E42 \u0E0C \u0E47 \u0E4B \u0E29 \u0E28 \u0E0B \u002E {enter}",
		"{shift} ( ) \u0E09 \u0E2E \u0E3A \u0E4C \u003F \u0E12 \u0E2C \u0E26 {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"\u0060 1 2 3 4 5 6 7 8 9 0 - \u003D {bksp}",
		"{tab} q w e r t y u i o p \u005B \u005D \u005C",
		"a s d f g h j k l ; \u0027 {enter}",
		"{shift} z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		"\u007E | @ # $ % \u00ac & * ( ) _ + {bksp}",
		"{tab} Q W E R T Y U I O P ! \u00a6 \u00a2",
		"A S D F G H J K L : \"  {enter}",
		"{shift} Z X C V B N M { } ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* Turkish keyboard layouts
 * contains layout: 'turkish-q' & 'turkish-f'
 *
 * Contributor   Baris Aydinoglu
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/turkish.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'turkish-q' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* from http://ascii-table.com/keyboard.php/179 */
jQuery.keyboard.layouts['turkish-q'] = {
	'name' : 'turkish-q',
	'lang' : ['tr'],
	'normal' : [
		"\u0022 1 2 3 4 5 6 7 8 9 0 \u002a \u002d {bksp}",
		"{tab} q w e r t y u \u0131 o p \u011f \u00fc",
		"{lock} a s d f g h j k l \u015f \u0069 , {enter}",
		"{shift} < z x c v b n m \u00f6 \u00e7 . {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'\u00e9 ! \u0027 \u0302 + % & / ( ) = ? \u005f {bksp}',
		"{tab} Q W E R T Y U \u0049 O P \u011e \u00DC",
		"{lock} A S D F G H J K L \u015e \u0130 ; {enter}",
		"{shift} > Z X C V B N M \u00d6 \u00c7 : {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"\u0022 1 \u00a3 # $ \u00bd 6 { [ ] } \u005c \u002d {bksp}",
		"{tab} @ w \u20ac r t y u \u0131 o p \u0308 \u0303",
		"{lock} a s d f g h j k l \u0301 \u0069 \u0300 {enter}",
		"{shift} | z x c v b n m \u00f6 \u00e7 . {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* from http://ascii-table.com/keyboard.php/440 */
jQuery.keyboard.layouts['turkish-f'] = {
	'name' : 'turkish-f',
	'lang' : ['tr'],
	'normal' : [
		"\u002B \u0031 \u0032 \u0033 \u0034 \u0035 \u0036 \u0037 \u0038 \u0039 \u0030 \u002F \u002D {bksp}",
		"{tab} \u0066 \u0067 \u011F \u0131 \u006F \u0064 \u0072 \u006E \u0068 \u0070 \u0071 \u0077",
		"{lock} \u0075 \u0069 \u0065 \u0061 \u00FC \u0074 \u006B \u006D \u006C \u0079 \u015F \u0078 {enter}",
		"{shift} \u003C \u006A \u00F6 \u0076 \u0063 \u00E7 \u007A \u0073 \u0062 \u002E \u002C {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		"\u002A \u0021 \u0022 \u0302 \u0024 \u0025 \u0026 \u0027 \u0028 \u0029 \u003D \u003F \u005F {bksp}",
		"{tab} \u0046 \u0047 \u011E \u0049 \u004F \u0044 \u0052 \u004E \u0048 \u0050 \u0051 \u0057",
		"{lock} \u0055 \u0130 \u0045 \u0041 \u00DC \u0054 \u004B \u004D \u004C \u0059 \u015E \u0058 {enter}",
		"{shift} \u003E \u004A \u00D6 \u0056 \u0043 \u00C7 \u005A \u0053 \u0042 \u003A \u003B {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"\u00AC \u00B9 \u00B2 \u0023 \u00BC \u00BD \u00BE \u007B \u005B \u005D \u007D \u005C \u002D {bksp}",
		"{tab} \u0040 \u0067 \u011F \u0131 \u006F \u00A5 \u0072 \u006E \u0068 \u00A3 \u0308 \u0303",
		"{lock} \u0075 \u00DF \u20AC \u0061 \u00FC \u0074 \u006B \u006D \u006C \u0301 \u015F \u0300 {enter}",
		"{shift} \u007C \u00AB \u00BB \u0076 \u0063 \u00E7 \u007A \u0073 \u00D7 \u00F7 \u002C {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* Vietnamese keyboard layouts + Telex key combinations (see https://github.com/Mottie/Keyboard/pull/136)
 * contains layout: 'vietnamese-qwerty'
 * Vinh Can Code: tbvinh@gmail.com
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/vietnamese.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'vietnamese-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* based on http://ascii-table.com/keyboard.php/461 */
jQuery.keyboard.layouts['vietnamese-qwerty'] = {
	'name' : 'vietnamese-qwerty',
	'lang' : ['vi'],
	'normal' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; ' {enter}",
		"{shift} z x c v b n m < > , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
		"{tab} Q W E R T Y U I O P { } |",
		"A S D F G H J K L : ' {enter}",
		"{shift} Z X C V B N M < > ; : ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		'{empty} \u0103 \u00e2 \u00ea \u00f4 {empty} \u031b {empty} {empty} {empty} \u0111 \u002d \u20ab {bksp}',
		"{tab} {empty} {empty} {empty} {empty} {empty} \u00ff {empty} {empty} \u0153 {empty} \u01b0 \u01a1 {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { } \u0302 {enter}",
		"{shift} {empty} {empty} \u00e7 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		'{empty} \u0102 \u00c2 \u00ca \u00d4 {empty} {empty} {empty} {empty} {empty} \u0110 \u005f + {bksp}',
		"{tab} {empty} {empty} {empty} {empty} {empty} \u0178 {empty} {empty} \u0152 {empty} \u01af \u01a0 {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { } \u0308 {enter}",
		"{shift} {empty} {empty} \u00c7 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

// Keyboard Language
// Ethiopic kezboard to support Amahric and Gǝʿǝz made by Pietro Liuzzo and Solomon Gebreyes Beyene.
// ***********************
jQuery.keyboard.language.amh = {
	language: 'ፊደል (Fidal) Amharic and Gǝʿǝz',
	display: {
		'a': '\u2714:መቀበል (Shift+Enter)', // check mark - same action as accept
		'accept': 'Accept:መቀበል (Shift+Enter)',
		'alt': 'AltGr:ተለዋጭ፡ ፊደል፡',
		'b': '\u2190:ማጥፊያ', // Left arrow (same as &larr;)
		'bksp': 'Bksp:ማጥፊያ',
		'c': '\u2716:መሠረዝ', // big X, close - same action as cancel
		'cancel': 'Cancel:መሠረዝ',
		'clear': 'C:ማፅዳት', // clear num pad
		'combo': '\u00f6:Toggle Combo Keys',
		'dec': '.:የአሀዝ፡ ቁጥር', // decimal point for num pad (optional), change '.' to ',' for European format
		'e': '\u21b5:መጀመር', // down, then left arrow - enter symbol
		'enter': 'Enter:መጀመር',
		'lock': '\u21ea Lock:አሮጌ፡ ለውጥ', // caps lock
		's': '\u21e7:መለወጥ', // thick hollow up arrow
		'shift': 'Shift:መለወጥ',
		'sign': '\u00b1:የሒሣብ፡ ምልክት፡ መቀየር', // +/- sign for num pad
		'space': '&nbsp;:ክፍት፡ቦታ',
		't': '\u21e5:መግፊያ', // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab': '\u21e5 Tab:መግፊያ' // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage: 'Use mousewheel to see other keys',

	comboRegex: /([`\'~\^\"a-z0-9\{\}\[\]\|<>])([a-z0-9_\-\.\|`\'~\^\"!,=])/mig,
	combos: {
		a: {
			a: '\u02be', '.': '\u1ea1', 1: "\u00e0", 2: "\u00e1", 3: "\u00e3", '=': "\u00e2", 9: "\u00e4", '-': "\u0101", ',': '\u1360'
		},
		A: {
			A: '\u02bf', '-': "\u0100", 1: "\u00c0", 2: "\u00c1", 3: "\u00c3", 9: "\u00c4", '=': "\u00c2"
		},
		e: {
			e: '\u01dd', '-': "\u0113", ',': '\u1367', 1: "\u00e8", 2: "\u00e9", 3: "\u1ebd", 9: "\u00eb", '=': "\u00ea"
		},
		E: {
			E: '\u018e', '-': "\u0112", 1: "\u00c8", 2: "\u00c9", 3: "\u1ebc", 9: "\u00cb", '=': "\u00ca"
		},
		i: {
			1: "\u00ec", 2: "\u00ed", 3: "\u0129", 9: "\u00ef", 9: "\u00f6", '=': "\u00ee"
		},
		I: {
			1: "\u00cc", 2: "\u00cd", 3: "\u0128", 9: "\u00cf", '=': "\u00ce"
		},
		o: {
			1: "\u00f2", 2: "\u00f3", 3: "\u00f5", '=': "\u00f4"
		},
		O: {
			1: "\u00d2", 2: "\u00d3", 3: "\u00d5", 9: "\u00d6", '=': "\u00d4"
		},
		u: {
			1: "\u00f9", 2: "\u00fa", 3: "\u0169", 9: "\u00fc", '=': "\u00fb"
		},
		U: {
			1: "\u00d9", 2: "\u00da", 3: "\u0168", 9: "\u00dc", '=': "\u00db"
		},
		'h': {
			a: "\u1200", u: "\u1201", i: "\u1202", A: "\u1203", E: "\u1204", e: "\u1205", o: "\u1206", '!': '\u1207', '_': '\u1e2b', '.': '\u1e25'
		},
		"l": {
			a: "\u1208", u: "\u1209", i: "\u120a", A: "\u120b", E: "\u120c", e: "\u120d", o: "\u120e", '!': '\u120F'
		},
		"H": {
			a: "\u1210", u: "\u1211", i: "\u1212", A: "\u1213", E: "\u1214", e: "\u1215", o: "\u1216", '!': '\u1217', '_': '\u1e2a'
		},
		"m": {
			a: "\u1218", u: "\u1219", i: "\u121a", A: "\u121b", E: "\u121c", e: "\u121d", o: "\u121e", '!': '\u121F'
		},
		"S": {
			a: "\u1220", u: "\u1221", i: "\u1222", A: "\u1223", E: "\u1224", e: "\u1225", o: "\u1226", '!': '\u1227', '.': '\u1e62', '|': '\u0160', 6: "\u015A"
		},
		"r": {
			a: "\u1228", u: "\u1229", i: "\u122a", A: "\u122b", E: "\u122c", e: "\u122d", o: "\u122e", '!': '\u122F'
		},
		"s": {
			a: "\u1230", u: "\u1231", i: "\u1232", A: "\u1233", E: "\u1234", e: "\u1235", o: "\u1236", '!': '\u1237', '.': '\u1e63', '|': '\u0161', 6: "\u015b"
		},
		"v": {
			a: "\u1238", u: "\u1239", i: "\u123a", A: "\u123b", E: "\u123c", e: "\u123d", o: "\u123e", '!': '\u123F'
		},
		"q": {
			a: "\u1240", u: "\u1241", i: "\u1242", A: "\u1243", E: "\u1244", e: "\u1245", o: "\u1246", '!': '\u1247'
		},
		"b": {
			a: "\u1260", u: "\u1261", i: "\u1262", A: "\u1263", E: "\u1264", e: "\u1265", o: "\u1266", '!': '\u1267', ',': '\u1363'
		},
		"B": {
			a: "\u1268", u: "\u1269", i: "\u126A", A: "\u126B", E: "\u126C", e: "\u126D", o: "\u126E", '!': '\u126F'
		},
		"t": {
			a: "\u1270", u: "\u1271", i: "\u1272", A: "\u1273", E: "\u1274", e: "\u1275", o: "\u1276", '!': '\u1277', '.': '\u1e6d'
		},
		"c": {
			a: "\u1278", u: "\u1279", i: "\u127a", A: "\u127b", E: "\u127c", e: "\u127d", o: "\u127e", '!': '\u127F', '_': '\u010d\u0323', '|': '\u010d', ',': '\u1364'
		},
		"x": {
			a: "\u1280", u: "\u1281", i: "\u1282", A: "\u1283", E: "\u1284", e: "\u1285", o: "\u1286", '!': '\u1287'
		},
		"n": {
			a: "\u1290", u: "\u1291", i: "\u1292", A: "\u1293", E: "\u1294", e: "\u1295", o: "\u1296", '!': '\u1297', 3: "\u00f1"
		},
		"N": {
			a: "\u1298", u: "\u1299", i: "\u129a", A: "\u129b", E: "\u129c", e: "\u129d", o: "\u129e", '!': '\u129F', 3: "\u00d1"
		},
		"'": {
			a: "\u12a0", u: "\u12a1", i: "\u12a2", A: "\u12a3", E: "\u12a4", e: "\u12a5", o: "\u12a6", '!': '\u12A7'
		},
		"k": {
			a: "\u12a8", u: "\u12a9", i: "\u12aa", A: "\u12ab", E: "\u12ac", e: "\u12ad", o: "\u12ae", '!': '\u12AF'
		},
		"K": {
			a: "\u12b8", u: "\u12b9", i: "\u12ba", A: "\u12bb", E: "\u12bc", e: "\u12bd", o: "\u12be"
		},
		"w": {
			a: "\u12c8", u: "\u12c9", i: "\u12ca", A: "\u12cb", E: "\u12cc", e: "\u12cd", o: "\u12ce", '!': '\u12CF', '=': "\u02b7"
		},
		"W": {
			a: "\u12d0", u: "\u12d1", i: "\u12d2", A: "\u12d3", E: "\u12d4", e: "\u12d5", o: "\u12d6"
		},
		"z": {
			a: "\u12d8", u: "\u12d9", i: "\u12da", A: "\u12db", E: "\u12dc", e: "\u12dd", o: "\u12de", '!': '\u12DF', '|': '\u017e'
		},
		"Z": {
			a: "\u12e0", u: "\u12e1", i: "\u12e2", A: "\u12e3", E: "\u12e4", e: "\u12e5", o: "\u12e6", '!': '\u12E7', '|': '\u017d'
		},
		"y": {
			a: "\u12e8", u: "\u12e9", i: "\u12ea", A: "\u12eb", E: "\u12ec", e: "\u12ed", o: "\u12ee", '!': '\u12EF', 1: "\u1ef3", 2: "\u00fd", 3: "\u1ef9", 9: "\u00ff", '=': "\u0177"
		},
		"d": {
			a: "\u12f0", u: "\u12f1", i: "\u12f2", A: "\u12f3", E: "\u12f4", e: "\u12f5", o: "\u12f6", '!': '\u12F7', '.': '\u1e0d', ',': '\u1366'
		},
		"L": {
			a: "\u12F8", u: "\u12F9", i: "\u12FA", A: "\u12FB", E: "\u12FC", e: "\u12FD", o: "\u12FE", '!': '\u12FF'
		},
		"D": {
			a: "\u1300", u: "\u1301", i: "\u1302", A: "\u1303", E: "\u1304", e: "\u1305", o: "\u1306", '!': '\u1307', '.': '\u1e0c'
		},
		"g": {
			a: "\u1308", u: "\u1309", i: "\u130a", A: "\u130b", E: "\u130c", e: "\u130d", o: "\u130e", '!': '\u130F', '|': '\u01e7'
		},
		"G": {
			a: "\u1318", u: "\u1319", i: "\u131a", A: "\u131b", E: "\u131c", e: "\u131d", o: "\u131e", '!': '\u131F', '|': '\u01e6'
		},
		"T": {
			a: "\u1320", u: "\u1321", i: "\u1322", A: "\u1323", E: "\u1324", e: "\u1325", o: "\u1326", '!': '\u1327', '.': '\u1e6c'
		},
		"C": {
			a: "\u1328", u: "\u1329", i: "\u132a", A: "\u132b", E: "\u132c", e: "\u132d", o: "\u132e", '!': '\u132F'
		},
		"p": {
			a: "\u1330", u: "\u1331", i: "\u1332", A: "\u1333", E: "\u1334", e: "\u1335", o: "\u1336", '!': '\u1337', 6: "\u1e57"
		},
		"j": {
			a: "\u1338", u: "\u1339", i: "\u133a", A: "\u133b", E: "\u133c", e: "\u133d", o: "\u133e", '!': '\u133F'
		},
		"J": {
			a: "\u1340", u: "\u1341", i: "\u1342", A: "\u1343", E: "\u1344", e: "\u1345", o: "\u1346", '!': '\u1347'
		},
		"f": {
			a: "\u1348", u: "\u1349", i: "\u134a", A: "\u134b", E: "\u134c", e: "\u134d", o: "\u134e", '!': '\u134F', ',': '\u1368'
		},
		"P": {
			a: "\u1350", u: "\u1351", i: "\u1352", A: "\u1353", E: "\u1354", e: "\u1355", o: "\u1356", '!': '\u1357', 6: "\u1E56"
		},
		"Q": {
			a: "\u1250", u: "\u1251", i: "\u1252", A: "\u1253", E: "\u1254", e: "\u1255", o: "\u1256"
		},
		"[": {
			a: "\u1248", i: "\u124a", A: "\u124b", E: "\u124c", e: "\u124d"
		},
		"]": {
			a: "\u1288", i: "\u128a", A: "\u128b", E: "\u128c", e: "\u128d"
		},
		"}": {
			a: "\u12b0", i: "\u12b2", A: "\u12b3", E: "\u12b4", e: "\u12b5"
		},
		"{": {
			a: "\u1310", i: "\u1312", A: "\u1313", E: "\u1314", e: "\u1315"
		},
		"M": {
			a: "\u1380", i: "\u1381", E: "\u1382", e: "\u1383"
		},
		"|": {
			a: "\u1384", i: "\u1385", E: "\u1386", e: "\u1387"
		},
		"<": {
			a: "\u1388", i: "\u1389", E: "\u138A", e: "\u138B"
		},
		">": {
			a: "\u138C", i: "\u138D", E: "\u138E", e: "\u138F"
		},
		'Y': {
			1: "\u1ef2", 2: "\u00dd", 3: "\u1ef8", 9: "\u0178", '=': "\u0176"
		}
	},
	// language direction
	rtl: false
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// de = ISO 639-1 code for German
// ***********************
jQuery.keyboard.language.de = {
	language: 'Deutsch (German)',
	display : {
		'a'      : '\u2714:\u00dcbernehmen (Umschalt+Enter)', // check mark - same action as accept
		'accept' : '\u00dcbernehmen:\u00dcbernehmen (Umschalt+Enter)',
		'alt'    : 'AltGr:Alt Graph',
		'b'      : '\u2190:R\u00fccktaste', // Left arrow (same as &larr;)
		'bksp'   : 'R\u00fcck:R\u00fccktaste',
		'c'      : '\u2716:Abbrechen (Esc)', // big X, close - same action as cancel
		'cancel' : 'Abbrechen:Abbrechen (Esc)',
		'clear'  : 'C:L\u00f6schen', // clear num pad
		'combo'  : '\u00f6:Tottasten umschalten',
		'dec'    : ',:Dezimal', // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Eingabe', // down, then left arrow - enter symbol
		'enter'  : 'Enter:Eingabe',
		'lock'   : '\u21E9:Feststelltaste', // caps lock
		's'      : '\u21e7:Umschalttaste', // thick hollow up arrow
		'shift'  : 'Umschalt:Umschalttaste',
		'sign'   : '\u00b1:Vorzeichen wechseln', // +/- sign for num pad
		'space'  : '&nbsp;:Leertaste',
		't'      : '\u21e5:Tabulatortaste', // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tabulatortaste' // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Mausrad benutzen, um weitere Tasten zu sehen',
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// es = ISO 639-1 code for Spanish
// ***********************
jQuery.keyboard.language.es = {
	language: 'Espa\u00f1ol (Spanish)',
	display : {
		'a'      : '\u2714:Acceptar (Cambio+Inscribir)', // check mark - same action as accept
		'accept' : 'Acceptar:Acceptar (Cambio+Inscribir)',
		'alt'    : 'AltGr:Grafemas Alternativos',
		'b'      : '\u2190:Retroceso',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Retroceso',
		'c'      : '\u2716:Cancelar (Esc)', // big X, close - same action as cancel
		'cancel' : 'Cancelar:Cancelar (Esc)',
		'clear'  : 'C:Vaciar',             // clear num pad
		'combo'  : '\u00f6:Alternar las Teclas Combinados',
		'dec'    : ',:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Inscribir',        // down, then left arrow - enter symbol
		'enter'  : 'Inscribir:Inscribir',
		'lock'   : '\u21ea Bloq:Mayús', // caps lock
		's'      : '\u21e7:Cambio',        // thick hollow up arrow
		'shift'  : 'Cambio:Cambio',
		'sign'   : '\u00b1:Cambiar Signo',  // +/- sign for num pad
		'space'  : '&nbsp;:Espacio',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	wheelMessage : 'Utilice la rueda del mouse para ver otras teclas'
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// fa = ISO 639-1 code for Farsi
// ***********************
jQuery.keyboard.language.fa = {
	language: '\u0641\u0627\u0631\u0633\u06cc (Farsi)',
	display: {
		'a'      : '\u2714:\u062a\u0623\u06cc\u06cc\u062f (Shift+Enter)',
		'accept' : '\u062a\u0623\u06cc\u06cc\u062f:\u062a\u0623\u06cc\u06cc\u062f (Shift+Enter)',
		'alt'    : 'Lng:Alternate Graphemes',
		'b'      : '\u2190:\u2b05 Backspace',
		'bksp'   : '\u2b05 Bksp:\u2b05 Backspace',
		'c'      : '\u2716:\u0627\u0646\u0635\u0631\u0627\u0641 (Esc)',
		'cancel' : '\u0627\u0646\u0635\u0631\u0627\u0641:\u0627\u0646\u0635\u0631\u0627\u0641 (Esc)',
		'clear'  : 'C:Clear',
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : '.:Decimal',
		'e'      : '\u21b5:Enter',
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock',
		's'      : '\u21e7:Shift',
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:Change Sign',
		'space'  : '&nbsp;:Space',
		't'      : '\u21e5:Tab',
		'tab'    : '\u21e5 Tab:Tab'
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

// Keyboard Language
// please update this section to match this language and email me with corrections!
// fr = ISO 639-1 code for French
// ***********************
jQuery.keyboard.language.fr = {
	language: 'Fran\u00e7ais (French)',
	display : {
		'a'      : '\u2714:Valider (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Valider:Valider (Shift+Enter)',
		'alt'    : 'AltGr:Charact\u00e8re alternatif',
		'b'      : '\u2190:Suppr arri\u00e8re', // Left arrow (same as &larr;)
		'bksp'   : '\u2190Suppr:Suppr arri\u00e8re',
		'c'      : '\u2716:Annuler', // big X, close - same action as cancel
		'cancel' : 'Annuler:Annuler (\u00c9chap)',
		'clear'  : 'C:Effacer', // clear num pad
		'combo'  : '\u00f6:Bacsuler les touches combo',
		'dec'    : '.:Decimal', // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Entr\u00e9e', // down, then left arrow - enter symbol
		'enter'  : 'Entr\u00e9e:Entr\u00e9e',
		'lock'   : '\u21ea Verr Mag:Verouillage majuscule', // caps lock
		's'      : '\u21e7:Majuscule', // thick hollow up arrow
		'shift'  : 'Maj:Majuscule',
		'sign'   : '\u00b1:Change de signe', // +/- sign for num pad
		'space'  : '&nbsp;:Espace',
		't'      : '\u21e5:Tabulation', // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tabulation' // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Utiliser la molette de la souris pour voir les autres lettres',
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// he = ISO 639-1 code for Hebrew
// ***********************
jQuery.keyboard.language.he = {
	language: '\u05e2\u05d1\u05e8\u05d9\u05ea (Hebrew)',
	display : {
		'a'      : '\u2714:אישור (Shift+Enter)', // check mark - same action as accept
		'accept' : 'אישור:אישור (Shift+Enter)',
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
	// language direction
	rtl : true
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// hu = ISO 639-1 code for Hungarian
// ***********************
jQuery.keyboard.language.hu = {
	language: 'Magyar (Hungarian)',
	display : {
		'a'      : '\u2714:Rendben (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Rendben:Rendben (Shift+Enter)',
		'alt'    : 'AltGr:Alternate Graphemes',
		'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
		'bksp'   : 'T\u00f6r\u00f6l:Backspace',
		'c'      : '\u2716:Cancel (Esc)', // big X, close - same action as cancel
		'cancel' : 'M\u00e9gsem:Cancel (Esc)',
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
	wheelMessage : 'Haszn\u00e1ld az eg\u00e9r g\u00f6rget\u0151t a t\u00f6bbi billenty\u0171 \u00e1tv\u00e1lt\u00e1shoz',
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// "all" is used here for example purposes, by convention it should be the ISO 639-1 code for the specified language
// ***********************
jQuery.keyboard.language.it = {
	language: 'Italiano (Italian)', // e.g. 'Русский (Russian)'
	display : {
		'a'      : '\u2714:Accetta (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Accetta:Accetta (Shift+Enter)',
		'alt'    : 'AltGr:Grafemi Alternativi',
		'b'      : '\u2190:Cancella',    // Left arrow (same as &larr;)
		'bksp'   : 'Canc:Cancella',
		'c'      : '\u2716:Annulla (Esc)', // big X, close - same action as cancel
		'cancel' : 'Annulla:Annulla (Esc)',
		'clear'  : 'C:Pulisci',             // clear num pad
		'combo'  : '\u00f6:Tasti Combinati',
		'dec'    : ',:Decimale',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Invio',        // down, then left arrow - enter symbol
		'enter'  : 'Invio:Invio',
		'lock'   : '\u21ea Bloc:Bloc Maiusc', // caps lock
		's'      : '\u21e7:Maiusc',        // thick hollow up arrow
		'shift'  : 'Maiusc:Maiusc',
		'sign'   : '\u00b1:Cambia Segno',  // +/- sign for num pad
		'space'  : '&nbsp;:Spazio',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Usa la rotella del mouse per vedere altri tasti'

	// uncomment, then include changes to the comboRegex here
	/*
	, comboRegex : /([`\'~\^\"ao])([a-z])/mig,
	*/

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
	},
	// language direction
	rtl : false
	*/
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// lv = ISO 639-1 code for Latvian
// ***********************
jQuery.keyboard.language.lv = {
	language: 'Latvie\u0161u (Latvian)',
	display : {
		'a'      : '\u2714:Pie\u0146emt (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Pie\u0146emt:Pie\u0146emt (Shift+Enter)',
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
	// New combos using specific accents
	combos : {
		// duplicated from regular combos, used specific accents here instead
		// acute & cedilla c C é É n N ó Ó s S z Z
		"'" : { c:"\u0107", C:"\u0106", e:"\u00e9", E:"\u00c9", n:"\u0144", N:"\u0143", o:"\u00f3", O:"\u00d3", s:"\u015b", S:"\u015a", z:"\u017a", Z:"\u0179" },
		// diaeresis: ä Ä ö Ö ü Ü
		'\u00a8' : { a:"\u00e4", A:"\u00c4", o:"\u00f6", O:"\u00d6", u:"\u00fc", U:"\u00dc" },
		// degree sign å Å e E g z Z
		'\u00b0' : { a:"\u00e5", A:"\u00c5", e:"\u0117", E:"\u0116", g:"\u0121", z:"\u017c", Z:"\u017b" },
	},
	comboRegex : /([`\'~\^\"ao\u00a8\u00b0])([a-z])/mig
};

/**
 * Burmese Keyboard Language
 * please update this section to match this language and email me with corrections!
 * my = ISO 639-1 code for Burmese
 * thanks to @laminko (https://github.com/laminko);
 * see https://github.com/Mottie/Keyboard/pull/507
 * license for this file: WTFPL
 */
jQuery.keyboard.language.my = {
	language: '\u1017\u1019\u102c (Burmese)', // e.g. 'Русский (Russian)'
	display : {
		'a'      : '\u2714:Accept (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Accept:Accept (Shift+Enter)',
		'alt'    : 'AltGr:Alternate Graphemes',
		'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Backspace',
		'c'      : '\u2716:Cancel (Esc)', // big X, close - same action as cancel
		'cancel' : 'Cancel:Cancel (Esc)',
		'clear'  : 'C:\u101b\u103e\u1004\u103a\u1038\u101c\u1004\u103a\u1038\u101b\u1014\u103a', // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : '.:\u1012\u101e\u1019',           // decimal point for num pad (optional), change '.' to ',' for European format
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
	wheelMessage : '\u1021\u1001\u103c\u102c\u1038\u1001\u101c\u102f\u1010\u103a\u1019\u103b\u102c\u1038\u1000\u102d\u102f \u1019\u103c\u1004\u103a\u101b\u1005\u1031\u101b\u1014\u103a \u1019\u1031\u102c\u1000\u103a\u1005\u103a\u101d\u103e\u102e\u1038\u101c\u103a\u1000\u102d\u102f \u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u1015\u102b'

	// uncomment, then include changes to the comboRegex here
	/*
	, comboRegex : /([`\'~\^\"ao])([a-z])/mig,
	*/

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
	},
	// language direction
	rtl : false
	*/
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// pl = ISO 639-1 code for Polish
// ***********************
jQuery.keyboard.language.pl = {
	language: 'Polski (Polish)',
	display : {
		'a'      : '\u2714:Akceptuj (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Accept:Akceptuj (Shift+Enter)',
		'alt'    : 'AltGr:Polskie znaki',
		'b'      : '\u2190:Cofnij',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Cofnij',
		'c'      : '\u2716:Anuluj (Esc)', // big X, close - same action as cancel
		'cancel' : 'Cancel:Anuluj (Esc)',
		'clear'  : 'C:Czyść',             // clear num pad
		'combo'  : '\u00f6:Klawisze kombo',
		'dec'    : '.:Dziesiętny',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Shift',        // thick hollow up arrow
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:Zmień znak',  // +/- sign for num pad
		'space'  : '&nbsp;:Spacja',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Użyj rolki aby zobaczyć pozozstałe klawisze',
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// pt = ISO 639-1 code for Portuguese
// ***********************
jQuery.keyboard.language.pt = {
	language: 'Portugu\u00eas (Portuguese)',
	display : {
		'a'      : '\u2714:Aceitar (Shift+Enter)',           // ALTERNATE accept button - unicode for check mark symbol
		'accept' : 'Aceitar:Concluir (Shift+Enter)',         // Accept button text
		'alt'    : 'AltGr:Carateres Adicionais/CTRL+ALT',    // Alt button text (AltGr is for international key sets)
		'b'      : '\u2190:Retroceder',                      // ALTERNATE backspace button - unicode for left arrow. Same as ← ( &larr; ) - Left arrow
		'bksp'   : '\u2190 Bksp:Retroceder',                 // Backspace button text
		'c'      : '\u2716:Cancelar/Escape (Esc)',           // ALTERNATE cancel button - unicode for big X
		'cancel' : 'Cancel:Cancelar/Escape(Esc)',            // Cancel button text
		'clear'  : 'C:Limpar',                               // Clear window content (used in num pad)
		'combo'  : '\u00f6:Acentuação Automática',        // (Toggle combo (diacritic) key
		'dec'    : '.:Decimal',                              // Decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Introduzir/Mudar de Linha',       // ALTERNATE enter button - unicode for down, then left arrow (enter symbol)
		'enter'  : 'Enter\u21b5:Introduzir/Mudar de Linha',  // Enter button text
		'lock'   : '\u21ea Lock:CapsLock/Maiúsculas',       // Caps lock button - unicode for double lined up arrow
		's'      : '\u21e7:Shift/Maiúsculas',               // ALTERNATE shift button - unicode for a thick up arrow
		'shift'  : '\u21ea Shift:Maiúsculas-Minúsculas',   // Shift button text
		'sign'   : '\u00b1:Mudar Sinal',                     // Change sign (used in num pad) - unicode for a +- symbol
		'space'  : '&nbsp;:Espaço',                         // Space button text
		't'      : '\u21e5:Tab/Tabela/Avançar',             // ALTERNATE tab button - unicode for right arrow to bar (used since only one directional tabs available)
		'tab'    : '\u21e5 Tab:Tabela/Avançar'              // Tab button text (Note: \u21b9 is the true tab symbol (left & right arrows) but not used here)
	},
	wheelMessage : 'Use a roda do rato/navegador para ver mais teclas',

	// Update regex for the combos above
	comboRegex : /([`\'~\^\"ao\u00b4])([a-z])/mig,
	// New combos using specific accents
	combos : {
		"\u00b4" : { a:"\u00e1", A:"\u00c1", e:"\u00e9", E:"\u00c9", i:"\u00ed", I:"\u00cd", o:"\u00f3", O:"\u00d3", u:"\u00fa", U:"\u00da", y:"\u00fd", Y:"\u00dd" }, // acute & cedilla
		// remove apostrophe combo
		"'" : {}
	}

};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ro = ISO 639-1 code for Romanian
// ***********************
jQuery.keyboard.language.ro = {
	language: 'Rom\u00e2n\u0103 (Romanian)',
	display : {
		'a'      : '\u2714:Accept (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Accept:Accept (Shift+Enter)',
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

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ru = ISO 639-1 code for Russian
// ***********************
jQuery.keyboard.language.ru = {
	language: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439 (Russian)',
	display : {
		'a'      : '\u2714:Сохранить (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Сохранить:Сохранить (Shift+Enter)',
		'alt'    : 'РУС:Русская клавиатура',
		'b'      : '\u2190:Удалить символ слева',    // Left arrow (same as &larr;)
		'bksp'   : '\u21e6:Удалить символ слева',
		'c'      : '\u2716:Отменить (Esc)', // big X, close - same action as cancel
		'cancel' : 'Отменить:Отменить (Esc)',
		'clear'  : 'C:Очистить',             // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : ',:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Ввод',        // down, then left arrow - enter symbol
		'enter'  : 'Ввод:Перевод строки',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Верхний регистр',        // thick hollow up arrow
		'shift'  : '\u21e7:Верхний регистр',
		'sign'   : '\u00b1:Сменить знак',  // +/- sign for num pad
		'space'  : 'Пробел:',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Use mousewheel to see other keys',
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// sq = ISO 639-1 code for Albanian
// ***********************
jQuery.keyboard.language.sq = {
	language : 'Shqip (Albanian)',
	display : {
		'a'      : '\u2714:Prano (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Prano:Prano (Shift+Enter)',
		'alt'    : 'Alt:Alternativ',
		'b'      : '\u2190:Hap\u00ebsir\u00ebn Mbrapa',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Hap\u00ebsir\u00ebn Mbrapa',
		'c'      : '\u2716:Anuloj (Arratisjes)', // big X, close - same action as cancel
		'cancel' : 'Anuloj:Anuloj (Arratisjes)',
		'clear'  : 'C:Qart\u00eb',             // clear num pad
		'combo'  : '\u00f6:Kombinimi',
		'dec'    : '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Shkruani',        // down, then left arrow - enter symbol
		'enter'  : 'Shkruani:Shkruani',
		'lock'   : '\u21ea Bllokoj:Caps Lock', // caps lock
		'next'   : 'Next \u21e8',
		'prev'   : '\u21e6 Prev',
		's'      : '\u21e7:Ndryshim',        // thick hollow up arrow
		'shift'  : 'Ndryshim:Ndryshim',
		'sign'   : '\u00b1:Ndryshimi Regjistrohu',  // +/- sign for num pad
		'space'  : '&nbsp;:Hap\u00ebsir\u00eb',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'P\u00ebrdorimi mousewheel p\u00ebr t\u00eb par\u00eb \u00e7el\u00ebsat e tjera',

	// New combos using specific accents
	// Not sure what to do with these accents:  ˇ ˘ ˙ ° ˛ ˝
	comboRegex : /([`\'~\^\"ao\/])([a-z])/gim,
	combos : {
		// new combos below ( forward slash + d, forward slash + l )
		'/' : { d:"\u0111", D:"\u0110", l:"\u0142", L:"\u0141" } // stroke đ Đ ł Ł
	}
};
