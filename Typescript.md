what is typescript? why typescript??
--->> Typescript is a strongly typed programming language


// let numbers:number =2
// let urname:string = "motinya"
// //how can we define array datatype in ts
// let newNumbers:number[]=[1,2,3]

// console.log(newNumbers)


// //how can we define object datatype in ts
// //its something different to define object datatype in ts

// // let person:{
// //     urname:string,
// //     age:number,
// //     city:string
    
// // }={
// //     "urname":"fistinya",
// //     "age":22,
// //     "city":"bardiya"
// // }


// //enum type


// //using interface to define the type in ts
// interface UserType{
//     username:string,
//     age:number,
//     city:string


// }



// let personDetails:UserType={
//     username:'thepchinya',
//     age:22,
//     city:"bardiya"
// }

// console.log(personDetails)



// interface Me{
//     name:string,
//     age:number,
//     isNepali:boolean
// }


// interface Employee extends Me{
//     role: "developer" | "designer"
// }


// let employee:Employee={
//     name:"santu",
//     age:24,
//     isNepali:true,
//     role:"developer"

// }


// console.log(`employee detail is ${employee}`)





// function haha(num :number)  :number{
//     let result = num+1
//     return result

// }   
// haha(5)



//generics in typescript
//---generics states that we can make the datatypes dynamic by using generics concept
function addTwoNumber(num1:number,num2:number):number{
    return num1+num2
}
console.log(addTwoNumber(2,3))


//examples of generic usage in Typescript
function addJPani<T,U>(data1:T,data2:U){
    console.log("haha")
}

addJPani<number,string>(2,"hello")




function testFunction<T,U>(num1:T,num2:U){
    console.log("hello")
}
testFunction<string,number>("hello",123)




//creating object using interface and generics 

interface Data<T,U>{
    first:T,
    second:U
}



let data:Data<string,number>={
    first:"hello",
    second:1234
}