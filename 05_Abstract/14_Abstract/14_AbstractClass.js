// AbstractParent

let abstractParent = function () {
	let me = {};

	publicAPI();

	function publicAPI() {
		me = Object.assign({}, me, {
			setValue: function (value) {
				throw Error("Unimplemented abstract method - setValue");
			},
			getValue: function () {
				throw Error("Unimplemented abstract method - getValue");
			}
		});
	};

	return Object.freeze(me);
};


let parent = function () {

	let me = abstractParent();

	publicAPI();

	function publicAPI() {
		me = Object.assign({}, me, {
			setValue: function (value) {
				me.value_ = value;
			}
		});
	};

	return Object.freeze(me);
};
