/* 
 * parent class
 * functional pattern + singleton

 */
let parent = function() {

	let value_,
		me = {};

	publicAPI();

	function publicAPI(){
		Object.assign(me, {
			setValue: function( value ) {
				value_ = value;
			},
			getValue: function() {
				return value_;
			}
		});
	}

	// Return public API
	return me;
};
// Make class singleton
addSingletonGeteter( parent );