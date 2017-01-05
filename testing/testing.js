/*!
* TableSorter QUnit Testing
*/
/*jshint unused: true */
/*global QUnit: false, jQuery: false */

jQuery(function($){

	var $keyboard = $.keyboard,

	compare = function( $key, data ) {
		var valid = true;
		$.each( data, function(k, v){
			if ( valid ) {
				switch( k ) {
					case 'hasClass':
						valid = $key.hasClass( v );
						break;
					case 'text':
						valid = $key.find('span').html() === v;
						break;
					default:
						valid = $key.attr(k) === v;
				}
			}
		});
		return valid;
	},

	runTests = function( kb ) {
		QUnit.module('core');

		/************************************************
			processName
		************************************************/
		QUnit.test( 'processName', function(assert) {
			var p = kb.processName;
			assert.expect(17);
			assert.equal( p('a'), 'a', 'Single letter "a"');
			assert.equal( p('z'), 'z', 'Single letter "z"');
			assert.equal( p('-'), '-', 'Dash "-"'); // previously returned empty string
			assert.equal( p('_'), '_', 'Underscore "_"');
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
			processKey
		************************************************/
		QUnit.test( 'processKeys', function(assert) {
			var k = kb.processKeys;
			assert.expect(16);
			assert.deepEqual( k(''), { name: '', map: '', title: ''}, 'Empty name');
			assert.deepEqual( k('test'), { name: 'test', map: '', title: '' }, 'test');
			assert.deepEqual( k('@:this_is_an_at_symbol'), { name: '@', map: '', title: 'this is an at symbol' }, '@:this_is_an_at_symbol');
			assert.deepEqual( k(';(q)'), { name: ';', map: 'q', title: '' }, ';(q)');
			assert.deepEqual( k('\u03b1(a):lower_case_alpha_(type_a)'), { name: '\u03b1', map: 'a', title: 'lower case alpha (type a)' }, '\u03b1(a):lower_case_alpha_(type_a)');
			assert.deepEqual( k('((*)'), { name: '(', map: '*', title: '' }, '((*)');
			assert.deepEqual( k(')(()'), { name: ')', map: '(', title: '' }, ')(()');
			assert.deepEqual( k(')(():test_(ok)'), { name: ')', map: '(', title: 'test (ok)' }, ')(():test_(ok)');
			assert.deepEqual( k('=())'), { name: '=', map: ')', title: '' }, '=())');
			assert.deepEqual( k('=()):foo_(bar)'), { name: '=', map: ')', title: 'foo (bar)' }, '=()):foo_(bar)');
			assert.deepEqual( k('::bar_(foo)'), { name: ':', map: '', title: 'bar (foo)' }, '::bar_(foo)');
			assert.deepEqual( k('x(:)'), { name: 'x', map: ':', title: '' }, 'x(:)');
			assert.deepEqual( k(':(:)'), { name: ':', map: ':', title: '' }, ':(:)');
			assert.deepEqual( k('x(:):;'), { name: 'x', map: ':', title: ';' }, 'x(:):;');
			assert.deepEqual( k(':(:):;'), { name: ':', map: ':', title: ';' }, ':(:):;');
			assert.deepEqual( k(':(:):test2_(status:ok)'), { name: ':', map: ':', title: 'test2 (status:ok)' }, ':(:):test2_(status:ok)');
		});

		/************************************************
			customHash
		************************************************/
		QUnit.test( 'customHash', function( assert ) {
			var layouts = $keyboard.layouts;
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
			addKey
		************************************************/
		QUnit.test( 'addKey', function(assert) {
			var tmp,
				k = kb.addKey;
			assert.expect(7);
			assert.equal( true, compare( k('accept', 'accept'), {
					'data-name': 'accept',
					'data-value': 'accept',
					'title': 'Accept (Shift+Enter)',
					'hasClass': 'ui-keyboard-accept',
					'text': 'Accept'
				}),
				'accept key'
			);
			assert.equal( true, compare( k('accept', 'a'), {
					'data-name': 'accept',
					'data-value': 'accept',
					'title': 'Accept (Shift+Enter)',
					'hasClass': 'ui-keyboard-accept',
					'text': '\u2714'
				}),
				'(a)ccept key; symbol from display option'
			);
			tmp = 'meta99';
			kb.options.display.meta99 = '\u2660:numbers';
			assert.equal( true, compare( k(tmp, tmp), {
					'data-name': 'meta99',
					'data-value': 'meta99',
					'title': 'numbers',
					'hasClass': 'ui-keyboard-meta99',
					'text': '\u2660'
				}),
				'meta key testing'
			);
			tmp = 'meta99:test';
			kb.options.display.meta99 = '\u2660:numbers';
			assert.equal( true, compare( k(tmp, tmp), {
					'data-name': 'meta99',
					'data-value': 'meta99',
					'title': 'test',
					'hasClass': 'ui-keyboard-meta99',
					'text': '\u2660'
				}),
				'in key title overrides display title'
			);
			tmp = 'meta_testing';
			kb.options.display[tmp] = '\u2660:testing_keyboard';
			assert.equal( true, compare( k(tmp, tmp), {
					'data-name': tmp,
					'data-value': tmp,
					'title': 'testing keyboard',
					'hasClass': 'ui-keyboard-' + tmp,
					'text': '\u2660'
				}),
				'meta key extended name (underscore) testing'
			);
			tmp = 'meta-testing:testing!';
			kb.options.display['meta-testing'] = '\u2660';
			assert.equal( true, compare( k(tmp, tmp), {
					'data-name': 'meta-testing',
					'data-value': 'meta-testing',
					'title': 'testing!',
					'hasClass': 'ui-keyboard-meta-testing',
					'text': '\u2660'
				}),
				'meta key extended name (dash) testing'
			);
			tmp = 'xy\u03b1\u03b2\u03bez:test';
			assert.equal( true, compare( k(tmp, tmp, true), {
					'data-name': 'xyαβξz',
					'data-value': 'xyαβξz',
					'title': 'test',
					'hasClass': 'ui-keyboard-xy-945-946-958z',
					'text': 'xyαβξz'
				}),
				'unicode testing'
			);

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

	};

	$('#input').keyboard({
		layout : 'qwerty',
		alwaysOpen: true,
		initialized: function(e, keyboard) {
			runTests( keyboard );
		},
		visible: function(e, keyboard) {
			keyboard.$keyboard.hide();
		}
	});

});
