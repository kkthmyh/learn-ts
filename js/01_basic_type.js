"use strict";
// boolean
let b = false;
console.log(b);
// number
let num1 = 10;
let num2 = 0x10;
console.log(num1);
console.log(num2);
// string
let str = "rust";
console.log(str);
// undefined null
let ud = undefined;
let n = null;
// 数组
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1);
console.log(arr2);
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Blue;
console.log(c);
// any
let a1 = 10;
a1 = "rust";
console.log(a1);
// void
function msg() {
    console.log("void");
}
// union
function getString(str) { }
