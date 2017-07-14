"use strict";
var testViewClass = (function () {
    function testViewClass() {
    }
    testViewClass.prototype.sayHello = function () {
        alert("Hello!");
    };
    return testViewClass;
}());
exports.testViewClass = testViewClass;
//export {testViewClass}; 
