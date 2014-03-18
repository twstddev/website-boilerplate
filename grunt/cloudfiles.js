module.exports = {
	deploy : {
		user : "",
		key : "",
		region : "LON",
		authUrl : "https://lon.identity.api.rackspacecloud.com",
		upload : [ {
			container : "",
			files : [ {
				expand : true,
				cwd : "<%= dist %>",
				src : [ "**/*.*" ],
				dest : "/"
			} ],
			purge : {
				files : [ "**/*.*" ]
			}
		} ]
	}
};
