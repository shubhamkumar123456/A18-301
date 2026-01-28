
// console.log("one")
// console.log("two")
// console.log("three")


// console.log("one");

// setTimeout(()=>{
//     console.log("two")
// }, 4000)


// console.log("three")



// Callback function --> functions that are passed into another function as an argument are known as callback function 

// HOF -->

// function xyz(){
//     console.log("hello")
// }
// // console.log(xyz)  //xyz"

// function second(a,b,c,d,e){
//     console.log(a)
//     e()
// }

// second(10, "hello" , [1,2,3] , {name:"one", age:23}, xyz)
// here second is HOF and xyz is callback function
// xyz(10, "hello" , [1,2,3] , {name:"one", age:23}, function A(){})



// function A(b , c){
//     console.log("one")
//     b(c)
// }

// function B(c){
//    setTimeout(()=>{
//     console.log("two")
//     c()
// }, 4000) 
// }

// function C(){
//     console.log('three')
// }

// A(B,C)



// function xyz(){
//     let x = 10;
//     var y = 5;
//     const z = 2
//     return [x, y ,z]
// }

// let ans = xyz(); //10 /  [10, 5 ,2]
// console.log(ans)
// console.log(ans[1])

// console.log(x) //undefined or not defined or 10
// console.log(y)
// console.log(z)




// let data  = {
//     name:"one",
//     age:34,
//     languages:['hindi', ' english', 'spanish'],
//     details:{
//         houseNo:10,
//         city:"lucknow",
//         state:"Up"
//     }
// }

// console.log(data.languages)
// console.log(data.languages[2])
// console.log(data.details)
// console.log(data.details.state)



// let arr = [10 , 'hello' , {name:"one", age:33} , [11, 12, 13]]

// console.log(arr[3][2])
// console.log(arr[2].age)

// find the products name whose price is between 10 to 50 k including 10 and 50

let products = [
    {name:"iphone", price:80000, rating:4.5},
    {name:"samsung", price:50000, rating:4},
    {name:"MI", price:20000, rating:3},
    {name:"Oppo", price:450000, rating:5},
    {name:"Vivo", price:10000, rating:2.5},
    {name:"One plus", price:33000, rating:3.5},
]

// https://github.com/shubhamkumar123456/New-folder.git
