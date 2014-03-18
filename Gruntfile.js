module.exports = function( grunt ) {
	require( "load-grunt-config" )( grunt, {
		config : {
			src : "website",
			build : "build",
			dist : "dist",
			server : {
				hostname : "localhost",
				port : 3000,
				base : "<%= build %>",
				protocol : "http"
			}
		},
		loadGruntTasks : {
			pattern : [ 
				"grunt-*",
				"assemble"
			]
		}
	} );

	grunt.registerTask( "build", [
		"copy:images",
		"copy:favicon",
		"copy:downloads",
		"copy:vendorjs",
		"copy:vendorcss",
		"assemble",
		"compass",
		"concat:js"
	] );

	grunt.registerTask( "development", [
		"clean:build",
		"build",
		"concurrent"
	] );

	grunt.registerTask( "default", [
		"clean",
		"build",
		"copy:dist",
		"usemin",
		"modernizr",
		"concat:headerjs",
		"concat:conditionaljs",
		"uglify",
		"cssmin",
		"imagemin",
		"htmlmin"
	] );
}
