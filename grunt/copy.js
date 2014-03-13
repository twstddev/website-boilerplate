module.exports = {
	images : {
		expand : true,
		cwd : "<%= src %>/img/",
		src : "**/*.*",
		dest : "<%= build %>/img"
	},

	favicon : {
		expand : true,
		cwd : "<%= src %>",
		src : "*.ico",
		dest : "<%= build %>"
	},

	downloads : {
		expand : true,
		cwd : "<%= src %>/downloads/",
		src : "**/*.*",
		dest : "<%= build %>/downloads"
	}
};
