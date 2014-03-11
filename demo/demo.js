jQuery(function($) {

	// QWERTY Text Input
	// The bottom of this file is where the autocomplete extension is added
	// ********************
	$('.qwerty:first').keyboard({ layout: 'qwerty' });

	// QWERTY Password
	// ********************
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
	$('.qwerty:eq(1)').bind('visible.keyboard', function(e, keyboard, el){
	 $('.ui-keyboard-overlay').remove(); // remove overlay because clicking on it will close the keyboard... we set "openOn" to null to prevent closing.
	});

	// QWERTY Text Area
	// ********************
	$('.qwerty:last').keyboard({
		layout   : 'qwerty',
		lockInput: true // prevent manual keyboard entry
	});

	// International Text Area
	// ********************
	$('#inter').keyboard({ layout: 'international' });

	// Alphabetical Text Area
	// ********************
	$('#alpha').keyboard({ layout: 'alpha' });

	// Colemak Input
	// ********************
	$('#colemak').keyboard({ layout: 'colemak' });

	// Dvorak Text Area
	// ********************
	$('#dvorak').keyboard({ layout: 'dvorak' });

	// Num Pad Input
	// ********************
	$('#num').keyboard({
		layout: 'num',
		restrictInput : true, // Prevent keys not in the displayed keyboard from being typed in
		preventPaste : true,  // prevent ctrl-v and right click
		autoAccept : true
	});

	// Custom: Hex
	// ********************
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

	// Custom: Meta Sets
	// ********************
	$('#meta').keyboard({
		layout : 'custom',
		display: {
			'alt'    : 'AltGr:It\'s all Greek to me',
			'meta1'  : '\u2666:end of alphabet', // Diamond with label that shows in the title (spaces are okay here)
			'meta2'  : '\u2665:Russian',         // Heart
			'meta3'  : '\u2663:zodiac',          // Club
			'meta99' : '\u2660:numbers'          // Spade
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
				't u v w x y z', // lower case end of alphabet
				'{shift} {alt} {meta1} {meta2} {meta3} {meta99}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'meta1-shift' : [
				'T U V W X Y Z', // upper case
				'{shift} {alt} {meta1} {meta2} {meta3} {meta99}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'meta1-alt' : [
				'0 9 8 7 6 5 4', // numbers
				'{shift} {alt} {meta1} {meta2} {meta3} {meta99}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'meta1-alt-shift' : [
				') ( * & ^ % $', // shifted numbers
				'{shift} {alt} {meta1} {meta2} {meta3} {meta99}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'meta2' : [
				'\u0430 \u0431 \u0432 \u0433 \u0434 \u0435 \u0436', // lower case Russian
				'{shift} {alt} {meta1} {meta2} {meta3} {meta99}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'meta2-shift' : [
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

	// Custom: Junk / Examples
	// ********************
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
		// Added here as an example on how to add combos
		combos : {
			'a' : { e: '\u00e6' },
			'A' : { E: '\u00c6' }
		},
		// example callback function
		accepted : function(e, keyboard, el){ alert('The content "' + el.value + '" was accepted!'); }
	});

	// Custom: Mapped keys
	// ********************
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

	// Custom: Hidden Input
	// click on a link - add focus to hidden input
	// ********************
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

	// Custom: iPad by gitaarik
	// ********************
	$('#ipad').keyboard({

		display: {
			'bksp'    : '\u2190',
			'accept'  : 'return',
			'default' : 'ABC',
			'shift'   : '\u21d1',
			'meta1'   : '.?123',
			'meta2'   : '#+='
		},

		layout: 'custom',

		customLayout: {

			'default': [
				'q w e r t y u i o p {bksp}',
				'a s d f g h j k l {enter}',
				'{s} z x c v b n m , . {s}',
				'{meta1} {space} {meta1} {accept}'
			],
			'shift': [
				'Q W E R T Y U I O P {bksp}',
				'A S D F G H J K L {enter}',
				'{s} Z X C V B N M ! ? {s}',
				'{meta1} {space} {meta1} {accept}'
			],
			'meta1': [
				'1 2 3 4 5 6 7 8 9 0 {bksp}',
				'- / : ; ( ) \u20ac & @ {enter}',
				'{meta2} . , ? ! \' " {meta2}',
				'{default} {space} {default} {accept}'
			],
			'meta2': [
				'[ ] { } # % ^ * + = {bksp}',
				'_ \\ | ~ < > $ \u00a3 \u00a5 {enter}',
				'{meta1} . , ? ! \' " {meta1}',
				'{default} {space} {default} {accept}'
			]

		}

	});

	// Custom: iPad email by gitaarik
	// ********************
	$('#ipad-email').keyboard({

		display: {
			'bksp'    : '\u2190',
			'enter'   : 'return',
			'default' : 'ABC',
			'meta1'   : '.?123',
			'meta2'   : '#+=',
			'accept'  : '\u21d3'
		},

		layout: 'custom',

		customLayout: {

			'default': [
				'q w e r t y u i o p {bksp}',
				'a s d f g h j k l {enter}',
				'{s} z x c v b n m @ . {s}',
				'{meta1} {space} _ - {accept}'
			],
			'shift': [
				'Q W E R T Y U I O P {bksp}',
				'A S D F G H J K L {enter}',
				'{s} Z X C V B N M @ . {s}',
				'{meta1} {space} _ - {accept}'
			],
			'meta1': [
				'1 2 3 4 5 6 7 8 9 0 {bksp}',
				'` | { } % ^ * / \' {enter}',
				'{meta2} $ & ~ # = + . {meta2}',
				'{default} {space} ! ? {accept}'
			],
			'meta2': [
				'[ ] { } \u2039 \u203a ^ * " , {bksp}',
				'\\ | / < > $ \u00a3 \u00a5 \u2022 {enter}',
				'{meta1} \u20ac & ~ # = + . {meta1}',
				'{default} {space} ! ? {accept}'
			]

		}

	});

	// Console showing callback messages
	// ********************
	$('.ui-keyboard-input').bind('visible.keyboard hidden.keyboard beforeClose.keyboard accepted.keyboard canceled.keyboard', function(e, keyboard, el, status){
		var c = $('#console'),
			t = '<li><span class="keyboard">' + $(el).parent().find('h2').text() + '</span>';
			switch (e.type){
				case 'visible'  : t += ' keyboard is <span class="event">visible</span>'; break;
				case 'hidden'   : t += ' keyboard is now <span class="event">hidden</span>'; break;
				case 'accepted' : t += ' content "<span class="content">' + el.value + '</span>" was <span class="event">accepted</span>' + ($(el).is('[type=password]') ? ', yeah... not so secure :(' : ''); break;
				case 'canceled' : t += ' content was <span class="event ignored">ignored</span>'; break;
				case 'beforeClose' : t += ' keyboard is about to <span class="event">close</span>, contents were <span class="event ' + (status ? 'accepted">accepted' : 'ignored">ignored') + '</span>'; break;
			}
		t += '</li>';
		c.append(t);
		if (c.find('li').length > 3) { c.find('li').eq(0).remove(); }
	});

	// Show code
	// ********************
	$('h2 span').click(function(){
		var t = '<h2>' + $(this).parent().text() + ' Code</h2>' + $(this).closest('.block').find('.code').html();
		$('#showcode').html(t).show();
		$("#showcode .js").chili();
		$("#showcode .html").chili();
	});

	// add tooltips
	// ********************
	$.jatt();

// ********************
// Extension demos
// ********************

	// Set up typing simulator extension on ALL keyboards
	$('.ui-keyboard-input').addTyping();

	// simulate typing into the keyboard (\t = tab, \b = backspace, \r or \n = enter)
	$('#inter-type').click(function(){
		$('#inter').getkeyboard().reveal().typeIn("\tHell'o\bo \r\tWorld", 500);
		return false;
	});
	$('#meta-type').click(function(){
		var meta = $('#meta').getkeyboard();
		meta.reveal().typeIn('aBcD1112389\u2648\u2649', 700, function(){ meta.accept(); alert('all done!'); });
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
