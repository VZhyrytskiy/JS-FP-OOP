/* 
 *	Class point 
 *	Functional Pattern, separated private and public methods
 */

let point = function( x, y, fieldParam ) {

	// Private fields
	let _x = 0, 
		_y = 0;

		// or
		// x_ = 0,
		// y_ = 0,

		// fieldParam is a field too, 
		// but like a param of a function


	// This call is possible, because of hoisting
	init( x, y );


	// Private methods
	function init( x, y ) {
		/* code */
	}


	// Public methods
	return {
		
		// They have read and write access to a closure
		getX: function() {
			return _x;
		},

		getY: function() {
			return _y;
		},
		
		getFieldParam: function() {
			return fieldParam;
		}
	};
};
