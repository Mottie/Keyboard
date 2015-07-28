/*! Layouts from greywyvern.com *//*
 All layouts in this file have been generated & modified from the
 Javascript Graphical / Virtual Keyboard Interface
 (http://www.greywyvern.com/code/javascript/keyboard)

 Copyright (c) 2014 - GreyWyvern
 Licenced for free distribution under the BSDL

  *** action key language translations not included ***

  Arabic keyboard layout by Srinivas Reddy
  Armenian Eastern and Western keyboard layouts by Hayastan Project (www.hayastan.co.uk)
  Assamese keyboard layout by Kanchan Gogoi
  Basic Japanese Hiragana/Katakana keyboard layout by Damjan
  Belarusian and Serbian Cyrillic keyboard layouts by Evgeniy Titov
  Bosnian/Croatian/Serbian Latin/Slovenian keyboard layout by Miran Zeljko
  Bulgarian BDS keyboard layout by Milen Georgiev
  Bulgarian Phonetic keyboard layout by Samuil Gospodinov
  Burmese keyboard layout by Cetanapa
  Danish keyboard layout by Verner Kjærsgaard
  Dari keyboard layout by Saif Fazel
  Dutch and US Int'l keyboard layouts by jerone
  Farsi (Persian) keyboard layout by Kaveh Bakhtiyari (www.bakhtiyari.com)
  French keyboard layout by Hidden Evil
  German keyboard layout by QuHno
  Hungarian keyboard layout by Antal Sall 'Hiromacu'
  Italian and Spanish (Spain) keyboard layouts by dictionarist.com
  Kazakh keyboard layout by Alex Madyankin
  Khmer keyboard layout by Sovann Heng (km-kh.com)
  Kurdish keyboard layout by Ara Qadir
  Lithuanian and Russian keyboard layouts by Ramunas
  Macedonian keyboard layout by Damjan Dimitrioski
  Pashto keyboard layout by Ahmad Wali Achakzai (qamosona.com)
  Pinyin keyboard layout from a collaboration with Lou Winklemann
  Polish Programmers layout by moose
  Romanian keyboard layout by Aurel
  Slovak keyboard layout by Daniel Lara (www.learningslovak.com)
  Swedish keyboard layout by Håkan Sandberg
  Turkish keyboard layouts by offcu
  Ukrainian keyboard layout by Dmitry Nikitin
  Urdu Phonetic keyboard layout by Khalid Malik
  Yiddish (Yidish Lebt) keyboard layout by Simche Taub (jidysz.net)
  Yiddish keyboard layout by Helmut Wollmersdorfer
*/
/*
 Zero-width characters
 U+200B ZWSP
 U+200C ZWNJ
 U+200D ZWJ
 U+200E LEFT-TO-RIGHT MARK
 U+200F RIGHT-TO-LEFT MARK
*/

