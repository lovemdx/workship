//1.导入Express
const express = require('express')
const router = require('./router.js')
//2.创建web服务器
const app = express()

//定义一个中间件常量
const mw = function(req,res,next){
    console.log(这是最简单的中间件函数);
    next()    //流转到下一个中间件
}
app.use(mw)  //加载中间件

//挂载路由
app.use(router)
//3.启动web服务器


//4.监听客户端的请求，并返回
/*
app.get('/user',(req,res)=>{
    //调用express提供的res.send()，响应一个对象
    res.send({name:'zs',age:20,gender:'男'})
})

app.post('/user',(req,res)=>{
    res.send('post请求成功')
})

app.get('/',(req,res)=>{
    //req,res默认空对象
    var name = req.query.name;
    var age = req.query.age;
    res.send(name + age + '')
})

app.get('/user/:id/:name',(req,res)=>{     //写url时直接传入值，这样不用写key  写两个匹配两个动态参数
    //req.params是动态分配到的url参数，默认是空对象
    res.send(req.params)
})
*/



app.use('/public',express.static('./public'));

app.listen(80,()=>{
    console.log('这是web服务器的回调函数');
})