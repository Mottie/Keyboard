// Keyboard Language
// please update this section to match this language and email me with corrections!
// pt = ISO 639-1 code for Portuguese
// ***********************
jQuery.keyboard.language.pt = {
	language: 'Portugu\u00eas (Portuguese)',
	display : {
		'a'      : '\u2714:Aceitar (Shift+Enter)',           // ALTERNATE accept button - unicode for check mark symbol
		'accept' : 'Aceitar:Concluir (Shift+Enter)',         // Accept button text
		'alt'    : 'AltGr:Carateres Adicionais/CTRL+ALT',    // Alt button text (AltGr is for international key sets)
		'b'      : '\u2190:Retroceder',                      // ALTERNATE backspace button - unicode for left arrow. Same as ← ( &larr; ) - Left arrow
		'bksp'   : '\u2190 Bksp:Retroceder',                 // Backspace button text
		'c'      : '\u2716:Cancelar/Escape (Esc)',           // ALTERNATE cancel button - unicode for big X
		'cancel' : 'Cancel:Cancelar/Escape(Esc)',            // Cancel button text
		'clear'  : 'C:Limpar',                               // Clear window content (used in num pad)
		'combo'  : '\u00f6:Acentuação Automática',        // (Toggle combo (diacritic) key
		'dec'    : '.:Decimal',                              // Decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Introduzir/Mudar de Linha',       // ALTERNATE enter button - unicode for down, then left arrow (enter symbol)
		'enter'  : 'Enter\u21b5:Introduzir/Mudar de Linha',  // Enter button text
		'lock'   : '\u21ea Lock:CapsLock/Maiúsculas',       // Caps lock button - unicode for double lined up arrow
		's'      : '\u21e7:Shift/Maiúsculas',               // ALTERNATE shift button - unicode for a thick up arrow
		'shift'  : '\u21ea Shift:Maiúsculas-Minúsculas',   // Shift button text
		'sign'   : '\u00b1:Mudar Sinal',                     // Change sign (used in num pad) - unicode for a +- symbol
		'space'  : '&nbsp;:Espaço',                         // Space button text
		't'      : '\u21e5:Tab/Tabela/Avançar',             // ALTERNATE tab button - unicode for right arrow to bar (used since only one directional tabs available)
		'tab'    : '\u21e5 Tab:Tabela/Avançar'              // Tab button text (Note: \u21b9 is the true tab symbol (left & right arrows) but not used here)
	},
	wheelMessage : 'Use a roda do rato/navegador para ver mais teclas',

	// Update regex for the combos above
	comboRegex : /([`\'~\^\"ao\u00b4])([a-z])/mig,
	// New combos using specific accents
	combos : {
		"\u00b4" : { a:"\u00e1", A:"\u00c1", e:"\u00e9", E:"\u00c9", i:"\u00ed", I:"\u00cd", o:"\u00f3", O:"\u00d3", u:"\u00fa", U:"\u00da", y:"\u00fd", Y:"\u00dd" }, // acute & cedilla
		// remove apostrophe combo
		"'" : {}
	}

};
