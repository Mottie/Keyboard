$(document).ready(function(){

	// Theme switcher
	$('#switcher').themeswitcher();

	// QWERTY Text
	$('.qwerty:first').keyboard({ layout: 'qwerty' });

	// QWERTY Password
	$('.qwerty:eq(1)').keyboard({
		openOn   : null,
		stayOpen : true,
		layout   : 'qwerty'
	});
	$('#passwd').click(function(){
		$('.qwerty:eq(1)').getkeyboard().reveal();
	});
	// since IE adds an overlay behind the input to prevent clicking in other inputs (the keyboard may not automatically open on focus... silly IE bug)
	// We can remove the overlay (transparent) if desired using this code:
	$('.qwerty:eq(1)').bind('visible.keyboard', function(e, el){
	 $('.ui-keyboard-overlay').remove(); // remove overlay because clicking on it will close the keyboard... we set "openOn" to null to prevent closing.
	});


	// QWERTY Text Area
	$('.qwerty:last').keyboard({
		layout   : 'qwerty',
		lockInput: true // prevent manual keyboard entry
	});

	$('#inter').keyboard({ layout: 'international' });

	$('#dvorak').keyboard({ layout: 'dvorak' });

	$('#alpha').keyboard({ layout: 'alpha' });

	$('#num').keyboard({
		layout: 'num',
		restrictInput : true, // Prevent keys not in the displayed keyboard from being typed in
		preventPaste : true,  // prevent ctrl-v and right click
		autoAccept : true
	});

	// Hex
	$('#hex').keyboard({
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
		restrictInput : true, // Prevent keys not in the displayed keyboard from being typed in
		useCombos : false // don't want A+E to become a ligature
	});

	// Junk / Examples
	$('#junk').keyboard({
		layout: 'custom',
		customLayout: {
			'default' : [
				'a e i o u y c',
				'` \' " ~ ^ {dec} {combo}',
				'{tab} {enter} {bksp}',
				'{space}',
				'{accept} {cancel} {shift}'
			],
			'shift' : [
				'A E I O U Y C',
				'` \' " ~ ^ {dec} {combo}',
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
		// example callback function
		accepted : function(e, el){ alert('The content "' + el.value + '" was accepted!'); }
	});

	// Meta
	$('#meta').keyboard({
		layout : 'custom',
		display: {
			'alt'    : 'AltGr:It\'s all Greek to me',
			'meta1'  : '\u2666:russian lower-case', // Diamond with label that shows in the title (spaces are okay here)
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
				'\u03b1:alpha \u03b2:beta \u03B3:gamma \u03b4:delta \u03b5:epsilon \u03b6:zeta \u03b7:eta', // lower case Greek
				'{shift} {alt} {meta1} {meta2} {meta3} {meta99}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'alt-shift' : [
				'\u0391:alpha \u0392:beta \u0393:gamma \u0394:delta \u0395:epsilon \u03A6:zeta \u03A7:eta', // upper case Greek
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

	// *** Mapped keys ***
	$('#map').keyboard({
		layout : 'custom',
		customLayout: {
			'default' : [ 
				// "n(a):title/tooltip"; n = new key, (a) = actual key, ":label" = title/tooltip (use an underscore "_" in place of a space " ")
				'\u03b1(a):lower_case_alpha_(type_a) \u03b2(b):lower_case_beta_(type_b) \u03be(c):lower_case_xi_(type_c) \u03b4(d):lower_case_delta_(type_d) \u03b5(e):lower_case_epsilon_(type_e) \u03b6(f):lower_case_zeta_(type_f) \u03b3(g):lower_case_gamma_(type_g)', // lower case Greek
				'{shift} {accept} {cancel}'
			],
			'shift' : [
				'\u0391(A):alpha \u0392(B):beta \u039e(C):xi \u0394(D):delta \u0395(E):epsilon \u03a6(F):phi \u0393(G):gamma', // upper case Greek
				'{shift} {accept} {cancel}'
			]
		},
		usePreview: false // no preveiw
	});

	// *** Hidden input example ***
	// click on a link - add focus to hidden input
	$('.hiddenInput').click(function(){
		$('#hidden').trigger('focus.keyboard');
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
	$('.ui-keyboard-input').bind('visible.keyboard hidden.keyboard accepted.keyboard canceled.keyboard', function(e, el){
		var c = $('#console'),
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

	// Show code
	$('h2 span').click(function(){
		var t = '<h2>' + $(this).parent().text() + ' Code</h2>' + $(this).closest('.block').find('.code').html();
		$('#showcode').html(t).show();
	});

	// add tooltips
	$.jatt();

});


// Extension demos
$(function() {

	// Set up typing simulator extension on all keyboards
	$('.ui-keyboard-input').addTyping();

	// simulate typing into the keyboard (\t = tab, \b = backspace, \r or \n = enter)
	$('#inter-type').click(function(){
		$('#inter').getkeyboard().reveal().typeIn("\tHell'o\bo \r\tWorld", 500);
		return false;
	});
	$('#meta-type').click(function(){
		var meta = $('#meta').getkeyboard();
		meta.reveal().typeIn('aBcD11123\u2648\u2649', 700, function(){ meta.accept(); alert('all done!'); });
		return false;
	});

	// Autocomplete demo
	var availableTags = [
		"ActionScript",
		"AppleScript",
		"Asp",
		"BASIC",
		"C",
		"C++",
		"Clojure",
		"COBOL",
		"ColdFusion",
		"Erlang",
		"Fortran",
		"Groovy",
		"Haskell",
		"Java",
		"JavaScript",
		"Lisp",
		"Perl",
		"PHP",
		"Python",
		"Ruby",
		"Scala",
		"Scheme"
	];
	$('.qwerty:eq(0)')
		.autocomplete({
			source: availableTags
		})
		.addAutocomplete();
});
