// boolean
let b: boolean = false;
console.log(b);

// number
let num1: number = 10;
let num2: number = 0x10;
console.log(num1);
console.log(num2);


// string
let str: string = "rust";
console.log(str);

// undefined null
let ud: undefined = undefined;
let n: null = null;

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
console.log(arr1);
console.log(arr2);

// 枚举
enum Color {
    Red,
    Yellow,
    Blue,
}

let c: Color = Color.Blue;
console.log(c);

// any
let a1: any = 10;
a1 = "rust";
console.log(a1);

// void

function msg(): void {
    console.log("void");
}

// union
function getString(str: string | number) { }