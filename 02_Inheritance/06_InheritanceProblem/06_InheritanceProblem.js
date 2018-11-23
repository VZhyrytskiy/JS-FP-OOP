/*
 *    parent, child class and inheritance problem
 *    Functional Pattern
 */

let parent = function () {

    function init() {
        refresh();
    }

    function refresh() {
        console.log("Parent object");
    }

    // Return public API
    return Object.freeze({
        init,
        refresh
    });
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
