/* Russian keyboard layouts
 * contains layout: 'russian-qwerty' & 'russian-mac'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/russian.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'russian-qwerty' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* Thanks to Yury Kotlyarov (https://github.com/yura) */
jQuery.keyboard.layouts['russian-qwerty'] = {
	'name' : 'Russian-qwerty',
	'lang' : ['ru'],
	'normal' : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; ' {enter}",
		"{shift} z x c v b n m , . / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'shift' : [
		'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
		"{tab} Q W E R T Y U I O P { } |",
		'A S D F G H J K L : " {enter}',
		"{shift} Z X C V B N M < > ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt' : [
		"\u0451 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} \u0439 \u0446 \u0443 \u043a \u0435 \u043d \u0433 \u0448 \u0449 \u0437 \u0445 \u044a \\",
		"\u0444 \u044b \u0432 \u0430 \u043f \u0440 \u043e \u043b \u0434 \u0436 \u044d {enter}",
		"{shift} \u044f \u0447 \u0441 \u043c \u0438 \u0442 \u044c \u0431 \u044e . {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	'alt-shift' : [
		'\u0401 ! " \u2116 ; \u20ac : ? * ( ) _ + {bksp}',
		"{tab} \u0419 \u0426 \u0423 \u041a \u0415 \u041d \u0413 \u0428 \u0429 \u0417 \u0425 \u042a /",
		"\u0424 \u042b \u0412 \u0410 \u041f \u0420 \u041e \u041b \u0414 \u0416 \u042d {enter}",
		"{shift} \u042f \u0427 \u0421 \u041c \u0418 \u0422 \u042c \u0411 \u042e , {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

jQuery.keyboard.layouts["russian-mac"] = {
	'name' : 'Russian-mac',
	'lang' : ['ru'],
	"default": [
		"] 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} \u0439 \u0446 \u0443 \u043a \u0435 \u043d \u0433 \u0448 \u0449 \u0437 \u0445 \u044a \u0451",
		"\u0444 \u044b \u0432 \u0430 \u043f \u0440 \u043e \u043b \u0434 \u0436 \u044d {enter}",
		"{shift} \u044f \u0447 \u0441 \u043c \u0438 \u0442 \u044c \u0431 \u044e / {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	shift: [
		'[ ! " \u2116 % : , . ; ( ) _ + {bksp}',
		"{tab} \u0419 \u0426 \u0423 \u041a \u0415 \u041d \u0413 \u0428 \u0429 \u0417 \u0425 \u042a \u0401",
		"\u0424 \u042b \u0412 \u0410 \u041f \u0420 \u041e \u041b \u0414 \u0416 \u042d {enter}",
		"{shift} \u042f \u0427 \u0421 \u041c \u0418 \u0422 \u042c \u0411 \u042e ? {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	alt: [
		"] ! @ # $ % ^ & * ( ) \u2013 \u00bb {bksp}",
		"{tab} \u0458 \u045f \u045c \u00ae \u2020 \u045a \u0453 \u0455 \u045e \u2018 \u201c \u044a \u0451",
		"\u0192 \u044b \u045b \u00f7 \u00a9 } \u00b0 \u0459 \u2206 \u2026 \u044d {enter}",
		"{shift} \u0452 \u2248 \u2260 \u00b5 \u0438 \u2122 ~ \u2264 \u2265 \u201c {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	],
	"alt-shift": [
		"[ | \" \u00a3 \u20ac \u221e \u00ac \u00b6 \u221a ' ` \u2014 \u00ab {bksp}",
		"{tab} \u0408 \u040f \u040c \u00ae \u2020 \u040a \u0403 \u0405 \u040e \u2019 \u201d \u042a \u0401 ",
		"\u0192 \u042b \u040b \u00f7 \u00a9 { \u2022 \u0409 \u2206 \u2026 \u042d {enter}",
		"{shift} \u0402 \u2248 \u2260 \u00b5 \u0418 \u2122 ~ < > \u201e {shift}",
		"{accept} {alt} {space} {alt} {cancel}"
	]
};

