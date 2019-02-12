/* Syriac Keyboard Layout
 */
jQuery.keyboard.layouts['syriac'] = {
	"name" : "syriac-surayt",
	"lang" : ["syr"],
	"normal" : [
		"\u070f 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} \u0714 \u0728 \u0716 \u0729 \u0726 \u071c \u0725 \u0717 \u071e \u071a \u0713 \u0715 \u0706",
		"\u072b \u0723 \u071d \u0712 \u0720 \u0710 \u072c \u0722 \u0721 \u071f \u071b {enter}",
		"{shift} \u0706 ] [ \u0724 \u072a \u0727 \u0700 . \u0718 \u0719 / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"shift" : [
		"\u032e ! \u030a \u0325 \u0749 \u2670 \u2671 \u070a \u00bb ) ( \u00ab + {bksp}",
		"{tab} \u0730 \u0733 \u0736 \u073a \u073d \u0740 \u0741 \u0308 \u0304 \u0307 \u0303 \u074a :",
		"\u0731 \u0734 \u0737 \u073b \u073e \u0711 \u0640 \u0324 \u0331 \u0323 \u0330 {enter}",
		"{shift} : \u0732 \u0735 \u0738 \u073c \u073f \u0739 \u0742 \u060c \u061b / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt" : [
		"\u0651 \u0701 \u0702 \u0703 \u0704 \u0705 \u0708 \u0709 \u070b \u070c \u070d \u250c \u2510 {bksp}",
		"{tab} \u064e \u064b \u064f \u064c \u0653 \u0654 \u0747 \u0743 \u0745 \u032d {empty} {empty} {empty}",
		"\u0650 \u064d {empty} \u0621 \u0655 \u0670 \u0748 \u0744 \u0746 {empty} {empty} {enter}",
		"{shift} {empty} {empty} \u0652 {empty} {ZWJ} {ZWNJ} {LRM} {RLM} {empty} {empty} {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* Syriac Phonetic Keyboard Layout
 */
jQuery.keyboard.layouts['syriac-phonetic'] = {
	"name" : "syriac-surayt-phonetic",
	"lang" : ["syr"],
	"normal" : [
		"\u070f 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} \u0729 \u0718 \u0716 \u072a \u072c \u071d \u071c \u0725 \u0727 \u0726 ] [ \u0706",
		"\u0710 \u0723 \u0715 \u0714 \u0713 \u0717 \u071b \u071f \u0720 \u071a \u071e {enter}",
		"{shift} \u0706 \u0719 \u0728 \u0724 \u072b \u0712 \u0722 \u0721 \u0700 . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"shift" : [
		"\u032e ! \u030a \u0325 \u0749 \u2670 \u2671 \u070a \u00bb ) ( \u00ab + {bksp}",
		"{tab} \u0730 \u0733 \u0736 \u073a \u073d \u0740 \u0741 \u0308 \u0304 \u0307 \u0303 \u074a :",
		"\u0731 \u0734 \u0737 \u073b \u073e \u0711 \u0640 \u0324 \u0331 \u0323 \u0330 {enter}",
		"{shift} : \u0732 \u0735 \u0738 \u073c \u073f \u0739 \u0742 \u060c \u061b / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt" : [
		"\u0651 \u0701 \u0702 \u0703 \u0704 \u0705 \u0708 \u0709 \u070b \u070c \u070d \u250c \u2510 {bksp}",
		"{tab} \u064e \u064b \u064f \u064c \u0653 \u0654 \u0747 \u0743 \u0745 \u032d {empty} {empty} {empty}",
		"\u0650 \u064d {empty} \u0621 \u0655 \u0670 \u0748 \u0744 \u0746 {empty} {empty} {enter}",
		"{shift} {empty} {empty} \u0652 {empty} {ZWJ} {ZWNJ} {LRM} {RLM} {empty} {empty} {empty} {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

/* Syriac Latin Characters Keyboard Layout
 */
jQuery.keyboard.layouts['syriac-latin'] = {
	"name" : "syriac-surayt-latin",
	"lang" : ["syr"],
	"normal" : [
		"' 1 2 3 4 5 6 7 ḏ ḥ ḍ ṣ š {bksp}",
		"{tab} q w e r t y u i o p ṭ ṯ",
		"a s d f g h j k l ë ä ġ {enter}",
		"{shift} X z x c v b n m ž č . {shift}",
		"{accept} {space} {cancel}"
	],
	"shift" : [
		"8 9 0 ! \" % ? Ḏ Ḥ Ḍ Ṣ Š {bksp}",
		"{tab} Q W E R T Y U I O P Ṭ Ṯ",
		"A S D F G H J K L Ë Ä Ġ {enter}",
		"{shift} {empty} Z X C V B N M Ž Č , {shift}",
		"{accept} {space} {cancel}"
	]
};
