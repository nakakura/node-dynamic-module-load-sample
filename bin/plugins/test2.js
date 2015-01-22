/// <reference path = "../ModuleIf.ts"/>
var Test2 = (function () {
    function Test2() {
    }
    Test2.prototype.execute = function () {
        console.log("Test2 execute");
    };
    return Test2;
})();
exports.Test2 = Test2;
function initialize() {
    return new Test2();
}
exports.initialize = initialize;
//# sourceMappingURL=test2.js.map