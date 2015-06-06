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
