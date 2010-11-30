$(document).ready(function(){

	// Theme switcher
//	$('#switcher').themeswitcher();

	// Keyboards
	$('.qwerty').keyboard({ layout: 'qwerty' });

	$('#inter').keyboard({ layout: 'international' });

	$('#dvorak').keyboard({ layout: 'dvorak' });

	$('#alpha').keyboard({ layout: 'alpha' });

	$('#num').keyboard({ layout: 'num' });

	// Hex
	$('#custom1').keyboard({
		layout: 'custom',
		customLayout: [
			['C D E F'],
			['8 9 A B'],
			['4 5 6 7'],
			['0 1 2 3'],
			['{bksp} {accept} {close}']
		]
	});

	// Junk / Examples
	$('#custom2').keyboard({
		layout: 'custom',
		customLayout: [
			['h i t {sp:1} s h i f t', 'H I T {sp:1} S H I F T'],
			['{tab} {enter} {bksp}', '{t} {sp:1} {e} {sp:1} {b}'],
			['{space} {dec}', '{space} {dec}'],
			['{accept} {cancel} {shift}', '{a} {sp:1} {c} {sp:1} {s}']
		],
		// Not part of the standard combos
		combos : {
			'a' : { e: 'æ' },
			'A' : { E: 'Æ' }
		},
		accepted: function(e, el){ alert('The content "' + el.value + '" was accepted!'); }
	});

	// *** Hidden input example ***
	// click on a link - add focus to hidden input
	$('.hiddenInput').click(function(){
		$('#hidden').trigger('focus');
		return false;
	})
	// Initialize keyboard script on hidden input
	// set "position.of" to the same link as above
	$('#hidden').keyboard({ 
		layout: 'qwerty',
		position     : {
			of : $('.hiddenInput'),
			my : 'center top',
			at : 'center top'
		},
		accepted: function(e, el){ alert('The content "' + el.value + '" was accepted!'); }
	});

	/*** console messages showing callbacks ***/
	$('.ui-keyboard-input').bind('visible hidden accepted canceled', function(e, el){
		if ( window.console && window.console.firebug ){
			var txt = (e.type == 'visible' || e.type == 'hidden') ? ' virtual keyboard is ' : ' content was ';
			console.debug( $(el).parent().find('h2').text() + txt + e.type );
		}
	});

});