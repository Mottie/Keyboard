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
