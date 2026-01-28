const http = require('http');
const port = 8090;
const fs = require('fs')

const server = http.createServer((req , res)=>{
    if(req.url==='/'){
        res.write('this is welcome page....')
        res.end();
    }

    if(req.url==='/contact'){
        let ans = fs.readFileSync('pages/index.html' , 'utf-8');
        res.write(ans);
        res.end()
    }


    

})

server.listen(port, ()=>{
    console.log('server is running');
})

