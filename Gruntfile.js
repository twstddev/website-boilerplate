module.exports = function( grunt ) {
	require( "load-grunt-config" )( grunt, {
		config : {
			src : "website",
			release : "build",
			dist : "dist"
		},
		loadGruntTasks : {
			pattern : [ 
				"grunt-*",
				"assemble"
			]
		}
	} );
}
