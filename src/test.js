// interface IUser {
//     name: string;
//     age: number;
// }
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// class UserAccount {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }
// const user: IUser = new UserAccount("santu", 20)
// console.log(user);
//function to add two numbers
// interface IAdd {
//     num1: number;
//     num2: number;
// }
// function add(num: IAdd): number {
//     let total = num.num1 + num.num2
//     return total;
// }
// const val = { num1: 10, num2: 20 }
// console.log(add(val));
// arrays in typescript
var lol = [1, "santu", true];
console.log(lol);
var lol1 = [1, 2];
var lol2 = [3, 4];
var result = __spreadArray(__spreadArray([], lol1, true), lol2, true);
console.log(result);
var lol3 = ["apple", "banana", "mango"];
console.log(lol3);
