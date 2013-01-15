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
$.keyboard.layouts['portuguese-qwerty'] = {
	'default' : [
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

// New combos using specific accents
$.extend(true, $.keyboard.defaultOptions.combos, {
	"\u00b4" : { a:"\u00e1", A:"\u00c1", e:"\u00e9", E:"\u00c9", i:"\u00ed", I:"\u00cd", o:"\u00f3", O:"\u00d3", u:"\u00fa", U:"\u00da", y:"\u00fd", Y:"\u00dd" } // acute & cedilla
});

// remove apostrophe combo
$.keyboard.defaultOptions.combos["'"] = {};

// Update regex for the combos above
$.keyboard.comboRegex = /([`\'~\^\"ao\u00b4])([a-z])/mig;

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ***********************
// "{a} {accept} {alt} {b} {bksp} {c} {cancel} {clear} {combo} {dec} {e} {enter} {lock} {s} {shift} {sign} {space} {t} {tab}"
if (typeof(language) === 'undefined') { var language = {}; };
language.portuguese = {
	display : {
		'a'      : '\u2714:Aceitar (Shift-Enter)',           // ALTERNATE accept button - unicode for check mark symbol
		'accept' : 'Aceitar\:Concluir (Shift-Enter)',        // Accept button text
		'alt'    :'AltGr:Carateres Adicionais/CTRL+ALT',     // Alt button text (AltGr is for international key sets)
		'b'      : '\u2190:Retroceder',                      // ALTERNATE backspace button - unicode for left arrow. Same as ← ( &larr; ) - Left arrow 
		'bksp'   : '\u2190 Bksp:Retroceder',                 // Backspace button text
		'c'      : '\u2716:Cancelar/Escape (Esc)',           // ALTERNATE cancel button - unicode for big X
		'cancel' : 'Cancel:Cancelar/Escape(Esc)',            // Cancel button text
		'clear'  : 'C:Limpar',                               // Clear window content (used in num pad)
		'combo'  : '\u00f6:Acentua\ç\ão Autom\ática',        // (Toggle combo (diacritic) key
		'dec'    : '.:Decimal',                              // Decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Introduzir/Mudar de Linha',       // ALTERNATE enter button - unicode for down, then left arrow (enter symbol)
		'enter'  : 'Enter\u21b5:Introduzir/Mudar de Linha',  // Enter button text
		'lock'   : '\u21ea Lock:CapsLock/Mai\úsculas',       // Caps lock button - unicode for double lined up arrow
		's'      : '\u21e7:Shift/Mai\úsculas',               // ALTERNATE shift button - unicode for a thick up arrow
		'shift'  : '\u21ea Shift:Mai\úsculas-Min\úsculas',   // Shift button text
		'sign'   : '\u00b1:Mudar Sinal',                     // Change sign (used in num pad) - unicode for a +- symbol
		'space'  : '&nbsp;:Espa\ço',                         // Space button text
		't'      : '\u21e5:Tab/Tabela/Avan\çar',             // ALTERNATE tab button - unicode for right arrow to bar (used since only one directional tabs available)
        'tab'    : '\u21e5 Tab:Tabela/Avan\çar'              // Tab button text (Note: \u21b9 is the true tab symbol (left & right arrows) but not used here)
	},
	wheelMessage : 'Use a roda do rato/navegador para ver mais teclas', 
};

// This will replace all default language options with these language options.
// it is separated out here so the layout demo will work properly.
$.extend(true, $.keyboard.defaultOptions, language.portuguese);