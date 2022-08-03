this的用法
    function fun(){     
        consolo.log(this);   // 指向windows对象
    }
    fun()       每次调用函数都会传入this,是一个参数，浏览器传进来的。this指向 函数执行的上下文对象。说白了，就是取函数方法的所属对象。

工厂方法创造对象
    var p1 = new Person(name,age,sex);

构造函数   和普通函数的区别，是调用方式的不同。普通函数是直接调用，构造函数要用new关键字调用。同一个构造函数构建的函数，为一个类。创造出来的，是某一类的实例
    
    function  Person(name,age,sex){
        this.name = 'name';
        this.age = age;
        this.sex =sex
    }
    var p1 = Person()   作为普通函数调用，返回值undefined   1.逐行执行函数中的代码 2.返回return的值
    var p2 = new Person()  作为构造函数调用，返回值是对象。1.首先创造一个新对象（浏览器干） 2，新建的对象设置为函数中的this（浏览器） 3，逐行执行函数中的代码（人干的） 4，新建的对象作为返回值返回（浏览器）

    实例 instanceof 类名  如果实例属于类，则True;反之false

    所有的对象都是Object子类，任何对象和Object做instanceof都是true

    构造函数节省内存的方法
    function  Person(name,age,sex){
        this.name = 'name';
        this.age = age;
        this.sex =sex

        this.sayName:function()(
            alert("大家好我的名字是"+this.name);   问题：同样一个方法创建了无数次，占用了大量空间。属性会变，但是方法不会变
        )
    }

    =========>>   把函数提取出来，只要一份
        function fun =function()(          有局限性，污染了windows
                alert('我是';)
            }
        function  Person(name,age,sex){
            this.name = 'name';
            this.age = age;
            this.sex =sex;
            this.sayName = fun;
        }
    =========>>   可以把对象中共有的内容，添加到原型对象中。原型对象算是公共区域。
         Person.prototype.sayName = function(){   静态方法，类的所有实例公用一个
            alert('我是';)
         }

         运行顺序，例如找方法：：1.在函数里找 2.在函数的原型里找 3.在Object的原型里找

垃圾回收
    当一个对象没有任何变量和属性引用它，那么我们永远无法操作该对象。但是内存中还有。
    JS有自己的机制回收垃圾，不同的浏览器处理的方法不一样。
    我们要做的，就是把obj变量定义为null就好。

数组 是内建对象，本质是一个对象，有属性有方法。数组的存储性能比较好，且有现成的方法，扩展性强。万物皆对象
    var arr = arr(){            var arr = new Array();             arr[0]=10 用索引的方法存
        '1':''                                                     person[name]=10 本质上用的数组方法
        '2':''    ====>                                    ====>   读取不存在的index,返回Undefined
        ......                    
    }

    （1）array对象的属性
        长度：array.length   可修改，修改的长了空出后面的，修改的短了修改元素
             arr[arr.length] = 在最后一位添加元素
    （2）创建array对象的方法
        var arr = [1,2,3,4,5]
        var arr2 = new Array(1,2,3)  如果(10)，创建长度为10的数组
    （3）array对象的方法
         链接数组 concat()  可以连接两个或多个数组，并返回
            arr.concat(arr1,arr2,'牛魔王')
         把数组转化为字符串，中间用，分开 join() 
            join('分割的字符串')  默认用,分开，传入字符串用传入值去链接
         把数组中的字符按照Unicode方法进行排序  sort()  影响原数组

         向数组末尾添加一个或更多元素，返回新长度  push()
         删除末尾的最后一个，将删除的元素返回 pop()
         向数组开头添加一个或多个元素，返回新长度 unshift()
         删除开头尾的一个，将删除的元素返回 shift()
         遍历数组  foreach() 只支持ie8以上的浏览器
            for(var i=0;i<arr.length;i==){     一般用for循环遍历数组
                consolo.log(arr[i]);
            }

            for(var key in arr){
                
            }

            arr.foreach(function(value,index,obj){   创建但不调用为回调函数.value是值index为索引obj为数组
            })
        从某个已有的数组返回选定的元素 slice()
            var result = arr.slice(start,end)    参数为Index,包含开始，不包含结束。这样可以用arr.length.
                                                    第二个参数可以不写。end可以为负数，指倒数第二个，
        删除指定元素并替换 splice(start，end，元素)  会影响到原数组，并将被删除的元素作为返回值返回
            arr.splice(0,2)               
        
函数对象的方法  
    （1）fun.call();       俩都是执行函数，和fun()效果一致。可以传一个对象作为参数，函数里的this就是传入的对象。
    （2）fun.apply();      call(obj,2,3)可以直接放进去传递，apply(obj,[2,3])
    （3）arguments()       在调用函数的时候，浏览器每次都会传入两个参数 
                            1.函数的上下文对象   2.封装实参的对象 arguments一个类数组对象，有长度，也可以用索引调用。且调用函数，实参都在arguments保存。所以即使不定义形参，也可以用实参

Date对象
    （1）var d = new Date()  封装代码运行的当前时间
    （2）var d = new Date('12/03/2016') 封装年月日
    （3）var d = new Date('12/03/2016 11:10:30') 封装年月日 时分秒
    （4）获取日期对象的年月日时分秒  
            getDate()返回一月中第几天  getDay()返回一周中第几天  getMonth() 获取月份 getFullYear 获取年份  
    （5）具体看文档

