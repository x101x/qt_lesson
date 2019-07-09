// console.log ("sd");
const http = require('http');

const server=http.createServer((req,res)=>{
    res.end('hello world');
});
server.listen(1111,()=>{
    console.log('running');
    
});