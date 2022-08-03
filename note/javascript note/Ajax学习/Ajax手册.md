传统请求的类型和问题：会把原先页面的所有内容清空，再加载新的页面
1.url请求
2.超链接
3.form方式提交请求
4.javaScirpt代码发送请求


Ajax用处：在不刷新页面的情况下，向服务器请求资源，返回结果。只刷新部分页面
Ajax简介：javascript and xml,不是新的语言，而是组合的结果

Ajax的特点：
    优点：1.无需刷新页面，发送请求
          2.允许根据用户的事件更新部分页面内容 比如点击、悬停
          3.Ajax1、2、3可以异步处理（谁也不用管谁），类似于多个线程 
    缺点：1.没有浏览历史
          2.存在跨域问题（同源），可解决
          3.seo(search engine opitimization)不太友好
          4.低版本的IE浏览器有缓存问题

Ajax的原理：Ajax收到服务器的响应数据，解析后的数据渲染到div层中,div更新完成刷新
Ajax的响应数据：1.String 2.XML 3.Json
XML的用处：Ajax用来保存、传输数据用的。现在不再使用，使用Json
      XML的简介：超文本标记语言，和HTML很像，HTML有标签，XML没有预定义标签
      例子：name='孙悟空'；age=18;gender='男'
      xml：<student>
                  <name>孙悟空<name>
                  <age>18</age>
            </student>
      后来使用JSON和好处：有现成对象，非常方便

实现方法：在浏览器上发送Ajax代码，是编写javascript代码
      var xhr = new XMLHttpRequest;
      XMLHttpRequest对象是Ajax的核心对象，是浏览器自带的对象
      
      属性：
      （1）readyState 记录了XMLHttpRequest对象的状态
            0（未初始化) 
            1(服务器连接已建立，open方法调用完毕) 
            2（请求以受到，send方法调用完毕） 
            3（正在处理请求） 
            4（请求已完成，响应就绪）

      （2）Onreadystatechangge 当readyState变化时执行的函数

      （3）status 返回请求的状态   状态码是http协议的一部分
            200：OK
            403：Forbidden
            404：NotFound
      

      方法：
      （1）open(method,url,async,user,psw) //请求类型GET POST、文件位置、true异步或false同步、用户名称、密码
            
            GET提交数据是请求行上提交，格式是url?name=value&name2=value2 由HTTP协议规定。其中value可以动态获取
            POST

            POST和GET区别：提交数据不再请求头写，而是要设置请求头的content-type,在send中发送

express后台服务器的开关
    开：node 文件名.js



其他知识：
XML的用处：Ajax用来保存、传输数据用的。现在不再使用，使用Json
XML的简介：超文本标记语言，和HTML很像，HTML有标签，XML没有预定义标签
例子：name='孙悟空'；age=18;gender='男'
    xml：<student>
            <name>孙悟空<name>
            <age>18</age>
         </student>
后来使用JSON和好处：有现成对象，非常方便

缓存：
      GET：
      解决的痛点：有缓存功能。第一次是从服务器拿，第二次是从本地浏览器拿，就快。
      引发的问题：路径一模一样，都走缓存。结果就是无法获取最新的服务器资源（旧IE）
      解决的方法：插入时间戳，每次都不一样。
      缓存的情况：1.GET请求 2.一模一样的路径
      POST：请求的回复不缓存

      GETPOST区别：1.缓存2.是否明文2.GET快4.GET有长度限制POST没有