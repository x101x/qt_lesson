//  live-server 
//  index.html http 访问的支持 web server
const http=require('http');
const fs=require('fs');
const index =
  fs.createReadStream('./index.html');

//web server 一直伺服的 3000
//向require 返回response资源
const server=http.createServer((req,res)=>{
    // res.end('hello world');
    // index.html显示出来
    //req 浏览器 访问网站的代理
    if(req.url == '/'){
        index.pipe(res)
    }
    else if(req.url=='/userinfo'){
        const info ={
            "name":"我的",
            "desc":"b"

        }
        res.writeHead(200,{
            'Content-Type':'text/plain;charset=utf-8'
        })
        res.end(JSON.stringify(info));
    }
    else{
        res.end('hello world')
    }
})
server.listen(1314);