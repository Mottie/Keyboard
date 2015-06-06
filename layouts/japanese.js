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
