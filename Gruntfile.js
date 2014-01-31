module.exports = function ( grunt )
{
	"use strict";

	var minify = grunt.option( 'minify' ) === undefined || grunt.option( 'minify' ) === true;

	grunt.option( 'transform', minify ? 'uglifyify' : '' );

	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),

		browserify: {
			dist: {
				files: {
					'dist/index.js': ['js/**/*.js']
				},
				options: {
					debug: true,
					transform: [grunt.option( 'transform' )]
				}
			}
		},

	} );

	grunt.loadNpmTasks( 'grunt-browserify' );

	grunt.registerTask( 'default', [
		'browserify'
	] );
};
