/*global module:false */
module.exports = function(grunt) {
	'use strict';

	var nomod = '/*** This file is dynamically generated ***\n' +
		'█████▄ ▄████▄   █████▄ ▄████▄ ██████   ███████▄ ▄████▄ █████▄ ██ ██████ ██  ██\n' +
		'██  ██ ██  ██   ██  ██ ██  ██   ██     ██ ██ ██ ██  ██ ██  ██ ██ ██     ██  ██\n' +
		'██  ██ ██  ██   ██  ██ ██  ██   ██     ██ ██ ██ ██  ██ ██  ██ ██ ██▀▀   ▀▀▀▀██\n' +
		'█████▀ ▀████▀   ██  ██ ▀████▀   ██     ██ ██ ██ ▀████▀ █████▀ ██ ██     █████▀\n*/\n';

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON( 'package.json' ),

		clean: {
			build: {
				src: [ 'dist/*', 'js/jquery.keyboard.extension-all.js', 'layouts/keyboard-layouts-combined.js' ]
			}
		},

		concat: {
			exts: {
				options: {
					banner: nomod + '/*! jQuery UI Virtual Keyboard - ALL Extensions + Mousewheel */\n'
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
					'layouts/keyboard-layouts-combined.js': [ 'layouts/*', '!layouts/_template.js', '!layouts/ms-*.js', '!layouts/keyboard-layouts-greywyvern.js' ]
				}
			},
			msLayouts: {
				options: {
					banner: nomod + '/*! jQuery UI Virtual Keyboard - Microsoft Generated Layouts */\n'
				},
				files: {
					'layouts/keyboard-layouts-microsoft.js': [ 'layouts/ms-*.js' ]
				}
			}
		},

		jshint: {
			files: {
				src: [ 'js/jquery.*.js', 'layouts/*' ]
			},
			options: {
				"jquery": true,
				"browser": true,
				"sub": true, // used by layouts
				"-W100": true // ignore "This character may get silently deleted by one or more browsers."
			}
		},

		uglify: {
			options: {
				preserveComments: 'some',
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
			layouts: {
				files: [{
					expand: true,
					cwd: '',
					src: [ 'layouts/*.js', '!layouts/_template.js' ],
					dest: 'dist/layouts/',
					ext: '.min.js',
					extDot: 'last',
					flatten: true
				}]
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


//		qunit: {
//			files: ['test/index.html']
//		},

		watch: {
			scripts: {
				files: ['js/*.js'],
				tasks: ['build']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean' );
	grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify', 'cssmin']);

};
