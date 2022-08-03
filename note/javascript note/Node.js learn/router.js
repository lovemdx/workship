const express = require('express')  //导入路由模块
const router = express.Router()     //创建路由组件
const apirouter = express.Router()  //创建api理由


router.get('/user',(req,res)=>{       //这个东西是接口
    //调用express提供的res.send()，响应一个对象
    res.send({name:'zs',age:20,gender:'男'})
})

router.post('/user',(req,res)=>{        //这个东西是接口
    res.send('post请求成功')
})

router.get('/',(req,res)=>{
    //req,res默认空对象
    var name = req.query.name;
    var age = req.query.age;
    res.send(name + age + '')
})

router.get('/user/:id/:name',(req,res)=>{     //写url时直接传入值，这样不用写key  写两个匹配两个动态参数
    //req.params是动态分配到的url参数，默认是空对象
    res.send(req.params)
})

module.exports = router   //向外导出路由函数