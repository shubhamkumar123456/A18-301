// modules -->core module , local module , third party module
// CRUD --> create , read , update , delete
const fs = require('fs')

// 1)Create a file using fs module 
// fs.writeFileSync('trial.pdf' , 'this is dummy text')

// fs.writeFileSync('trial.js' , 'let a = 10; \n let b = 5 \n console.log(a+b)')

// fs.writeFileSync('trial.js' , 'let a = 10; \n let b = 5 \n console.log(a+b)')

// fs.writeFileSync('trial.html', `<html>
//         <head></head>
//         <body>
//             <h1>THis is heading</h1>
//         </body>
//     </html>`)


// 2) read a file using fs module --> 
// let ans = fs.readFileSync('trial.pdf' , 'utf-8')
// console.log(ans)

//3) add text to any existing file  --> append method
// fs.appendFileSync('trial.pdf', ' this is additional text')

//4) rename a file -->
// fs.renameSync('trial.pdf' , 'two.pdf')

//5) delete a file --> unlink
// fs.unlinkSync('trial.html')


// create a folder --> mkdir
// fs.mkdirSync('pages')

// fs.writeFileSync('dummt.txt', 'hello')

// fs.writeFileSync('pages/dummy.js', 'let text = "hii"')







