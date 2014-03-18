module.exports = {
	options : {
		compress : {
			drop_console : true
		}
	},
	
	extra : {
		files : [ {
			expand : true,
			cwd : "<%= dist %>/js",
			// uglify breaks selectivizr, we must
			// exclude it
			src : [ "*.js", "!conditional.js" ],
			dest : "<%= dist %>/js"
		} ]
	},

	main : {
		files : {
			"<%= dist %>/js/main.js" : "<%= build %>/js/main.js",
		}
	}
};
