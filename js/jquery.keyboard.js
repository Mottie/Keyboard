/*
jQuery UI Virtual Keyboard Widget
Version 1.5

Author: Jeremy Satterfield
Modified: Rob G (Mottie on github)
-----------------------------------------
Creative Commons Attribution-Share Alike 3.0 Unported License
http://creativecommons.org/licenses/by-sa/3.0/
-----------------------------------------

An on-screen virtual keyboard embedded within the browser window which
will popup when a specified entry field is focused. The user can then
type and preview their input before Accepting or Canceling.

As a plugin to jQuery UI styling and theme will automatically
match that used by jQuery UI with the exception of the required
CSS listed below.

Requires:
	jQuery
	jQuery UI

Usage:
	$('input[type=text], input[type=password], textarea')
		.keyboard({
			layout:"qwerty",
			customLayout:
				[["q w e r t y {bksp}","Q W E R T Y {bksp}"],
				["s a m p l e {shift}","S A M P L E {shift}"],
				["{accept} {space} {cancel}","{accept} {space} {cancel}"]]
		});

Options:
	layout
		[String] specify which keyboard layout to use
		qwerty - Standard QWERTY layout (Default)
		international - US international layout
		alpha  - Alphabetical layout
		dvorak - Dvorak Simplified layout
		num    - Numerical (ten-key) layout
		custom - Uses a custom layout as defined by the customLayout option

	customLayout
		[Array] Specify a custom layout
			An Array of arrays.
			Each internal array is a new keyboard row.
			Each internal array can contain one to four rows (default, shifted, alt and alt-shift... respectively).
			String elements (Lower case and Upper case, alt lower case and alt-upper case respectively).
			Each string element must have each character or key seperated by a space.
			In the list below where two special/"Action" keys are shown, both keys have the same action but different appearances.
			Special/"Action" keys include:
				{a}, {accept} - Updates element value and closes keyboard
				{alt},{altgr} - AltGr for International keyboard
				{b}, {bksp}   - Backspace
				{c}, {cancel} - Clears changes and closes keyboard
				{clear}       - Clear input window - used in num pad
				{dec}         - Decimal for numeric entry, only allows one decimal (optional use in num pad)
				{e}, {enter}  - Return/New Line
				{s}, {shift}  - Shift/Capslock
				{sign}        - Change sign of numeric entry (positive or negative)
				{sp:#}        - Replace # with a numerical value, adds blank space, value of 1 ~ width of one key
				{space}       - Spacebar
				{t}, {tab}    - Tab

CSS:
	.ui-keyboard { padding: .3em; position: absolute; left: 0; top: 0; z-index: 16000; }
	.ui-keyboard div { font-size: 1.1em; }
	.ui-keyboard-button { height: 2em; width: 2em; margin: .1em; }
	.ui-keyboard-widekey { width: 4em; }
	.ui-keyboard-space { width: 15em; }
	.ui-keyboard-preview { width: 100%; text-align: left; margin-bottom: 3px; }
	.ui-keyboard-keyset { text-align: center; }
*/

