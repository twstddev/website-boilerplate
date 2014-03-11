module.exports = {
	options : {
		data : [ "<%= src %>/data/*.json" ],
		partials : [ "<%= src %>/templates/partials/**/*.hbs" ],
		layout : [ "<%= src %>/templates/layouts/default.hbs" ],
	},

	pages : {
		files : [ {
			expand : true,
			cwd : "<%= src %>/templates/pages/",
			src : "*.hbs", 
			dest : "<%= dist %>/"
		} ]
	}
};
