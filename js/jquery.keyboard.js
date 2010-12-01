/*
jQuery UI Virtual Keyboard Widget
Version 1.5.3

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
		'alpha' : {
			'default': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'a b c d e f g h i j [ ] \\',
				'k l m n o p q r s ; \' {enter}',
				'{shift} t u v w x y z , . / {shift}',
				'{accept} {space} {cancel}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'A B C D E F G H I J { } |',
				'K L M N O P Q R S : " {enter}',
				'{shift} T U V W X Y Z < > ? {shift}',
				'{accept} {space} {cancel}'
			]
		},
		'qwerty' : {
			'default': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} q w e r t y u i o p [ ] \\',
				'a s d f g h j k l ; \' {enter}',
				'{shift} z x c v b n m , . / {shift}',
				'{accept} {space} {cancel}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} Q W E R T Y U I O P { } |',
				'A S D F G H J K L : " {enter}',
				'{shift} Z X C V B N M < > ? {shift}',
				'{accept} {space} {cancel}'
			]
		},
		'international' : {
			'default': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} q w e r t y u i o p [ ] \\',
				'a s d f g h j k l ; \' {enter}',
				'{shift} z x c v b n m , . / {shift}',
				'{accept} {space} {alt} {cancel}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} Q W E R T Y U I O P { } |',
				'A S D F G H J K L : " {enter}',
				'{shift} Z X C V B N M < > ? {shift}',
				'{accept} {space} {alt} {cancel}'
			],
			'alt': [
				'~ ¡ ² ³ ¤ € ¼ ½ ¾ ‘ ’ ¥ × {bksp}',
				'{tab} ä å é ® þ ü ú í ó ö « » ¬',
				'á ß ð f g h j k ø ¶ ´ {enter}',
				'{shift} æ x © v b ñ µ ç > ¿ {shift}',
				'{accept} {space} {alt} {cancel}'
			],
			'alt-shift': [
				'~ ¹ ² ³ £ € ¼ ½ ¾ ‘ ’ ¥ ÷ {bksp}',
				'{tab} Ä Å É ® Þ Ü Ú Í Ó Ö « » ¦',
				'Ä § Ð F G H J K Ø ° ¨ {enter}',
				'{shift} Æ X ¢ V B Ñ µ Ç . ¿ {shift}',
				'{accept} {space} {alt} {cancel}'
			]
		},
		'dvorak' : {
			'default': [
				'` 1 2 3 4 5 6 7 8 9 0 [ ] {bksp}',
				'{tab} \' , . p y f g c r l / = \\',
				'a o e u i d h t n s - {enter}',
				'{shift} ; q j k x b m w v z {shift}',
				'{accept} {space} {cancel}'
			],
			'shift' : [
				'~ ! @ # $ % ^ & * ( ) { } {bksp}',
				'{tab} " < > P Y F G C R L ? + |', 
				'A O E U I D H T N S _ {enter}',
				'{shift} : Q J K X B M W V Z {shift}',
				'{accept} {space} {cancel}'
			]
		},
		'num' : {
			'default' : [
				'= ( ) {b}',
				'{clear} / * -',
				'7 8 9 +',
				'4 5 6 {sign}',
				'1 2 3 %',
				'0 . {a} {c}'
			]
		}
	},

	options: {
		// *** choose layout & positioning ***
		layout       : 'qwerty',
		customLayout : null,
		position     : {
			of : null, // optional - null (attach to input/textarea) or a jQuery object (attach elsewhere)
			my : 'center top',
			at : 'center top'
		},

		// *** change keyboard language & look ***
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
		// Message added to the key title while hovering, if the mousewheel plugin exists
		wheelMessage : 'Use mousewheel to see other keys',

		// Class added to the Accept and cancel buttons (originally 'ui-state-highlight')
		actionClass  : 'ui-state-active',

		// *** Useability ***
		// Prevents direct input in the preview window when true
		lockInput    : false,

		// When the character is added to the input
		keyBinding   : 'mousedown',

		// combos (emulate dead keys : http://en.wikipedia.org/wiki/Keyboard_layout#US-International)
		// if user inputs `a the script converts it to à, ^o becomes ô, etc.
		useCombos : true,
		combos    : {
			'`' : { a:'à', A:'À', e:'è', E:'È', i:'ì', I:'Ì', o:'ò', O:'Ò', u:'ù', U:'Ù' },
			"'" : { a:'á', A:'Á', e:'é', E:'É', i:'í', I:'Í', o:'ó', O:'Ó', u:'ú', U:'Ú', y:'ý', Y:'Ý', c:'ç', C:'Ç' },
			'"' : { a:'ä', A:'Ä', e:'ë', E:'Ë', i:'ï', I:'Ï', o:'ö', O:'Ö', u:'ü', U:'Ü' },
			'^' : { a:'â', A:'Â', e:'ê', E:'Ê', i:'î', I:'Î', o:'ô', O:'Ô', u:'û', U:'Û' },
			'~' : { a:'\u00e3', A:'\u00c3', e:'\u1ebd', E:'\u1ebc', i:'\u0129', I:'\u0128', o:'\u00f5', O:'\u00d5', u:'\u0169', U:'\u0168', n:'\u00f1', N:'\u00d1' }
		},

		// *** Methods ***
		// Callbacks - attach a function to any of these callbacks as desired
		accepted : null,
		canceled : null,
		hidden   : null,
		visible  : null
	},

	// Shift and Alt key toggles
	shiftActive : false,
	altActive   : false,
	metaActive  : false,

	// Class names of the basic key set - meta keysets are handled by the keyname
	rows : ['ui-keyboard-keyset-default', 'ui-keyboard-keyset-shift', 'ui-keyboard-keyset-alt', 'ui-keyboard-keyset-alt-shift' ],

	_init: function(){
		var ui = this,
			o = ui.options,
			el = ui.element;

		// Bind events
		if ($.isFunction(o.visible)) { el.bind('visible', o.visible); }
		if ($.isFunction(o.hidden)) { el.bind('hidden', o.hidden); }
		if ($.isFunction(o.canceled)) { el.bind('canceled', o.canceled); }
		if ($.isFunction(o.accepted)) { el.bind('accepted', o.accepted); }

		// Close with esc key & clicking outside
		$(document).bind('mousedown keyup', function(e){ ui._escClose(e,ui); });

		// Display keyboard on focus
		el
			.addClass('ui-keyboard-input ui-widget-content ui-corner-all')
			.attr({ 'aria-haspopup' : 'true', 'role' : 'textbox' })
			.bind('focus', function(){

				// build keyboard if it doesn't exist
				if (typeof(ui.keyboard) == 'undefined') { ui._startup(); }

				var el = $(this),
					previewInput = ui.keyboard.find('.ui-keyboard-preview').val(el.val());

				// show & position keyboard
				ui.keyboard
					// position and show the keyboard before positioning (required for UI position utility)
					.css({ position: 'absolute', left: 0, top: 0 })
					.show()
					.position({
						// get single target position || target stored in element data (multiple targets) || default, at the element
						of: o.position.of || el.data('keyboardPosition') || el,
						my: o.position.my,
						at: o.position.at,
						collision: 'fit'
					});

				el.trigger( "visible", el );

				previewInput.trigger('gotoEnd');
				ui._checkDecimal(ui.keyboard.find('.ui-keyboard-decimal'));
			});

	},

	_startup: function(){
		var ui = this,
			o = ui.options,
			keyboard = ui._buildKeyboard(),
			allKeys = keyboard.find('.ui-keyboard-button'),
			previewInput = keyboard.find('.ui-keyboard-preview'),
			decBtn = keyboard.find('.ui-keyboard-decimal'),
			wheel = $.isFunction( $.fn.mousewheel ); // is mousewheel plugin loaded?
			ui.keyboard = keyboard;

		previewInput.bind('keyup gotoEnd', function(){
			$(this)
				.scrollTop( previewInput.attr('scrollHeight') )
				.focus();
		});

		$('body').append(keyboard);

		allKeys
			.bind(o.keyBinding, function(){
				// 'key', { action: doAction, original: n, curTxt : n, curNum: 0 }
				var key = $.data(this, 'key'),
					txt = previewInput.val();
				if ($.isFunction(key.action)) {
					key.action(this);
				} else if (typeof key.action !== 'undefined') {
					if (key.action == 'bksp') {
						txt = txt.substring( 0, txt.length - 1 );
					} else {
						// add currently displayed key (if mousewheel active) and it's not an action key
						txt += (wheel && !$(this).is('.ui-keyboard-actionkey')) ? key.curTxt : key.action;
					}
					if (o.useCombos) { txt = ui._checkCombos(txt); }
					previewInput.val(txt);
				}
				previewInput.trigger('gotoEnd');
			})
			// Change hover class and allow mousewheel to scroll through other key sets of the same key
			.bind('mouseenter mouseleave mousewheel', function(e, delta){
				var el = this, $this = $(this), txt,
					// 'key' = { action: doAction, original: n, curTxt : n, curNum: 0 }
					key = $.data(el, 'key');
				if (e.type == 'mouseenter'){
					$this
						.addClass('ui-state-hover')
						.attr('title', (wheel) ? o.wheelMessage : '');
					return;
				}
				if (e.type == 'mouseleave'){
					key.curTxt = key.original;
					key.curNum = 0;
					$.data(el, 'key', key);
					$this
						.removeClass('ui-state-hover')
						.removeAttr('title')
						.val( key.original ); // restore original button text
					return;
				}
				if (wheel) {
					txt = key.layers || ui._getLayers( $this );
					key.curNum += (delta > 0) ? -1 : 1;
					if (key.curNum > txt.length-1) { key.curNum = 0; }
					if (key.curNum < 0) { key.curNum = txt.length-1; }
					key.layers = txt;
					key.curTxt = txt[key.curNum];
					$.data(el, 'key', key);
					$this.val( txt[key.curNum] );
				}
			});

		if (decBtn.length) {
			allKeys.click(function(){
				ui._checkDecimal(decBtn);
			});
		}

	},

	_showKeySet: function(el){
		var ui = this, key, toShow;
		ui.keyboard.find('.ui-keyboard-actionkey[name*=key_meta]').removeClass('ui-state-active');
		if (ui.metaActive) {
			key = el.name.split('_')[1];
			ui.keyboard
				.find('.ui-keyboard-alt, .ui-keyboard-shift, .ui-keyboard-actionkey[class*=meta]').removeClass('ui-state-active').end()
				.find('.ui-keyboard-actionkey.ui-keyboard-' + key).addClass('ui-state-active').end()
				.find('.ui-keyboard-keyset').hide().end()
				.find('.ui-keyboard-keyset-' + key ).show();
		} else {
			toShow = (ui.shiftActive) ? 1 : 0;
			toShow += (ui.altActive) ? 2 : 0;
			ui.keyboard
				.find('.ui-keyboard-alt')[(ui.altActive) ? 'addClass' : 'removeClass']('ui-state-active').end()
				.find('.ui-keyboard-shift')[(ui.shiftActive) ? 'addClass' : 'removeClass']('ui-state-active').end()
				.find('.ui-keyboard-keyset').hide().end()
				.find('.' + ui.rows[toShow]).show();
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
		var key, keys;
		key = el.attr('name');
		keys = el.closest('.ui-keyboard').find('input[name=' + key + ']').map(function(){
			return this.value;
		}).get();
		return keys;
	},

	_hide: function(status){
		if (typeof(this.keyboard) == 'undefined') { return; }
		var kb = this.keyboard,
			visible = kb.filter(':visible').length;
		this.keyboard.hide();
		this.element.scrollTop( this.element.attr('scrollHeight') );
		if (visible) {
			this.element.trigger( (typeof(status) !== 'undefined' && status) ? 'accepted' : 'canceled', this.element );
			this.element.trigger('hidden', this.element );
		}
	},

	_escClose: function(e, ui){
		if (e.which == 27 || (e.type == "mousedown") && $(e.target).closest('.ui-keyboard').length < 1) {
			ui._hide();
		}
	},

	_buildKeyboard: function(){
		var action, row, newRow, set, newSet,
			currentSet, key, keys, keySet, margin,
			ui = this,
			o = ui.options,

		container = $('<div />')
			.addClass('ui-keyboard ui-widget-content ui-widget ui-corner-all ui-helper-clearfix ui-helper-hidden-accessible')
			.attr({ 'role': 'textbox' })
			.hide(),

		// build preview display
		previewInput = ui.element.clone()
			.removeAttr('id')
			.show() // for hidden inputs
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
				.data('key', { action: doAction, original: n, curTxt : n, curNum: 0 })
				.val( n )
				// add "ui-keyboard-" + keyName, if this is an action key (e.g. "Bksp" will have 'ui-keyboard-bskp' class)
				// add "ui-keyboard-" + unicode of 1st character (e.g. "~" is a regular key, class = 'ui-keyboard-126' (126 is the unicode value - same as typing &#126;)
				.addClass('ui-keyboard-' + ((regKey === true) ? keyName.charCodeAt(0) : keyName) + keyType );
		};

		// build preview container and append preview display
		$('<div />')
			.append(previewInput)
			.appendTo(container);

		// setup custom keyboard
		if (o.layout == 'custom') {
			ui.layouts.custom = o.customLayout || { 'default' : ['{cancel}'] };
		}

		// define decimal alternative symbol - not a language option
		o.display.decimal = '.';

		// Main keyboard building loop
		for ( set in ui.layouts[o.layout] ){
			keySet = ui.layouts[o.layout][set];
			newSet = $('<div />')
				.addClass('ui-keyboard-keyset ui-keyboard-keyset-' + set)
				.appendTo(container)
				[(set == 'default') ? 'show' : 'hide']();

			for ( row in keySet ){
				newRow = $('<div />')
					.addClass('ui-keyboard-row ui-keyboard-row' + row )
					.appendTo(newSet);

				// remove extra spaces before spliting (regex probably could be improved)
				currentSet = $.trim(keySet[row]).replace(/\{(\.?)[\s+]?:[\s+]?(\.?)\}/g,'{$1:$2}');
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
								.appendTo(newRow);
						}

						// meta keys
						if (/^meta\d+$/.test(action)){
							addKey(action, action, function(el){
								ui.metaActive = ($(el).is('.ui-state-active')) ? false : true;
								ui._showKeySet(el);
							})
							.appendTo(newRow);
							continue;
						}

						switch(action){

							case 'a':
							case 'accept':
								addKey('accept', action, function(){
									var txt = previewInput.val();
									if (o.useCombos) { txt = ui._checkCombos( previewInput.val() ); }
									ui.element.val(txt);
									ui._hide(true);
								})
								.addClass(o.actionClass)
								.appendTo(newRow);
								break;

							case 'alt':
							case 'altgr':
								addKey('alt', 'alt', function(el){
									ui.altActive = !ui.altActive;
									ui.metaActive = false;
									ui._showKeySet(el);
								})
								.appendTo(newRow);
								break;

							case 'b':
							case 'bksp':
								addKey('bksp', action, 'bksp')
									.appendTo(newRow);
								break;

							case 'c':
							case 'cancel':
								addKey('cancel', action, function(){
									ui._hide();
								})
								.addClass(o.actionClass)
								.appendTo(newRow);
								break;

							// for NumPad
							case 'clear':
								addKey('clear', 'clear', function(){
									previewInput.val('');
								})
								.appendTo(newRow);
								break;

							// Decimal - unique decimal point (num pad layout)
							case 'dec':
								addKey('decimal', 'decimal', '.')
								.appendTo(newRow);
								break;

							case 'e':
							case 'enter':
								addKey('enter', action, '\n').appendTo(newRow);
								break;

							case 's':
							case 'shift':
								addKey('shift', action, function(el){
									ui.shiftActive = !ui.shiftActive;
									ui.metaActive = false;
									ui._showKeySet(el);
								})
								.appendTo(newRow);
								break;

								// Change sign (for num pad layout)
							case 'sign':
								addKey('sign', 'sign', function(){
									if(/^\-?\d*\.?\d*$/.test( previewInput.val() )) {
										previewInput.val( (previewInput.val() * -1) );
									}
								})
								.appendTo(newRow);
								break;

							case 'space':
								addKey('space', 'space', ' ').appendTo(newRow);
								break;

							case 't':
							case 'tab':
								addKey('tab', action, '\t').appendTo(newRow);
								break;

						}

					} else {

						// regular button (not an action key)
						addKey(keys[key], keys[key], keys[key], true)
							.attr('name','key_' + row + '_'+key)
							.appendTo(newRow);

					}

				}

			}

		}

	return container;

	},

	destroy: function() {
		this.element
			.removeClass('ui-keyboard-input ui-widget-content ui-corner-all')
			.removeAttr('aria-haspopup')
			.removeAttr('role')
			.unbind('focus accept canceled hidden visible');
		this.keyboard.remove();
		$(document).unbind('mousedown keyup', this._escClose );
		$.Widget.prototype.destroy.apply(this, arguments); // default destroy
	}

});

})( jQuery );
