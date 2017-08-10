"use strict";
var jqueryTextComponent_1 = require("./components/jqueryTextComponent");
//import * as Mar from "backbone.marionette";
var testComponent = new jqueryTextComponent_1.jqueryTextComponent();
if (!testComponent.sayHello("#jquery-test")) {
    alert("Переданный элемент не найден!");
}
//# sourceMappingURL=app.js.map