/*
jQuery UI Virtual Keyboard Widget
Version 1.4.2

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
		alpha  - Alphabetical layout
		dvorak - Dvorak Simplified layout
		num    - Numerical (ten-key) layout
		custom - Uses a custom layout as defined by the customLayout option

	customLayout
		[Array] Specify a customer layout
			An Array of arrays
			Each internal array is a new keyboard row
			Each internal array can contain either one or two
				String elements (Lower case and Upper
				case respectively)
			Each string element must have each character
				or key seperated by a space
			Special/"Action" keys include:
				{space}     - Spacebar
				{bksp}      - Backspace
				{shift}     - Shift/Capslock
				{return}    - Return/New Line
				{accept}    - Updates element value and closes keyboard
				{cancel}    - Clears changes and closes keyboard
				{dec}       - Decimal for numeric entry, only allows one decimal
				{neg}       - Negative for numeric entry
				{sp:#}      - Replace # with a numerical value,
								adds blank space, value of 1 ~ width of one key

CSS:
	.ui-keyboard{padding: .3em; position: absolute; z-index: 16000;}
	.ui-keyboard-button{height: 2em; width: 2em; margin: .1em;}
	.ui-keyboard-actionkey{width: 4em;}
	.ui-keyboard-space{width: 15em;}
	.ui-keyboard-preview{width: 100%; text-align: left;}

TODO:

Changelog:
	11/18/2010
		1.4.1 Attach keyboard to the body tag for instances where
						a parent element is position relative
					Add focus method to refocus the input preview so that
						a cursor is visible
		1.4   Update positioning to jQuery UI 1.8 position method
					Other tweaks for cleaning code
	1/17/2010
		1.3 Hide keyboard when clicking outside of keyboard
				Tweek positioning to fit better on screen if page
					scrolled or resized
	1/15/2010
		1.2 Align keyboard with element it is called from
				Append keyboard DOM to elements parent instead of body
	10/30/2009
		1.1 Change Preview window to clone the selected element
					to match the proper formatting of the element
					(i.e. not showing characters in password fields)
				Add Return key to insert new lines into textareas
				Change style of Accept and Cancel buttons
					to "ui-state-highlight" to standout
				Add ability for designer to create a custom keyboard
					layout
	10/21/2009
		1.0 initial build
*/
jQuery.widget('ui.keyboard', {

	layouts: {
		"qwerty": [
			['1 2 3 4 5 6 7 8 9 0 - = `',
				'! @ # $ % ^ & * ( ) _ + ~'],
			['q w e r t y u i o p [ ] \\',
				'Q W E R T Y U I O P { } |'],
			['{sp:.5} a s d f g h j k l ; \' {return}',
				'{sp:.5} A S D F G H J K L : " {return}'],
			['{sp:1} z x c v b n m , . / {shift}',
				'{sp:1} Z X C V B N M < > ? {shift}' ],
			['{accept} {space} {cancel} {bksp}',
				'{accept} {space} {cancel} {bksp}']
		],
		"alpha": [
			['1 2 3 4 5 6 7 8 9 0 - = `',
				'! @ # $ % ^ & * ( ) _ + ~'],
			['a b c d e f g h i j [ ] \\',
				'A B C D E F G H I J { } |'],
			['{sp:.5} k l m n o p q r s ; \' {return}',
				'{sp:.5} K L M N O P Q R S : " {return}'],
			['{sp:1} t u v w x y z , . / {shift}',
				'{sp:1} T U V W X Y Z < > ? {shift}' ],
			['{accept} {space} {cancel} {bksp}',
				'{accept} {space} {cancel} {bksp}']
		],
		"dvorak": [
			['1 2 3 4 5 6 7 8 9 0 [ ] `',
				'! @ # $ % ^ & * ( ) { } ~'],
			['\' , . p y f g c r l / = \\',
				'" < > P Y F G C R L ? + |'],
			['{sp:.5} a o e u i d h t n s - {return}',
				'{sp:.5} A O E U I D H T N S _ {return}'],
			['{sp:1} ; q j k x b m w v z {shift}',
				'{sp:1} : Q J K X B M W V Z {shift}' ],
			['{accept} {space} {cancel} {bksp}',
				'{accept} {space} {cancel} {bksp}']
		],
		"num": [
			['1 2 3 {bksp}'],
			['4 5 6 {accept}'],
			['7 8 9 {cancel}'],
			['0 {dec} {neg}']
		]
	},

	_init: function(){
		this.options.layout = this.options.layout || "qwerty";
		this.layouts.custom = this.options.customLayout || [['{cancel}']];

		var ui = this;
		var element = ui.element;
		var keyboard = this._buildKeyboard(ui);
		var allKeys = keyboard.find('.ui-keyboard-button');
		var inputKeys = allKeys.filter(':not(.ui-keyboard-actionkey)');
		var previewInput = keyboard.find('.ui-keyboard-preview');
		var decBtn = keyboard.find('[name=key_decimal]');

		jQuery(document)
			.unbind('mousedown', this._hideonexternalclick)
			.bind('mousedown', this._hideonexternalclick);

		element
			.focus(function(){
				var offset, element = jQuery(this);
				jQuery('.ui-keyboard').hide();
				previewInput.val(element.val());

				// use date picker to position the popup... will clean this up in the next version
				offset = jQuery.datepicker._checkOffset({dpDiv:keyboard, settings:{isRTL: false}}, element.offset(), false);

				keyboard
					.css({
						position: "absolute",
						left: offset.left + "px",
						top: offset.top + "px"
					})
					.show();

				previewInput
					.scrollTop(previewInput.attr('scrollHeight'))
					.focus();
			});

		jQuery('body')
			.append(keyboard);

		inputKeys
			.click(function(){
				previewInput.val( previewInput.val() + this.value);
			});

		allKeys.click(function(){
			previewInput
				.scrollTop(previewInput.attr('scrollHeight'))
				.focus();
		});

		if(decBtn.length > 0){
			allKeys
				.click(function(){
					if(/\./.test(previewInput.val())){
						decBtn
							.attr('disabled','disabled')
							.removeClass('ui-state-default')
							.addClass('ui-state-disabled');
					}else{
						decBtn
							.removeAttr("disabled")
							.addClass('ui-state-default')
							.removeClass('ui-state-disabled');
					}

				});
		}
	},

	_hideonexternalclick: function(e){
		if(jQuery(e.target).closest('.ui-keyboard').length < 1){
			jQuery('.ui-keyboard').hide();
		}
	},

	_buildKeyboard: function(ui){
		var keyBtn, actionKey, currentRow, newRow, newSet, currentSet, keys, action, hidden, visible, margin;
		var container = jQuery('<div></div>')
			.addClass('ui-keyboard')
			.addClass('ui-widget-content')
			.addClass('ui-widget')
			.hide();

		//build preview display
		var previewInput = ui.element.clone()
			.attr('name','preview')
			.attr('readonly','readonly')
			.addClass('ui-state-active')
			.addClass('ui-keyboard-preview');

		//build preview container and append preview display
		var entryPreview = jQuery('<div></div>')
			.append(previewInput)
			.appendTo(container);


		//build default button
		keyBtn = jQuery('<input />')
			.attr('type','button')
			.addClass('ui-keyboard-button')
			.addClass('ui-state-default');

		actionKey = keyBtn.clone()
			.addClass('ui-keyboard-actionkey');

		var row, set, key;

		for( row in this.layouts[this.options.layout] ){
			currentRow = this.layouts[this.options.layout][row];
			newRow = jQuery('<div></div>')
				.attr('id','ui-keyboard-row'+row)
				.addClass('ui-keyboard-row')
				.appendTo(container);

			for( set in currentRow ){
				newSet = jQuery('<div></div>')
					.addClass('ui-keyboard-keyset')
					.appendTo(newRow);
				if(set==1){
					newSet
						.addClass('ui-keyboard-shiftset')
						.hide();
				}
				currentSet = currentRow[set];
				keys = currentSet.split(/\s+/);
				for( key in keys ){

					//if it's an action key
					if( /^\{\S+\}$/.test(keys[key])){

						action = keys[key].match(/^\{(\S+)\}$/)[1];

						if(action == 'space'){
							actionKey.clone()
								.attr('name','key_space')
								.val('Space')
								.addClass('ui-keyboard-space')
								.click(function(){
									previewInput.val(
										previewInput.val() + ' ');
								})
								.appendTo(newSet);
						}else if(action == 'bksp'){
							actionKey.clone()
								.attr('name','key_bksp')
								.val('<Bksp')
								.click(function(){
									previewInput.val(
										previewInput.val().substring(
											0,
											previewInput
												.val().length - 1
										)
									);
								})
								.appendTo(newSet);

						}else if(action == 'shift'){
							actionKey.clone()
								.attr('name','key_shift')
								.val('Shift')
								.click(function(){
									hidden = container
										.find('.ui-keyboard-keyset:hidden');
									visible = container
										.find('.ui-keyboard-keyset:visible');
									visible.hide();
									hidden.show();
								})
								.appendTo(newSet);
						}else if(action == 'accept'){
							actionKey.clone()
								.attr('name','key_accept')
								.val('Accept')
								.addClass('ui-state-highlight')
								.removeClass('ui-state-active')
								.click(function(){
									ui.element.val(
										previewInput.val()
									);
									container.hide();
								})
								.appendTo(newSet);
						}else if(action == 'cancel'){
							actionKey.clone()
								.attr('name','key_cancel')
								.val('Cancel')
								.addClass('ui-state-highlight')
								.removeClass('ui-state-active')
								.click(function(){
									container.hide();
								})
								.appendTo(newSet);
						}else if(/^sp:\.?\d+$/.test(action)){
							margin = action.match(/^sp:(\.?\d+)$/)[1];
							jQuery('<span>&nbsp;</span>')
								.css('margin','0 ' + margin + 'em')
								.appendTo(newSet);
						}else if(action == "dec"){
							keyBtn.clone()
								.attr('name','key_decimal')
								.val('.')
								.appendTo(newSet);
						}else if(action == "neg"){
							actionKey.clone()
								.attr('name','key_negative')
								.val('+/-')
								.click(function(){
									if(/^\-?\d*\.?\d*$/.test(
										previewInput.val()
									)){
										previewInput.val(
											(previewInput.val() * -1)
										);
									}
								})
								.appendTo(newSet);
						}else if(action == "return"){
							actionKey.clone()
								.attr('name','key_return')
								.val('Return')
								.click(function(){
									previewInput.val(
											previewInput.val() + ' \n'
										);
								})
								.appendTo(newSet);
						}
					}else{
						keyBtn.clone()
							.attr('name','key_'+row+'_'+key)
							.val(keys[key])
							.appendTo(newSet);
					}
				}

			}

		}

	return container;
	}
});
