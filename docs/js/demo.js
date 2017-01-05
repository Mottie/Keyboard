jQuery(function($) {

	// QWERTY Text Input
	// The bottom of this file is where the autocomplete extension is added
	// ********************
	$('#text').keyboard({ layout: 'qwerty' });

	$('.version').html( '(v' + $('#text').getkeyboard().version + ')' );

	// QWERTY Password
	// ********************
	$('#password').keyboard({
		openOn   : null,
		stayOpen : true,
		layout   : 'qwerty'
	});
	$('#password-opener').click(function(){
		var kb = $('#password').getkeyboard();
		// close the keyboard if the keyboard is visible and the button is clicked a second time
		if ( kb.isOpen ) {
			kb.close();
		} else {
			kb.reveal();
		}
	});

	// QWERTY (mod) Text Area
	// ********************
	$('#qwerty-mod').keyboard({
		lockInput: true, // prevent manual keyboard entry
		layout: 'custom',
		customLayout: {
			'normal': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} q w e r t y u i o p [ ] \\',
				'a s d f g h j k l ; \' {enter}',
				'{shift} z x c v b n m , . / {shift}',
				'{accept} {space} {left} {right}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} Q W E R T Y U I O P { } |',
				'A S D F G H J K L : " {enter}',
				'{shift} Z X C V B N M < > ? {shift}',
				'{accept} {space} {left} {right}'
			]
		}
	})
	.addCaret();

	// International Text Area
	// ********************
	$('#inter').keyboard({
		layout: 'international',
		css: {
			// input & preview
			// "label-default" for a darker background
			// "light" for white text
			input: 'form-control input-sm dark',
			// keyboard container
			container: 'center-block well',
			// default state
			buttonDefault: 'btn btn-default',
			// hovered button
			buttonHover: 'btn-primary',
			// Action keys (e.g. Accept, Cancel, Tab, etc);
			// this replaces "actionClass" option
			buttonAction: 'active',
			// used when disabling the decimal button {dec}
			// when a decimal exists in the input area
			buttonDisabled: 'disabled'
		}
	});

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
			'normal' : [
				'C D E F',
				'8 9 A B',
				'4 5 6 7',
				'0 1 2 3',
				'{bksp} {a} {c}'
			]
		},
		maxLength : 6,
		restrictInput : true, // Prevent keys not in the displayed keyboard from being typed in
		// include lower case characters (added v1.25.7)
		restrictInclude : 'a b c d e f',
		useCombos : false, // don't want A+E to become a ligature
		acceptValid: true,
		validate: function(keyboard, value, isClosing){
			// only make valid if input is 6 characters in length
			return value.length === 6;
		}
	});

	// Custom: Meta Sets
	// ********************
	$('#meta').keyboard({
		// keyboard will open showing last key set used
		resetDefault: false,
		autoAccept: true, // required for userClosed: true
		userClosed: true,
		layout : 'custom',
		display: {
			'alt'    : 'AltGr:It\'s all Greek to me',
			'meta1'  : '\u2666:end of alphabet', // Diamond with label that shows in the title (spaces are okay here)
			'meta-2' : '\u2665:Russian',         // Heart
			'meta3'  : '\u2663:zodiac',          // Club
			'meta_9' : '\u2660:numbers'          // Spade
		},
		customLayout: {
			'normal' : [
				// Add labels using a ":" after the key's name and replace spaces with "_"
				// without the labels this line is just 'a b c d e f g'
				'a:a_letter,_that_sounds_like_"ey" b:a_bug_that_makes_honey c:is_when_I_look_around d:a_grade,_I_never_got e:is_what_girls_say_when_they_run_away_from_me f:u,_is_what_I_say_to_those_screaming_girls! g:gee,_is_that_the_end_of_my_wittiness?',
				'{shift} {alt} {meta1} {meta-2} {meta3} {meta_9}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'shift' : [
				'A B C D E F G',
				'{shift} {alt} {meta1} {meta-2} {meta3} {meta_9}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'alt' : [
				'\u03b1:alpha \u03b2:beta \u03B3:gamma \u03b4:delta \u03b5:epsilon \u03b6:zeta \u03b7:eta', // lower case Greek
				'{shift} {alt} {meta1} {meta-2} {meta3} {meta_9}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'alt-shift' : [
				'\u0391:alpha \u0392:beta \u0393:gamma \u0394:delta \u0395:epsilon \u03A6:zeta \u03A7:eta', // upper case Greek
				'{shift} {alt} {meta1} {meta-2} {meta3} {meta_9}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'meta1' : [
				't u v w x y z', // lower case end of alphabet
				'{shift} {alt} {meta1} {meta-2} {meta3} {meta_9}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'meta1-shift' : [
				'T U V W X Y Z', // upper case
				'{shift} {alt} {meta1} {meta-2} {meta3} {meta_9}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'meta1-alt' : [
				'0 9 8 7 6 5 4', // numbers
				'{shift} {alt} {meta1} {meta-2} {meta3} {meta_9}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'meta1-alt-shift' : [
				') ( * & ^ % $', // shifted numbers
				'{shift} {alt} {meta1} {meta-2} {meta3} {meta_9}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'meta-2' : [
				'\u0430 \u0431 \u0432 \u0433 \u0434 \u0435 \u0436', // lower case Russian
				'{shift} {alt} {meta1} {meta-2} {meta3} {meta_9}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'meta-2-shift' : [
				'\u0410 \u0411 \u0412 \u0413 \u0414 \u0415 \u0416', // upper case Russian
				'{shift} {alt} {meta1} {meta-2} {meta3} {meta_9}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'meta3' : [
				'\u2648 \u2649 \u264A \u264B \u264C \u264D \u264E', // Zodiac
				'{shift} {alt} {meta1} {meta-2} {meta3} {meta_9}',
				'{bksp} {sp:1} {accept} {cancel}'
			],
			'meta_9' : [
				'1 2 3 4 5 6 7', // only because I ran out of ideas
				'{shift} {alt} {meta1} {meta-2} {meta3} {meta_9}',
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
			'normal' : [
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
			'normal' : [
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
			'normal' : [
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
		$('#hidden').data('keyboard').reveal();
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

	// Custom: Lockable
	// ********************
	$('#lockable').keyboard({
		layout: 'custom',
		customLayout: {
			'normal': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} q w e r t y u i o p [ ] \\',
				'a s d f g h j k l ; \' {enter}',
				'{shift} z x c v b n m , . / {shift}',
				'{accept} {space} {left} {right} {sp:.2} {del} {toggle}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} Q W E R T Y U I O P { } |',
				'A S D F G H J K L : " {enter}',
				'{shift} Z X C V B N M < > ? {shift}',
				'{accept} {space} {left} {right} {sp:.2} {del} {toggle}'
			]
		},
		css: {
			// add dark themed class
			popup : 'ui-keyboard-dark-theme'
		}
	});

	// Custom: iPad by gitaarik
	// ********************
	$('#ipad').keyboard({

		display: {
			'bksp'   : '\u2190',
			'accept' : 'return',
			'normal' : 'ABC',
			'shift'  : '\u21d1',
			'meta1'  : '.?123',
			'meta2'  : '#+='
		},

		layout: 'custom',

		customLayout: {

			'normal': [
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
				'{normal} {space} {normal} {accept}'
			],
			'meta2': [
				'[ ] { } # % ^ * + = {bksp}',
				'_ \\ | ~ < > $ \u00a3 \u00a5 {enter}',
				'{meta1} . , ? ! \' " {meta1}',
				'{normal} {space} {normal} {accept}'
			]

		}

	});

	// Custom: iPad email by gitaarik
	// ********************
	$('#ipad-email').keyboard({

		display: {
			'bksp'   : '\u2190',
			'enter'  : 'return',
			'normal' : 'ABC',
			'meta1'  : '.?123',
			'meta2'  : '#+=',
			'accept' : '\u21d3'
		},

		layout: 'custom',

		customLayout: {

			'normal': [
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
				'{normal} {space} ! ? {accept}'
			],
			'meta2': [
				'[ ] { } \u2039 \u203a ^ * " , {bksp}',
				'\\ | / < > $ \u00a3 \u00a5 \u2022 {enter}',
				'{meta1} \u20ac & ~ # = + . {meta1}',
				'{normal} {space} ! ? {accept}'
			]

		}

	});

	// Console showing callback messages
	// ********************
	$('.ui-keyboard-input').bind('visible hidden beforeClose accepted canceled restricted', function(e, keyboard, el, status){
		var c = $('#console'),
			t = '<li><span class="keyboard">' + $(el).parent().find('h2 .tooltip-tipsy').text() + '</span>';
			switch (e.type){
				case 'visible'  : t += ' keyboard is <span class="event">visible</span>'; break;
				case 'hidden'   : t += ' keyboard is now <span class="event">hidden</span>'; break;
				case 'accepted' : t += ' content "<span class="content">' + el.value + '</span>" was <span class="event">accepted</span>' + ($(el).is('[type=password]') ? ', yeah... not so secure :(' : ''); break;
				case 'canceled' : t += ' content was <span class="event ignored">ignored</span>'; break;
				case 'restricted'  : t += ' The "' + String.fromCharCode(e.keyCode) + '" key is <span class="event ignored">restricted</span>!'; break;
				case 'beforeClose' : t += ' keyboard is about to <span class="event">close</span>, contents were <span class="event ' + (status ? 'accepted">accepted' : 'ignored">ignored') + '</span>'; break;
			}
		t += '</li>';
		c.append(t);
		if (c.find('li').length > 3) { c.find('li').eq(0).remove(); }
	});

	// Show code
	// ********************
	$('h2 span').click(function(){
		var orig = 'Click, then scroll down to see this code',
			active = 'Scroll down to see the code for this example',
			t = '<h3>' + $(this).parent().text() + ' Code</h3>' + $(this).closest('.block').find('.code').html();
		// add indicator & update tooltips
		$('h2 span')
			.attr({ title : orig, 'original-title': orig })
			.parent()
			.filter('.active')
			.removeClass('active');
		$(this)
			.attr({ title : active, 'original-title': active })
			// hide, then show the tooltip to force updating & realignment
			.tipsy('hide')
			.tipsy('show')
			.parent().addClass('active');
		$('#showcode').html(t).show();
	});

	// add tooltips
	// ********************
	$('.tooltip-tipsy').tipsy({ gravity: 's' });
	$('.navbar [title]').tipsy({ gravity: 'n' });

// ********************
// Extension demos
// ********************

	// Set up typing simulator extension on ALL keyboards
	$('.ui-keyboard-input').addTyping();

	// simulate typing into the keyboard
	// \t or {t} = tab, \b or {b} = backspace, \r or \n or {e} = enter
	// added {l} = caret left, {r} = caret right & {d} = delete
	$('#inter-type').click(function(){
		$('#inter').getkeyboard().reveal().typeIn("{t}Hal{l}{l}{d}e{r}{r}l'o{b}o {e}{t}World", 500);
		return false;
	});
	$('#meta-type').click(function(){
		var meta = $('#meta').getkeyboard();
		meta.reveal().typeIn('aBcD1112389\u0411\u2648\u2649', 700, function(){ meta.accept(); alert('all done!'); });
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
	$('#text')
		.autocomplete({
			source: availableTags
		})
		.addAutocomplete();

	prettyPrint();

});
