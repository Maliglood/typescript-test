///https://www.testdome.com/tests/typescript-javascript-online-test/71

//-------------------------------------------------------------------------------
// https://www.testdome.com/questions/typescript/color-type/10689?questionIds=10689,9903,9865,8521&generatorId=71&type=fromtest&testDifficulty=Easy

type ColorType = [string, number, number, number];
let red: ColorType = ['Red', 1, 0, 0];
let green: [string, number, number, number] = ['Green', 0, 1, 0];
let blue = ['Blue', 0, 0, 1];

// All three colors can have new elements of any type appended to them.
// ColorType is an alias to a tuple.
// All three colors would compile to the same JavaScript type signature.
// ColorType is an array where the type of a fixed number of elements is known.
// All three variables are immutable.

//-------------------------------------------------------------------------------
// https://www.testdome.com/questions/typescript/uppercase-types/9903?questionIds=10689,9903,9865,8521&generatorId=71&type=fromtest&testDifficulty=Easy

let stringType: string = "string type";
stringType.toUpperCase();

let anyType: any = "any type";
anyType.toUpper();
anyType.toUpperCase();

let objectType: Object = "object type";
objectType.toUpperCase();

// The typescript compiler confirms that toUpperCase exists on the stringType instance.
// The typescript compiler states that toUpper does not exist on the anyType instance;
// The typescript compiler confirms that toUpperCase exists on the anyType instance.
// The typescript compiler does not check if toUpperCase or toUpper exist on the anyType instance.
// The typescript compiler states that the toUpperCase function does not exist on the objectType instance.
// The typescript compiler confirms that the toUpperCase function exists on the objectType instance.