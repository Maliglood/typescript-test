import {testViewClass} from "./Scripts/views/testView";
import * as $ from "jquery";
//import * as Mar from "backbone.marionette";

let testView: testViewClass = new testViewClass();
testView.sayHello();

$("#jquery-test").html("It's jQuery test");