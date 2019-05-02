/* 
 *	parent, child class
 *	Functional Pattern
 */

let parent = function () {
	const me = {};

	publicAPI();

	function publicAPI() {
		Object.assign(me, {
			init: function () {
				me.refresh();
			},
			refresh: function () {
				console.log("Parent object");
			}
		});
	}

	// Return public API
	return me;
};

let child = function () {
	const me = parent();

	publicAPI();

	function publicAPI() {
		Object.assign(me, {
			refresh: function () {
				console.log("Child object");
			}
		});
	}

	return Object.freeze(me);
};
