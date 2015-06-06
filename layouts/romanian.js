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