(function( $, undefined ) {

$.widget('ui.keyboard', {

	// Default keyboard layouts
	layouts: {
		'alpha' : [
			[ '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',  // default key
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}'], // shifted
			[ 'a b c d e f g h i j [ ] \\',
				'A B C D E F G H I J { } |'],
			[ 'k l m n o p q r s ; \' {enter}',
				'K L M N O P Q R S : " {enter}'],
			[ '{shift} t u v w x y z , . / {shift}',
				'{shift} T U V W X Y Z < > ? {shift}' ],
			[ '{accept} {space} {cancel}',
				'{accept} {space} {cancel}']
		],
		'qwerty' : [
			[ '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',  // default key
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}'], // shifted
			[ '{tab} q w e r t y u i o p [ ] \\',
				'{tab} Q W E R T Y U I O P { } |'],
			[ 'a s d f g h j k l ; \' {enter}',
				'A S D F G H J K L : " {enter}'],
			[ '{shift} z x c v b n m , . / {shift}',
				'{shift} Z X C V B N M < > ? {shift}' ],
			[ '{accept} {space} {cancel}',
				'{accept} {space} {cancel}']
		],
		'international' : [
			[ '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',  // default key
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',  // shifted
				'~ ¡ ² ³ ¤ € ¼ ½ ¾ ‘ ’ ¥ × {bksp}',  // AltGr
				'~ ¹ ² ³ £ € ¼ ½ ¾ ‘ ’ ¥ ÷ {bksp}'], // shift-AltGr
			[ '{tab} q w e r t y u i o p [ ] \\',
				'{tab} Q W E R T Y U I O P { } |',
				'{tab} ä å é ® þ ü ú í ó ö « » ¬',
				'{tab} Ä Å É ® Þ Ü Ú Í Ó Ö « » ¦'],
			[ 'a s d f g h j k l ; \' {enter}',
				'A S D F G H J K L : " {enter}',
				'á ß ð f g h j k ø ¶ ´ {enter}',
				'Ä § Ð F G H J K Ø ° ¨ {enter}'],
			[ '{shift} z x c v b n m , . / {shift}',
				'{shift} Z X C V B N M < > ? {shift}',
				'{shift} æ x © v b ñ µ ç > ¿ {shift}',
				'{shift} Æ X ¢ V B Ñ µ Ç . ¿ {shift}'],
			[ '{accept} {space} {alt} {cancel}',
				'{accept} {space} {alt} {cancel}',
				'{accept} {space} {alt} {cancel}',
				'{accept} {space} {alt} {cancel}']
		],
		'dvorak' : [
			[ '` 1 2 3 4 5 6 7 8 9 0 [ ] {bksp}',  // default key
				'~ ! @ # $ % ^ & * ( ) { } {bksp}'], // shifted
			[ '{tab} \' , . p y f g c r l / = \\',
				'{tab} " < > P Y F G C R L ? + |'],
			[ 'a o e u i d h t n s - {enter}',
				'A O E U I D H T N S _ {enter}'],
			[ '{shift} ; q j k x b m w v z {shift}',
				'{shift} : Q J K X B M W V Z {shift}' ],
			[ '{accept} {space} {cancel}',
				'{accept} {space} {cancel}']
		],
		'num' : [
			['= ( ) {b}'],
			['{clear} / * -'],
			['7 8 9 +'],
			['4 5 6 {sign}'],
			['1 2 3 %'],
			['0 . {a} {c}']
		]
	},

	options: {
		// choose layout & positioning
		layout       : 'qwerty',
		customLayout : null,
		position     : {
			my : 'center top',
			at : 'center top'
		},

		// change button language / symbol
		display : {
			'a'      : '\u2714', // check mark - same action as accept
			'accept' : 'Accept',
			'alt'    : 'AltGr',
			'b'      : '\u2190', // Left arrow (same as &larr;)
			'bksp'   : 'Bksp', // Left arrow (same as &larr;)
			'c'      : '\u2716', // big X, close - same action as cancel
			'cancel' : 'Cancel',
			'clear'  : 'C',      // clear num pad
			'e'      : '\u21b5', // down, then left arrow - enter symbol
			'enter'  : 'Enter',
			's'      : '\u21e7', // thick up arrow
			'shift'  : 'Shift',
			'sign'   : '\u00b1', // +/- sign for num pad
			'space'  : 'Space',
			't'      : '\u21e5', // right arrow to bar (used since this virtual keyboard works with one directional tabs)
			'tab'    : '\u21e5 Tab' // \u21b9 is the true tab symbol (left & right arrows)
		},

		// Class added to the Accept and cancel buttons (originally 'ui-state-highlight')
		actionClass : 'ui-state-active',

		// Prevents direct input in the preview window when true
		lockInput    : false,

		// When the character is added to the input
		keyBinding : 'mousedown',

		// combos (emulate dead keys : http://en.wikipedia.org/wiki/Keyboard_layout#US-International)
		// if user inputs `a the script converts it to à, ^o becomes ô, etc.
		useCombos : true,
		combos    : {
			'`' : { a:'à', A:'À', e:'è', E:'È', i:'ì', I:'Ì', o:'ò', O:'Ò', u:'ù', U:'Ù' },
			"'" : { a:'á', A:'Á', e:'é', E:'É', i:'í', I:'Í', o:'ó', O:'Ó', u:'ú', U:'Ú', y:'ý', Y:'Ý', c:'ç', C:'Ç' },
			'"' : { a:'ä', A:'Ä', e:'ë', E:'Ë', i:'ï', I:'Ï', o:'ö', O:'Ö', u:'ü', U:'Ü' },
			'^' : { a:'â', A:'Â', e:'ê', E:'Ê', i:'î', I:'Î', o:'ô', O:'Ô', u:'û', U:'Û' },
			'~' : { a:'\u00e3', A:'\u00c3', e:'\u1ebd', E:'\u1ebc', i:'\u0129', I:'\u0128', o:'\u00f5', O:'\u00d5', u:'\u0169', U:'\u0168', n:'\u00f1', N:'\u00d1' }
		}
	},

	// Shift and Alt key toggles
	shiftActive : false,
	altActive   : false,

	_init: function(){

		var ui = this,
			o = ui.options,
			el = ui.element,
			keyboard = ui._buildKeyboard(),
			allKeys = keyboard.find('.ui-keyboard-button'),
			previewInput = keyboard.find('.ui-keyboard-preview'),
			decBtn = keyboard.find('.ui-keyboard-decimal'),
			wheel = $.isFunction( $.fn.mousewheel ); // is mousewheel plugin loaded?

		// Close keyboard
		$(document)
			.unbind('mousedown', ui._hide)
			 // close with esc key & clicking outside
			.bind('mousedown keyup', function(e){
				if (e.which == 27 || (e.type="mousedown") && $(e.target).closest('.ui-keyboard').length < 1) {
					ui._hide();
				}
			});

		// Display keyboard on focus
		el
			.addClass('ui-widget-content ui-corner-all')
			.attr({ 'aria-haspopup' : 'true', 'role' : 'textbox' })
			.focus(function(){
				var el = $(this);
				$('.ui-keyboard').hide();
				previewInput.val(el.val());

				// show & position keyboard
				keyboard
					// position and show the keyboard before positioning (required for UI position utility)
					.css({ position: 'absolute', left: 0, top: 0 })
					.show()
					.position({
						of: $(this),
						my: o.position.my,
						at: o.position.at,
						collision: 'fit'
					});

				previewInput.trigger('gotoEnd');
				ui._checkDecimal(decBtn);
			});

		previewInput.bind('keyup gotoEnd', function(){
			$(this)
				.scrollTop( previewInput.attr('scrollHeight') )
				.focus();
		});

		$('body').append(keyboard);

		allKeys
			.bind(o.keyBinding, function(){
				var keyaction = $.data(this, 'keyaction'),
					txt = previewInput.val();
				if ($.isFunction(keyaction)) {
					keyaction(ui);
				} else if (typeof keyaction !== 'undefined') {
					if (keyaction == 'bksp') {
						txt = txt.substring( 0, txt.length - 1 );
					} else {
						// add currently displayed key (if mousewheel active) and it's not an action key
						txt += (wheel && !$(this).is('.ui-keyboard-actionkey')) ? $.data(this, 'current') || keyaction : keyaction;
					}
					if (o.useCombos) { txt = ui._checkCombos(txt); }
					previewInput.val(txt);
				}
				previewInput.trigger('gotoEnd');
			})
			// Change hover class and allow mousewheel to scroll through other key sets of the same key
			.bind('mouseenter mouseleave mousewheel', function(e, delta){
				var el = this, $this = $(this), cur, txt;
				if (e.type == 'mouseenter'){
					$this
						.addClass('ui-state-hover')
						.attr('title', (wheel) ? 'Use mousewheel to see other options' : '');
					return;
				}
				if (e.type == 'mouseleave'){
					txt = $.data(el, 'original');
					$.data(el, 'currentNum', 0);
					$.data(el, 'current', txt);
					$this
						.removeClass('ui-state-hover')
						.removeAttr('title')
						.val( txt ); // restore original button text
					return;
				}
				if (wheel) {
					cur = $.data(el, 'currentNum') || 0;
					txt = $.data(el, 'layers') || ui._getLayers( $this );
					cur += (delta > 0) ? -1 : 1;
					if (cur > txt.length-1) { cur = 0; }
					if (cur < 0) { cur = txt.length-1; }
					$.data(el, 'currentNum', cur);
					$.data(el, 'current', txt[cur]);
					$this.val( txt[cur] );
				}
			});

		if (decBtn.length) {
			allKeys.click(function(){
				ui._checkDecimal(decBtn);
			});
		}

	},

	// check for key combos (dead keys)
	_checkCombos : function(txt){
		var o = this.options;
		// keep 'a' in the regex for the demo a + e = æ
		txt = txt.replace(/([`\'~\^\"a])([a-z])/ig, function(s, accent, letter){
			return (accent in o.combos) ? o.combos[accent][letter] || s : s;
		});
		return txt;
	},

	// Decimal button for num pad - only allow one (not used by default)
	_checkDecimal: function(decBtn){
		if (/\./.test(decBtn.closest('.ui-keyboard').find('.ui-keyboard-preview').val())) {
			decBtn
				.attr({ 'disabled': 'disabled', 'aria-disabled': 'true' })
				.removeClass('ui-state-default ui-state-hover')
				.addClass('ui-state-disabled');
		} else {
			decBtn
				.removeAttr('disabled')
				.attr({ 'aria-disabled': 'false' })
				.addClass('ui-state-default')
				.removeClass('ui-state-disabled');
		}
	},

	// get other layer values for a specific key
	_getLayers: function(el){
		var key, keys = $.data(el[0], 'layers');
		if (typeof(keys) == 'undefined') {
			key = el.attr('name').split('_');
			key = key[ key.length-1 ] || '';
			keys = el.closest('.ui-keyboard-row').find('.ui-keyboard-button[name$=_' + key + ']').map(function(){
				return this.value;
			}).get();
			$.data(el[0], 'layers', keys);
		}
		return keys;
	},

	_hide: function(){
		$('.ui-keyboard').hide();
		this.element.scrollTop( this.element.attr('scrollHeight') );
	},

	_buildKeyboard: function(){
		var action, row, currentRow, newRow,
			set, newSet, currentSet, key, keys, margin,
			ui = this,
			o = ui.options,

		container = $('<div />')
			.addClass('ui-keyboard ui-widget-content ui-widget ui-corner-all ui-helper-clearfix ui-helper-hidden-accessible')
			.attr({ 'role': 'textbox' })
			.hide(),

		// build preview display
		previewInput = ui.element.clone()
			.removeAttr('id')
			.attr( (o.lockInput) ? { 'readonly': 'readonly'} : {} )
			.addClass('ui-widget-content ui-keyboard-preview ui-corner-all')
			.bind('keyup', function(){
				if (o.useCombos) {
					$(this).val( ui._checkCombos( $(this).val() ) );
				}
			}),

		// build default button
		keyBtn = $('<input />')
			.attr({ 'type': 'button', 'role': 'button', 'aria-disabled': 'false' })
			.addClass('ui-keyboard-button ui-state-default ui-corner-all'),

		// Add key function
		// keyName = name added to key, name = display option name (e.g. tab or t),
		// doAction = what is done/added when the button is clicked, regKey = true when it is not an action key
		addKey = function(keyName, name, doAction, regKey ){
			var n = (regKey === true) ? keyName : o.display[name] || keyName,
				// Action keys will have the 'ui-keyboard-actionkey' class
				// '\u2190'.length = 1 because the unicode is converted, so if more than one character, add the wide class
				keyType = (n.length > 1) ? ' ui-keyboard-widekey' : '';
				keyType += (regKey !== true) ? ' ui-keyboard-actionkey' : '';
			return keyBtn
				.clone()
				.attr('name', 'key_' + keyName)
				.data('keyaction', doAction)
				.data('original', n) // save name for mouse wheel
				.val( n )
				// add "ui-keyboard-" + keyName, if this is an action key (e.g. "Bksp" will have 'ui-keyboard-bskp' class)
				// add "ui-keyboard-" + unicode of 1st character (e.g. "~" is a regular key, class = 'ui-keyboard-126' (126 is the unicode value - same as typing &#126;)
				.addClass('ui-keyboard-' + ((regKey === true) ? keyName.charCodeAt(0) : keyName) + keyType );
		},

		// Name of each key set
		rows = ['ui-keyboard-default', 'ui-keyboard-shifted', 'ui-keyboard-alted', 'ui-keyboard-altshift' ];

		// build preview container and append preview display
		$('<div />')
			.append(previewInput)
			.appendTo(container);

		// setup custom keyboard
		if (o.layout == 'custom') {
			ui.layouts.custom = o.customLayout || [['{cancel}']];
		}

		// define decimal alternative symbol - not a language option
		o.display.decimal = '.';

		// Main keyboard building loop
		for ( row in ui.layouts[o.layout] ){
			currentRow = ui.layouts[o.layout][row];
			newRow = $('<div />')
				.addClass('ui-keyboard-row ui-keyboard-row'+row )
				.appendTo(container);

			for ( set in currentRow ){
				newSet = $('<div />')
					.addClass('ui-keyboard-keyset ' + rows[set])
					.appendTo(newRow)
					[(set == '0') ? 'show' : 'hide']();

				// remove extra spaces before spliting (regex probably could be improved)
				currentSet = $.trim(currentRow[set]).replace(/\{(\.?)[\s+]?:[\s+]?(\.?)\}/g,'{$1:$2}');
				keys = currentSet.split(/\s+/);

				for ( key in keys ) {
					// ignore empty keys
					if (keys[key].length === 0) { continue; }

					// process here if it's an action key
					if( /^\{\S+\}$/.test(keys[key])){
						action = keys[key].match(/^\{(\S+)\}$/)[1].toLowerCase();

						// add empty space
						if (/^sp:(\.?\d+)$/.test(action)) {
							margin = action.match(/^sp:(\.?\d+)$/)[1] || 0;
							$('<span>&nbsp;</span>')
								.css('margin','0 ' + margin + 'em')
								.appendTo(newSet);
						}

						switch(action){

							case 'a':
							case 'accept':
								addKey('accept', action, function(){
									var txt = previewInput.val();
									if (o.useCombos) { txt = ui._checkCombos( previewInput.val() ); }
									ui.element.val(txt);
									ui._hide();
								})
								.addClass(o.actionClass)
								.appendTo(newSet);
								break;

							case 'alt':
							case 'altgr':
								addKey('alt', 'alt', function(){
									ui.altActive = !ui.altActive;
									var aor = (ui.altActive) ? 'addClass' : 'removeClass',
									toShow = (ui.shiftActive) ? 1 : 0;
									toShow += (ui.altActive) ? 2 : 0;
									container
										.find('.ui-keyboard-alt')[aor]('ui-state-active').end()
										.find('.ui-keyboard-keyset').hide().end()
										.find('.' + rows[toShow]).show();
								})
								.appendTo(newSet);
								break;

							case 'b':
							case 'bksp':
								addKey('bksp', action, 'bksp')
									.appendTo(newSet);
								break;

							case 'c':
							case 'cancel':
								addKey('cancel', action, function(){
									ui._hide();
								})
								.addClass(o.actionClass)
								.appendTo(newSet);
								break;

							// for NumPad
							case 'clear':
								addKey('clear', 'clear', function(){
									previewInput.val('');
								})
								.appendTo(newSet);
								break;

							// Decimal - unique decimal point (num pad layout)
							case 'dec':
								addKey('decimal', 'decimal', '.')
								.appendTo(newSet);
								break;

							case 'e':
							case 'enter':
								addKey('enter', action, '\n').appendTo(newSet);
								break;

							case 's':
							case 'shift':
								addKey('shift', action, function(){
									ui.shiftActive = !ui.shiftActive;
									var aor = (ui.shiftActive) ? 'addClass' : 'removeClass',
									toShow = (ui.shiftActive) ? 1 : 0;
									toShow += (ui.altActive) ? 2 : 0;
									container
										.find('.ui-keyboard-shift')[aor]('ui-state-active').end()
										.find('.ui-keyboard-keyset').hide().end()
										.find('.' + rows[toShow]).show();
								})
								.appendTo(newSet);
								break;

								// Change sign (for num pad layout)
							case 'sign':
								addKey('sign', 'sign', function(){
									if(/^\-?\d*\.?\d*$/.test( previewInput.val() )) {
										previewInput.val( (previewInput.val() * -1) );
									}
								})
								.appendTo(newSet);
								break;

							case 'space':
								addKey('space', 'space', ' ').appendTo(newSet);
								break;

							case 't':
							case 'tab':
								addKey('tab', action, '\t').appendTo(newSet);
								break;

						}

					} else {

						// regular button (not an action key)
						addKey(keys[key], keys[key], keys[key], true)
							.attr('name','key_'+row+'_'+key)
							.appendTo(newSet);

					}

				}

			}

		}

	return container;

	}


});

})( jQuery );
