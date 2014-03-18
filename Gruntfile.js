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
		"copy",
		"assemble",
		"compass",
		"concat:js"
	] );

	grunt.registerTask( "development", [
		"clean",
		"build",
		"concurrent"
	] );

}
