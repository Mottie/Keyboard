$(document).ready(function() {

	// Add calculator key actions
	// ***************************
	$.extend( $.keyboard.keyaction, {

		// Radian, Degree and Grads toggle buttons
		// ***************************
		rad : function(base){
			base.mode = 0; // 0 = radians, 1 = degrees, 2 = grads
			base.$keyboard.find('.ui-keyboard-rad').addClass(base.options.css.buttonAction);
			base.$keyboard.find('.ui-keyboard-deg, .ui-keyboard-grad').removeClass(base.options.css.buttonAction);
		},
		deg : function(base){
			base.mode = 1; // 0 = radians, 1 = degrees, 2 = grads
			base.$keyboard.find('.ui-keyboard-deg').addClass(base.options.css.buttonAction);
			base.$keyboard.find('.ui-keyboard-rad, .ui-keyboard-grad').removeClass(base.options.css.buttonAction);
		},
		grad : function(base){
			base.mode = 2; // 0 = radians, 1 = degrees, 2 = grads
			base.$keyboard.find('.ui-keyboard-grad').addClass(base.options.css.buttonAction);
			base.$keyboard.find('.ui-keyboard-deg, .ui-keyboard-rad').removeClass(base.options.css.buttonAction);
		},

		// Memory storage functions (sorta)
		// ***************************
		clearall : function(base){
			base.$preview.val('');
			$.keyboard.keyaction.mc(base);
		},
		mc : function(base){ // memory clear
			base.memory = base.memory2 = '';
			base.$keyboard.find('.ui-keyboard-mc').removeClass(base.options.css.buttonAction);
		},
		mr : function(base){ // memory recall
			base.$preview.val(function(i,v){ return v + base.memory; });
		},
		ms : function(base){ // memory store
			base.memory = base.$preview.val();
			base.$keyboard.find('.ui-keyboard-mc').addClass(base.options.css.buttonAction);
		},
		mplus : function(base){
			if (base.memory === '') {
				$.keyboard.keyaction.mc(base);
			} else {
				base.$preview.val(function(i,v){ return (v === '') ? '' : parseFloat(v) + parseFloat(base.memory); });
			}
		},
		'm-' : function(base){
			if (base.memory !== '') {
				base.$preview.val(function(i,v){ return (v === '') ? '' : v - base.memory; });
			}
		},

		// Basic math functions
		// ***************************
		ln : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){ return Math.log(v); });
		},
		log : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){ return Math.log(v,10); });
		},
		ex : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){ return Math.exp(v); });
		},
		sqrt : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){ return Math.sqrt(v); });
		},
		cuberoot : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){ return Math.pow(v,1/3); });
		},
		int : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){ return parseInt(v); });
		},
		x2 : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){ return v * v; });
		},
		x3 : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){ return v * v * v; });
		},
		'10x' : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){ return Math.pow(10, v); });
		},
		'n!' : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){
				for( var j = v - 1; j > 0; j -= 1) { v *= j; }
				return v;
			});
		},
		invx : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){ return 1/v; });
		},

		// Trig functions
		// ***************************
		sin : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){
				// degrees to radians = deg * Math.PI/180; grads to radians = grads * Math.PI/200
				rad = (base.mode === 1) ? v * (Math.PI/180) : (base.mode === 2) ? v * (Math.PI/200) : v;
				return Math.sin(rad);
			});
		},
		sinh : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){ return (Math.exp(v) - Math.exp(-v))/2; });
		},
		asin : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){
				// degrees to radians = deg * Math.PI/180; grads to radians = grads * Math.PI/200
				rad = (base.mode === 1) ? v * (Math.PI/180) : (base.mode === 2) ? v * (Math.PI/200) : v;
				return Math.asin(rad);
			});
		},
		asinh : function(base){ // Math.log(v+Math.sqrt(v*v+1))
			base.memory2 = '';
			base.$preview.val(function(i,v){ return Math.log(v + Math.sqrt( v * v + 1 )); });
		},

		cos : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){
				// degrees to radians = deg * Math.PI/180; grads to radians = grads * Math.PI/200
				rad = (base.mode === 1) ? v * (Math.PI/180) : (base.mode === 2) ? v * (Math.PI/200) : v;
				return Math.cos(rad);
			});
		},
		cosh : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){ return (Math.exp(v) + Math.exp(-v))/2; });
		},
		acos : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){
				// degrees to radians = deg * Math.PI/180; grads to radians = grads * Math.PI/200
				rad = (base.mode === 1) ? v * (Math.PI/180) : (base.mode === 2) ? v * (Math.PI/200) : v;
				return Math.acos(rad);
			});
		},
		acosh : function(base){ // if(v>=1) return Math.log(v+Math.sqrt(v*v-1))
			base.memory2 = '';
			base.$preview.val(function(i,v){ return (v>=1) ? Math.log(v + Math.sqrt( v * v - 1 )) : v; });
		},

		tan : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){
				// degrees to radians = deg * Math.PI/180; grads to radians = grads * Math.PI/200
				rad = (base.mode === 1) ? v * (Math.PI/180) : (base.mode === 2) ? v * (Math.PI/200) : v;
				return Math.tan(rad);
			});
		},
		tanh : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){ return (Math.exp(v) - Math.exp(-v)) / (Math.exp(v) + Math.exp(-v)); });
		},
		atan : function(base){
			base.memory2 = '';
			base.$preview.val(function(i,v){
				// degrees to radians = deg * Math.PI/180; grads to radians = grads * Math.PI/200
				rad = (base.mode === 1) ? v * (Math.PI/180) : (base.mode === 2) ? v * (Math.PI/200) : v;
				return Math.atan(rad);
			});
		},
		atanh : function(base){ // if(v>1) return Math.log((1+v)/(1-v))/2
			base.memory2 = '';
			base.$preview.val(function(i,v){ return (v>1) ? Math.log( (1+v)/(1-v) )/2 : v; });
		},

		// Constants
		// ***************************
		pi : function(base){
			base.memory2 = '';
			base.$preview.val( Math.PI );
		},
		'2pi' : function(base){
			base.memory2 = '';
			base.$preview.val( 2 * Math.PI );
		},

		// These functions need an X and Y param, so we'll just add it to the view and process when using equals
		// ***************************
		yroot : function(base){
			base.memory2 = [ 'yroot', base.$preview.val() ]; // base.$preview.val(function(i,v){ return v + ' yroot '; });
			base.$keyboard.find('.ui-keyboard-yroot').addClass(base.options.css.buttonAction);
			base.$preview.val('');
		},
		xy : function(base){
			base.memory2 = [ 'xy', base.$preview.val() ]; // base.$preview.val(function(i,v){ return v + ' ^ '; });
			base.$keyboard.find('.ui-keyboard-xy').addClass(base.options.css.buttonAction);
			base.$preview.val('');
		},
		mod : function(base){
			base.$preview.val(function(i,v){ return v + '%'; });
		},

		// Process multi-parameter math functions
		// ***************************
		equals : function(base){
			base.$preview.val(function(i,v){
				var fx = base.memory2 || '';
				if (fx === '') { return eval(v); }
				if (fx[0] === 'yroot') {
					return Math.pow($.trim(fx[1]), 1/$.trim(v));
				}
				if (fx[0] === 'xy') {
					return Math.pow($.trim(fx[1]), $.trim(v));
				}
			});
			base.memory2 = '';
		}

	});

	// Initialize keyboard
	// ********************
	$('#calc').keyboard({
		layout: 'custom',
		display : {
			'deg'   : 'D:degrees', // degrees
			'rad'   : 'R:radians', // radians
			'grad'  : 'G:grads', // grads
			'10x'   : '10\u207f',
			'2pi'   : '2\u03c0',
			'acos'  : 'cos\u207b\u00b9',
			'acosh' : 'cosh\u207b\u00b9',
			'asin'  : 'sin\u207b\u00b9',
			'asinh' : 'sinh\u207b\u00b9',
			'atan'  : 'tan\u207b\u00b9',
			'atanh' : 'tanh\u207b\u00b9',
			'clear' : 'CE',
			'clearall' : 'C',
			'cuberoot' : '\u221bx',
			'equals': '=',
			'invx'  : '1\u2044x', // replaced with an image
			'm-'    : 'M-',
			'mc'    : 'MC',
			'meta1' : 'Inv', // show inverse trig function keyset
			'mplus' : 'M+',
			'mr'    : 'MR',
			'ms'    : 'MS',
			'pi'    : '\u03c0',
			'sqrt'  : '\u221a',
			'x2'    : 'x\u00b2',
			'x3'    : 'x\u00b3',
			'xy'    : 'xy',
			'yroot' : 'yroot' // replaced with an image
		},
		customLayout: {
			'default' : [
			'{rad} {deg} {grad} {sp:.1} {MC} {MR} {MS} {MPLUS} {M-} {a}',
			'{meta1} {ln} ( ) {b} {clear} {clearall} {sign} {sqrt} {c}',
			'{sinh} {sin} {x2} {n!} 7 8 9 / %',
			'{cosh} {cos} {xy} {yroot} 4 5 6 * {invx}',
			'{tanh} {tan} {x3} {cuberoot} 1 2 3 - {equals}',
			'{pi} {Int} {mod} {log} {10x} 0 {dec} +'
			],
			'meta1' : [
			'{rad} {deg} {grad} {sp:.1} {MC} {MR} {MS} {MPLUS} {M-} {a}',
			'{meta1} {ex} ( ) {b} {clear} {clearall} {sign} {sqrt} {c}',
			'{asinh} {asin} {x2} {n!} 7 8 9 / %',
			'{acosh} {acos} {xy} {yroot} 4 5 6 * {invx}',
			'{atanh} {atan} {x3} {cuberoot} 1 2 3 - {equals}',
			'{2pi} {Int} {mod} {log} {10x} 0 {dec} +'
			]
		},

		// Turning restrictInput on (true), prevents yroot and but it
		restrictInput : true,  // Prevent keys not in the displayed keyboard from being typed in
		useCombos     : false, // don't want A+E to become a ligature
		wheelMessage  : '',    // clear tooltips

		// set up degree/radian/grads mode
		visible : function(e, kb, el){ // e = event, kb = keyboard object, el = original input
			var mode = kb.mode || 0, sel = '.ui-keyboard-';
			sel += (mode === 1) ? 'deg' : (mode === 2) ? 'grad' : 'rad';
			kb.$keyboard.find(sel).addClass(kb.options.css.buttonAction);
		},

		// multiple parameter functions highlight when first parameter is saved,
		// this makes sure the buttons aren't highlighted when the memory storage clears.
		change : function(e, kb, el){
			if (kb.memory2 === '') {
				kb.$keyboard.find('.ui-keyboard-xy, .ui-keyboard-yroot').removeClass(kb.options.css.buttonAction);
			}
		}

	})
	.addTyping()
	.getkeyboard().reveal();
});
