module.exports = function( grunt ) {
	require( "load-grunt-tasks" )( grunt, {
		pattern : "*",
		config : "package.json",
		scope : "devDependencies"
	} );
}
