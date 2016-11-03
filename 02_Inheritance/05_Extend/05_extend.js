/* 
 * copy links from source object to target object 
 */

function extend( target, source ) {
	for (let prop in source) {
		if (source.hasOwnProperty(prop)) {
			target[prop] = source[prop];
		}
	}

	return target;
}

// ES2015: Object.assign()