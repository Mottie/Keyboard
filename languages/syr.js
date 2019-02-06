// Syriac (a.k.a. Suroyo, Surayt, Turoyo, Aramaic)
// syr = ISO 639-3 code for Syriac
// (it appears there is no 639-1 code? Cf. http://syriaca.org/documentation/isostandards.html)
// TODO: i18n!
// TODO: this is the Arabic keyboard's layout and NOT the ONLY one commonly used for Syriac
//       the other one would be the phonetic layout...
// ***********************
jQuery.keyboard.language.syr = {
	language: 'ܣܘܪܝܰܬ (Syriac)',
	display : {
		'a'      : '\u2714:\u00dcbernehmen (Umschalt+Enter)', // check mark - same action as accept // ܚܶܦܳܕ݂ܐ (ܙܰܘܥܶܐ + ܥܒܰܪܬܐ)
		'accept' : '\u00dcbernehmen:\u00dcbernehmen (Umschalt+Enter)', // ܚܶܦܳܕ݂ܐ (ܙܰܘܥܶܐ + ܥܒܰܪܬܐ)
		'alt'    : 'AltGr:Alt Graph', // ܒܶܕܳܠܐ ܓܪܰܦܝܟ
		'b'      : '\u2190:R\u00fccktaste', // Left arrow (same as &larr;) // ܕܥܰܪܬܐ
		'bksp'   : 'R\u00fcck:R\u00fccktaste', // ܙܪܰܥܠܐ ܕܝ ܕܥܰܪܬܐ
		'c'      : '\u2716:Abbrechen (Esc)', // big X, close - same action as cancel // needs to remain "Esc"
		'cancel' : 'Abbrechen:Abbrechen (Esc)', // ܥܪܰܩܬܐ
		'clear'  : 'C:L\u00f6schen', // clear num pad // ܠܚܳܝܐ
		'combo'  : '\u00f6:Tottasten umschalten', // ܙܪܰܥܠܐ ܡܝܬ݂ܐ
		'dec'    : ',:Dezimal', // ܢܘܩܙܐ ܕܪܰܩܡܶܐ (ܐܷܢܓܠܝܫܳܝܐ\ܐܰܡܶܪܝܟܳܝܐ)
		'e'      : '\u21b5:Eingabe', // down, then left arrow - enter symbol // needs to remain "Enter" (or symbol)
		'enter'  : 'Enter:Eingabe', // ܥܒܳܪܐ
		'lock'   : '\u21E9:Feststelltaste', // caps lock // ܐܷܬ݂ܘܳܬ݂ܶܐ ܙܰܘܥܶܐ 
		's'      : '\u21e7:Umschalttaste', // thick hollow up arrow // ܙܰܘܥܶܐ
		'shift'  : 'Umschalt:Umschalttaste', // ܙܰܘܥܶܐ
		'sign'   : '\u00b1:Vorzeichen wechseln', // ܒܶܕܳܠܐ ܦ݁ܳܣܝܬܝܦ ܢܶܓܰܬܝܦ
		'space'  : '&nbsp;:Leertaste', // ܕܘܟܬ݂ܐ ܟ݂ܠܝܬ݂ܐ
		't'      : '\u21e5:Tabulatortaste', // ܙܪܰܥܠܐ ܕܷܟܠܳܝܐ ܗܳܪܝܙܳܢܳܝܐ
		'tab'    : '\u21e5 Tab:Tabulatortaste' // needs to remain "Tab" or symbol
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Mausrad benutzen, um weitere Tasten zu sehen', // ܡܷܣܬܰܥܡܶܠܘ ܐܘ ܕܘܠܰܒܐ ܕܘ ܥܶܒܘܓܪܐ ܠܰܫܰܢ ܕܚܳܙܝܬܘ ܙܪܰܥܠܶܐ ܚܪܶܢܶܐ
	rtl: true
};
