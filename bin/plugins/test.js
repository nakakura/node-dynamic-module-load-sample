/// <reference path = "../ModuleIf.ts"/>
var Test = (function () {
    function Test() {
    }
    Test.prototype.execute = function () {
        console.log("Test execute");
    };
    return Test;
})();
exports.Test = Test;
function initialize() {
    return new Test();
}
exports.initialize = initialize;
//# sourceMappingURL=test.js.map