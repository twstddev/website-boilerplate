module.exports = {
	server : {
		options : {
			hostname : "<%= server.hostname %>",
			port : "<%= server.port %>",
			protocol : "<%= server.protocol %>",
			base : "<%= server.base %>",
			keepalive : true,
			open : true,

			middleware : function( connect, options ) {
				var base_path = options.base + "/";
				var hostname = options.hostname;

				return [
					require( "connect-livereload" )( {
						// it just doesn't want to play well
						src : function( hostname, port ) {
							return "//" 
								+ hostname 
								+ ":"
								+ port 
								+ "/livereload.js?snipver=1";
						}( hostname, 35729 )
					} ),
					connect.static( base_path )
				];
			}
		}
	}
};
