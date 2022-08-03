const { request } = require('express');
const express = require('express');    //引入express

const app =express()

app.get('/server',(request,response)=>{   //request是请求报文的封装 //response是响应报文的封装
    //获得request里面请求头的数据
    var name = request.query.username;
    
    //设置响应头
    response.setHeader('Access-Control-Allow-origin','*'); // 设置允许跨域   
    //设置响应
    response.send('Hello'+name)     //如果请求路径是/server的话，response做出响应，回复函数体内容
    
})

app.post('/server2',(request)=>{
    var usercode = request.query.username;
    
    //设置响应头
    response.setHeader('Access-Control-Allow-origin','*'); // 设置允许跨域   
    //设置响应
    response.send('提交成功')     //如果请求路径是/server的话，response做出响应，回复函数体内容
})

app.listen(8000,()=>{
    console.log('服务已经启动，8000端口监听中');
})