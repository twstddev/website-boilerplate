module.exports = {
	options : {
		debounceDelay : 200
	},

	assemble : {
		files : [
			"<%= src %>/templates/**/*.hbs",
			"<%= src %>/data/**/*.json"
		],
		tasks : [ "newer:assemble" ]
	},

	images : {
		files : "<%= src %>/img/**/*.*",
		tasks : [ "newer:copy:images" ]
	},

	downloads : {
		files : "<%= src %>/downloads/**/*.*",
		tasks : [ "newer:copy:downloads" ]
	},

	favicon : {
		files : "<%= src %>/*.ico",
		tasks : [ "newer:copy:favicon" ]
	},

	javascript : {
		files : "<%= src %>/**/*.js",
		tasks : [ "newer:concat" ]
	},

	development : {
		files : "<%= build %>/**/*.*",
		options : {
			livereload : true
		}
	}
};
