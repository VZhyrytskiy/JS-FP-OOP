/* 
 *	Class square 
 *	Functional Pattern
 *	Inheritance
 *	depends on 04_PointClass.js
 */


let square = function( x, y, width ) {
	let 
		// In this case me is NOT empty, it is result of parent constructor
		me = point(x, y),
		width_ = width;

	publicAPI();

	// We extend me or ovveride some methods
	function publicAPI() {
		// You shouldn't use me = {...}

		// Extend me
		me.getWidth = function() {
			return width_;
		};

		// Override method
		me.getFieldParam = function() {
			return "";
		};
	}

	return me;
}
