module.exports = {
	dist : {
		devFile : "<%= build %>/vendorlibs/modernizr/modernizr.js",
		outputFile : "<%= build %>/vendorlibs/modernizr/modernizr-custom.js",
		uglify: false,
		files : {
			src : [ "<%= build %>/**/**.*" ]
		}
	}
};
