/* 
 * parent class
 * functional pattern + singleton

 */
let parent = function () {

	let value_,
		me = {};

	publicAPI();

	function publicAPI() {
		me = Object.assign({}, me, {
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
// Make class singleton
addSingletonGeteter(parent);
