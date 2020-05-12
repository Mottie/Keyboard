// Keyboard Language
// please update this section to match this language and email me with corrections!
// fr = ISO 639-1 code for French
// ***********************
jQuery.keyboard.language.fr = {
	language: 'Fran\u00e7ais (French)',
	display : {
		'a'      : '\u2714:Valider (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Valider:Valider (Shift+Enter)',
		'alt'    : 'AltGr:Caract\u00e8re alternatif',
		'b'      : '\u2190:Suppr arri\u00e8re', // Left arrow (same as &larr;)
		'bksp'   : '\u2190Suppr:Suppr arri\u00e8re',
		'c'      : '\u2716:Annuler', // big X, close - same action as cancel
		'cancel' : 'Annuler:Annuler (\u00c9chap)',
		'clear'  : 'C:Effacer', // clear num pad
		'combo'  : '\u00f6:Bacsuler les touches combo',
		'dec'    : '.:Decimal', // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Entr\u00e9e', // down, then left arrow - enter symbol
		'enter'  : 'Entr\u00e9e:Entr\u00e9e',
		'lock'   : '\u21ea Verr Mag:Verouillage majuscule', // caps lock
		's'      : '\u21e7:Majuscule', // thick hollow up arrow
		'shift'  : 'Maj:Majuscule',
		'sign'   : '\u00b1:Change de signe', // +/- sign for num pad
		'space'  : '&nbsp;:Espace',
		't'      : '\u21e5:Tabulation', // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tabulation' // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Utiliser la molette de la souris pour voir les autres lettres',
};
