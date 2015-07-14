// Keyboard Language
// please update this section to match this language and email me with corrections!
// ru = ISO 639-1 code for Russian
// ***********************
jQuery.keyboard.language.ru = {
	language: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439 (Russian)',
	display : {
		'a'      : '\u2714:Сохранить (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Сохранить:Сохранить (Shift+Enter)',
		'alt'    : 'РУС:Русская клавиатура',
		'b'      : '\u2190:Удалить символ слева',    // Left arrow (same as &larr;)
		'bksp'   : '\u21e6:Удалить символ слева',
		'c'      : '\u2716:Отменить (Esc)', // big X, close - same action as cancel
		'cancel' : 'Отменить:Отменить (Esc)',
		'clear'  : 'C:Очистить',             // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : ',:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Ввод',        // down, then left arrow - enter symbol
		'enter'  : 'Ввод:Перевод строки',
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		's'      : '\u21e7:Верхний регистр',        // thick hollow up arrow
		'shift'  : '\u21e7:Верхний регистр',
		'sign'   : '\u00b1:Сменить знак',  // +/- sign for num pad
		'space'  : 'Пробел:',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Use mousewheel to see other keys',
};
