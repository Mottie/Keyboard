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
