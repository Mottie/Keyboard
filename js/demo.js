$(document).ready(function(){

	// Theme switcher
	$('#switcher').themeswitcher();

	// Keyboards
	$('.qwerty').keyboard({ layout: 'qwerty' });

	$('#dvorak').keyboard({ layout: 'dvorak' });

	$('#alpha').keyboard({ layout: 'alpha' });

	$('#num').keyboard({ layout: 'num' });

	$('#custom1').keyboard({
		layout: 'custom',
		customLayout:
		[["1 2 3 4 {bksp}"],
		["5 6 7 8 {accept}"],
		["9 A B C {cancel}"],
		["D E F"]]
	});

	$('#custom2').keyboard({
		layout: 'custom',
		customLayout: [['q w e r t y {bksp}', 'Q W E R T Y {bksp}'],
									[ 's a m p l e {shift}', 'S A M P L E {shift}'],
									[ '{accept} {space} {cancel}', '{accept} {space} {cancel}']]
	})

});