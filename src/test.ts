// interface IUser {
//     name: string;
//     age: number;
// }

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
let lol: [number, string, boolean] = [1, "santu", true];
console.log(lol);


let lol1: number[] = [1, 2];
let lol2: number[] = [3, 4];

let result: Array<number> = [...lol1, ...lol2]
console.log(result)



let lol3: Array<string> = ["apple", "banana", "mango"]

console.log(lol3);