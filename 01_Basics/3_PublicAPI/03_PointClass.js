/* 
 *	Class point 
 *	Functional Pattern, private methods Public interface
 *	this pattern we can use to call public API in private methods
 */

let point = function (x, y, fieldParam) {

	// Private fields
	let
		me, // object for Public API
		x_ = 0,
		y_ = 0;

	// This call is possible, because of hoisting
	publicAPI();

	// Call here to make accessible for next method init()
	init(x, y);


	// Private methods
	function init(x, y) {
		// Call PublicAPI
		me
			.setX(x)
			.setY(y);
	}

	// Public API
	function publicAPI() {
		me = {
			getX: function () {
				return x_;
			},

			getY: function () {
				return y_;
			},

			getFieldParam: function () {
				return fieldParam;
			},

			setX: function (x) {
				x_ = x;

				// For chaining
				return this;
			},

			setY: function (y) {
				y_ = y;

				// For chaining
				return this;
			}
		};
	}

	// Return public immutable API
	return Object.freeze(me);
};
