// addSingletonGeteter from Google Closure Library (only idea)

let addSingletonGeteter = function( constructor ) {
	constructor.getInstance = function() {
		if ( !constructor.instance_ ) {
			constructor.instance_ = new constructor();
		}

		return constructor.instance_;
	};
};