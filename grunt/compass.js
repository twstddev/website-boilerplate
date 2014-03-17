module.exports = {
	build : {
		options : {
			sassDir : "<%= src %>/sass/",
			cssDir : "<%= build %>/css",
			imagesDir : "<%= src %>/img",
			fontsDir : "fonts",
			relativeAssets : true,
			outputStyle : "expanded"
		}
	}
};
