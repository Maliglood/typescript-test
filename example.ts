// let

let foo = 123;      // Одна переменная foo

if (true) {
    let foo = 456;  // Другая переменная foo
}

console.log(foo);


// const

const _monthCount = 12;
_monthCount = 13;


// types

const monthCount: Number = 12;
const monthCount2: String = 12;

class TestTypes {
    static func1(arg: string) : void {
        arg = "Новая строка";
        arg = 2;
    }

    static func2(arg: any): number {
        arg = "Новая строка";
        arg = 2;
        return true;
    }

    static func3(arg: number | number[]): any {
        arg = 2;
        arg = [1, 2, 3];
        if (true) {
            return 4;
        } else {
            return false;
        }
    }
}

let testTypes: number = TestTypes.func2("23");

// types: number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// types: string
let firstName: string = "Tom";
let age: number = 28;
let info: string = `Имя ${firstName}    Возраст: ${age}    2+2: ${2+2}`;

// types: any
let a;
a = "Ten";
a = 10;

let b = 1;
b = "One;

// types: Array
let list: number[] = [10, 20, 30];
let colors: string[] = ["red", "green", "blue"];
let names: Array<string> = ["Tom", "Bob", "Alice"];
let arr: any[] = [1, "Two", true];

// types: Tuples
let userInfo: [string, number];
userInfo = ["Tom", 28];
userInfo[1] = 37;
userInfo = ["Tom", '28'];
userInfo[2] = 37;
let n: string | number = userInfo[2];

// types: Enum