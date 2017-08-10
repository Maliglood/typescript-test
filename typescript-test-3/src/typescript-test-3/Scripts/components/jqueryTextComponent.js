"use strict";
var $ = require("jquery");
var jqueryTextComponent = (function () {
    function jqueryTextComponent() {
    }
    /**
     * Пишет "Hello" в элемент по переданному селектору.
     * @param selector
     * @returns Успешность действия.
     */
    jqueryTextComponent.prototype.sayHello = function (selector) {
        var element = $(selector);
        if (element.length > 0) {
            element.html("Hello!");
            return true;
        }
        else {
            return false;
        }
    };
    jqueryTextComponent.prototype.sayTsIsCool = function () {
        alert("TS is cool!");
    };
    return jqueryTextComponent;
}());
exports.jqueryTextComponent = jqueryTextComponent;
//# sourceMappingURL=jqueryTextComponent.js.map