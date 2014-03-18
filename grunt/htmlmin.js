module.exports = {
	dist : {
		options : {
			collapseWhitespace : true
		},

		files : [ {
			expand : true,
			cwd : "<%= build %>",
			src : [ "*.html" ],
			dest : "<%= dist %>"
		} ]
	}
};
