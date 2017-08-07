// Вариант 1
import {testViewClass} from "../views/testView";
let testView: testViewClass = new testViewClass();
testView.sayHello();

// Вариант 2
import * as testViewAll from "../views/testView";
let testView2 = new testViewAll.testViewClass();
testView2.sayTsIsCool();