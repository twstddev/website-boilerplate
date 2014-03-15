/**
 * @brief This is the main script file
 * that shuold containt all the basic
 * logic you need for the static website.
 */
( function() {
	/**
	 * @brief This is the main object that
	 * communicates with other objects adding
	 * additional functionality to the website.
	 */
	var Page = ( function() {
		// private scope
		var m_private_variable = null;

		/**
		 * @brief Replace with your private method.
		 */
		var privateMethod = function() {
		};

		return {
			/**
			 * @brief Fake constructor.
			 *
			 * @param[in] Object config is a hash of configuration parameters
			 */
			init : function( config ) {
			}
		}
	} )();

	// make sure that we fire script 
	// when DOM is ready
	$( function() {
		// initialize your object from here
		Page.init( {
			param : "value"
		} );
	} );
	
} )();
