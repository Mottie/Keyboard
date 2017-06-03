/*global module:false */
module.exports = function(grunt) {
	'use strict';

	var pkg = grunt.file.readJSON( 'package.json' ),
	nomod = '/*** This file is dynamically generated ***\n' +
		'█████▄ ▄████▄   █████▄ ▄████▄ ██████   ███████▄ ▄████▄ █████▄ ██ ██████ ██  ██\n' +
		'██  ██ ██  ██   ██  ██ ██  ██   ██     ██ ██ ██ ██  ██ ██  ██ ██ ██     ██  ██\n' +
		'██  ██ ██  ██   ██  ██ ██  ██   ██     ██ ██ ██ ██  ██ ██  ██ ██ ██▀▀   ▀▀▀▀██\n' +
		'█████▀ ▀████▀   ██  ██ ▀████▀   ██     ██ ██ ██ ▀████▀ █████▀ ██ ██     █████▀\n*/\n',

	hintOpts = {
		"jquery": true,
		"browser": true,
		"sub": true, // used by layouts
		"-W100": true // ignore "This character may get silently deleted by one or more browsers."
	};

	// Project configuration.
	grunt.initConfig({

		pkg: pkg,

		clean: {
			core: {
				src: [
					'dist/css/*',
					'dist/js/*',
					'js/jquery.keyboard.extension-all.js'
				]
			},
			layouts: {
				src: [
					'dist/*',
					'js/jquery.keyboard.extension-all.js',
					'layouts/keyboard-layouts-combined.js',
					'layouts/keyboard-layouts-microsoft.js'
				]
			},
			languages: {
				src: [ 'dist/languages/*' ]
			}
		},

		copy: {
			js: {
				files : [{
					expand: true,
					dot: true,
					flatten: true,
					src: [ 'js/jquery.keyboard.js' ],
					dest: 'dist/js/'
				}]
			}
		},

		concat: {
			exts: {
				options: {
					banner: nomod + '/*! jQuery UI Virtual Keyboard (<%= pkg.version %>) - ALL Extensions + Mousewheel */\n'
				},
				files: {
					'js/jquery.keyboard.extension-all.js': [ 'js/jquery.keyboard.extension-*.js', 'js/jquery.mousewheel.js' ]
				}
			},
			origLayouts: {
				options: {
					banner: nomod + '/*! jQuery UI Virtual Keyboard - Original Layouts */\n'
				},
				files: {
					'layouts/keyboard-layouts-combined.js': [
						'layouts/*',
						'!layouts/_layout_template.js',
						'!layouts/ms-*.js',
						'!layouts/keyboard-layouts-greywyvern.js',
						'languages/*.js',
						'!languages/_language_template.js',
						'!languages/*.untranslated.js'
					]
				}
			},
			msLayouts: {
				options: {
					banner: nomod + '/*! jQuery UI Virtual Keyboard - Microsoft Generated Layouts */\n'
				},
				files: {
					'layouts/keyboard-layouts-microsoft.js': [
						'layouts/ms-*.js',
						'!layouts/_layout_template.js',
						'languages/*.js',
						'!languages/_language_template.js',
						'!languages/*.untranslated.js'
					]
				}
			},
			greyLayouts: {
				options: {
					banner: nomod + '/*! jQuery UI Virtual Keyboard - Microsoft Generated Layouts */\n'
				},
				files: {
					'dist/layouts/keyboard-layouts-greywyvern.min.js': [
						'layouts/keyboard-layouts-greywyvern.js',
						'languages/*.js',
						'!languages/_language_template.js',
						'!languages/*.untranslated.js'
					]
				}
			}
		},

		jshint: {
			core: {
				options: hintOpts,
				src: [ 'js/jquery.*.js' ]
			},
			layouts: {
				options: hintOpts,
				src: [ 'js/jquery.*.js', 'layouts/*' ]
			},
			languages: {
				option: hintOpts,
				src: [ 'languages/*' ]
			}
		},

		cssmin: {
			target: {
				files: [{
					expand: true,
					flatten: true,
					src: ['css/*.css'],
					dest: 'dist/css/',
					ext: '.min.css'
				}]
			}
		},

		uglify: {
			options: {
				output: {
					comments: /^!/,
					beautify: false
				},
				report: 'gzip'
			},
			core: {
				files: [{
					expand: true,
					cwd: '',
					src: [ 'js/jquery*.js' ],
					dest: 'dist/js/',
					ext: '.min.js',
					extDot: 'last',
					flatten: true
				}]
			},
			splitLayouts: {
				files: [{
					expand: true,
					cwd: '',
					src: [ 'layouts/*.js', '!layouts/_layout_template.js', '!layouts/keyboard-layouts-greywyvern.js' ],
					dest: 'dist/layouts/',
					ext: '.min.js',
					extDot: 'last',
					flatten: true
				}]
			},
			greyLayout: {
				files: [{
					expand: true,
					cwd: '',
					src: [ 'dist/layouts/keyboard-layouts-greywyvern.min.js' ],
					dest: 'dist/layouts/',
					ext: '.js',
					extDot: 'last',
					flatten: true
				}]
			},
			languages: {
				files: [{
					expand: true,
					cwd: '',
					src: [ 'languages/*.js', '!languages/_language_template.js', '!languages/*.untranslated.js' ],
					dest: 'dist/languages/',
					ext: '.min.js',
					extDot: 'last',
					flatten: true
				}]
			}
		},

		qunit: {
			files: ['testing/test.html']
		},

		watch: {
			scripts: {
				files: ['js/*.js'],
				tasks: ['build']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task.
	grunt.registerTask('default', [
		'clean:core',
		'jshint:core',
		'qunit',
		'copy',
		'concat:exts',
		'cssmin',
		'uglify:core',
		'updateManifest'
	]);
	// layout build takes a lot longer to uglify
	grunt.registerTask('layouts', [
		'clean:layouts',
		'jshint:layouts',
		'concat',
		'cssmin',
		'uglify'
	]);

	function escapeRegExp(str) {
		return str.replace(/[$()*+\-.\/?[\\\]^{|}]/g, "\\$&");
	}

	// update keyboard.jquery.json file version numbers to match the package.json version
	grunt.registerTask( 'updateManifest', function() {
		var i, project,
			projectFile = [ 'keyboard.jquery.json', 'bower.json' ],
			len = projectFile.length;
		for ( i = 0; i < len; i++ ) {
			if ( !grunt.file.exists( projectFile[ i ] ) ) {
				grunt.log.error( 'file ' + projectFile[ i ] + ' not found' );
				return true; // return false to abort the execution
			}
			project = grunt.file.readJSON( projectFile[ i ] ); // get file as json object
			if (i === 0 ) {
				// only update version in keyboard.jquery.json
				project.version = pkg.version;
			} else if (i === 1) {
				// update devDependencies in bower
				project.devDependencies = pkg.devDependencies;
			}
			grunt.file.write( projectFile[i], JSON.stringify( project, null, 2 ) ); // serialize it back to file
		}
		// check internal version number
		project = grunt.file.read('js/jquery.keyboard.js');
		if (
			new RegExp(escapeRegExp('/*! jQuery UI Virtual Keyboard v' + pkg.version)).test(project) &&
			new RegExp(escapeRegExp("base.version = '" + pkg.version)).test(project)
		) {
			console.info('versions all match!');
		} else {
			grunt.log.writeln('\n**** version mismatch! ****'['red'].bold);
		}
		// check internal version number
		project = grunt.file.read('README.md');
		if (!new RegExp(escapeRegExp('### Version ' + pkg.version)).test(project)) {
			grunt.log.writeln('\n**** Missing Readme entry! ****'['red'].bold);
		}
	});

};
