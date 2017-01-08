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