Math对象 他是一个工具类，不需要创建实例，封装了数学运算相关的属性与方法。
    （1）具体见文档

包装类  JS提供了基本的包装类，把基础类型转化为对象
    Number() String()  Boolean() 基本数据类型分别转化为Number、String、Boolean对象
    （1） var num = 123;
          Var num = new Number(3)
          var str = new String('Hello')   主要是计算机本身用，如num.toString()，底层默认先转为对象，用后销毁
          var bool = new Boolean(true)    一般不用，数据之间基本上无法比较。对象之间比较的是地址。

字符串的方法  在底层，字符串使用字符数组的形式保存 本质上也是对象
    var str = 'Hello world';    ========>>['H','e','l','l','o'......]
    （1）返回长度值 str.length  
    （2）返回指定位置的字符 str.charAt()参数是数字  返回指定位置的Unicode编码 charCodeAt()
    （3）返回指定编码的字符 String.formCharCode(73) 静态方法 
    （4）返回新字符串，链接字符串 str.concat()，作用和+一样
    （5）检索字符串 str.indexof('要搜索的字符'，number)  返回位置，有就是index，没就是-1。第二个参数是开始位置
    （6）从最后一位检索字符串str.lastindexof() 用法和（5）一样，不同是从后往前找
    （7）截取字符串 str.slice(num1,num2) 搜索范围[num1,num2)，第二个参数可以是负数，和数组的slice类似。
    （8）截取字符串 Str.substring  与（7）无区别，不同的是不能传递负值。而且自动调整参数的位置
    （9）把字符串拆分为一个数组 str.split()
        var str = 'a,b,c,d,e,f'
        var result = str.split(",")  返回一个数组[a,b,c,d,e,f]
        var str = '1a2b3c4d5f'
        var result = str.split(/[A-z]/)  可以传递一个正则表达式，拆分字符串
     (10) str.toUpperCase() str.toLowerCase()  将字符串大写、小写
     (11) 搜索字符串是否有指定内容 str.search()   有的话返回第一个值，没有的话返回-1
        str = 'hello abc hello bcd'
        result = str.search('abc');  可以传入字符串
        result = str.search(/a[bde]c/); 可以传入正则表达式
     (12) 根据正则表达式从字符串中将符合条件的内容提取出来  str.macth()
        str = '1a2b3c4d5f6A'
        result =str.match(/[A-z]/gi)  g代表全局模式，就不是返回第一个 返回数组(封装)'a,b,c,d,f,A'
        使用场景：从html页面解析，
     (13) 将字符串的内容替换为新的内容
        str = '1a2b3c4d5f6A'
        result =str.replace(/[A-z]/gi,'-') 返回'1-2-3-4-5-6'
                                      ' '  用空串，等于删除

正则表达式  1.用于约束、检查字符串的规则  2.将字符串符合规则的内容提取出来  正则表达式也是对象
    (1) var  reg = new RegExp("正则表达式","匹配模式")
        测试某字符串是否符合正则规则时：reg.test(str)  返回布尔值

    (3)   var reg = new RegExp('avba','i');    i代表Ignore，忽略大小写   

    (4)   var 变量 = /正则表达式/匹配模式    创建正则表达式的简写
          reg = /abc/i     

    (5)   var reg = new RegExp('a');    字符串里是否 有a，严格区分大小写.使用构造函数更加灵活，可以用变量替代字符串         
          var str = 'abcde';
          reg.test(str) //返回值为true

    (6)  reg = /a|b/i    |表示或者，a或者b有一个就行就行

    (7)  reg = /[a-z]/  查找任何括号里字符 [ab]==a|b [a-z]表示a....或z [A-Z]表示任意大写字母  [A-z]表示任意大小写字母   /abc|cde|efg/查找任何指定的字符串

    (8)  reg = /a[bcf]c/ 表示abc acc afc

    (9)  reg = /[^ab]/  查找任何不在方括号里的字符

    (10) reg = /[^0-9]/  除了数字

    (11) reg = /ab{3}/  找a，且a连续出现三次.{}代表两次。只对前一个字符起作用
         var str = 'aaa45'
         reg.test(str) //  true    
         reg = /(ab){3}/ ab出现三次
         reg = /ab{1-3}c/ b出现1-3次
         reg = /ab{3,}c/  b出现三次及以上
         reg = /ab+c/  b出现至少一次，相当于{1，} abc true abbc true  ac false
         reg = /ab*c/ b出现0个或多个 相当于{0,}
         reg = /ab?c/ b出现0个或一个 相当于{0,1}
         reg = /^a/  表示开头  abc true  sabc false
         reg = /a$/  表示结尾 bca true bcad false
         reg = /^a$/ 同时使用，则要求字符串完全符合正则表达式

    (12) 检测是否为手机号
         var phonestr = 13252635432
         reg = /^1[3-9][0-9{9}]$/
    
    (13) 元字符
         reg = /./    .代表任意字符  
         reg = /\./   \代表转义字符，.不再是元字符了  /\//
         reg = /\w/  任意字母、数字、下划线
         reg = /\W/  除了任意字母、数字、下划线
         reg = /\d/  任意数字
         reg = /\D/  除了任意数字
         reg = /\s/  空格
         reg = /\S/  除了空格
         
         reg = /\bchild\b/  单词边界,必须是前后有空格
         reg = /\B/  除了单词边界  可用于去除字符串前后的空格
         str.replace(/^\s*$/g,'')
         