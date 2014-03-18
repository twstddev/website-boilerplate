module.exports = {
	dist : {
		files : [ {
			expand : true,
			cwd : "<%= build %>/img",
			src : [ "**/*.{png,jpg,jpeg,gif}" ],
			dest : "<%= dist %>/img"
		} ]
	}
};
