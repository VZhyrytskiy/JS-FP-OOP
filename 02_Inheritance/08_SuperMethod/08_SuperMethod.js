/* 
 *	parent, child class, superMethod
 *	Functional Pattern
 */

let parent = function (value) {

	let me = {};

	publicAPI();

	function publicAPI() {
		me = Object.assign({}, me, {
			getValue: function () {
				return value;
			}
		});
	}

	// Return public API
	return Object.freeze(me);
};

let child = function (value) {

	let me = parent(value),

		// Save parent method before override
		superGetValue = me.getValue;

	publicAPI();

	function publicAPI() {
		me = Object.assign({}, me, {
			// Override parent method
			getValue: function () {
				return `Child object -> GetValue(): ${superGetValue()}`;
			}
		});
	}

	return Object.freeze(me);
};
