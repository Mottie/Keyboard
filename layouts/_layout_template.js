/* keyboard layout template (copy of "international" from the core plugin)
 */
jQuery.keyboard.layouts['international'] = {
	'name' : 'international',
	'lang' : ['all'], // this setting must match the "all" language definition below
	'normal': [
		'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
		'{tab} q w e r t y u i o p [ ] \\',
		'a s d f g h j k l ; \' {enter}',
		'{shift} z x c v b n m , . / {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'shift': [
		'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
		'{tab} Q W E R T Y U I O P { } |',
		'A S D F G H J K L : " {enter}',
		'{shift} Z X C V B N M < > ? {shift}',
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
