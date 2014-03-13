module.exports = {
	options : {
		debounceDelay : 200
	},

	assemble : {
		files : [
			"<%= src %>/templates/**/*.hbs",
			"<%= src %>/data/**/*.json"
		],
		tasks : [ "assemble" ]
	},

	development : {
		files : "<%= build %>/**/*.*",
		options : {
			livereload : true
		}
	}
};
