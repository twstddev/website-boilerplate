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
		],
		dest : "<%= build %>/js/header.js"
	},

	/**
	 * @brief Specify js files that are included
	 * only under specific conditions, like
	 * selectivizr or anything that should be included
	 * in IE only for instance.
	 */
	conditionaljs : {
		/*
		src : [
		],
		dest : ""
		*/
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
