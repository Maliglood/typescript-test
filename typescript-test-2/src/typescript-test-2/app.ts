import {testViewClass} from "./Scripts/views/testView";
import * as testViewAll from "./Scripts/views/testView";
import * as Mar from "./node_modules/backbone.marionette/lib/backbone.marionette.js"

let testView: testViewClass = new testViewClass();
testView.sayHello();

let testView2 = new testViewAll.testViewClass();
testView2.sayTsIsCool();