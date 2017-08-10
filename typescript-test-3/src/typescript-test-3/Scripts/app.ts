import {jqueryTextComponent} from "./components/jqueryTextComponent";
import * as $ from "jquery";
//import * as Mar from "backbone.marionette";

let testComponent: jqueryTextComponent = new jqueryTextComponent();
if (!testComponent.sayHello("#jquery-test")) {
    alert("Переданный элемент не найден!");
}