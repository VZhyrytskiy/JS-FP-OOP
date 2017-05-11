/*
 *    Class point
 *    Functional Pattern, private methods and public reference
 *    this pattern we can use to call public API in private methods
 */

let point = function( x, y, fieldParam ) {

    // Private fields
    let _x = 0,
        _y = 0;


    // This call is possible, because of hoisting
    init( x, y );


    // Private methods
    function init( x, y ) {

        // Call public method in private method
        refresh();
    }

    // Public methods
    function refresh() {
        console.log(`x = ${x}`);
        console.log(`y = ${y}`);
    }

    function getX() {
        return _x;
    }

    function getY() {
        return _y;
    }

    function getFieldParam() {
        return fieldParam;
    }

    return {
        // Public methods (references)
        // They have read and write access to a closure
        // !Problem with inheritance
        getX,
        getY,
        getFieldParam,
        refresh
    };
};
