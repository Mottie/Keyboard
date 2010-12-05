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
		},
		maxLength : 6,
		useCombos : false // don't want A+E to become a ligature
	});

	// Junk / Examples
	$('#custom2').keyboard({
		layout: 'custom',
		customLayout: {
			'default' : [
				'a e i o u y c',
				'` \' " ~ {sp:1} {dec}',
				'{tab} {enter} {bksp}',
				'{space}',
				'{accept} {cancel} {shift}'
			],
			'shift' : [
				'A E I O U Y C',
				'` \' " ~ {sp:1} {dec}',
				'{t} {sp:1} {e} {sp:1} {b}',
				'{space}',
				'{a} {sp:1} {c} {sp:1} {s}'
			]
		},
		// Part of the standard combos - added here as an example
		combos : {
			'a' : { e: '\u00e6' },
			'A' : { E: '\u00c6' }
		},
		accepted: function(e, el){ alert('The content "' + el.value + '" was accepted!'); }
	});

	// Meta
	$('#meta').keyboard({
		layout: 'custom',
		display: {
			'alt'    : 'AltGr:It\'s all Greek to me',
			'meta1'  : '\u2666:russian lower-case', // Diamond
			'meta2'  : '\u2665:RUSSIAN upper-case', // Heart
			'meta3'  : '\u2663:zodiac',             // Club
			'meta99' : '\u2660:numbers'             // Spade
		},
		customLayout: {
			'default' : [
				// Add labels using a ":" after the key's name and replace spaces with "_"
				// without the labels this line is just 'a b c d e f g'
				'a:a_letter,_that_sounds_like_"ey" b:a_bug_that_makes_honey c:is_when_I_look_around d:a_grade,_I_never_got e:is_what_girls_say_when_they_run_away_from_me f:u,_is_what_I_say_to_those_screaming_girls! g:gee,_is_that_the_end_of_my_wittiness?',
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
				'\u2648 \u2649 \u264A \u264B \u264C \u264D \u264E', // Zodiac
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
	});
	// Initialize keyboard script on hidden input
	// set "position.of" to the same link as above
	$('#hidden').keyboard({ 
		layout: 'qwerty',
		position     : {
			of : $('.hiddenInput'),
			my : 'center top',
			at : 'center top'
		}
	});

	/*** console messages showing callbacks ***/
	$('.ui-keyboard-input').bind('visible hidden accepted canceled', function(e, el){
		var c = $('#console')
			t = '<li>' + $(el).parent().find('h2').text();
			switch (e.type){
				case 'visible'  : t += ' keyboard is visible'; break;
				case 'hidden'   : t += ' keyboard is now hidden'; break;
				case 'accepted' : t += ' content "' + el.value + '" was accepted' + ($(el).is('[type=password]') ? ', yeah... not so secure :(' : ''); break;
				case 'canceled' : t += ' content was ignored'; break;
			}
		t += '</li>';
		c.append(t);
		if (c.find('li').length > 2) { c.find('li').eq(0).remove(); }
	});
});