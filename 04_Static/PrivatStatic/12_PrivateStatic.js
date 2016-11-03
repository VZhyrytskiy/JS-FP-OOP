/* 
 * parent class + private static
 * functional pattern
 */

// IIFE
let parent = (function() {

	// Static let
	let count = 0;

	// Static method
	function print() {
		console.log(`count = ${count}`);
	};

	// Return CLASS
	return function() {

		let me = {},
			value_;

		publicAPI();

		function publicAPI(){
			Object.assign(me, {
				setValue: function( value ) {
					value_ = value;
				},
				getValue: function() {
					return value_;
				},
				incCount: function() {
					count++;
				},
				printCount: function() {
					print();
				}
			});
		}

		// Return public API
		return me;
	}; 

})();
