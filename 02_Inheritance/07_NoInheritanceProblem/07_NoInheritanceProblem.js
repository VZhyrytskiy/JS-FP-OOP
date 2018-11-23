/* 
 *	parent, child class
 *	Functional Pattern
 */

let parent = function () {

	let me = {};

	publicAPI();

	function publicAPI() {
		me = Object.assign({}, me, {
			init: function () {
				me.refresh();
			},
			refresh: function () {
				console.log("Parent object");
			}
		});
	}

	// Return public API
	return Object.freeze(me);
};

let child = function () {

	let me = parent();

	publicAPI();

	function publicAPI() {
		me = Object.assign({}, me, {
			refresh: function () {
				console.log("Child object");
			}
		});
	}

	return Object.freeze(me);
};
