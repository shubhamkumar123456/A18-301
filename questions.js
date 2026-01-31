// Hoisting --> it is a default behaviour of javascript where all the functions and variable decleration are moved to the top of their scopes.

// Note --> let , var and const all are hoisted but let and const stay in temporal dead zone ( where variable can not be used)

// console.log(x) // error
// var x = 12

// console.log(x)  //  x can not be  used
// let x = 10

// let x = 10;

// function abc() {
//   console.log(x); //
// }

// abc();


// let x = 10;

// function abc() {
//     let x = 5
//   console.log(x); //
// }

// abc();

//     let x = 10
// function xyz(){
//     // var x --> undefined
//     console.log(x)  //undefined 
//     var x = 5
// }

// xyz()



  // 
//   var x --> undefined
//   x()    // x is not a function 

// var x  = ()=>{
//     console.log("hello")
// }


// let y = 7
// y()

// var x -->undefined
// console.log(x)
// var x = 1




// function A(){
//     for(let i =1; i<=5; i++){
//         console.log(i)
//     }
//     console.log(i)      //1, 2, 3, 4, 5 , error
// }

// function B(){
//     for(var i =1; i<=5; i++){
//         console.log(i)
//     }
//     console.log(i)    // 0494 , A17 -->0041
// }


// why var is known as global variable ? 
// Any  variable decleraed using var adds itself in global object( window) any variable inside global variable are known as global variable that is why var is known as global variable


// function A(){
//     let x =10
//     var y = 5; 
//     const z = 6;
// }

// A();
// console.log(y)  //5


// What is global object in javascript --> window is your global object in javascript


// let arr = [ 10 ,20 , 30]

// arr.forEach((val , i)=>{
//     console.log(val)
// })

// let obj = {
//     name:"one",
//     age:33,
//     class:"A"
// }

// obj.forEach((val, i)=>{
//     console.log(val)
// })