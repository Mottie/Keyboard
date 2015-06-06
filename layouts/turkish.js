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
