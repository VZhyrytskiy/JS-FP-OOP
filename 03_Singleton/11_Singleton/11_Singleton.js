/* 
 * parent class
 * functional pattern + singleton
 */

// IIFE
let parent = (function () {

	let value,
		me = {};

	publicAPI();

	function publicAPI() {
		Object.assign(me, {
			setValue: function (p_value) {
				value = p_value;
			},
			getValue: function () {
				return value;
			}
		});
	}

	// Return public API
	return Object.freeze(me);
})();
