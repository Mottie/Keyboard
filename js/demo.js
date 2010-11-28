$(document).ready(function(){

	// Theme switcher
	$('#switcher').themeswitcher();

	// Keyboards
	$('.qwerty').keyboard({ layout: 'qwerty' });

	$('#inter').keyboard({ layout: 'international' });

	$('#dvorak').keyboard({ layout: 'dvorak' });

	$('#alpha').keyboard({ layout: 'alpha' });

	$('#num').keyboard({ layout: 'num' });

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
		}
	})

});