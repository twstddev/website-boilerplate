module.exports = {
	options : {
		separator : ";"
	},

	/**
	 * @brief Keep here javascript files
	 * that should always go to the header of the page.
	 */
	headerjs : {
		src : [
			"<%= build %>/vendorlibs/jquery/jquery.js",
			"<%= build %>/vendorlibs/jquery-migrate/jquery-migrate.js",
			"<%= build %>/vendorlibs/modernizr/modernizr-custom.js",
		],
		dest : "<%= dist %>/js/header.js"
	},

	/**
	 * @brief Specify js files that are included
	 * only under specific conditions, like
	 * selectivizr or anything that should be included
	 * in IE only for instance.
	 */
	conditionaljs : {
		src : [
			"<%= build %>/vendorlibs/selectivizr/selectivizr.js"
		],
		dest : "<%= dist %>/js/conditional.js"
	},

	/**
	 * @brief Here go all the rest js files.
	 */
	js : {
		src : [ 
			"<%= src %>/js/**/*.js"
		],
		dest : "<%= build %>/js/main.js"
	}

};
