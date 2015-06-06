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
