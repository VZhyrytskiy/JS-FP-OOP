/* 
 *	parent, child class
 *	Functional Pattern
 */

let parent = function() {

	let me = {};

	publicAPI();

	function publicAPI(){
		Object.assign(me, {
			init: function() {
				me.refresh();
			},
			refresh: function() {
				console.log("Parent object");
			}
		});
	}

	// Return public API
	return me;
};

let child = function() {

	let me = parent();

	publicAPI();

	function publicAPI() {
		Object.assign(me, {
			refresh: function() {
				console.log("Child object");
			}
		});
	}

	return me;
};
