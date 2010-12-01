$(document).ready(function(){

	// Theme switcher
	$('#switcher').themeswitcher();

	// Keyboards
	$('.qwerty').keyboard({ layout: 'qwerty' });

	$('#inter').keyboard({ layout: 'international' });

	$('#dvorak').keyboard({ layout: 'dvorak' });

	$('#alpha').keyboard({ layout: 'alpha' });

	$('#num').keyboard({ layout: 'num' });

	// Hex
	$('#custom1').keyboard({
		layout: 'custom',
		customLayout: {
			'default' : [
				'C D E F',
				'8 9 A B',
				'4 5 6 7',
				'0 1 2 3',
				'{bksp} {a} {c}'
			]
		}
	});

	// Junk / Examples
	$('#custom2').keyboard({
		layout: 'custom',
		customLayout: {
			'default' : [
				'h i t {sp:1} s h i f t',
				'{tab} {enter} {bksp}',
				'{space} {dec}',
				'{accept} {cancel} {shift}'
			],
			'shift' : [
				'H I T {sp:1} S H I F T',
				'{t} {sp:1} {e} {sp:1} {b}',
				'{space} {dec}',
				'{a} {sp:1} {c} {sp:1} {s}'
			]
		},
		// Not part of the standard combos
		combos : {
			'a' : { e: 'æ' },
			'A' : { E: 'Æ' }
		},
		accepted: function(e, el){ alert('The content "' + el.value + '" was accepted!'); }
	});

	// Meta
	$('#meta').keyboard({
		layout: 'custom',
		display: {
			'meta1'  : '\u2666', // Diamond
			'meta2'  : '\u2665', // Heart
			'meta3'  : '\u2663', // Club
			'meta99' : '\u2660', // Spade
		},
		customLayout: {
			'default' : [
				'a b c d e f g',
				'{shift} {alt} {meta1} {meta2} {meta3} {meta99}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'shift' : [
				'A B C D E F G',
				'{shift} {alt} {meta1} {meta2} {meta3} {meta99}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'alt' : [ 
				'\u03b1 \u03b2 \u03b3 \u03b4 \u03b5 \u03b6 \u03b7', // lower case Greek
				'{shift} {alt} {meta1} {meta2} {meta3} {meta99}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'alt-shift' : [
				'\u0391 \u0392 \u0393 \u0394 \u0395 \u0396 \u0397', // upper case Greek
				'{shift} {alt} {meta1} {meta2} {meta3} {meta99}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'meta1' : [
				'\u0430 \u0431 \u0432 \u0433 \u0434 \u0435 \u0436', // lower case Russian
				'{shift} {alt} {meta1} {meta2} {meta3} {meta99}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'meta2' : [
				'\u0410 \u0411 \u0412 \u0413 \u0414 \u0415 \u0416', // upper case Russian
				'{shift} {alt} {meta1} {meta2} {meta3} {meta99}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'meta3' : [
				'\u05d6 \u05d5 \u05d4 \u05d3 \u05d2 \u05d1 \u05d0', // Hebrew
				'{shift} {alt} {meta1} {meta2} {meta3} {meta99}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'meta99' : [
				'1 2 3 4 5 6 7', // only because I ran out of ideas
				'{shift} {alt} {meta1} {meta2} {meta3} {meta99}',
				'{bksp} {sp:1} {accept} {cancel}'
			]
		}
	});

/* example from readme, comment out the meta example above then uncomment this one to test it
	$('#meta').keyboard({
		layout: 'custom',
		display: {
			'meta1'  : '\u2666', // Diamond
			'meta2'  : '\u2665'  // Heart
		},
		customLayout: {
			'default' : [
				'd e f a u l t',
				'{meta1} {meta2} {accept} {cancel}'
			],
			'meta1' : [
				'm y m e t a 1',
				'{meta1} {meta2} {accept} {cancel}'
			],
			'meta2' : [
				'M Y M E T A 2',
				'{meta1} {meta2} {accept} {cancel}'
			]
		}
	})
*/

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