/*
 *    Class Square + extend function
 *    Functional Pattern
 *    Depends on: 05_PointClass.js, 05_extend.js
 */

let square = function (x, y, width) {
    let
        // In this case me is NOT empty, it is result of parent constructor
        me = point(x, y);

    publicAPI();

    // We extend me or ovveride some methods
    function publicAPI() {
        // Call extend or Object.assign or use ...
        me = Object.assign({}, me, {
            getWidth: function () {
                return width;
            },

            getFieldParam: function () {
                return "";
            }
        });
    };

    return Object.freeze(me);
};
