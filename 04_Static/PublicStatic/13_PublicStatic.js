/* 
 * parent class, public static
 * functional pattern + singleton
 */

// IIFE
let parent = (function () {

	// Static let
	parent.count = 0;

	// Static method
	parent.print = function () {
		return `count = ${parent.count}`;
	};

	// CLASS
	function parent() {

		let me = {},
			value_;

		publicAPI();

		function publicAPI() {
			Object.assign(me, {
				setValue: function (value) {
					value_ = value;
				},
				getValue: function () {
					return value_;
				}
			});
		}

		// Return public API
		return Object.freeze(me);
	};

	// Return CLASS
	return parent;

})();