/* Albanian Keyboard Layout (Shqip) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["sq"] = {
	"name":"Albanian (Shqip)",
	"normal":[
		"\\ 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} q w e r t z u i o p \u00E7 [ ]",
		"a s d f g h j k l \u00EB @ {enter}",
		"{s} < y x c v b n m , . / {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"| ! \" # $ % ^ & * ( ) _ + {b}",
		"{t} Q W E R T Z U I O P \u00C7 { }",
		"A S D F G H J K L \u00CB ' {enter}",
		"{s} > Y X C V B N M ; : ? {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} ~ \u02C7 ^ \u02D8 \u00B0 \u02DB ` \u02D9 \u00B4 \u02DD \u00A8 \u00B8 {b}",
		"{t} \\ | {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00F7 \u00DF \u00A4",
		"{empty} \u0111 \u0110 [ ] {empty} {empty} \u0142 \u0141 $ \u00D7 {enter}",
		"{s} {empty} {empty} {empty} {empty} @ { } \u00A7 < > {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["sq"]
};
/* Arabic Keyboard Layout (\u0627\u0644\u0639\u0631\u0628\u064a\u0629) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["ar"] = {
	"name":"Arabic (\u0627\u0644\u0639\u0631\u0628\u064a\u0629)",
	"rtl":true,
	"normal":[
		"\u0630 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u062f \\",
		"\u0634 \u0633 \u064a \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u0643 \u0637 {enter}",
		"{s} \u0626 \u0621 \u0624 \u0631 \u0644 \u0649 \u0629 \u0648 \u0632 \u0638 {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u0651  ! @ # $ % ^ & * ( ) _ + {b}",
		"{t} \u064e \u064b \u064f \u064c \u0644 \u0625 \u2018 \u00f7 \u00d7 \u061b < > |",
		"\u0650 \u064d ] [ \u0644 \u0623 \u0640 \u060c / : \" {enter}",
		"{s} ~ \u0652 } { \u0644 \u0622 \u2019 , . \u061f {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} \u00a1 \u00b2 \u00b3 \u00a4 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00d7 {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} \u00b9 {empty} {empty} \u00a3 {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00f7 {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["ar"]
};
/* Assamese Keyboard Layout (\u0985\u09b8\u09ae\u09c0\u09df\u09be) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["as"] = {
	"name":"Assamese (\u0985\u09b8\u09ae\u09c0\u09df\u09be)",
	"normal":[
		"+ \u09E7 \u09E8 \u09E9 \u09EA \u09EB \u09EC \u09ED \u09EE \u09EF \u09E6 - \u09C3 {b}",
		"{t} \u09CC \u09C8 \u09BE \u09C0 \u09C2 \u09F1 \u09B9 \u0997 \u09A6 \u099C \u09A1 {enter}",
		"\u09CB \u09C7 \u09CD \u09BF \u09C1 \u09AA \u09F0 \u0995 \u09A4 \u099A \u099F \u09BC",
		"{s} \u09CE \u0982 \u09AE \u09A8 \u09AC \u09B2 \u09B8 , . \u09AF {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"? { } \u09CD\u09F0 \u09F0\u09CD \u099C\u09CD\u09F0 \u0995\u09CD\u09B7 \u0995\u09CD\u09F0 \u09B6\u09CD\u09F0 ( ) {empty} \u098B {b}",
		"{t} \u0994 \u0990 \u0986 \u0988 \u098A \u09AD \u0999 \u0998 \u09A7 \u099D \u09A2 {enter}",
		"\u0993 \u098F \u0985 \u0987 \u0989 \u09AB {empty} \u0996 \u09A5 \u099B \u09A0 \u099E",
		"{s} \u0983 \u0981 \u09A3 \u09F7 \" ' \u09B6 \u09B7 ; \u09DF {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} \u09E7 \u09E8 \u09E9 \u09EA \u09EB \u09EC \u09ED \u09EE \u09EF \u09E6 {empty} \u09E2 {b}",
		"{t} \u09D7 {empty} {empty} \u09E3 {empty} {empty} {empty} {empty} {empty} {empty} \u09DC {enter}",
		"\u09F4 \u09F6 \u09F8 \u09E2 {empty} {empty} \u09F0 {empty} {empty} {empty} {empty} {empty}",
		"{s} {empty} \u09FA {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u09E0 {b}",
		"{t} {empty} {empty} {empty} \u09E1 {empty} {empty} {empty} {empty} {empty} {empty} \u09DD {enter}",
		"\u09F5 \u09F7 \u09F9 \u098C {empty} {empty} \u09F1 {empty} {empty} {empty} {empty} {empty}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["as"]
};
/* Azerbaijani Cyrillic Keyboard Layout (\u0410\u0437\u04d9\u0440\u0431\u0430\u0458\u04b9\u0430\u043d\u04b9\u0430) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["az-Cyrl"] = {
	"name":"Azerbaijani Cyrillic (\u0410\u0437\u04d9\u0440\u0431\u0430\u0458\u04b9\u0430\u043d\u04b9\u0430)",
	"normal":[
		"` 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} \u0458 \u04AF \u0443 \u043A \u0435 \u043D \u0433 \u0448 \u04BB \u0437 \u0445 \u04B9 \\",
		"\u0444 \u044B \u0432 \u0430 \u043F \u0440 \u043E \u043B \u0434 \u0436 \u049D {enter}",
		"{s} \\ \u04D9 \u0447 \u0441 \u043C \u0438 \u0442 \u0493 \u0431 \u04E9 . {s}",
		"{space} {accept}"
	],
	"shift":[
		"~ ! \" \u2116 ; % : ? * ( ) _ + {b}",
		"{t} \u0408 \u04AE \u0423 \u041A \u0415 \u041D \u0413 \u0428 \u04BA \u0417 \u0425 \u04B8 /",
		"\u0424 \u042B \u0412 \u0410 \u041F \u0420 \u041E \u041B \u0414 \u0416 \u049C {enter}",
		"{s} | \u04D8 \u0427 \u0421 \u041C \u0418 \u0422 \u0492 \u0411 \u04E8 , {s}",
		"{space} {accept}"
	],
	"lang":["az-Cyrl"]
};
/* Azerbaijani Latin Keyboard Layout (Az\u0259rbaycanca) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["az"] = {
	"name":"Azerbaijani Latin (Az\u0259rbaycanca)",
	"normal":[
		"` 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} q \u00FC e r t y u i o p \u00F6 \u011F \\",
		"a s d f g h j k l \u0131 \u0259 {enter}",
		"{s} z x c v b n m \u00E7 \u015F . {s}",
		"{space} {accept}"
	],
	"shift":[
		"~ ! \" \u2166 ; % : ? * ( ) _ + {b}",
		"{t} Q \u00DC E R T Y U \u0130 O P \u00D6 \u011E /",
		"A S D F G H J K L I \u018F {enter}",
		"{s} Z X C V B N M \u00C7 \u015E , {s}",
		"{space} {accept}"
	],
	"lang":["az"]
};
/* Belarusian Keyboard Layout (\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["be"] = {
	"name":"Belarusian (\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f)",
	"normal":[
		"\u0451 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} \u0439 \u0446 \u0443 \u043a \u0435 \u043d \u0433 \u0448 \u045e \u0437 \u0445 ' \\",
		"\u0444 \u044b \u0432 \u0430 \u043f \u0440 \u043e \u043b \u0434 \u0436 \u044d {enter}",
		"{s} / \u044f \u0447 \u0441 \u043c \u0456 \u0442 \u044c \u0431 \u044e . {s}",
		"{space} {accept}"
	],
	"shift":[
		"\u0401 ! \" \u2116 ; % : ? * ( ) _ + {b}",
		"{t} \u0419 \u0426 \u0423 \u041a \u0415 \u041d \u0413 \u0428 \u040e \u0417 \u0425 ' /",
		"\u0424 \u042b \u0412 \u0410 \u041f \u0420 \u041e \u041b \u0414 \u0416 \u042d {enter}",
		"{s} | \u042f \u0427 \u0421 \u041c \u0406 \u0422 \u042c \u0411 \u042e , {s}",
		"{space} {accept}"
	],
	"lang":["be"]
};
/* Belgian Keyboard Layout (Belgische / Belge) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["nl-BE"] = {
	"name":"Belgian (Belgische / Belge)",
	"normal":[
		"\u00b2 & \u00e9 \" ' ( \u00a7 \u00e8 ! \u00e7 \u00e0 ) - {b}",
		"{t} a z e r t y u i o p ^ $ \u03bc",
		"q s d f g h j k l m \u00f9 {enter}",
		"{s} < w x c v b n , ; : = {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00b3 1 2 3 4 5 6 7 8 9 0 \u00b0 _ {b}",
		"{t} A Z E R T Y U I O P \u00a8 * \u00a3",
		"Q S D F G H J K L M % {enter}",
		"{s} > W X C V B N ? . / + {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} | @ # {empty} {empty} ^ {empty} {empty} { } {empty} {empty} {b}",
		"{t} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} [ ] `",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00b4 {enter}",
		"{s} \\ {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ~ {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["nl-BE","fr-BE"]
};
/* Bengali Keyboard Layout (\u09ac\u09be\u0982\u09b2\u09be) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["bn"] = {
	"name":"Bengali (\u09ac\u09be\u0982\u09b2\u09be)",
	"normal":[
		"1 2 3 4 5 6 7 8 9 0 - \u09C3 {b}",
		"{t} \u09CC \u09C8 \u09BE \u09C0 \u09C2 \u09AC \u09B9 \u0997 \u09A6 \u099C \u09A1 {enter}",
		"\u09CB \u09C7 \u09CD \u09BF \u09C1 \u09AA \u09B0 \u0995 \u09A4 \u099A \u099F \u09BC",
		"{s} {empty} \u0982 \u09AE \u09A8 \u09AC \u09B2 \u09B8 , . \u09AF {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"{empty} {empty} \u09CD\u09B0 \u09B0\u09CD \u099C\u09CD\u09B0 \u09A4\u09CD\u09B7 \u0995\u09CD\u09B0 \u09B6\u09CD\u09B0 ( ) \u0983 \u098B {b}",
		"{t} \u0994 \u0990 \u0986 \u0988 \u098A \u09AD \u0999 \u0998 \u09A7 \u099D \u09A2 {enter}",
		"\u0993 \u098F \u0985 \u0987 \u0989 \u09AB {empty} \u0996 \u09A5 \u099B \u09A0 \u099E",
		"{s} {empty} \u0981 \u09A3 {empty} {empty} {empty} \u09B6 \u09B7 { \u09DF {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"\u09E7 \u09E8 \u09E9 \u09EA \u09EB \u09EC \u09ED \u09EE \u09EF \u09E6 {empty} \u09E2 {b}",
		"{t} \u09D7 {empty} {empty} \u09E3 {empty} {empty} {empty} {empty} {empty} {empty} \u09DC {enter}",
		"\u09F4 \u09F6 \u09F8 \u09E2 {empty} {empty} \u09F0 {empty} {empty} {empty} {empty} {empty}",
		"{s} {empty} \u09FA {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u09E0 {b}",
		"{t} {empty} {empty} {empty} \u09E1 {empty} {empty} {empty} {empty} {empty} {empty} \u09DD {enter}",
		"\u09F5 \u09F7 \u09F9 \u098C {empty} {empty} \u09F1 {empty} {empty} {empty} {empty} {empty}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["bn"]
};
/* Bosnian Keyboard Layout (Bosanski) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["bs"] = {
	"name":"Bosnian (Bosanski)",
	"normal":[
		"\u00B8 1 2 3 4 5 6 7 8 9 0 ' + {b}",
		"{t} q w e r t z u i o p \u0161 \u0111 \u017E",
		"a s d f g h j k l \u010D \u0107 {enter}",
		"{s} < y x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00A8 ! \" # $ % & / ( ) = ? * {b}",
		"{t} Q W E R T Z U I O P \u0160 \u0110 \u017D",
		"A S D F G H J K L \u010C \u0106 {enter}",
		"{s} > Y X C V B N M ; : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} ~ \u02C7 ^ \u02D8 \u00B0 \u02DB ` \u02D9 \u00B4 \u02DD \u00A8 \u00B8 {b}",
		"{t} \\ | \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00F7 \u00D7 \u00A4",
		"{empty} {empty} {empty} [ ] {empty} {empty} \u0142 \u0141 {empty} \u00DF {enter}",
		"{s} {empty} {empty} {empty} {empty} @ { } \u00A7 < > \u00A9 {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["bs"]
};
/* Bulgarian Phonetic Keyboard Layout (\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0424\u043e\u043d\u0435\u0442\u0438\u0447\u0435\u043d) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["bg-ph"] = {
	"name":"Bulgarian Phonetic (\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0424\u043e\u043d\u0435\u0442\u0438\u0447\u0435\u043d)",
	"normal":[
		"\u0447 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} \u044F \u0432 \u0435 \u0440 \u0442 \u044A \u0443 \u0438 \u043E \u043F \u0448 \u0449 \u044E",
		"\u0430 \u0441 \u0434 \u0444 \u0433 \u0445 \u0439 \u043A \u043B ; ' {enter}",
		"{s} \u0437 \u044C \u0446 \u0436 \u0431 \u043D \u043C , . / {s}",
		"{space} {accept}"
	],
	"shift":[
		"\u0427 ! @ # $ % ^ & * ( ) _ + {b}",
		"{t} \u042F \u0412 \u0415 \u0420 \u0422 \u042A \u0423 \u0418 \u041E \u041F \u0428 \u0429 \u042E",
		"\u0410 \u0421 \u0414 \u0424 \u0413 \u0425 \u0419 \u041A \u041B : \" {enter}",
		"{s} \u0417 \u042C \u0426 \u0416 \u0411 \u041D \u041C < > ? {s}",
		"{space} {accept}"
	],
	"lang":["bg-ph"]
};
/* Bulgarian BDS Keyboard Layout (\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["bg"] = {
	"name":"Bulgarian BDS (\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438)",
	"normal":[
		"` 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} , \u0443 \u0435 \u0438 \u0448 \u0449 \u043a \u0441 \u0434 \u0437 \u0446 ; (",
		"\u044c \u044f \u0430 \u043e \u0436 \u0433 \u0442 \u043d \u0412 \u043c \u0447 {enter}",
		"{s} \u042e \u0439 \u044a \u044d \u0444 \u0445 \u043f \u0440 \u043b \u0431 {s}",
		"{space} {accept}"
	],
	"shift":[
		"~ ! ? + \" % = : / _ \u2116 \u0406 V {b}",
		"{t} \u044b \u0423 \u0415 \u0418 \u0428 \u0429 \u041a \u0421 \u0414 \u0417 \u0426 \u00a7 )",
		"\u042c \u042f \u0410 \u041e \u0416 \u0413 \u0422 \u041d \u0412 \u041c \u0427 {enter}",
		"{s} \u044e \u0419 \u042a \u042d \u0424 \u0425 \u041f \u0420 \u041b \u0411 {s}",
		"{space} {accept}"
	],
	"lang":["bg"]
};
/* Burmese Keyboard Layout (\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["my"] = {
	"name":"Burmese (\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c)",
	"normal":[
		"\u1039` \u1041 \u1042 \u1043 \u1044 \u1045 \u1046 \u1047 \u1048 \u1049 \u1040 - = {b}",
		"{t} \u1006 \u1010 \u1014 \u1019 \u1021 \u1015 \u1000 \u1004 \u101E \u1005 \u101F \u2018 \u104F",
		"\u200B\u1031 \u200B\u103B \u200B\u102D \u200B\u103A \u200B\u102B \u200B\u1037 \u200B\u103C \u200B\u102F \u200B\u1030 \u200B\u1038 \u1012 {enter}",
		"{s} \u1016 \u1011 \u1001 \u101C \u1018 \u100A \u200B\u102C \u101A . \u104B {s}",
		"{space} {accept}"
	],
	"shift":[
		"~ \u100D \u100E \u100B \u1000\u103B\u1015\u103A % / \u101B \u1002 ( ) _ + {b}",
		"{t} \u1029 \u1040 \u103F \u1023 \u1024 \u104C \u1009 \u104D \u1025 \u100F \u1027 \u2019 \u100B\u1039\u100C",
		"\u1017 \u200B\u103E \u200B\u102E \u1004\u103A\u1039\u200B \u200B\u103D \u200B\u1036 \u200B\u1032 \u200B\u102F \u200B\u1030 \u200B\u102B\u103A \u1013 {enter}",
		"{s} \u1007 \u100C \u1003 \u1020 \u1026 \u1008 \u102A \u101B \u101B \u104A {s}",
		"{space} {accept}"
	],
	"lang":["my"]
};
/* Canadian French Keyboard Layout (Canadienne-fran\u00e7aise) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["fr-CA"] = {
	"name":"Canadian French (Canadienne-fran\u00e7aise)",
	"normal":[
		"# 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} q w e r t y u i o p ^ \u00B8 <",
		"a s d f g h j k l ; ` {enter}",
		"{s} \u00AB z x c v b n m , . \u00E9 {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"| ! \" / $ % ? & * ( ) _ + {b}",
		"{t} Q W E R T Y U I O P ^ \u00A8 >",
		"A S D F G H J K L : ` {enter}",
		"{s} \u00BB Z X C V B N M ' . \u00C9 {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"\\ \u00B1 @ \u00A3 \u00A2 \u00A4 \u00AC \u00A6 \u00B2 \u00B3 \u00BC \u00BD \u00BE {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00A7 \u00B6 [ ] }",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ~ { {enter}",
		"{s} \u00B0 {empty} {empty} {empty} {empty} {empty} {empty} \u00B5 \u00AF \u00AD \u00B4 {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["fr-CA"]
};
/* Chinese Bopomofo IME Keyboard Layout (\u4e2d\u6587\u6ce8\u97f3\u7b26\u53f7) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["zh-Bopo"] = {
	"name":"Chinese Bopomofo IME (\u4e2d\u6587\u6ce8\u97f3\u7b26\u53f7)",
	"normal":[
		"\u20AC \u3105 \u3109 \u02C7 \u02CB \u3113 \u02CA \u02D9 \u311A \u311E \u3122 \u3126 = {b}",
		"{t} \u3106 \u310A \u310D \u3110 \u3114 \u3117 \u3127 \u311B \u311F \u3123 [ ] \\",
		"\u3107 \u310B \u310E \u3111 \u3115 \u3118 \u3128 \u311C \u3120 \u3124 ' {enter}",
		"{s} \u3108 \u310C \u310F \u3112 \u3116 \u3119 \u3129 \u311D \u3121 \u3125 {s}",
		"{space} {accept}"
	],
	"shift":[
		"~ ! @ # $ % ^ & * ) ( _ + {b}",
		"{t} q w e r t y u i o p { } |",
		"a s d f g h j k l : \" {enter}",
		"{s} z x c v b n m < > ? {s}",
		"{space} {accept}"
	],
	"lang":["zh-Bopo"]
};
/* Chinese Cangjie IME Keyboard Layout (\u4e2d\u6587\u4ed3\u9889\u8f93\u5165\u6cd5) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["zh"] = {
	"name":"Chinese Cangjie IME (\u4e2d\u6587\u4ed3\u9889\u8f93\u5165\u6cd5)",
	"normal":[
		"\u20AC 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} \u624B \u7530 \u6C34 \u53E3 \u5EFF \u535C \u5C71 \u6208 \u4EBA \u5FC3 [ ] \\",
		"\u65E5 \u5C38 \u6728 \u706B \u571F \u7AF9 \u5341 \u5927 \u4E2D ; ' {enter}",
		"{s} \uFF3A \u96E3 \u91D1 \u5973 \u6708 \u5F13 \u4E00 , . / {s}",
		"{space} {accept}"
	],
	"shift":[
		"~ ! @ # $ % ^ & * ) ( _ + {b}",
		"{t} q w e r t y u i o p { } |",
		"a s d f g h j k l : \" {enter}",
		"{s} z x c v b n m < > ? {s}",
		"{space} {accept}"
	],
	"lang":["zh"]
};
/* Croatian Keyboard Layout (Hrvatski) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["hr"] = {
	"name":"Croatian (Hrvatski)",
	"normal":[
		"\u00B8 1 2 3 4 5 6 7 8 9 0 ' + {b}",
		"{t} q w e r t z u i o p \u0161 \u0111 \u017E",
		"a s d f g h j k l \u010D \u0107 {enter}",
		"{s} < y x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00A8 ! \" # $ % & / ( ) = ? * {b}",
		"{t} Q W E R T Z U I O P \u0160 \u0110 \u017D",
		"A S D F G H J K L \u010C \u0106 {enter}",
		"{s} > Y X C V B N M ; : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} ~ \u02C7 ^ \u02D8 \u00B0 \u02DB ` \u02D9 \u00B4 \u02DD \u00A8 \u00B8 {b}",
		"{t} \\ | \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00F7 \u00D7 \u00A4",
		"{empty} {empty} {empty} [ ] {empty} {empty} \u0142 \u0141 {empty} \u00DF {enter}",
		"{s} {empty} {empty} {empty} {empty} @ { } \u00A7 < > \u00A9 {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["hr"]
};
/* Czech Keyboard Layout (\u010cesky) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["cs"] = {
	"name":"Czech (\u010cesky)",
	"normal":[
		"; + \u011B \u0161 \u010D \u0159 \u017E \u00FD \u00E1 \u00ED \u00E9 = \u00B4 {b}",
		"{t} q w e r t y u i o p \u00FA ) \u00A8",
		"a s d f g h j k l \u016F \u00A7 {enter}",
		"{s} \\ z x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00b0 1 2 3 4 5 6 7 8 9 0 % \u02c7 {b}",
		"{t} Q W E R T Y U I O P / ( '",
		"A S D F G H J K L \" ! {enter}",
		"{s} | Z X C V B N M ? : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"` ! @ # $ % ^ & * ( ) - = {b}",
		"{t} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} [ ] \\",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ; \u00a4 {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} < > / {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"~ {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} _ + {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { } |",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} : ^ {enter}",
		"{s} \u02dd {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00d7 \u00f7 ? {s}",
		"{space} {alt} {accept}"
	],
	"lang":["cs"]
};
/* Danish Keyboard Layout (Dansk) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["da"] = {
	"name":"Danish (Dansk)",
	"normal":[
		"\u00bd 1 2 3 4 5 6 7 8 9 0 + \u00b4 {b}",
		"{t} q w e r t y u i o p \u00e5 \u00a8 '",
		"a s d f g h j k l \u00e6 \u00f8 {enter}",
		"{s} < z x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00a7 ! \" # \u00a4 % & / ( ) = ? ` {b}",
		"{t} Q W E R T Y U I O P \u00c5 ^ *",
		"A S D F G H J K L \u00c6 \u00d8 {enter}",
		"{s} > Z X C V B N M ; : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} @ \u00a3 $ \u20ac {empty} { [ ] } {empty} | {b}",
		"{t} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ~ {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} \\ {empty} {empty} {empty} {empty} {empty} {empty} \u03bc {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u039c {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["da"]
};
/* Dari Keyboard Layout (\u062f\u0631\u06cc) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["fa-AF"] = {
	"name":"Dari (\u062f\u0631\u06cc)",
	"rtl":true,
	"normal":[
		"{ZWJ} \u06F1 \u06F2 \u06F3 \u06F4 \u06F5 \u06F6 \u06F7 \u06F8 \u06F9 \u06F0 - = {b}",
		"{t} \u0636 \u0635 \u062B \u0642 \u0641 \u063A \u0639 \u0647 \u062E \u062D \u062C \u0686 \\",
		"\u0634 \u0633 \u06CC \u0628 \u0644 \u0627 \u062A \u0646 \u0645 \u06A9 \u06AF {enter}",
		"{s} \u0638 \u0637 \u0632 \u0631 \u0630 \u062F \u067E \u0648 . / {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00F7 ! \u066C \u066B \u060B \u066A \u00D7 \u060C * ) ( \u0640 + {b}",
		"{t} \u0652 \u064C \u064D \u064B \u064F \u0650 \u064E \u0651 ] [ } { |",
		"\u0624 \u0626 \u064A \u0625 \u0623 \u0622 \u0629 \u00BB \u00AB : \u061B {enter}",
		"{s} \u0643 \u0653 \u0698 \u0670 {ZWNJ} \u0654 \u0621 > < \u061F {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"~ ` @ # $ % ^ & \u2022 {LRM} {RLM} _ {empty} {b}",
		"{t} \u00B0 {empty} \u20AC \uFD3E \uFD3F \u0656 \u0659 \u0655 ' \" \u0681 \u0685 ?",
		"\u069A \u06CD \u0649 \u06D0 \u06B7 \u0671 \u067C \u06BC \u06BA ; \u06AB {enter}",
		"{s} \u06D2 \u0691 \u0696 \u0693 \u0688 \u0689 \u0679 , \u06C7 \u06C9 {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["fa-AF"]
};
/* Devanagari Keyboard Layout (\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["hi-Deva"] = {
	"name":"Devanagari (\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940)",
	"normal":[
		"\u094A 1 2 3 4 5 6 7 8 9 0 - \u0943 {b}",
		"{t} \u094C \u0948 \u093E \u0940 \u0942 \u092C \u0939 \u0917 \u0926 \u091C \u0921 \u093C \u0949",
		"\u094B \u0947 \u094D \u093F \u0941 \u092A \u0930 \u0915 \u0924 \u091A \u091F {enter}",
		"{s} \u0946 \u0902 \u092E \u0928 \u0935 \u0932 \u0938 , . \u092F {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u0912 \u090D \u0945 \u094D\u0930 \u0930\u094D \u091C\u094D\u091E \u0924\u094D\u0930 \u0915\u094D\u0937 \u0936\u094D\u0930 ( ) \u0903 \u090B {b}",
		"{t} \u0914 \u0910 \u0906 \u0908 \u090A \u092D \u0919 \u0918 \u0927 \u091D \u0922 \u091E \u0911",
		"\u0913 \u090F \u0905 \u0907 \u0909 \u092B \u0931 \u0916 \u0925 \u091B \u0920 {enter}",
		"{s} \u090E \u0901 \u0923 \u0929 \u0934 \u0933 \u0936 \u0937 \u0964 \u095F {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} \u0967 \u0968 \u0969 \u096A \u096B \u096C \u096D \u096E \u096F \u0966 {empty} \u0944 {b}",
		"{t} {empty} {empty} {empty} \u0963 {empty} {empty} {empty} \u095A {empty} \u095B \u095C {empty} {empty}",
		"{empty} {empty} {empty} \u0962 {empty} {empty} {empty} \u0958 {empty} \u0952 {empty} {enter}",
		"{s} \u0953 {empty} \u0954 {empty} {empty} {empty} {empty} \u0970 \u0965 {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0960 {b}",
		"{t} {empty} {empty} {empty} \u0961 {empty} {empty} {empty} {empty} {empty} {empty} \u095D {empty} {empty}",
		"{empty} {empty} {empty} \u090C {empty} \u095E {empty} \u0959 {empty} {empty} \u0951 {enter}",
		"{s} {empty} \u0950 {empty} {empty} {empty} {empty} {empty} {empty} \u093D {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["hi-Deva"]
};
/* Dingbats Keyboard Layout (Dingbats) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["dingbats"] = {
	"name":"Dingbats (Dingbats)",
	"normal":[
		"\u2764 \u278a \u278b \u278c \u278d \u278e \u278f \u2790 \u2791 \u2792 \u2793 \u2795 \u2702 {b}",
		"{t} \u2714 \u2718 \u271a \u271d \u2722 \u2726 \u2729 \u272c \u2736 \u273b \u2744 \u2733 \u2737",
		"\u2799 \u27b5 \u27b8 \u2794 \u279d \u27a9 \u27a4 \u27b3 \u27ad \u27a8 \u279f {enter}",
		"{s} \u270c \u274f \u273f \u2747 \u2757 \u2753 \u270f \u2712 \u2709 \u275b \u275c {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u2765 \u2780 \u2781 \u2782 \u2783 \u2784 \u2785 \u2786 \u2787 \u2788 \u2789 \u2796 \u2704 {b}",
		"{t} \u2705 \u2715 \u2719 \u271e \u2723 \u2727 \u272a \u272b \u2731 \u273c \u2745 \u2734 \u2738",
		"\u279a \u27b6 \u27b9 \u279c \u279e \u27aa \u27a3 \u27bc \u27ae \u27a6 \u27a0 {enter}",
		"{s} \u270b \u2750 \u2740 \u2748 \u2755 \u2754 \u2710 \u2711 \u2706 \u275d \u275e {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"\u2766 \u2776 \u2777 \u2778 \u2779 \u277a \u277b \u277c \u277d \u277e \u277f \u274c \u2701 {b}",
		"{t} \u2713 \u2717 \u271b \u271f \u2724 \u2728 \u272d \u272e \u2732 \u273d \u2746 \u2735 \u2739",
		"\u2798 \u27b4 \u27b7 \u27ba \u27a1 \u27ab \u27a2 \u27bd \u27af \u27a5 \u27be {enter}",
		"{s} \u270a \u2751 \u2741 \u274a \u2762 \u27b0 \u270e \u274d \u2708 \u2761 \u275f {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"\u2767 \u2768 \u2769 \u276a \u276b \u276c \u276d \u276e \u276f \u2770 \u2771 \u2797 \u2703 {b}",
		"{t} {empty} \u2716 \u271c \u2720 \u2725 \u2756 \u2730 \u272f \u2749 \u273e \u2743 \u2721 \u273a",
		"\u2758 \u2759 \u275a \u27bb \u2772 \u27ac \u279b \u2773 \u27b1 \u27a7 \u27b2 {enter}",
		"{s} \u270d \u2752 \u2742 \u274b \u2763 \u27bf \u2774 \u274e \u2707 \u2775 \u2760 {s}",
		"{space} {alt} {accept}"
	],
	"lang":["dingbats"]
};
/* Divehi Keyboard Layout (\u078b\u07a8\u0788\u07ac\u0780\u07a8\u0784\u07a6\u0790\u07b0) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["dv"] = {
	"name":"Divehi (\u078b\u07a8\u0788\u07ac\u0780\u07a8\u0784\u07a6\u0790\u07b0)",
	"normal":[
		"` 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} \u07ab \u07ae \u07a7 \u07a9 \u07ad \u078e \u0783 \u0789 \u078c \u0780 \u078d [ ]",
		"\u07a8 \u07aa \u07b0 \u07a6 \u07ac \u0788 \u0787 \u0782 \u0786 \u078a \ufdf2 {enter}",
		"{s} \\ \u0792 \u0791 \u0790 \u0794 \u0785 \u078b \u0784 \u0781 \u0793 \u07af {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"~ ! @ # $ % ^ & * ) ( _ + {b}",
		"{t} \u00d7 \u2019 \u201c / : \u07a4 \u079c \u07a3 \u07a0 \u0799 \u00f7 { }",
		"< > . \u060c \" \u07a5 \u07a2 \u0798 \u079a \u07a1 \u061b {enter}",
		"{s} | \u0796 \u0795 \u078f \u0797 \u079f \u079b \u079D \\ \u079e \u061f {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} , {empty} {empty} {empty} {empty} {empty} {empty} {empty} ; {enter}",
		"{s} {empty} {empty} {empty} {empty} {ZWJ} {ZWNJ} {LRM} {RLM} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} , {empty} {empty} {empty} {empty} {empty} {empty} {empty} ; {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["dv"]
};
/* Dutch Keyboard Layout (Nederlands) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["nl"] = {
	"name":"Dutch (Nederlands)",
	"normal":[
		"@ 1 2 3 4 5 6 7 8 9 0 / \u00b0 {b}",
		"{t} q w e r t y u i o p \u00a8 * <",
		"a s d f g h j k l + \u00b4 {enter}",
		"{s} ] z x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00a7 ! \" # $ % & _ ( ) ' ? ~ {b}",
		"{t} Q W E R T Y U I O P ^ | >",
		"A S D F G H J K L \u00b1 ` {enter}",
		"{s} [ Z X C V B N M ; : = {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"\u00ac \u00b9 \u00b2 \u00b3 \u00bc \u00bd \u00be \u00a3 { } {empty} \\ \u00b8 {b}",
		"{t} {empty} {empty} \u20ac \u00b6 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} \u00df {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} \u00a6 \u00ab \u00bb \u00a2 {empty} {empty} {empty} \u00b5 {empty} \u00b7 {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["nl"]
};
/* Dvorak Keyboard Layout (Dvorak) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["en-dvorak"] = {
	"name":"Dvorak (Dvorak)",
	"normal":[
		"` 1 2 3 4 5 6 7 8 9 0 [ ] {b}",
		"{t} ' , . p y f g c r l / = \\",
		"a o e u i d h t n s - {enter}",
		"{s} ; q j k x b m w v z {s}",
		"{space} {accept}"
	],
	"shift":[
		"~ ! @ # $ % ^ & * ( ) { } {b}",
		"{t} \" < > P Y F G C R L ? + |",
		"A O E U I D H T N S _ {enter}",
		"{s} : Q J K X B M W V Z {s}",
		"{space} {accept}"
	],
	"lang":["en-dvorak"]
};
/* Eastern Armenian Keyboard Layout (\u0540\u0561\u0575\u0565\u0580\u0565\u0576 \u0561\u0580\u0565\u0582\u0565\u056c\u0584) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["hy"] = {
	"name":"Eastern Armenian (\u0540\u0561\u0575\u0565\u0580\u0565\u0576 \u0561\u0580\u0565\u0582\u0565\u056c\u0584)",
	"normal":[
		"\u055D : \u0571 \u0575 \u055B , - . \u00AB \u00BB \u0585 \u057C \u056A {b}",
		"{t} \u056D \u0582 \u0567 \u0580 \u057F \u0565 \u0568 \u056B \u0578 \u057A \u0579 \u057B '",
		"\u0561 \u057D \u0564 \u0586 \u0584 \u0570 \u0573 \u056F \u056C \u0569 \u0583 {enter}",
		"{s} \u0566 \u0581 \u0563 \u057E \u0562 \u0576 \u0574 \u0577 \u0572 \u056E {s}",
		"{space} {accept}"
	],
	"shift":[
		"\u055C 1 \u0541 \u0545 3 4 9 \u0587 ( ) \u0555 \u054C \u053A {b}",
		"{t} \u053D \u0552 \u0537 \u0550 \u054F \u0535 \u0538 \u053B \u0548 \u054A \u0549 \u054B \u055E",
		"\u0531 \u054D \u0534 \u0556 \u0554 \u0540 \u0543 \u053F \u053C \u0539 \u0553 {enter}",
		"{s} \u0536 \u0551 \u0533 \u054E \u0532 \u0546 \u0544 \u0547 \u0542 \u053E {s}",
		"{space} {accept}"
	],
	"lang":["hy"]
};
/* Estonian Keyboard Layout (Eesti) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["et"] = {
	"name":"Estonian (Eesti)",
	"normal":[
		"\u02C7 1 2 3 4 5 6 7 8 9 0 + \u00B4 {b}",
		"{t} q w e r t y u i o p \u00FC \u00F5 '",
		"a s d f g h j k l \u00F6 \u00E4 {enter}",
		"{s} < z x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"~ ! \" # \u00A4 % & / ( ) = ? ` {b}",
		"{t} Q W E R T Y U I O P \u00DC \u00D5 *",
		"A S D F G H J K L \u00D6 \u00C4 {enter}",
		"{s} > Z X C V B N M ; : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} @ \u00A3 $ \u20AC {empty} { [ ] } \\ {empty} {b}",
		"{t} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00A7 \u00BD",
		"{empty} \u0161 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ^ {enter}",
		"{s} | \u017E {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} @ \u00A3 $ {empty} {empty} { [ ] } \\ {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00A7 \u00BD",
		"{empty} \u0160 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ^ {enter}",
		"{s} | \u017D {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["et"]
};
/* Faeroese Keyboard Layout (F\u00f8royskt) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["fo"] = {
	"name":"Faeroese (F\u00f8royskt)",
	"normal":[
		"\u00BD 1 2 3 4 5 6 7 8 9 0 + \u00B4 {b}",
		"{t} q w e r t y u i o p \u00E5 \u00F0 '",
		"a s d f g h j k l \u00E6 \u00F8 {enter}",
		"{s} < z x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00A7 ! \" # \u00A4 % & / ( ) = ? ` {b}",
		"{t} Q W E R T Y U I O P \u00C5 \u00D0 *",
		"A S D F G H J K L \u00C6 \u00D8 {enter}",
		"{s} > Z X C V B N M ; : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} @ \u00A3 $ \u20AC {empty} { [ ] } {empty} | {b}",
		"{t} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00A8 ~ {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ^ {enter}",
		"{s} \\ {empty} {empty} {empty} {empty} {empty} {empty} \u00B5 {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["fo"]
};
/* Farsi Keyboard Layout (\u0641\u0627\u0631\u0633\u06cc) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["fa"] = {
	"name":"Farsi (\u0641\u0627\u0631\u0633\u06cc)",
	"rtl":true,
	"normal":[
		"\u067e 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u0686 \u0698",
		"\u0634 \u0633 \u064a \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u06af \u0643 {enter}",
		"{s} \u0638 \u0637 \u0632 \u0631 \u0630 \u062f \u0626 \u0648 . / {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u0651  ! @ # $ % ^ & * ( ) _ + {b}",
		"{t} \u064e \u064b \u064f \u064c \u0644 \u0625 \u2018 \u00f7 \u00d7 \u061b < > |",
		"\u0650 \u064d ] [ \u0644 \u0623 \u0640 \u060c \\ : \" {enter}",
		"{s} ~ \u0652 } { \u0644 \u0622 \u0621 , . \u061f {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} \u00a1 \u00b2 \u00b3 \u00a4 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00d7 {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} \u00b9 {empty} {empty} \u00a3 {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00f7 {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["fa"]
};
/* Finnish Keyboard Layout (Suomi) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["fi"] = {
	"name":"Finnish (Suomi)",
	"normal":[
		"\u00a7 1 2 3 4 5 6 7 8 9 0 + \u00B4 {b}",
		"{t} q w e r t y u i o p \u00E5 \u00A8 '",
		"a s d f g h j k l \u00F6 \u00E4 {enter}",
		"{s} < z x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00BD ! \" # \u00A4 % & / ( ) = ? ` {b}",
		"{t} Q W E R T Y U I O P \u00C5 ^ *",
		"A S D F G H J K L \u00D6 \u00C4 {enter}",
		"{s} > Z X C V B N M ; : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} @ \u00A3 $ \u20AC {empty} { [ ] } \\ {empty} {b}",
		"{t} \u00E2 {empty} \u20AC {empty} \u0167 {empty} {empty} \u00ef \u00f5 {empty} {empty} ~ {empty}",
		"\u00E1 \u0161 \u0111 \u01e5 \u01E7 \u021F {empty} \u01e9 {empty} \u00F8 \u00E6 {enter}",
		"{s} | \u017E {empty} \u010d \u01EF \u0292 \u014B \u00B5 {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} \u00C2 {empty} {empty} {empty} \u0166 {empty} {empty} \u00CF \u00D5 {empty} {empty} {empty} {empty}",
		"\u00C1 \u0160 \u0110 \u01E4 \u01E6 \u021e {empty} \u01E8 {empty} \u00D8 \u00C6 {enter}",
		"{s} {empty} \u017D {empty} \u010C \u01EE \u01B7 \u014A {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["fi"]
};
/* French Keyboard Layout (Fran\u00e7ais) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["fr"] = {
	"name":"French (Fran\u00e7ais)",
	"normal":[
		"\u00b2 & \u00e9 \" ' ( - \u00e8 _ \u00e7 \u00e0 ) = {b}",
		"{t} a z e r t y u i o p ^ $ *",
		"q s d f g h j k l m \u00f9 {enter}",
		"{s} < w x c v b n , ; : ! {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00b3 1 2 3 4 5 6 7 8 9 0 \u00b0 + {b}",
		"{t} A Z E R T Y U I O P \u00a8 \u00a3 \u03bc",
		"Q S D F G H J K L M % {enter}",
		"{s} > W X C V B N ? . / \u00a7 {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} ~ # { [ | ` \\ ^ @ ] } {b}",
		"{t} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00a4 {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["fr"]
};
/* Georgian Keyboard Layout (\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["ka"] = {
	"name":"Georgian (\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8)",
	"normal":[
		"\u201E ! ? \u2116 \u00A7 % : . ; , / \u2013 = {b}",
		"{t} \u10E6 \u10EF \u10E3 \u10D9 \u10D4 \u10DC \u10D2 \u10E8 \u10EC \u10D6 \u10EE \u10EA (",
		"\u10E4 \u10EB \u10D5 \u10D7 \u10D0 \u10DE \u10E0 \u10DD \u10DA \u10D3 \u10DF {enter}",
		"{s} \u10ED \u10E9 \u10E7 \u10E1 \u10DB \u10D8 \u10E2 \u10E5 \u10D1 \u10F0 {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u201C 1 2 3 4 5 6 7 8 9 0 - + {b}",
		"{t} \u10E6 \u10EF \u10E3 \u10D9 \u10D4 \u10DC \u10D2 \u10E8 \u10EC \u10D6 \u10EE \u10EA )",
		"\u10E4 \u10EB \u10D5 \u10D7 \u10D0 \u10DE \u10E0 \u10DD \u10DA \u10D3 \u10DF {enter}",
		"{s} \u10ED \u10E9 \u10E7 \u10E1 \u10DB \u10D8 \u10E2 \u10E5 \u10D1 \u10F0 {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} \u10F1 {empty} {empty} {empty} {empty} {empty} \u10F4 {empty} {empty}",
		"\u10F6 {empty} \u10F3 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} \u10F2 {empty} {empty} {empty} \u10F5 {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["ka"]
};
/* German Keyboard Layout (Deutsch) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["de"] = {
	"name":"German (Deutsch)",
	"normal":[
		"^ 1 2 3 4 5 6 7 8 9 0 \u00df \u00b4 {b}",
		"{t} q w e r t z u i o p \u00fc + #",
		"a s d f g h j k l \u00f6 \u00e4 {enter}",
		"{s} < y x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00b0 ! \" \u00a7 $ % & / ( ) = ? ` {b}",
		"{t} Q W E R T Z U I O P \u00dc * '",
		"A S D F G H J K L \u00d6 \u00c4 {enter}",
		"{s} > Y X C V B N M ; : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} \u00b2 \u00b3 {empty} {empty} {empty} { [ ] } \\ {empty} {b}",
		"{t} @ {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ~ {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} \u00a6 {empty} {empty} {empty} {empty} {empty} {empty} \u00b5 {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["de"]
};
/* Greek Keyboard Layout (\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["el"] = {
	"name":"Greek (\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac)",
	"normal":[
		"` 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} ; \u03c2 \u03b5 \u03c1 \u03c4 \u03c5 \u03b8 \u03b9 \u03bf \u03c0 [ ] \\",
		"\u03b1 \u03c3 \u03b4 \u03c6 \u03b3 \u03b7 \u03be \u03ba \u03bb \u0384 ' {enter}",
		"{s} < \u03b6 \u03c7 \u03c8 \u03c9 \u03b2 \u03bd \u03bc , . / {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"~ ! @ # $ % ^ & * ( ) _ + {b}",
		"{t} : ^ \u0395 \u03a1 \u03a4 \u03a5 \u0398 \u0399 \u039f \u03a0 { } |",
		"\u0391 \u03a3 \u0394 \u03a6 \u0393 \u0397 \u039e \u039a \u039b \u00a8 \" {enter}",
		"{s} > \u0396 \u03a7 \u03a8 \u03a9 \u0392 \u039d \u039c < > ? {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} \u00b2 \u00b3 \u00a3 \u00a7 \u00b6 {empty} \u00a4 \u00a6 \u00ba \u00b1 \u00bd {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u201c \u201d \u00ac",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0385 {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["el"]
};
/* Gujarati Keyboard Layout (\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["gu"] = {
	"name":"Gujarati (\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0)",
	"normal":[
		"1 2 3 4 5 6 7 8 9 0 - \u0AC3 {b}",
		"{t} \u0ACC \u0AC8 \u0ABE \u0AC0 \u0AC2 \u0AAC \u0AB9 \u0A97 \u0AA6 \u0A9C \u0AA1 \u0ABC \u0AC9",
		"\u0ACB \u0AC7 \u0ACD \u0ABF \u0AC1 \u0AAA \u0AB0 \u0A95 \u0AA4 \u0A9A \u0A9F {enter}",
		"{s} {empty} \u0A82 \u0AAE \u0AA8 \u0AB5 \u0AB2 \u0AB8 , . \u0AAF {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u0A8D \u0AC5 \u0ACD\u0AB0 \u0AB0\u0ACD \u0A9C\u0ACD\u0A9E \u0AA4\u0ACD\u0AB0 \u0A95\u0ACD\u0AB7 \u0AB6\u0ACD\u0AB0 ( ) \u0A83 \u0A8B {b}",
		"{t} \u0A94 \u0A90 \u0A86 \u0A88 \u0A8A \u0AAD \u0A99 \u0A98 \u0AA7 \u0A9D \u0AA2 \u0A9E \u0A91",
		"\u0A93 \u0A8F \u0A85 \u0A87 \u0A89 \u0AAB {empty} \u0A96 \u0AA5 \u0A9B \u0AA0 {enter}",
		"{s} {empty} \u0A81 \u0AA3 {empty} {empty} \u0AB3 \u0AB6 \u0AB7 \u0964 {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"\u0AE7 \u0AE8 \u0AE9 \u0AEA \u0AEB \u0AEC \u0AED \u0AEE \u0AEF \u0AE6 {empty} \u0AC4 {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0965 {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0AE0 {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} \u0AD0 {empty} {empty} {empty} {empty} {empty} {empty} \u0ABD {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["gu"]
};
/* Hebrew Keyboard Layout (\u05e2\u05d1\u05e8\u05d9\u05ea) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["he"] = {
	"name":"Hebrew (\u05e2\u05d1\u05e8\u05d9\u05ea)",
	"rtl":true,
	"normal":[
		"~ 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} / ' \u05e7 \u05e8 \u05d0 \u05d8 \u05d5 \u05df \u05dd \u05e4 \\ {enter}",
		"\u05e9 \u05d3 \u05d2 \u05db \u05e2 \u05d9 \u05d7 \u05dc \u05da \u05e3 , ] [",
		"{s} \u05d6 \u05e1 \u05d1 \u05d4 \u05e0 \u05de \u05e6 \u05ea \u05e5 . {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"` ! @ # $ % ^ & * ) ( _ + {b}",
		"{t} Q W E R T Y U I O P | {enter}",
		"A S D F G H J K L : \" } {",
		"{s} Z X C V B N M > < ? {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} {empty} {empty} \u20aa {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} \u20ac {empty} {empty} {empty} \u05f0 {empty} {empty} {empty} {empty} {enter}",
		"{empty} {empty} {empty} {empty} {empty} \u05f2 \u05f1 {empty} {empty} {empty} {empty} {empty} {empty}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["he"]
};
/* Hindi Keyboard Layout (\u0939\u093f\u0902\u0926\u0940) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["hi"] = {
	"name":"Hindi (\u0939\u093f\u0902\u0926\u0940)",
	"normal":[
		"{ZWJ} 1 2 3 4 5 6 7 8 9 0 - \u0943 {b}",
		"{t} \u094C \u0948 \u093E \u0940 \u0942 \u092C \u0939 \u0917 \u0926 \u091C \u0921 \u093C \u0949",
		"\u094B \u0947 \u094D \u093F \u0941 \u092A \u0930 \u0915 \u0924 \u091A \u091F {enter}",
		"{s} {empty} \u0902 \u092E \u0928 \u0935 \u0932 \u0938 , . \u092F {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"{ZWNJ} \u090D \u0945 \u094D\u0930 \u0930\u094D \u091C\u094D\u091E \u0924\u094D\u0930 \u0915\u094D\u0937 \u0936\u094D\u0930 ( ) \u0903 \u090B {b}",
		"{t} \u0914 \u0910 \u0906 \u0908 \u090A \u092D \u0919 \u0918 \u0927 \u091D \u0922 \u091E \u0911",
		"\u0913 \u090F \u0905 \u0907 \u0909 \u092B \u0931 \u0916 \u0925 \u091B \u0920 {enter}",
		"{s} {empty} \u0901 \u0923 {empty} {empty} \u0933 \u0936 \u0937 \u0964 \u095F {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"` \u0967 \u0968 \u0969 \u096A \u096B \u096C \u096D \u096E \u096F \u0966 - = {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} [ ] \\",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ; ' {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} , . / {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"~ ! @ # $ % ^ & * ( ) _ + {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { } |",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} : \" {enter}",
		"{s} {empty} \u0950 {empty} {empty} {empty} {empty} {empty} < > ? {s}",
		"{space} {alt} {accept}"
	],
	"lang":["hi"]
};
/* Hungarian Keyboard Layout (Magyar) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["hu"] = {
	"name":"Hungarian (Magyar)",
	"normal":[
		"0 1 2 3 4 5 6 7 8 9 \u00f6 \u00fc \u00f3 {b}",
		"{t} q w e r t z u i o p \u0151 \u00fa \u0171",
		"a s d f g h j k l \u00e9 \u00e1 {enter}",
		"{s} \u00ed y x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00a7 ' \" + ! % / = ( ) \u00d6 \u00dc \u00d3 {b}",
		"{t} Q W E R T Z U I O P \u0150 \u00da \u0170",
		"A S D F G H J K L \u00c9 \u00c1 {enter}",
		"{s} \u00cd Y X C V B N M ? : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} ~ \u02c7 \u02c6 \u02d8 \u00b0 \u02db ` \u02d9 \u00b4 \u02dd \u00a8 \u00b8 {b}",
		"{t} \\ | \u00c4 {empty} {empty} {empty} \u20ac \u00cd {empty} {empty} \u00f7 \u00d7 \u00a4",
		"\u00e4 \u0111 \u0110 [ ] {empty} \u00ed \u0141 \u0142 $ \u00df {enter}",
		"{s} < > # & @ { } < ; > * {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["hu"]
};
/* Icelandic Keyboard Layout (\u00cdslenska) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["is"] = {
	"name":"Icelandic (\u00cdslenska)",
	"normal":[
		"\u00B0 1 2 3 4 5 6 7 8 9 0 \u00F6 - {b}",
		"{t} q w e r t y u i o p \u00F0 ' +",
		"a s d f g h j k l \u00E6 \u00B4 {enter}",
		"{s} < z x c v b n m , . \u00FE {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00A8 ! \" # $ % & / ( ) = \u00D6 _ {b}",
		"{t} Q W E R T Y U I O P \u00D0 ? *",
		"A S D F G H J K L \u00C6 ' {enter}",
		"{s} > Z X C V B N M ; : \u00DE {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"\u00B0 {empty} {empty} {empty} {empty} \u20AC {empty} { [ ] } \\ {empty} {b}",
		"{t} @ {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ~ `",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ^ {enter}",
		"{s} | {empty} {empty} {empty} {empty} {empty} {empty} \u00B5 {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["is"]
};
/* Irish / Gaelic Keyboard Layout (Gaeilge) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["ga"] = {
	"name":"Irish / Gaelic (Gaeilge)",
	"normal":[
		"` 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} q w e r t y u i o p [ ] #",
		"a s d f g h j k l ; ' {enter}",
		"{s} \\ z x c v b n m , . / {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00AC ! \" \u00A3 $ % ^ & * ( ) _ + {b}",
		"{t} Q W E R T Y U I O P { } ~",
		"A S D F G H J K L : @ {enter}",
		"{s} | Z X C V B N M < > ? {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"\u00A6 {empty} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} \u00E9 {empty} {empty} \u00FD \u00FA \u00ED \u00F3 {empty} {empty} {empty} {empty}",
		"\u00E1 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00B4 {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"\u00A6 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} \u00C9 {empty} {empty} \u00DD \u00DA \u00CD \u00D3 {empty} {empty} {empty} {empty}",
		"\u00C1 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ` {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["ga","gd"]
};
/* Italian Keyboard Layout (Italiano) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["it"] = {
	"name":"Italian (Italiano)",
	"normal":[
		"\\ 1 2 3 4 5 6 7 8 9 0 ' \u00ec {b}",
		"{t} q w e r t y u i o p \u00e8 + \u00f9",
		"a s d f g h j k l \u00f2 \u00e0 {enter}",
		"{s} < z x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"| ! \" \u00a3 $ % & / ( ) = ? ^ {b}",
		"{t} Q W E R T Y U I O P \u00e9 * \u00a7",
		"A S D F G H J K L \u00e7 \u00b0 {enter}",
		"{s} > Z X C V B N M ; : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} [ ] {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} @ # {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { } {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["it"]
};
/* Japanese Hiragana/Katakana Keyboard Layout (\u65e5\u672c\u8a9e) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["ja"] = {
	"name":"Japanese Hiragana/Katakana (\u65e5\u672c\u8a9e)",
	"normal":[
		"\uff5e \u306c \u3075 \u3042 \u3046 \u3048 \u304a \u3084 \u3086 \u3088 \u308f \u307b \u3078 {b}",
		"{t} \u305f \u3066 \u3044 \u3059 \u304b \u3093 \u306a \u306b \u3089 \u305b \u3001 \u3002 \uffe5 \u309B",
		"\u3061 \u3068 \u3057 \u306f \u304d \u304f \u307e \u306e \u308c \u3051 \u3080 {enter}",
		"{s} \u3064 \u3055 \u305d \u3072 \u3053 \u307f \u3082 \u306d \u308b \u3081 \u308d {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"{empty} \u30cc \u30d5 \u30a2 \u30a6 \u30a8 \u30aa \u30e4 \u30e6 \u30e8 \u30ef \u30db \u30d8 {b}",
		"{t} \u30bf \u30c6 \u30a4 \u30b9 \u30ab \u30f3 \u30ca \u30cb \u30e9 \u30bb \u3001 \u3002 {empty} \"",
		"\u30c1 \u30c8 \u30b7 \u30cf \u30ad \u30af \u30de \u30ce \u30ec \u30b1 \u30e0 {enter}",
		"{s} \u30c4 \u30b5 \u30bd \u30d2 \u30b3 \u30df \u30e2 \u30cd \u30eb \u30e1 \u30ed {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} {empty} \u3041 \u3045 \u3047 \u3049 \u3083 \u3085 \u3087 \u3092 \u30fc \uff3e {b}",
		"{t} {empty} {empty} \u3043 {empty} {empty} {empty} {empty} {empty} {empty} {empty} \uff20 \u300c {empty} \uffe5",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \uff1b \uff1a \u300d {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u3001 \u3002 \u30fb {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} \u30a1 \u30a5 \u30a7 \u30a9 \u30e3 \u30e5 \u30e7 \u30f2 \uff1d \uff5e {b}",
		"{t} {empty} {empty} \u30a3 {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u2018 \uff5b \uff0a \uff5c",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \uff0b \u30f6 \uff5d {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \uff1c \uff1e \uff1f \uff3f {s}",
		"{space} {alt} {accept}"
	],
	"lang":["ja"]
};
/* Kannada Keyboard Layout (\u0c95\u0ca8\u0ccd\u0ca8\u0ca1) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["kn"] = {
	"name":"Kannada (\u0c95\u0ca8\u0ccd\u0ca8\u0ca1)",
	"normal":[
		"\u0CCA 1 2 3 4 5 6 7 8 9 0 - \u0CC3 {b}",
		"{t} \u0CCC \u0CC8 \u0CBE \u0CC0 \u0CC2 \u0CAC \u0CB9 \u0C97 \u0CA6 \u0C9C \u0CA1 {enter}",
		"\u0CCB \u0CC7 \u0CCD \u0CBF \u0CC1 \u0CAA \u0CB0 \u0C95 \u0CA4 \u0C9A \u0C9F {empty}",
		"{s} \u0CC6 \u0C82 \u0CAE \u0CA8 \u0CB5 \u0CB2 \u0CB8 , . \u0CAF {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u0C92 {empty} {empty} \u0CCD\u0CB0 \u0CB0\u0CCD \u0C9C\u0CCD\u0C9E \u0CA4\u0CCD\u0CB0 \u0C95\u0CCD\u0CB7 \u0CB6\u0CCD\u0CB0 ( ) \u0C83 \u0C8B {b}",
		"{t} \u0C94 \u0C90 \u0C86 \u0C88 \u0C8A \u0CAD \u0C99 \u0C98 \u0CA7 \u0C9D \u0CA2 {enter}",
		"\u0C93 \u0C8F \u0C85 \u0C87 \u0C89 \u0CAB \u0CB1 \u0C96 \u0CA5 \u0C9B \u0CA0 \u0C9E",
		"{s} \u0C8F {empty} \u0CA3 {empty} {empty} \u0CB3 \u0CB6 \u0CB7 | {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} \u0CE7 \u0CE8 \u0CE9 \u0CEA \u0CEB \u0CEC \u0CED \u0CEE \u0CEF \u0CE6 {empty} \u0CC4 {b}",
		"{t} {empty} \u0CD6 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{empty} \u0CD5 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0CE0 {b}",
		"{t} {empty} {empty} {empty} \u0CE1 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{empty} {empty} {empty} \u0C8C {empty} \u0CDE {empty} {empty} {empty} {empty} {empty} {empty}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["kn"]
};
/* Kazakh Keyboard Layout (\u049a\u0430\u0437\u0430\u049b\u0448\u0430) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["kk"] = {
	"name":"Kazakh (\u049a\u0430\u0437\u0430\u049b\u0448\u0430)",
	"normal":[
		"( \" \u04d9 \u0456 \u04a3 \u0493 , . \u04af \u04b1 \u049b \u04e9 \u04bb {b}",
		"{t} \u0439 \u0446 \u0443 \u043A \u0435 \u043D \u0433 \u0448 \u0449 \u0437 \u0445 \u044A \\",
		"\u0444 \u044B \u0432 \u0430 \u043F \u0440 \u043E \u043B \u0434 \u0436 \u044D {enter}",
		"{s} \\ \u044F \u0447 \u0441 \u043C \u0438 \u0442 \u044C \u0431 \u044E \u2116 {s}",
		"{space} {accept}"
	],
	"shift":[
		") ! \u04d8 \u0406 \u04a2 \u0492 ; : \u04ae \u04b0 \u049a \u04e8 \u04ba {b}",
		"{t} \u0419 \u0426 \u0423 \u041A \u0415 \u041D \u0413 \u0428 \u0429 \u0417 \u0425 \u042A /",
		"\u0424 \u042B \u0412 \u0410 \u041F \u0420 \u041E \u041B \u0414 \u0416 \u042D {enter}",
		"{s} | \u042F \u0427 \u0421 \u041C \u0418 \u0422 \u042C \u0411 \u042E ? {s}",
		"{space} {accept}"
	],
	"lang":["kk"]
};
/* Khmer Keyboard Layout (\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["km"] = {
	"name":"Khmer (\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a)",
	"normal":[
		"\u00AB \u17E1 \u17E2 \u17E3 \u17E4 \u17E5 \u17E6 \u17E7 \u17E8 \u17E9 \u17E0 \u17A5 \u17B2 {b}",
		"{t} \u1786 \u17B9 \u17C1 \u179A \u178F \u1799 \u17BB \u17B7 \u17C4 \u1795 \u17C0 \u17AA \u17AE",
		"\u17B6 \u179F \u178A \u1790 \u1784 \u17A0 \u17D2 \u1780 \u179B \u17BE \u17CB {enter}",
		"{s} \u178B \u1781 \u1785 \u179C \u1794 \u1793 \u1798 \u17BB\u17C6 \u17D4 \u17CA {s}",
		"{ZWSP} {space} {alt} {accept}"
	],
	"shift":[
		"\u00BB ! \u17D7 \" \u17DB % \u17CD \u17D0 \u17CF ( ) \u17CC = {b}",
		"{t} \u1788 \u17BA \u17C2 \u17AC \u1791 \u17BD \u17BC \u17B8 \u17C5 \u1797 \u17BF \u17A7 \u17AD",
		"\u17B6\u17C6 \u17C3 \u178C \u1792 \u17A2 \u17C7 \u1789 \u1782 \u17A1 \u17C4\u17C7 \u17C9 {enter}",
		"{s} \u178D \u1783 \u1787 \u17C1\u17C7 \u1796 \u178E \u17C6 \u17BB\u17C7 \u17D5 ? {s}",
		"{empty} {space} {alt} {accept}"
	],
	"alt":[
		"{ZWJ} {ZWNJ} @ \u17D1 $ \u20AC \u17D9 \u17DA * { } x \u17CE {b}",
		"{t} \u17DC \u17DD \u17AF \u17AB \u17A8 \u1799\u17BE\u1784 {empty} \u17A6 \u17B1 \u17B0 \u17A9 \u17B3 \\",
		"\u17B5 {empty} \u17D3 {empty} \u17A4 \u17A3 \u17B4 \u179D \u17D8 \u17D6 \u17C8 {enter}",
		"{s} | \u1781\u17D2\u1789\u17BB\u17C6 - + \u179E [ ] , . / {s}",
		"{NBSP} {space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} \u17F1 \u17F2 \u17F3 \u17F4 \u17F5 \u17F6 \u17F7 \u17F8 \u17F9 \u17F0 {empty} {empty} {b}",
		"{t} \u19E0 \u19E1 \u19E2 \u19E3 \u19E4 \u19E5 \u19E6 \u19E7 \u19E8 \u19E9 \u19EA \u19EB {empty}",
		"\u19EC \u19ED \u19EE \u19EF \u19F0 \u19F1 \u19F2 \u19F3 \u19F4 \u19F5 \u19F6 {enter}",
		"{s} \u19F7 \u19F8 \u19F9 \u19FA \u19FB \u19FC \u19FD \u19FE \u19FF {empty} {s}",
		"{empty} {space} {alt} {accept}"
	],
	"lang":["km"]
};
/* Korean Keyboard Layout (\ud55c\uad6d\uc5b4) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["ko"] = {
	"name":"Korean (\ud55c\uad6d\uc5b4)",
	"normal":[
		"` 1 2 3 4 5 6 7 8 9 0 - = \u20A9 {b}",
		"{t} \u1107 \u110C \u1103 \u1100 \u1109 \u116D \u1167 \u1163 \u1162 \u1166 [ ]",
		"\u1106 \u1102 \u110B \u1105 \u1112 \u1169 \u1165 \u1161 \u1175 ; ' {enter}",
		"{s} \u110F \u1110 \u110E \u1111 \u1172 \u116E \u1173 , . / {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"~ ! @ # $ % ^ & * ) ( _ + | {b}",
		"{t} \u1108 \u110D \u1104 \u1101 \u110A {empty} {empty} {empty} \u1164 \u1168 { }",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} : \" {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} < > ? {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"` 1 2 3 4 5 6 7 8 9 0 - = \u20A9 {b}",
		"{t} q w e r t y u i o p [ ]",
		"a s d f g h j k l ; ' {enter}",
		"{s} z x c v b n m , . / {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"~ ! @ # $ % ^ & * ) ( _ + | {b}",
		"{t} Q W E R T Y U I O P { }",
		"A S D F G H J K L : \" {enter}",
		"{s} Z X C V B N M < > ? {s}",
		"{space} {alt} {accept}"
	],
	"lang":["ko"]
};
/* Kurdish Keyboard Layout (Kurd\u00ee) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["ku"] = {
	"name":"Kurdish (Kurd\u00ee)",
	"rtl":true,
	"normal":[
		"\u20ac \u0661 \u0662 \u0663 \u0664 \u0665 \u0666 \u0667 \u0668 \u0669 \u0660 - = {b}",
		"{t} \u0642 \u0648 \u06d5 \u0631 \u062a \u06cc \u0626 \u062d \u06c6 \u067e [ ] \\",
		"\u0627 \u0633 \u062f \u0641 \u06af \u0647 \u0698 \u06a9 \u0644 \u061b ' {enter}",
		"{s} \u0632 \u062e \u062c \u06a4 \u0628 \u0646 \u0645 \u060c . / {s}",
		"{space} {accept}"
	],
	"shift":[
		"~ ! @ # $ % ^ & * ( ) _ + {b}",
		"{t} ` \u0648\u0648 \u064a \u0695 \u0637 \u06ce \u0621 \u0639 \u0624 \u062b { } |",
		"\u0622 \u0634 \u0630 \u0625 \u063a {ZWNJ} \u0623 \u0643 \u06b5 : \" {enter}",
		"{s} \u0636 \u0635 \u0686 \u0638 \u0649 \u0629 \u0640 < > \u061f {s}",
		"{space} {accept}"
	],
	"lang":["ku"]
};
/* Kyrgyz Keyboard Layout (\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["ky"] = {
	"name":"Kyrgyz (\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430)",
	"normal":[
		"\u0451 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} \u0439 \u0446 \u0443 \u043A \u0435 \u043D \u0433 \u0448 \u0449 \u0437 \u0445 \u044A \\",
		"\u0444 \u044B \u0432 \u0430 \u043F \u0440 \u043E \u043B \u0434 \u0436 \u044D {enter}",
		"{s} \u044F \u0447 \u0441 \u043C \u0438 \u0442 \u044C \u0431 \u044E . {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u0401 ! \" \u2116 ; % : ? * ( ) _ + {b}",
		"{t} \u0419 \u0426 \u0423 \u041A \u0415 \u041D \u0413 \u0428 \u0429 \u0417 \u0425 \u042A /",
		"\u0424 \u042B \u0412 \u0410 \u041F \u0420 \u041E \u041B \u0414 \u0416 \u042D {enter}",
		"{s} \u042F \u0427 \u0421 \u041C \u0418 \u0422 \u042C \u0411 \u042E , {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} \u04AF {empty} {empty} \u04A3 {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} \u04E9 {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} \u04AE {empty} {empty} \u04A2 {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} \u04E8 {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["ky"]
};
/* Latvian Keyboard Layout (Latvie\u0161u) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["lv"] = {
	"name":"Latvian (Latvie\u0161u)",
	"normal":[
		"\u00AD 1 2 3 4 5 6 7 8 9 0 - f {b}",
		"{t} \u016B g j r m v n z \u0113 \u010D \u017E h \u0137",
		"\u0161 u s i l d a t e c \u00B4 {enter}",
		"{s} \u0146 b \u012B k p o \u0101 , . \u013C {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"? ! \u00AB \u00BB $ % / & \u00D7 ( ) _ F {b}",
		"{t} \u016A G J R M V N Z \u0112 \u010C \u017D H \u0136",
		"\u0160 U S I L D A T E C \u00B0 {enter}",
		"{s} \u0145 B \u012A K P O \u0100 ; : \u013B {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} \u00AB {empty} {empty} \u20AC \" \u2019 {empty} : {empty} {empty} \u2013 = {b}",
		"{t} q \u0123 {empty} \u0157 w y {empty} {empty} {empty} {empty} [ ] {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u20AC {empty} \u00B4 {enter}",
		"{s} {empty} x {empty} \u0137 {empty} \u00F5 {empty} < > {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} @ # $ ~ ^ \u00B1 {empty} {empty} {empty} \u2014 ; {b}",
		"{t} Q \u0122 {empty} \u0156 W Y {empty} {empty} {empty} {empty} { } {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00A8 {enter}",
		"{s} {empty} X {empty} \u0136 {empty} \u00D5 {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["lv"]
};
/* Lithuanian Keyboard Layout (Lietuvi\u0173) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["lt"] = {
	"name":"Lithuanian (Lietuvi\u0173)",
	"normal":[
		"` \u0105 \u010D \u0119 \u0117 \u012F \u0161 \u0173 \u016B \u201E \u201C - \u017E {b}",
		"{t} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; ' {enter}",
		"{s} \u2013 z x c v b n m , . / {s}",
		"{space} {accept}"
	],
	"shift":[
		"~ \u0104 \u010C \u0118 \u0116 \u012E \u0160 \u0172 \u016A ( ) _ \u017D {b}",
		"{t} Q W E R T Y U I O P { } |",
		"A S D F G H J K L : \" {enter}",
		"{s} \u20AC Z X C V B N M < > ? {s}",
		"{space} {accept}"
	],
	"lang":["lt"]
};
/* Macedonian Cyrillic Keyboard Layout (\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["mk"] = {
	"name":"Macedonian Cyrillic (\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438)",
	"normal":[
		"` 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} \u0459 \u045A \u0435 \u0440 \u0442 \u0455 \u0443 \u0438 \u043E \u043F \u0448 \u0453 \u0436",
		"\u0430 \u0441 \u0434 \u0444 \u0433 \u0445 \u0458 \u043A \u043B \u0447 \u045C {enter}",
		"{s} \u0451 \u0437 \u045F \u0446 \u0432 \u0431 \u043D \u043C , . / {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"~ ! \u201E \u201C \u2019 % \u2018 & * ( ) _ + {b}",
		"{t} \u0409 \u040A \u0415 \u0420 \u0422 \u0405 \u0423 \u0418 \u041E \u041F \u0428 \u0403 \u0416",
		"\u0410 \u0421 \u0414 \u0424 \u0413 \u0425 \u0408 \u041A \u041B \u0427 \u040C {enter}",
		"{s} \u0401 \u0417 \u040F \u0426 \u0412 \u0411 \u041D \u041C ; : ? {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0402 \u0452 {empty}",
		"{empty} {empty} {empty} [ ] {empty} {empty} {empty} {empty} \u040B \u045B {enter}",
		"{s} {empty} {empty} {empty} {empty} @ { } \u00A7 {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["mk"]
};
/* Malayalam Keyboard Layout (\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["ml"] = {
	"name":"Malayalam (\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02)",
	"rtl":true,
	"normal":[
		"\u0D4A 1 2 3 4 5 6 7 8 9 0 - \u0D43 {b}",
		"{t} \u0D4C \u0D48 \u0D3E \u0D40 \u0D42 \u0D2C \u0D39 \u0D17 \u0D26 \u0D1C \u0D21 {empty}",
		"\u0D4B \u0D47 \u0D4D \u0D3F \u0D41 \u0D2A \u0D30 \u0D15 \u0D24 \u0D1A \u0D1F {enter}",
		"{s} \u0D46 \u0D02 \u0D2E \u0D28 \u0D35 \u0D32 \u0D38 , . \u0D2F {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u0D12 {empty} {empty} \u0D4D\u0D30 {empty} {empty} {empty} \u0D15\u0D4D\u0D37 {empty} ( ) \u0D03 \u0D0B {b}",
		"{t} \u0D14 \u0D10 \u0D06 \u0D08 \u0D0A \u0D2D \u0D19 \u0D18 \u0D27 \u0D1D \u0D22 \u0D1E",
		"\u0D13 \u0D0F \u0D05 \u0D07 \u0D09 \u0D2B \u0D31 \u0D16 \u0D25 \u0D1B \u0D20 {enter}",
		"{s} \u0D0F {empty} \u0D23 {empty} \u0D34 \u0D33 \u0D36 \u0D37 {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} \u0D67 \u0D68 \u0D69 \u0D6A \u0D6B \u0D6C \u0D6D \u0D6E \u0D6F \u0D66 {empty} {empty} {b}",
		"{t} \u0D57 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0D60 {b}",
		"{t} {empty} {empty} {empty} \u0D61 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} \u0D0C {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["ml"]
};
/* Maltese 48 Keyboard Layout (Malti) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["mt"] = {
	"name":"Maltese 48 (Malti)",
	"normal":[
		"\u010B 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} q w e r t y u i o p \u0121 \u0127 #",
		"a s d f g h j k l ; ' {enter}",
		"{s} \u017c z x c v b n m , . / {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u010A ! \" \u20ac $ % ^ & * ( ) _ + {b}",
		"{t} Q W E R T Y U I O P \u0120 \u0126 \u017e",
		"A S D F G H J K L : @ {enter}",
		"{s} \u017b Z X C V B N M < > ? {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"` {empty} {empty} \u00A3 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} \u00E8 {empty} {empty} {empty} \u00F9 \u00EC \u00F2 {empty} [ ] {empty}",
		"\u00E0 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} \\ {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} \u00C8 {empty} {empty} {empty} \u00D9 \u00cc \u00D2 {empty} { } {empty}",
		"\u00C0 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} | {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ` {s}",
		"{space} {alt} {accept}"
	],
	"lang":["mt"]
};
/* Marathi Keyboard Layout (\u092e\u0930\u093e\u0920\u0940) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["mr"] = {
	"name":"Marathi (\u092e\u0930\u093e\u0920\u0940)",
	"normal":[
		"{empty} \u0967 \u0968 \u0969 \u096A \u096B \u096C \u096D \u096E \u096F \u0966 - \u0943 {b}",
		"{t} \u094C \u0948 \u093E \u0940 \u0942 \u092C \u0939 \u0917 \u0926 \u091C \u0921 \u093C \u0949",
		"\u094B \u0947 \u094D \u093F \u0941 \u092A \u0930 \u0915 \u0924 \u091A \u091F {enter}",
		"{s} {empty} \u0902 \u092E \u0928 \u0935 \u0932 \u0938 , . \u092F {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"{empty} \u090D \u0945 \u094D\u0930 \u0930\u094D \u091C\u094D\u091E \u0924\u094D\u0930 \u0915\u094D\u0937 \u0936\u094D\u0930 ( ) \u0903 \u090B {b}",
		"{t} \u0914 \u0910 \u0906 \u0908 \u090A \u092D \u0919 \u0918 \u0927 \u091D \u0922 \u091E \u0911",
		"\u0913 \u090F \u0905 \u0907 \u0909 \u092B \u0931 \u0916 \u0925 \u091B \u0920 {enter}",
		"{s} {empty} \u0901 \u0923 {empty} {empty} \u0933 \u0936 \u0937 \u0964 \u095F {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"` 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} [ ] \\",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ; ' {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} , . / {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"~ ! @ # $ % ^ & * ( ) _ + {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { } |",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} : \" {enter}",
		"{s} {empty} \u0950 {empty} {empty} {empty} {empty} {empty} < > ? {s}",
		"{space} {alt} {accept}"
	],
	"lang":["mr"]
};
/* Mongolian Cyrillic Keyboard Layout (\u041c\u043e\u043d\u0433\u043e\u043b) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["mn"] = {
	"name":"Mongolian Cyrillic (\u041c\u043e\u043d\u0433\u043e\u043b)",
	"normal":[
		"= \u2116 - \" \u20AE : . _ , % ? \u0435 \u0449 {b}",
		"{t} \u0444 \u0446 \u0443 \u0436 \u044d \u043D \u0433 \u0448 \u04af \u0437 \u043A \u044A \\",
		"\u0439 \u044B \u0431 \u04e9 \u0430 \u0445 \u0440 \u043e \u043B \u0434 \u043f {enter}",
		"{s} \u044F \u0447 \u0451 \u0441 \u043c \u0438 \u0442 \u044c \u0432 \u044e {s}",
		"{space} {accept}"
	],
	"shift":[
		"+ 1 2 3 4 5 6 7 8 9 0 \u0415 \u0429 {b}",
		"{t} \u0424 \u0426 \u0423 \u0416 \u042d \u041D \u0413 \u0428 \u04AE \u0417 \u041a \u042A |",
		"\u0419 \u042B \u0411 \u04e8 \u0410 \u0425 \u0420 \u041e \u041b \u0414 \u041f {enter}",
		"{s} \u042F \u0427 \u0401 \u0421 \u041c \u0418 \u0422 \u042c \u0412 \u042e {s}",
		"{space} {accept}"
	],
	"lang":["mn"]
};
/* Norwegian Keyboard Layout (Norsk) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["no"] = {
	"name":"Norwegian (Norsk)",
	"normal":[
		"| 1 2 3 4 5 6 7 8 9 0 + \\ {b}",
		"{t} q w e r t y u i o p \u00e5 \u00a8 '",
		"a s d f g h j k l \u00f8 \u00e6 {enter}",
		"{s} < z x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00a7 ! \" # \u00a4 % & / ( ) = ? ` {b}",
		"{t} Q W E R T Y U I O P \u00c5 ^ *",
		"A S D F G H J K L \u00d8 \u00c6 {enter}",
		"{s} > Z X C V B N M ; : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} @ \u00a3 $ {empty} {empty} { [ ] } {empty} \u00b4 {b}",
		"{t} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ~ {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u03bc {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u039c {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["no",
		"nb",
		"nn"]
};
/* Pashto Keyboard Layout (\u067e\u069a\u062a\u0648) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["ps"] = {
	"name":"Pashto (\u067e\u069a\u062a\u0648)",
	"rtl":true,
	"normal":[
		"{ZWJ} \u06f1 \u06f2 \u06f3 \u06f4 \u06f5 \u06f6 \u06f7 \u06f8 \u06f9 \u06f0 - = {b}",
		"{t} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u0686 \\",
		"\u0634 \u0633 \u06cc \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u06a9 \u06af {enter}",
		"{s} \u0638 \u0637 \u0632 \u0631 \u0630 \u062f \u0693 \u0648 \u0696 / {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00f7 ! \u066c \u066b \u00a4 \u066a \u00d7 \u00ab \u00bb ( ) \u0640 + {b}",
		"{t} \u0652 \u064c \u064d \u064b \u064f \u0650 \u064e \u0651 \u0681 \u0685 ] [ \u066d",
		"\u069a \u06cd \u064a \u067e \u0623 \u0622 \u067c \u06bc \u0629 : \u061b {enter}",
		"{s} \u0626 \u06d0 \u0698 \u0621 {ZWNJ} \u0689 \u0624 \u060c . \u061f {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"` ` @ \u066b \u00a3 % ^ & * \ufdf2 \ufefb _ \ufe87 {b}",
		"{t} \u06d5 \u0653 \u20ac \ufef7 \ufef5 ' \ufe84 \u0670 ' \" } { |",
		"\ufbb0 \u06d2 \u06d2 \u06ba \u06b7 \u0671 \u0679 < > \u0643 \u06ab {enter}",
		"{s} ? ; \u0655 \u0654 \u0625 \u0688 \u0691 , \u06c7 \u06c9 \u064d {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00f7 {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["ps"]
};
/* Pinyin Keyboard Layout (\u62fc\u97f3 (Pinyin)) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["zh-Latn"] = {
	"name":"Pinyin (\u62fc\u97f3)",
	"normal":[
		"` 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; ' {enter}",
		"{s} z x c v b n m , . / {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"~ ! @ # $ % ^ & * ( ) _ + {b}",
		"{t} Q W E R T Y U I O P { } |",
		"A S D F G H J K L : \" {enter}",
		"{s} Z X C V B N M < > ? {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"\u4e93 \uFF62 \uFF63 \u301D \u301E \u301F \u3008 \u3009 \u302F \u300A \u300B \u300E \u300F {b}",
		"{t} \u0101 \u00E1 \u01CE \u00E0 \u0113 \u00E9 \u011B \u00E8 \u012B \u00ED \u01D0 \u00EC \u3020",
		"\u014D \u00F3 \u01D2 \u00F2 \u00fc \u016B \u00FA \u01D4 \u00F9 {empty} {empty} {enter}",
		"{s} \u01D6 \u01D8 \u01DA \u01DC {empty} {empty} {empty} \u3001 \u3002 {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"\u301C {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} \u0100 \u00C1 \u01CD \u00C0 \u0112 \u00C9 \u011A \u00C8 \u012A \u00CD \u01CF \u00CC {empty}",
		"\u014C \u00D3 \u01D1 \u00D2 \u00dc \u016A \u00DA \u01D3 \u00D9 {empty} {empty} {enter}",
		"{s} \u01D5 \u01D7 \u01D9 \u01DB {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["zh-Latn"]
};
/* Polish (214) Keyboard Layout (Polski) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["pl"] = {
	"name":"Polish (214) (Polski)",
	"normal":[
		"\u02DB 1 2 3 4 5 6 7 8 9 0 + ' {b}",
		"{t} q w e r t z u i o p \u017C \u015B \u00F3",
		"a s d f g h j k l \u0142 \u0105 {enter}",
		"{s} < y x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00B7 ! \" # \u00A4 % & / ( ) = ? * {b}",
		"{t} Q W E R T Z U I O P \u0144 \u0107 \u017A",
		"A S D F G H J K L \u0141 \u0119 {enter}",
		"{s} > Y X C V B N M ; : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} ~ \u02C7 ^ \u02D8 \u00B0 \u02DB ` \u00B7 \u00B4 \u02DD \u00A8 \u00B8 {b}",
		"{t} \\ \u00A6 {empty} {empty} {empty} {empty} \u20AC {empty} {empty} {empty} \u00F7 \u00D7 {empty}",
		"{empty} \u0111 \u0110 {empty} {empty} {empty} {empty} {empty} {empty} $ \u00DF {enter}",
		"{s} {empty} {empty} {empty} {empty} @ { } \u00A7 < > {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["pl"]
};
/* Polish Programmers Keyboard Layout (Polski Programisty) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["pl-pr"] = {
	"name":"Polish Programmers (Polski Programisty)",
	"normal":[
		"` 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; ' {enter}",
		"{s} z x c v b n m , . / {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"~ ! @ # $ % ^ & * ( ) _ + {b}",
		"{t} Q W E R T Y U I O P { } |",
		"A S D F G H J K L : \" {enter}",
		"{s} Z X C V B N M < > ? {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} \u0119 {empty} {empty} {empty} {empty} {empty} \u00f3 {empty} {empty} {empty} {empty}",
		"\u0105 \u015b {empty} {empty} {empty} {empty} {empty} {empty} \u0142 {empty} {empty} {enter}",
		"{s} \u017c \u017a \u0107 {empty} {empty} \u0144 {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} \u0118 {empty} {empty} {empty} {empty} {empty} \u00d3 {empty} {empty} {empty} {empty}",
		"\u0104 \u015a {empty} {empty} {empty} {empty} {empty} {empty} \u0141 {empty} {empty} {enter}",
		"{s} \u017b \u0179 \u0106 {empty} {empty} \u0143 {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["pl-pr"]
};
/* Portuguese (Brazil) Keyboard Layout (Portugu\u00eas Brasileiro) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["pt-BR"] = {
	"name":"Portuguese (Brazil) (Portugu\u00eas Brasileiro)",
	"normal":[
		"' 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} q w e r t y u i o p \u00b4 [ {enter}",
		"a s d f g h j k l \u00e7 ~ ] /",
		"{s} \\ z x c v b n m , . : {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\" ! @ # $ % \u00a8 & * ( ) _ + {b}",
		"{t} Q W E R T Y U I O P ` { {enter}",
		"A S D F G H J K L \u00c7 ^ } ?",
		"{s} | Z X C V B N M < > : {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} \u00b9 \u00b2 \u00b3 \u00a3 \u00a2 \u00ac {empty} {empty} {empty} {empty} {empty} \u00a7 {b}",
		"{t} / ? \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00aa {enter}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00ba {empty}",
		"{s} {empty} {empty} {empty} \u20a2 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["pt-BR"]
};
/* Portuguese Keyboard Layout (Portugu\u00eas) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["pt"] = {
	"name":"Portuguese (Portugu\u00eas)",
	"normal":[
		"\\ 1 2 3 4 5 6 7 8 9 0 ' \u00ab {b}",
		"{t} q w e r t y u i o p + \u00b4 ~",
		"a s d f g h j k l \u00e7 \u00ba {enter}",
		"{s} < z x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"| ! \" # $ % & / ( ) = ? \u00bb {b}",
		"{t} Q W E R T Y U I O P * ` ^",
		"A S D F G H J K L \u00c7 \u00aa {enter}",
		"{s} > Z X C V B N M ; : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} @ \u00a3 \u00a7 {empty} {empty} { [ ] } {empty} {empty} {b}",
		"{t} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00a8 {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} \\ {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["pt"]
};
/* Punjabi (Gurmukhi) Keyboard Layout (\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["pa"] = {
	"name":"Punjabi (Gurmukhi) (\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40)",
	"rtl":true,
	"normal":[
		"1 2 3 4 5 6 7 8 9 0 - {b}",
		"{t} \u0A4C \u0A48 \u0A3E \u0A40 \u0A42 \u0A2C \u0A39 \u0A17 \u0A26 \u0A1C \u0A21 {enter}",
		"\u0A4B \u0A47 \u0A4D \u0A3F \u0A41 \u0A2A \u0A30 \u0A15 \u0A24 \u0A1A \u0A1F \u0A3C",
		"{s} \u0A02 \u0A2E \u0A28 \u0A35 \u0A32 \u0A38 , . \u0A2F {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u0A4D\u0A35 \u0A4D\u0A2F \u0A4D\u0A30 \u0A71 {empty} {empty} {empty} {empty} ( ) {empty} {b}",
		"{t} \u0A14 \u0A10 \u0A06 \u0A08 \u0A0A \u0A2D \u0A19 \u0A18 \u0A27 \u0A1D \u0A22 {enter}",
		"\u0A13 \u0A0F \u0A05 \u0A07 \u0A09 \u0A2B {empty} \u0A16 \u0A25 \u0A1B \u0A20 \u0A1E",
		"{s} \u0A02 \u0A23 {empty} \u0A72 \u0A33 \u0A36 {empty} | {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"\u0A67 \u0A68 \u0A69 \u0A6A \u0A6B \u0A6C \u0A6D \u0A6E \u0A6F \u0A66 {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0A5A {empty} \u0A5B \u0A5C {enter}",
		"{empty} {empty} {empty} {empty} {empty} \u0A5E {empty} \u0A59 {empty} {empty} {empty} {empty}",
		"{s} {empty} {empty} {empty} \u0A73 {empty} {empty} {empty} \u0965 {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"\u0A67 \u0A68 \u0A69 \u0A6A \u0A6B \u0A6C \u0A6D \u0A6E \u0A6F \u0A66 {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0A5A {empty} \u0A5B \u0A5C {enter}",
		"{empty} {empty} {empty} {empty} {empty} \u0A5E {empty} \u0A59 {empty} {empty} {empty} {empty}",
		"{s} {empty} {empty} {empty} \u0A73 {empty} {empty} {empty} \u0965 {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["pa"]
};
/* Romanian Keyboard Layout (Rom\u00e2n\u0103) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["ro"] = {
	"name":"Romanian (Rom\u00e2n\u0103)",
	"normal":[
		"\u201E 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} q w e r t y u i o p \u0103 \u00EE \u00E2",
		"a s d f g h j k l \u0219 \u021B {enter}",
		"{s} \\ z x c v b n m , . / {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u201D ! @ # $ % ^ & * ( ) _ + {b}",
		"{t} Q W E R T Y U I O P \u0102 \u00CE \u00C2",
		"A S D F G H J K L \u0218 \u021A {enter}",
		"{s} | Z X C V B N M ; : ? {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"` ~ \u02C7 ^ \u02D8 \u00B0 \u02DB ` \u02D9 \u00B4 \u02DD \u00A8 \u00B8 {b}",
		"{t} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} \u00A7 [ ] \\",
		"{empty} \u00df \u00f0 {empty} {empty} {empty} {empty} {empty} \u0142 ; ' {enter}",
		"{s} {empty} {empty} {empty} \u00A9 {empty} {empty} {empty} {empty} < > {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"~ {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00B1 {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { } |",
		"{empty} {empty} \u00D0 {empty} {empty} {empty} {empty} {empty} \u0141 : \" {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00AB \u00BB {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["ro"]
};
/* Russian Keyboard Layout (\u0420\u0443\u0441\u0441\u043a\u0438\u0439) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["ru"] = {
	"name":"Russian (\u0420\u0443\u0441\u0441\u043a\u0438\u0439)",
	"normal":[
		"\u0451 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} \u0439 \u0446 \u0443 \u043A \u0435 \u043D \u0433 \u0448 \u0449 \u0437 \u0445 \u044A \\",
		"\u0444 \u044B \u0432 \u0430 \u043F \u0440 \u043E \u043B \u0434 \u0436 \u044D {enter}",
		"{s} / \u044F \u0447 \u0441 \u043C \u0438 \u0442 \u044C \u0431 \u044E . {s}",
		"{space} {accept}"
	],
	"shift":[
		"\u0401 ! \" \u2116 ; % : ? * ( ) _ + {b}",
		"{t} \u0419 \u0426 \u0423 \u041A \u0415 \u041D \u0413 \u0428 \u0429 \u0417 \u0425 \u042A /",
		"\u0424 \u042B \u0412 \u0410 \u041F \u0420 \u041E \u041B \u0414 \u0416 \u042D {enter}",
		"{s} | \u042F \u0427 \u0421 \u041C \u0418 \u0422 \u042C \u0411 \u042E , {s}",
		"{space} {accept}"
	],
	"lang":["ru"]
};
/* Serbian Cyrillic Keyboard Layout (\u0441\u0440\u043f\u0441\u043a\u0438) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["sr-Cyrl"] = {
	"name":"Serbian Cyrillic (\u0441\u0440\u043f\u0441\u043a\u0438)",
	"normal":[
		"` 1 2 3 4 5 6 7 8 9 0 ' + {b}",
		"{t} \u0459 \u045a \u0435 \u0440 \u0442 \u0437 \u0443 \u0438 \u043e \u043f \u0448 \u0452 \u0436",
		"\u0430 \u0441 \u0434 \u0444 \u0433 \u0445 \u0458 \u043a \u043b \u0447 \u045b {enter}",
		"{s} < \u0455 \u045f \u0446 \u0432 \u0431 \u043d \u043c , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"~ ! \" # $ % & / ( ) = ? * {b}",
		"{t} \u0409 \u040a \u0415 \u0420 \u0422 \u0417 \u0423 \u0418 \u041e \u041f \u0428 \u0402 \u0416",
		"\u0410 \u0421 \u0414 \u0424 \u0413 \u0425 \u0408 \u041a \u041b \u0427 \u040b {enter}",
		"{s} > \u0405 \u040f \u0426 \u0412 \u0411 \u041d \u041c ; : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} < > \u00a9 {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["sr-Cyrl"]
};
/* Serbian Latin Keyboard Layout (Srpski) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["sr"] = {
	"name":"Serbian Latin (Srpski)",
	"normal":[
		"\u00B8 1 2 3 4 5 6 7 8 9 0 ' + {b}",
		"{t} q w e r t z u i o p \u0161 \u0111 \u017E",
		"a s d f g h j k l \u010D \u0107 {enter}",
		"{s} < y x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00A8 ! \" # $ % & / ( ) = ? * {b}",
		"{t} Q W E R T Z U I O P \u0160 \u0110 \u017D",
		"A S D F G H J K L \u010C \u0106 {enter}",
		"{s} > Y X C V B N M ; : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} ~ \u02C7 ^ \u02D8 \u00B0 \u02DB ` \u02D9 \u00B4 \u02DD \u00A8 \u00B8 {b}",
		"{t} \\ | \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00F7 \u00D7 \u00A4",
		"{empty} {empty} {empty} [ ] {empty} {empty} \u0142 \u0141 {empty} \u00DF {enter}",
		"{s} {empty} {empty} {empty} {empty} @ { } \u00A7 < > \u00A9 {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["sr"]
};
/* Slovak Keyboard Layout (Sloven\u010dina) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["sk"] = {
	"name":"Slovak (Sloven\u010dina)",
	"normal":[
		"; + \u013E \u0161 \u010D \u0165 \u017E \u00FD \u00E1 \u00ED \u00E9 = \u00B4 {b}",
		"{t} q w e r t z u i o p \u00FA \u00E4 \u0148",
		"a s d f g h j k l \u00F4 \u00A7 {enter}",
		"{s} & y x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00b0 1 2 3 4 5 6 7 8 9 0 % \u02c7 {b}",
		"{t} Q W E R T Z U I O P / ( )",
		"A S D F G H J K L \" ! {enter}",
		"{s} * Y X C V B N M ? : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} ~ \u02C7 ^ \u02D8 \u00B0 \u02DB ` \u02D9 \u00B4 \u02DD \u00A8 \u00B8 {b}",
		"{t} \\ | \u20AC {empty} {empty} {empty} {empty} {empty} {empty} ' \u00F7 \u00D7 \u00A4",
		"{empty} \u0111 \u0110 [ ] {empty} {empty} \u0142 \u0141 $ \u00DF {enter}",
		"{s} < > # & @ { } {empty} < > * {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["sk"]
};
/* Slovenian Keyboard Layout (Sloven\u0161\u010dina) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["sl"] = {
	"name":"Slovenian (Sloven\u0161\u010dina)",
	"normal":[
		"\u00B8 1 2 3 4 5 6 7 8 9 0 ' + {b}",
		"{t} q w e r t z u i o p \u0161 \u0111 \u017E",
		"a s d f g h j k l \u010D \u0107 {enter}",
		"{s} < y x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00A8 ! \" # $ % & / ( ) = ? * {b}",
		"{t} Q W E R T Z U I O P \u0160 \u0110 \u017D",
		"A S D F G H J K L \u010C \u0106 {enter}",
		"{s} > Y X C V B N M ; : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} ~ \u02C7 ^ \u02D8 \u00B0 \u02DB ` \u02D9 \u00B4 \u02DD \u00A8 \u00B8 {b}",
		"{t} \\ | \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00F7 \u00D7 \u00A4",
		"{empty} {empty} {empty} [ ] {empty} {empty} \u0142 \u0141 {empty} \u00DF {enter}",
		"{s} {empty} {empty} {empty} {empty} @ { } \u00A7 < > \u00A9 {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["sl"]
};
/* Spanish Keyboard Layout (Espa\u00f1ol) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["es"] = {
	"name":"Spanish (Espa\u00f1ol)",
	"normal":[
		"\u00ba 1 2 3 4 5 6 7 8 9 0 ' \u00a1 {b}",
		"{t} q w e r t y u i o p ` + \u00e7",
		"a s d f g h j k l \u00f1 \u00b4 {enter}",
		"{s} < z x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00aa ! \" ' $ % & / ( ) = ? \u00bf {b}",
		"{t} Q W E R T Y U I O P ^ * \u00c7",
		"A S D F G H J K L \u00d1 \u00a8 {enter}",
		"{s} > Z X C V B N M ; : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"\\ | @ # ~ \u20ac \u00ac {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} [ ] }",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["es"]
};
/* Swedish Keyboard Layout (Svenska) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["sv"] = {
	"name":"Swedish (Svenska)",
	"normal":[
		"\u00a7 1 2 3 4 5 6 7 8 9 0 + \u00b4 {b}",
		"{t} q w e r t y u i o p \u00e5 \u00a8 '",
		"a s d f g h j k l \u00f6 \u00e4 {enter}",
		"{s} < z x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00bd ! \" # \u00a4 % & / ( ) = ? ` {b}",
		"{t} Q W E R T Y U I O P \u00c5 ^ *",
		"A S D F G H J K L \u00d6 \u00c4 {enter}",
		"{s} > Z X C V B N M ; : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} @ \u00a3 $ \u20ac {empty} { [ ] } \\ {empty} {b}",
		"{t} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ~ {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} | {empty} {empty} {empty} {empty} {empty} {empty} \u03bc {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u039c {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["sv"]
};
/* Swiss French Keyboard Layout (Swiss Fran\u00e7ais) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["fr-CH"] = {
	"name":"Swiss French (Swiss Fran\u00e7ais)",
	"normal":[
		"\u00A7 1 2 3 4 5 6 7 8 9 0 ' ^ {b}",
		"{t} q w e r t z u i o p \u00E8 \u00A8 $",
		"a s d f g h j k l \u00E9 \u00E0 {enter}",
		"{s} < y x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00B0 + \" * \u00E7 % & / ( ) = ? ` {b}",
		"{t} Q W E R T Z U I O P \u00FC ! \u00A3",
		"A S D F G H J K L \u00F6 \u00E4 {enter}",
		"{s} > Y X C V B N M ; : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} \u00A6 @ # \u00B0 \u00A7 \u00AC | \u00A2 {empty} {empty} \u00B4 ~ {b}",
		"{t} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} [ ] }",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { {enter}",
		"{s} \\ {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["fr-CH"]
};
/* Swiss German Keyboard Layout (Schweizerdeutsch) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["de-CH"] = {
	"name":"Swiss German (Schweizerdeutsch)",
	"normal":[
		"\u00A7 1 2 3 4 5 6 7 8 9 0 ' ^ {b}",
		"{t} q w e r t z u i o p \u00FC \u00A8 $",
		"a s d f g h j k l \u00F6 \u00E4 {enter}",
		"{s} < y x c v b n m , . - {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00B0 + \" * \u00E7 % & / ( ) = ? ` {b}",
		"{t} Q W E R T Z U I O P \u00E8 ! \u00A3",
		"A S D F G H J K L \u00E9 \u00E0 {enter}",
		"{s} > Y X C V B N M ; : _ {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} \u00A6 @ # \u00B0 \u00A7 \u00AC | \u00A2 {empty} {empty} \u00B4 ~ {b}",
		"{t} {empty} {empty} \u20AC {empty} {empty} {empty} {empty} {empty} {empty} {empty} [ ] }",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { {enter}",
		"{s} \\ {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["de-CH"]
};
/* Symbols Keyboard Layout (Symbols) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["??-symbols"] = {
	"name":"Symbols",
	"normal":[
		"\u2605 \u2648 \u2649 \u264a \u264b \u264c \u264d \u264e \u264f \u2650 \u2651 \u2652 \u2653 {b}",
		"\u263f \u2640 \u2641 \u2642 \u2643 \u2644 \u2645 \u2646 \u2647 \u2669 \u266a \u266b \u266c \u26f9 \u267f",
		"{t} \u261e \u261b \u2602 \u2615 \u263a \u2617 \u2660 \u2664 \u26c2 \u2624 \u2610 \u2628 \u262a \u26fa",
		"\u262f \u263c \u26c4 \u26a0 \u26e4 \u260a \u269c \u26b3 \u26b7 \u26b9 \u26bd {enter}",
		"{s} \u2600 \u2691 \u26cb \u26cf \u26d3 \u26da \u26df \u26e3 \u26eb \u26ef \u26f4 {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u2606 \u2673 \u2674 \u2675 \u2676 \u2677 \u2678 \u2679 \u267a \u267b \u267c \u267d \u2672 {b}",
		"\u2680 \u2681 \u2682 \u2683 \u2684 \u2685 \u2620 \u2622 \u2623 \u266d \u266e \u266f \u2607 \u2608 \u262e",
		"{t} \u261c \u261a \u2614 \u2668 \u2639 \u2616 \u2663 \u2667 \u26c0 \u2625 \u2611 \u2626 \u262b \u26fb",
		"\u2670 \u2699 \u2603 \u26a1 \u26e5 \u260b \u269b \u26b4 \u26bf \u26ba \u26be {enter}",
		"{s} \u2601 \u2690 \u26cc \u26d0 \u26d5 \u26db \u26e0 \u26e8 \u26ec \u26f0 \u26f5 {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"\u260e \u2659 \u2658 \u2657 \u2656 \u2655 \u2654 \u265f \u265e \u265d \u265c \u265b \u265a {b}",
		"\u268a \u268b \u268c \u268d \u268e \u268f \u26ff \u2692 \u2693 \u2694 \u2695 \u2696 \u2697 \u2698 \u2638",
		"{t} \u261d \u2618 \u26f1 \u26fe \u263b \u26ca \u2665 \u2661 \u26c3 \u269a \u2612 \u2627 \u262c \u26fc",
		"\u2671 \u263d \u26c7 \u2621 \u26e6 \u260c \u269d \u26b5 \u26b8 \u26bb \u269f {enter}",
		"{s} \u26c5 \u26ab \u26cd \u26d1 \u26d6 \u26dd \u26e1 \u26e9 \u26ed \u26f2 \u26f6 {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"\u260f \u2630 \u2631 \u2632 \u2633 \u2634 \u2635 \u2636 \u2637 \u2686 \u2687 \u2688 \u2689 {b}",
		"\u26a2 \u26a3 \u26a4 \u26a5 \u26a6 \u26a7 \u26a8 \u26a9 \u26b2 \u26ac \u26ad \u26ae \u26af \u26b0 \u2609",
		"{t} \u261f \u2619 \u26d9 \u26d8 \u26dc \u26c9 \u2666 \u2662 \u26c1 \u26b1 \u2613 \u2629 \u262d \u26fd",
		"\u267e \u263e \u26c6 \u26d4 \u26e7 \u260d \u2604 \u26b6 \u26f8 \u26bc \u269e {enter}",
		"{s} \u26c8 \u26aa \u26ce \u26d2 \u26d7 \u26de \u26e2 \u26ea \u26ee \u26f3 \u26f7 {s}",
		"{space} {alt} {accept}"
	],
	"lang":["??-symbols"]
};
/* Syriac Keyboard Layout (\u0723\u0718\u072a\u071d\u071d\u0710) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["syc"] = {
	"name":"Syriac (\u0723\u0718\u072a\u071d\u071d\u0710)",
	"rtl":true,
	"normal":[
		"\u070f 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} \u0714 \u0728 \u0716 \u0729 \u0726 \u071c \u0725 \u0717 \u071e \u071a \u0713 \u0715 \u0706",
		"\u072b \u0723 \u071d \u0712 \u0720 \u0710 \u072c \u0722 \u0721 \u071f \u071b {enter}",
		"{s} ] [ \u0724 \u072a \u0727 \u0700 . \u0718 \u0719 \u0707 {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u032e ! \u030a \u0325 \u0749 \u2670 \u2671 \u070a \u00bb ) ( \u00ab + {b}",
		"{t} \u0730 \u0733 \u0736 \u073A \u073D \u0740 \u0741 \u0308 \u0304 \u0307 \u0303 \u074A :",
		"\u0731 \u0734 \u0737 \u073b \u073e \u0711 \u0640 \u0324 \u0331 \u0323 \u0330 {enter}",
		"{s} \u0732 \u0735 \u0738 \u073c \u073f \u0739 \u0742 \u060c \u061b \u061F {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"\u0651 \u0701 \u0702 \u0703 \u0704 \u0705 \u0708 \u0709 \u070B \u070C \u070D \u250C \u2510 {b}",
		"{t} \u064E \u064B \u064F \u064C \u0653 \u0654 \u0747 \u0743 \u0745 \u032D {empty} {empty} {empty}",
		"\u0650 \u064d {empty} \u0621 \u0655 \u0670 \u0748 \u0744 \u0746 {empty} {empty} {enter}",
		"{s} {empty} \u0652 {empty} {ZWJ} {ZWNJ} {LRM} {RLM} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"\u0651 \u0701 \u0702 \u0703 \u0704 \u0705 \u0708 \u0709 \u070B \u070C \u070D \u250C \u2510 {b}",
		"{t} \u064E \u064B \u064F \u064C \u0653 \u0654 \u0747 \u0743 \u0745 \u032D {empty} {empty} {empty}",
		"\u0650 \u064d {empty} \u0621 \u0655 \u0670 \u0748 \u0744 \u0746 {empty} {empty} {enter}",
		"{s} {empty} \u0652 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["syc"]
};
/* Tamil Keyboard Layout (\u0ba4\u0bae\u0bbf\u0bb4\u0bcd) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["ta"] = {
	"name":"Tamil (\u0ba4\u0bae\u0bbf\u0bb4\u0bcd)",
	"normal":[
		"\u0BCA 1 2 3 4 5 6 7 8 9 0 - {empty} {b}",
		"{t} \u0BCC \u0BC8 \u0BBE \u0BC0 \u0BC2 \u0BAA \u0BB9 \u0B95 \u0BA4 \u0B9C \u0B9F \u0B9E",
		"\u0BCB \u0BC7 \u0BCD \u0BBF \u0BC1 \u0BAA \u0BB0 \u0B95 \u0BA4 \u0B9A \u0B9F {enter}",
		"{s} \u0BC6 {empty} \u0BAE \u0BA8 \u0BB5 \u0BB2 \u0BB8 , . \u0BAF {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u0B92 {empty} {empty} {empty} {empty} {empty} \u0BA4\u0BCD\u0BB0 \u0B95\u0BCD\u0BB7 \u0BB7\u0BCD\u0BB0 {empty} {empty} \u0B83 {empty} {b}",
		"{t} \u0B94 \u0B90 \u0B86 \u0B88 \u0B8A \u0BAA \u0B99 \u0B95 \u0BA4 \u0B9A \u0B9F {empty}",
		"\u0B93 \u0B8F \u0B85 \u0B87 \u0B89 \u0BAA \u0BB1 \u0B95 \u0BA4 \u0B9A \u0B9F {enter}",
		"{s} \u0B8E {empty} \u0BA3 \u0BA9 \u0BB4 \u0BB3 \u0BB7 \u0BB7 \u0BB8\u0BCD\u0BB0\u0BC0 \u0BAF {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} \u0BE7 \u0BE8 \u0BE9 \u0BEA \u0BEB \u0BEC \u0BED \u0BEE \u0BEF \u0BF0 \u0BF1 \u0BF2 {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["ta"]
};
/* Tatar Keyboard Layout (\u0422\u0430\u0442\u0430\u0440\u0447\u0430) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["tt"] = {
	"name":"Tatar (\u0422\u0430\u0442\u0430\u0440\u0447\u0430)",
	"normal":[
		"\u04BB 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} \u0439 \u04E9 \u0443 \u043A \u0435 \u043D \u0433 \u0448 \u04D9 \u0437 \u0445 \u04AF \\",
		"\u0444 \u044B \u0432 \u0430 \u043F \u0440 \u043E \u043B \u0434 \u04A3 \u044D {enter}",
		"{s} \u0491 \u044F \u0447 \u0441 \u043C \u0438 \u0442 \u0497 \u0431 \u044E . {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u04BA ! \" \u2116 ; % : ? * ( ) _ + {b}",
		"{t} \u0419 \u04E8 \u0423 \u041A \u0415 \u041D \u0413 \u0428 \u04D8 \u0417 \u0425 \u04AE /",
		"\u0424 \u042B \u0412 \u0410 \u041F \u0420 \u041E \u041B \u0414 \u04A2 \u042D {enter}",
		"{s} \u0490 \u042F \u0427 \u0421 \u041C \u0418 \u0422 \u0496 \u0411 \u042E , {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"\u0451 {empty} @ # $ {empty} {empty} [ ] { } {empty} {empty} {b}",
		"{t} {empty} \u0446 {empty} {empty} {empty} {empty} {empty} {empty} \u0449 {empty} {empty} \u044A {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0436 ' {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u044C < > {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"\u0401 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} \u0426 {empty} {empty} {empty} {empty} {empty} {empty} \u0429 {empty} {empty} \u042A {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0416 {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u042C {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["tt"]
};
/* Telugu Keyboard Layout (\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["te"] = {
	"name":"Telugu (\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41)",
	"normal":[
		"\u0C4A 1 2 3 4 5 6 7 8 9 0 - \u0C43 {b}",
		"{t} \u0C4C \u0C48 \u0C3E \u0C40 \u0C42 \u0C2C \u0C39 \u0C17 \u0C26 \u0C1C \u0C21 {empty}",
		"\u0C4B \u0C47 \u0C4D \u0C3F \u0C41 \u0C2A \u0C30 \u0C15 \u0C24 \u0C1A \u0C1F {enter}",
		"{s} \u0C46 \u0C02 \u0C2E \u0C28 \u0C35 \u0C32 \u0C38 , . \u0C2F {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u0C12 {empty} {empty} \u0C4D\u0C30 {empty} \u0C1C\u0C4D\u0C1E \u0C24\u0C4D\u0C30 \u0C15\u0C4D\u0C37 \u0C36\u0C4D\u0C30 ( ) \u0C03 \u0C0B {b}",
		"{t} \u0C14 \u0C10 \u0C06 \u0C08 \u0C0A {empty} \u0C19 \u0C18 \u0C27 \u0C1D \u0C22 \u0C1E",
		"\u0C13 \u0C0F \u0C05 \u0C07 \u0C09 \u0C2B \u0C31 \u0C16 \u0C25 \u0C1B \u0C25 {enter}",
		"{s} \u0C0E \u0C01 \u0C23 \u0C28 {empty} \u0C33 \u0C36 \u0C37 {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} \u0C67 \u0C68 \u0C69 \u0C6A \u0C6B \u0C6C \u0C6D \u0C6E \u0C6F \u0C66 {empty} \u0C44 {b}",
		"{t} {empty} \u0C56 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} \u0C55 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} \u0C61 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} \u0C0C {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["te"]
};
/* Thai Kedmanee Keyboard Layout (\u0e44\u0e17\u0e22 Kedmanee) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["th-ked"] = {
	"name":"Thai Kedmanee (\u0e44\u0e17\u0e22 Kedmanee)",
	"normal":[
		"_ \u0E45 / - \u0E20 \u0E16 \u0E38 \u0E36 \u0E04 \u0E15 \u0E08 \u0E02 \u0E0A {b}",
		"{t} \u0E46 \u0E44 \u0E33 \u0E1E \u0E30 \u0E31 \u0E35 \u0E23 \u0E19 \u0E22 \u0E1A \u0E25 \u0E03",
		"\u0E1F \u0E2B \u0E01 \u0E14 \u0E40 \u0E49 \u0E48 \u0E32 \u0E2A \u0E27 \u0E07 {enter}",
		"{s} \u0E1C \u0E1B \u0E41 \u0E2D \u0E34 \u0E37 \u0E17 \u0E21 \u0E43 \u0E1D {s}",
		"{space} {accept}"
	],
	"shift":[
		"% + \u0E51 \u0E52 \u0E53 \u0E54 \u0E39 \u0E3F \u0E55 \u0E56 \u0E57 \u0E58 \u0E59 {b}",
		"{t} \u0E50 \" \u0E0E \u0E11 \u0E18 \u0E4D \u0E4A \u0E13 \u0E2F \u0E0D \u0E10 , \u0E05",
		"\u0E24 \u0E06 \u0E0F \u0E42 \u0E0C \u0E47 \u0E4B \u0E29 \u0E28 \u0E0B . {enter}",
		"{s} ( ) \u0E09 \u0E2E \u0E3A \u0E4C ? \u0E12 \u0E2C \u0E26 {s}",
		"{space} {accept}"
	],
	"lang":["th-ked"]
};
/* Thai Pattachote Keyboard Layout (\u0e44\u0e17\u0e22 Pattachote) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["th-pat"] = {
	"name":"Thai Pattachote (\u0e44\u0e17\u0e22 Pattachote)",
	"normal":[
		"_ = \u0E52 \u0E53 \u0E54 \u0E55 \u0E39 \u0E57 \u0E58 \u0E59 \u0E50 \u0E51 \u0E56 {b}",
		"{t} \u0E47 \u0E15 \u0E22 \u0E2D \u0E23 \u0E48 \u0E14 \u0E21 \u0E27 \u0E41 \u0E43 \u0E0C \uF8C7",
		"\u0E49 \u0E17 \u0E07 \u0E01 \u0E31 \u0E35 \u0E32 \u0E19 \u0E40 \u0E44 \u0E02 {enter}",
		"{s} \u0E1A \u0E1B \u0E25 \u0E2B \u0E34 \u0E04 \u0E2A \u0E30 \u0E08 \u0E1E {s}",
		"{space} {accept}"
	],
	"shift":[
		"\u0E3F + \" / , ? \u0E38 _ . ( ) - % {b}",
		"{t} \u0E4A \u0E24 \u0E46 \u0E0D \u0E29 \u0E36 \u0E1D \u0E0B \u0E16 \u0E12 \u0E2F \u0E26 \u0E4D",
		"\u0E4B \u0E18 \u0E33 \u0E13 \u0E4C \u0E37 \u0E1C \u0E0A \u0E42 \u0E06 \u0E11 {enter}",
		"{s} \u0E0E \u0E0F \u0E10 \u0E20 \u0E31 \u0E28 \u0E2E \u0E1F \u0E09 \u0E2C {s}",
		"{space} {accept}"
	],
	"lang":["th-pat"]
};
/* Turkish F Keyboard Layout (T\u00fcrk\u00e7e F) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["tr-f"] = {
	"name":"Turkish F (T\u00fcrk\u00e7e F)",
	"normal":[
		"+ 1 2 3 4 5 6 7 8 9 0 / - {b}",
		"{t} f g \u011f \u0131 o d r n h p q w x",
		"u i e a \u00fc t k m l y \u015f {enter}",
		"{s} < j \u00f6 v c \u00e7 z s b . , {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"* ! \" ^ $ % & ' ( ) = ? _ {b}",
		"{t} F G \u011e I O D R N H P Q W X",
		"U \u0130 E A \u00dc T K M L Y \u015e {enter}",
		"{s} > J \u00d6 V C \u00c7 Z S B : ; {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"\u00ac \u00b9 \u00b2 # \u00bc \u00bd \u00be { [ ] } \\ | {b}",
		"{t} @ {empty} {empty} \u00b6 {empty} \u00a5 {empty} {empty} \u00f8 \u00a3 \u00a8 ~ `",
		"\u00e6 \u00df \u20ac {empty} {empty} {empty} {empty} {empty} {empty} \u00b4 {empty} {enter}",
		"{s} | \u00ab \u00bb \u00a2 {empty} {empty} {empty} \u00b5 \u00d7 \u00f7 - {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} \u00a1 {empty} \u00b3 \u00a4 {empty} {empty} {empty} {empty} {empty} {empty} \u00bf {empty} {b}",
		"{t} {empty} {empty} {empty} \u00ae {empty} {empty} {empty} {empty} \u00d8 {empty} {empty} {empty} {empty}",
		"\u00c6 \u00a7 {empty} \u00aa {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} \u00a6 < > \u00a9 {empty} {empty} {empty} \u00ba {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["tr-f"]
};
/* Turkish Q Keyboard Layout (T\u00fcrk\u00e7e Q) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["tr-q"] = {
	"name":"Turkish Q (T\u00fcrk\u00e7e Q)",
	"normal":[
		"\" 1 2 3 4 5 6 7 8 9 0 * - {b}",
		"{t} q w e r t y u \u0131 o p \u011f \u00fc ,",
		"a s d f g h j k l \u015f i {enter}",
		"{s} < z x c v b n m \u00f6 \u00e7 . {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00e9 ! ' ^ + % & / ( ) = ? _ {b}",
		"{t} Q W E R T Y U I O P \u011e \u00dc ;",
		"A S D F G H J K L \u015e \u0130 {enter}",
		"{s} > Z X C V B N M \u00d6 \u00c7 : {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"< > \u00a3 # $ \u00bd {empty} { [ ] } \\ | {b}",
		"{t} @ {empty} \u20ac {empty} {empty} {empty} {empty} i {empty} {empty} \u00a8 ~ `",
		"\u00e6 \u00df {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00b4 {empty} {enter}",
		"{s} | {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u0130 {empty} {empty} {empty} {empty} {empty}",
		"\u00c6 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["tr-q"]
};
/* Ukrainian Keyboard Layout (\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["uk"] = {
	"name":"Ukrainian (\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430)",
	"normal":[
		"\u00b4 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} \u0439 \u0446 \u0443 \u043A \u0435 \u043D \u0433 \u0448 \u0449 \u0437 \u0445 \u0457 \u0491",
		"\u0444 \u0456 \u0432 \u0430 \u043F \u0440 \u043E \u043B \u0434 \u0436 \u0454 {enter}",
		"{s} \u044F \u0447 \u0441 \u043C \u0438 \u0442 \u044C \u0431 \u044E . {s}",
		"{space} {accept}"
	],
	"shift":[
		"~ ! \" \u2116 ; % : ? * ( ) _ + {b}",
		"{t} \u0419 \u0426 \u0423 \u041A \u0415 \u041D \u0413 \u0428 \u0429 \u0417 \u0425 \u0407 \u0490",
		"\u0424 \u0406 \u0412 \u0410 \u041F \u0420 \u041E \u041B \u0414 \u0416 \u0404 {enter}",
		"{s} \u042F \u0427 \u0421 \u041C \u0418 \u0422 \u042C \u0411 \u042E , {s}",
		"{space} {accept}"
	],
	"lang":["uk"]
};
/* United Kingdom Keyboard Layout (United Kingdom) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["en-gb"] = {
	"name":"United Kingdom (United Kingdom)",
	"normal":[
		"` 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} q w e r t y u i o p [ ] #",
		"a s d f g h j k l ; ' {enter}",
		"{s} \\ z x c v b n m , . / {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u00ac ! \" \u00a3 $ % ^ & * ( ) _ + {b}",
		"{t} Q W E R T Y U I O P { } ~",
		"A S D F G H J K L : @ {enter}",
		"{s} | Z X C V B N M < > ? {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"\u00a6 {empty} {empty} {empty} \u20ac {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} \u00e9 {empty} {empty} {empty} \u00fa \u00ed \u00f3 {empty} {empty} {empty} {empty}",
		"\u00e1 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} \u00c9 {empty} {empty} {empty} \u00da \u00cd \u00d3 {empty} {empty} {empty} {empty}",
		"\u00c1 {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["en-gb"]
};
/* Urdu Keyboard Layout (\u0627\u0631\u062f\u0648) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["ur"] = {
	"name":"Urdu (\u0627\u0631\u062f\u0648)",
	"rtl":true,
	"normal":[
		"` 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} \u0637 \u0635 \u06be \u062f \u0679 \u067e \u062a \u0628 \u062c \u062d ] [ \\",
		"\u0645 \u0648 \u0631 \u0646 \u0644 \u06c1 \u0627 \u06A9 \u06CC \u061b ' {enter}",
		"{s} \u0642 \u0641 \u06D2 \u0633 \u0634 \u063a \u0639 \u060C \u06D4 / {s}",
		"{space} {accept}"
	],
	"shift":[
		"~ ! @ # $ \u066A ^ \u06D6 \u066D ) ( _ + {b}",
		"{t} \u0638 \u0636 \u0630 \u0688 \u062B \u0651 \u06C3 \u0640 \u0686 \u062E } { |",
		"\u0698 \u0632 \u0691 \u06BA \u06C2 \u0621 \u0622 \u06AF \u064A : \" {enter}",
		"{s} {ZWJ} {ZWNJ} \u06D3 {LRM} \u0624 \u0626 {RLM} > < \u061F {s}",
		"{space} {accept}"
	],
	"lang":["ur"]
};
/* Urdu Phonetic Keyboard Layout (\u0627\u0631\u062f\u0648 Phonetic) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["ur-ph"] = {
	"name":"Urdu Phonetic (\u0627\u0631\u062f\u0648 Phonetic)",
	"rtl":true,
	"normal":[
		"\u064D \u06F1 \u06F2 \u06F3 \u06F4 \u06F5 \u06F6 \u06F7 \u06F8 \u06F9 \u06F0 - = {b}",
		"{t} \u0642 \u0648 \u0639 \u0631 \u062A \u06D2 \u0621 \u06CC \u06C1 \u067E [ ] \\",
		"\u0627 \u0633 \u062F \u0641 \u06AF \u062D \u062C \u06A9 \u0644 \u061B ' {enter}",
		"{s} \u0632 \u0634 \u0686 \u0637 \u0628 \u0646 \u0645 \u060C \u06D4 / {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u064B 1 2 3 4 5 6 7 8 9 0 _ + {b}",
		"{t} \u0652 \u0651 \u0670 \u0691 \u0679 \u064E \u0626 \u0650 \u06C3 \u064F { } |",
		"\u0622 \u0635 \u0688 {empty} \u063A \u06BE \u0636 \u062E {empty} : \" {enter}",
		"{s} \u0630 \u0698 \u062B \u0638 {empty} \u06BA \u0658 {empty} \u066B \u061F {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"~ ! @ # $ \u066A ^ & * ( ) {empty} {empty} {b}",
		"{t} {empty} \u0602 \u0656 \u0613 \u0614 \u0601 \u0654 \u0611 {empty} \u0657 {empty} {empty} {empty}",
		"\uFDF2 \u0610 \uFDFA {empty} {empty} \u0612 \uFDFB {empty} {empty} {empty} {empty} {enter}",
		"{s} \u060F \u060E \u0603 {empty} \uFDFD \u0600 {empty} < > {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["ur-ph"]
};
/* US Standard Keyboard Layout (US Standard) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["en-us"] = {
	"name":"US Standard (US Standard)",
	"normal":[
		"` 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; ' {enter}",
		"{s} z x c v b n m , . / {s}",
		"{space} {accept}"
	],
	"shift":[
		"~ ! @ # $ % ^ & * ( ) _ + {b}",
		"{t} Q W E R T Y U I O P { } |",
		"A S D F G H J K L : \" {enter}",
		"{s} Z X C V B N M < > ? {s}",
		"{space} {accept}"
	],
	"lang":["en-us"]
};
/* US International Keyboard Layout (US International) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["en-int"] = {
	"name":"US International (US International)",
	"normal":[
		"` 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; ' {enter}",
		"{s} z x c v b n m , . / {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"~ ! @ # $ % ^ & * ( ) _ + {b}",
		"{t} Q W E R T Y U I O P { } |",
		"A S D F G H J K L : \" {enter}",
		"{s} Z X C V B N M < > ? {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} \u00a1 \u00b2 \u00b3 \u00a4 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00d7 {b}",
		"{t} \u00e4 \u00e5 \u00e9 \u00ae \u00fe \u00fc \u00fa \u00ed \u00f3 \u00f6 \u00ab \u00bb \u00ac",
		"\u00e1 \u00df \u00f0 {empty} {empty} {empty} {empty} {empty} \u00f8 \u00b6 \u00b4 {enter}",
		"{s} \u00e6 {empty} \u00a9 {empty} {empty} \u00f1 \u00b5 \u00e7 {empty} \u00bf {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} \u00b9 {empty} {empty} \u00a3 {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00f7 {b}",
		"{t} \u00c4 \u00c5 \u00c9 {empty} \u00de \u00dc \u00da \u00cd \u00d3 \u00d6 {empty} {empty} \u00a6",
		"\u00c1 \u00a7 \u00d0 {empty} {empty} {empty} {empty} {empty} \u00d8 \u00b0 \u00a8 {enter}",
		"{s} \u00c6 {empty} \u00a2 {empty} {empty} \u00d1 {empty} \u00c7 {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["en-int"]
};
/* Uzbek Cyrillic Keyboard Layout (\u040e\u0437\u0431\u0435\u043a\u0447\u0430) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["uz"] = {
	"name":"Uzbek Cyrillic (\u040e\u0437\u0431\u0435\u043a\u0447\u0430)",
	"normal":[
		"\u0451 1 2 3 4 5 6 7 8 9 0 \u0493 \u04B3 {b}",
		"{t} \u0439 \u0446 \u0443 \u043A \u0435 \u043D \u0433 \u0448 \u045E \u0437 \u0445 \u044A \\",
		"\u0444 \u049B \u0432 \u0430 \u043F \u0440 \u043E \u043B \u0434 \u0436 \u044D {enter}",
		"{s} \u044F \u0447 \u0441 \u043C \u0438 \u0442 \u044C \u0431 \u044E . {s}",
		"{space} {accept}"
	],
	"shift":[
		"\u0401 ! \" \u2116 ; % : ? * ( ) \u0492 \u04B2 {b}",
		"{t} \u0419 \u0426 \u0423 \u041A \u0415 \u041D \u0413 \u0428 \u040E \u0417 \u0425 \u042A /",
		"\u0424 \u049A \u0412 \u0410 \u041F \u0420 \u041E \u041B \u0414 \u0416 \u042D {enter}",
		"{s} \u042F \u0427 \u0421 \u041C \u0418 \u0422 \u042C \u0411 \u042E , {s}",
		"{space} {accept}"
	],
	"lang":["uz"]
};
/* Vietnamese Keyboard Layout (Ti\u1ebfng Vi\u1ec7t) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["vi"] = {
	"name":"Vietnamese (Ti\u1ebfng Vi\u1ec7t)",
	"normal":[
		"` \u0103 \u00E2 \u00EA \u00F4 \u0300 \u0309 \u0303 \u0301 \u0323 \u0111 - \u20AB {b}",
		"{t} q w e r t y u i o p \u01B0 \u01A1 \\",
		"a s d f g h j k l ; ' {enter}",
		"{s} z x c v b n m , . / {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"~ \u0102 \u00C2 \u00CA \u00D4 \u0300 \u0309 \u0303 \u0301 \u0323 \u0110 _ + {b}",
		"{t} Q W E R T Y U I O P \u01AF \u01A0 |",
		"A S D F G H J K L : \" {enter}",
		"{s} Z X C V B N M < > ? {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"` 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; ' {enter}",
		"{s} z x c v b n m , . / {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"~ ! @ # $ % ^ & * ( ) _ + {b}",
		"{t} Q W E R T Y U I O P { } |",
		"A S D F G H J K L : \" {enter}",
		"{s} Z X C V B N M < > ? {s}",
		"{space} {alt} {accept}"
	],
	"lang":["vi"]
};
/* Western Armenian Keyboard Layout (\u0540\u0561\u0575\u0565\u0580\u0565\u0576 \u0561\u0580\u0565\u0582\u0574\u0578\u0582\u057f\u0584) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["hy-arevmda"] = {
	"name":"Western Armenian (\u0540\u0561\u0575\u0565\u0580\u0565\u0576 \u0561\u0580\u0565\u0582\u0574\u0578\u0582\u057f\u0584)",
	"normal":[
		"\u055D : \u0571 \u0575 \u055B , - . \u00AB \u00BB \u0585 \u057C \u056A {b}",
		"{t} \u056D \u057E \u0567 \u0580 \u0564 \u0565 \u0568 \u056B \u0578 \u0562 \u0579 \u057B '",
		"\u0561 \u057D \u057F \u0586 \u056F \u0570 \u0573 \u0584 \u056C \u0569 \u0583 {enter}",
		"{s} \u0566 \u0581 \u0563 \u0582 \u057A \u0576 \u0574 \u0577 \u0572 \u056E {s}",
		"{space} {accept}"
	],
	"shift":[
		"\u055C 1 \u0541 \u0545 3 4 9 \u0587 ( ) \u0555 \u054C \u053A {b}",
		"{t} \u053D \u054E \u0537 \u0550 \u0534 \u0535 \u0538 \u053B \u0548 \u0532 \u0549 \u054B \u055E",
		"\u0531 \u054D \u054F \u0556 \u053F \u0540 \u0543 \u0554 \u053C \u0539 \u0553 {enter}",
		"{s} \u0536 \u0551 \u0533 \u0552 \u054A \u0546 \u0544 \u0547 \u0542 \u053E {s}",
		"{space} {accept}"
	],
	"lang":["hy-arevmda"]
};
/* Yiddish Keyboard Layout (\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["yi"] = {
	"name":"Yiddish (\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9)",
	"rtl":true,
	"normal":[
		"; 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} / ' \u05E7 \u05E8 \u05D0 \u05D8 \u05D5 \u05DF \u05DD \u05E4 [ ] \\",
		"\u05E9 \u05D3 \u05D2 \u05DB \u05E2 \u05D9 \u05D7 \u05DC \u05DA \u05E3 , {enter}",
		"{s} \u05D6 \u05E1 \u05D1 \u05D4 \u05E0 \u05DE \u05E6 \u05EA \u05E5 . {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"~ ! @ # $ % ^ * & ( ) _ + {b}",
		"{t} \u201F \u201E ` \uFB2F \uFB2E \u05F0 \uFB35 \uFB4B \uFB4E \uFB44 { } |",
		"\uFB2A \uFB2B {empty} \uFB3B \u05F1 \uFB1D \uFF1F \u05F2 {empty} : \" {enter}",
		"{s} \u2260 \uFB4C \uFB31 \u05BE \u2013 \u2014 \uFB4A < > ? {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"\u05B0 \u05B1 \u05B2 \u05B3 \u05B4 \u05B5 \u05B6 \u05B7 \u05B8 \u05C2 \u05C1 \u05B9 \u05BC {b}",
		"{t} \u201F \u201E ` \uFB2F \uFB2E \u05F0 \uFB35 \uFB4B \uFB4E \uFB44 \u05BD \u05BF \u05BB",
		"\uFB2A \uFB2B {empty} \uFB3B \u05F1 \uFB1D \uFF1F \u05F2 {empty} \u05C3 \u05C0 {enter}",
		"{s} \u2260 \uFB4C \uFB31 \u05BE \u2013 \u2014 \uFB4A \u05F3 \u05F4 \u20AA {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["yi"]
};
/* Yiddish (Yidish Lebt) Keyboard Layout (\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9 \u05dc\u05e2\u05d1\u05d8) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["yi-lebt"] = {
	"name":"Yiddish (Yidish Lebt) (\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9 \u05dc\u05e2\u05d1\u05d8)",
	"rtl":true,
	"normal":[
		"; 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} / ' \u05E7 \u05E8 \u05D0 \u05D8 \u05D5 \u05DF \u05DD \u05E4 ] [ \\",
		"\u05E9 \u05D3 \u05D2 \u05DB \u05E2 \u05D9 \u05D7 \u05DC \u05DA \u05E3 , {enter}",
		"{s} \u05D6 \u05E1 \u05D1 \u05D4 \u05E0 \u05DE \u05E6 \u05EA \u05E5 . {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"~ ! @ # $ % ^ & * ) ( _ + {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} \u05D5\u05B9 {empty} {empty} {empty} } { |",
		"\u05E9\u05C1 {empty} \u201E {empty} {empty} {empty} {empty} \u05DC\u05B9 {empty} : \" {enter}",
		"{s} {empty} {empty} \u05DC\u05B9 {empty} {empty} {empty} {empty} > < ? {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} \u05B2 \u05B3 \u05B1 \u05B4 \u05B5 \u05B7 \u05B8 \u05BB \u05B6 \u05B0 \u05BF \u05B9 {b}",
		"{t} \u05F4 \u05F3 \u20AC {empty} \u05D0\u05B7 \u05D0\u05B8 \u05D5\u05BC \u05D5\u05D5 \u05BC \u05E4\u05BC \u201E \u201A \u05BE",
		"\u05E9\u05C2 \u20AA {empty} \u05DB\u05BC {empty} \u05D9\u05B4 \u05F2\u05B7 \u05D5\u05D9 {empty} \u05E4\u05BF ; {enter}",
		"{s} \u2013 \u2014 \u05D1\u05BF \u201D \u059C \u2019 \u05E9\u05C1 \u05EA\u05BC {empty} \u2026 {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} \u05B2 \u05B3 \u05B1 \u05B4 \u05B5 \u05B7 \u05B8 \u05BB \u05B6 \u05B0 \u05BF \u05B9 {b}",
		"{t} \u05F4 \u05F3 {empty} {empty} \uFB2E \uFB2F \uFB35 \u05F0 {empty} \uFB44 \u201D \u2019 \u05BE",
		"\uFB2B {empty} {empty} \uFB3B \uFB20 \uFB1D \uFB1F \u05F1 \u05F2 \uFB4E \u05B2 {enter}",
		"{s} \u2013 \u2014 \uFB4C \u201C \u059E \u2018 \uFB2A \uFB4A {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["yi-lebt"]
};
