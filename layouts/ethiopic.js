/* keyboard layout template (copy of "international" from the core plugin)
 */
jQuery.keyboard.layouts['ethiopic'] = {
	'name' : 'Amharic',
	'lang' : ['amh'],
	'normal': [
		'` \u1369 \u136A \u136B \u136C \u136D \u136E \u136F \u1370 \u1371 0 \u1365 = {bksp}',
		'{tab} \u1240 \u12c8 \u01dd \u1228 \u1270 \u12e8 u i o \u1330 \u1248 \u1288 \\',
		'a \u1230 \u12f0 \u1348 \u1308 \u1200 \u1338 \u12a8 \u1208:Shortcut_(l_+_e_=_\u120d) ; \u12a0 {enter}',
		'{shift} \u12d8 \u1280 \u1278 \u1238 \u1260 \u1290 \u1218 \u1361 \u1362 / {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'shift': [
		'~ \u1372 \u1373 \u1374 \u1375 \u1376 \u1377 \u1378 \u1379 \u137A \u137B \u137C + {bksp}',
		'{tab} \u1250 \u12d0 \u018e \u122f \u1320 Y U I O \u1350 \u1310 \u12b0 \u1384',
		'\u0101 \u1220 \u1300 \u1358 \u1318 \u1210 \u1340 \u12b8 \u12f8 \u12A5\u130D\u12DA\u12A0\u1265\u1214\u122D\u1361 " {enter}',
		'{shift} \u12e0 \u1359 \u1328 \u135A \u1268 \u1298 \u1380 \u1388 \u138C \u1208\u130D\u12DA\u12A0\u1265\u1214\u122D\u1361 {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt': [
		'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
		'{tab} q \u02b7 e r t y u i o \u1e57 [ ] \\',
		'a \u0161 d f \u01e7 \u1e2b j k l ; \u02be {enter}',
		'{shift} \u017e x \u010d\u0323 \u010d b \u00f1 m , . / {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	],
	'alt-shift': [
		'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
		'{tab} Q W E R T Y U I O \u1E56 { } |',
		'A \u0160 D F \u01e6 \u1e2a J K L : \u02bf {enter}',
		'{shift} \u017d X \u010c\u0323 \u010c B \u00d1 M < > ? {shift}',
		'{accept} {alt} {space} {alt} {cancel}'
	]
};
