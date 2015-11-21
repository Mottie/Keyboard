/*!
* TableSorter QUnit Testing
*/
/*jshint unused: false */
/*global QUnit: false, jQuery: false, ipv6tests: false */

jQuery(function($){

	var kb,
		$keyboard = $.keyboard;

	$('#input').keyboard({
		layout : 'qwerty',
		initialized: function(e, keyboard) {
			kb = keyboard;
		}
	});

	QUnit.module('core');

	/************************************************
		processName
	************************************************/
	QUnit.test( 'processName', function(assert) {
		var p = kb.processName;
		assert.expect(15);
		assert.equal( p('a'), 'a', 'Single letter "a"');
		assert.equal( p('z'), 'z', 'Single letter "z"');
		assert.equal( p('te'), 'te', 'Two letters "te"');
		assert.equal( p('tes'), 'tes', 'Three letters "test"');
		assert.equal( p('test'), 'test', 'Four letters "test"');
		assert.equal( p('TeSt'), 'TeSt', 'Preserve character case "TeSt"');
		assert.equal( p('test_button'), 'test_button', 'Two words, leave underscore "test_button"');
		assert.equal( p('\u03b1'), '945', 'Replace non-alphanumeric with character code "\u03b1" -> "945"');
		assert.equal( p('\u03b1\u03b2'), '945-946', '"\u03b1\u03b2" -> "945-946"');
		assert.equal( p('xy\u03b1\u03b2\u03bez'), 'xy-945-946-958z', '"xy\u03b1\u03b2\u03bez" -> "xy-945-946-958z"');
		assert.equal( p('test_x'), 'test_x', '"test_x" -> "test_x"');
		assert.equal( p('test-xx'), 'test-xx', '"test-xx" -> "test-xx"');
		assert.equal( p('test-\u03b1'), 'test-945', '"test-\u03b1" -> "test-945"');
		assert.equal( p('test-\u03b1\u03b2'), 'test-945-946', '"test-\u03b1\u03b2" -> "test-945-946"');
		assert.equal( p('test_\u03b1\u03b2'), 'test-945-946', '"test_\u03b1\u03b2" -> "test_-945-946"');
	});

	/************************************************
		customHash
	************************************************/
	QUnit.test( 'customHash', function( assert ) {
		var h,
			layouts = $keyboard.layouts;
		assert.expect(3);
		// custom hash should not vary over time; so if a default layout changes,
		//  it will show up here as an error
		assert.equal( kb.customHash( layouts.alpha ),  '-744693299', 'Hash consistent on alpha layout');
		assert.equal( kb.customHash( layouts.qwerty ), '608635341',  'Hash consistent on qwerty layout');
		assert.equal( kb.customHash( layouts.num ),    '1954922603', 'Hash consistent on num layout');
	});

	/************************************************
		makePreview
	************************************************/
	QUnit.test( 'make preview', function( assert ) {
		var done = assert.async();
		assert.expect(3);

		$('#test')
			.html('<input id="keyboard_test" type="number" data-test="zzz" data-this-is-a-fake="attr" aria-haspopup="true">')
			.find('input')
			.keyboard({
				layout : 'qwerty',
				alwaysOpen: true,
				// visible callback *should* work here without a setTimeout, but it isn't for some unknown reason...
				initialized: function( e, keyboard ) {
					setTimeout(function(){
						var el = keyboard.preview,
							dataRemoved = typeof el['data-test'] === 'undefined' && typeof el['data-this-is-a-fake'] === 'undefined';
						assert.equal( el.type, 'text', 'Preview type changed from number to text' );
						assert.equal( typeof el['aria-haspopup'], 'undefined', 'Preview aria-haspopup removed' );
						assert.equal( dataRemoved, true, 'Preview data-attributes removed' );
						keyboard.destroy();
						done();
					}, 10);
				}
			});

	});

	/************************************************
		destroy
	************************************************/
	QUnit.test( 'destroy method', function( assert ) {
		var done = assert.async();
		assert.expect(3);

		$('#test')
			.html('<input type="text" class="testing-abc">')
			.find('input')
			.keyboard({
				layout : 'qwerty',
				alwaysOpen: true,
				lockInput: true,
				// visible callback *should* work here without a setTimeout, but it isn't for some unknown reason...
				initialized: function( e, keyboard, el ) {
					setTimeout(function(){
						keyboard.destroy(function(){
							assert.equal( el.className, 'testing-abc', 'Destory removed all added class names' );
							assert.equal( $.isEmptyObject( $._data( el ) ), true, 'Destory removed all data & bindings' );
							assert.equal( typeof $('#test input').getkeyboard(), 'undefined', 'Cleared up data' );
							done();
						});
					}, 10);
				}
			});

	});

});