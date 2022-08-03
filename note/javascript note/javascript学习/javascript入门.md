
变量定义：在内存中开辟一个空间，用于存放数据与类型
    var a = 123 || true ||null ||'123'  
    String Number Boolean null Undefined 基本数据类型
    Object 类

强制类型转换：
（1）other转化为字符串类型的方法
    var b;
    b = a.toString();    返回数据的字符串类型，是a实例的方法。只适用于String、number与boolean。null与undefined的实例无转化方法，调用会报错。
    b = String(a)；      全局方法，可以用null和undefined，把它们转化为字符串。
    
（2）other转化为Number类型的方法
    var a = '123';
    b = Number(a);     全局函数，将a转化为Number类型。数字转化为数字，布尔转化为0,1，其他+混合转化为NaN。空字符串转化为0
    b = parseInt(a);   全局函数，将a转化为Number类型中的int类型，有效数字转化出来，其他的不动。只会取整数。它先转化为String，再操作
    b = parseFloat(a); 全局函数，将a转化为Number类型中的int类型，有效数字转化出来，其他的不动。会取浮点数。

（3）other转化为boolean类型的方法
    var a = 123
    b = boolean(a)     全局函数。将a转化为boolean值。数字：除了0或NaN，全部true。字符串：除了空串，都是true。null undefined为false

运算符：
（1） typeof  字符串形式 返回变量的类型
    var result = typeof a;

 (2) 二元运算符 + - * / %取余  算术运算符。 boolean类型转化为0 1计算。null。NaN和任何数运算都是NaN。字符串相加连成一个字符串。
    '123'+'456' = '123456'  
     523 + '万' = '523万'   任何+字符串 都会转化为字符串再拼串
     123 + '' = '123'       隐形字符串转化，原理就是tostring
     100 - '1'= 99          除了加法，其他- * /的都转化为Number
     8 * '2' = 16           除了加法，其他- * /的都转化为Number
     '123' - 0 = 123        隐形number形式转化，原理就是Number

（3） 一元运算符  + -    非Number会先转化为Number
     var a = 123;
     a = +a   正号123，可用于转换为字符串
     a = -a   负号123
     a++      a自己+1，变了。执行完了自己+
     a--      +了后在增加

     逻辑运算符  ！非 &&与 ||或
     赋值运算符  = += -= 
     关系运算符 > >= < <=比大小，返回boolean == ===
 (4) 三元运算符  条件表达式?语句1:语句2；  首先求值，true执行语句1，false执行语句2  实际上是if else的简写
     
代码块：
 {}代码块里的要么执行，要么不执行。

流程控制语句：  JS代码是从上到下执行的。要改变代码的执行顺序，要用流程执行语句。
  (1)条件判断语句  不同的情况处理办法不同
     if(条件表达式){

     }

     if(条件表达式){

     }else if（）{

     }else if(){
        
     }else{

     }
 (2)条件分支语句 用于取代大量else if且同样的比较 
    var num = 4
    switch(num){
        case 表达式：
            语句；
            break;
        case 表达式：
            语句2：
            break;
            .......
    }  
 （3）循环语句  用于大量重复运行一段代码
    var i = 0;
    while(i<10){     //为true就执行，循环完了再判断
        i++；
    }

 （4）for循环语句   取代while函数，更加清晰一些
    for(var i = 0；i<10；i++){   //执行初始化表达式，初始化变量；条件表达式，判断为true就循环体；更新表达式，变完了继续判断。出世表达式只执行一次。
        语句；
    }

 （5）嵌套for循环
 （6）break和continue
      break可以退出switch或循环语句
      continue可以跳出当次循环，代码块下面的内容不执行

javascript对象：对象是复合的数据类型，可以保存多个数据类型的属性。   
  （1）内建对象 js自带的 
      如Math String Number Boolean Function Object Date

   (2) 宿主对象 js运行环境提供的对象（浏览器）
      如BOM DOM Window consolo document

  （3）自定义对象 由开发人员自己创建的对象
      '属性名' in obj  返回boolean是否有某属性

      var obj1 = new Object();  //创建一个Object类

      var a = obj1;            最初创建类的方式
      obj1.name = '孙悟空'
      var obj2 = obj1';
      obj2.name = '猪八戒'      所谓赋值，就是地址的传输

      var i = 'name'
      var obj = {
        "name":"猪八戒"，
        "age":"16",
        "sex":'男'
      }            建立对象的简单方法，可以直接往里插值。推荐不+前面的""
      obj.i 是不存在
      obj[i] 是去i变量的值

    （4）对象方法       对象的属性值也可以是一个函数,叫方法。本质上是一个东西
        var obj = {

        "name":"猪八戒"，
        "age":"16",
        "sex":'男'

        add(){ 
        }
       } 
    （5）枚举对象属性
        for(var i in obj){      每执行一次，把名字赋值给变量
            consolo.log('hello');
            document.write(i);      打印属性名
            document.write(obj[n])  n的值是什么，就找什么属性。[]的特点，是可以传变量。obj[]，可以取属性值
        }



jvascript函数：   函数也是一个对象！函数可以封装功能，需要时执行代码
  （1）var fun = new Function()  用构造函数建立函数对象。这种方式不好，实际开发中很少使用构造函数创建函数对象
       var fun = new Function("consolo.log('Hello')");  

       fun();    函数的代码不会直接执行，调用的时候才会执行

  （2）function fun([形参1，形参2...]){   以函数声明的形式创建函数   如果函数调用时没传入参数为Undefined
         consolo.log('Hello')；
      }

  （3） var fun = function(){   匿名函数，赋予某地址
            return x;      可以返回基本数据类型，也可以返回函数，也可以返回对象
        }

  （4） 立即执行函数 创建完就执行。往往只会执行一次
       (function(){
          alert('我是一个匿名函数');
       })();
    
作用域  指的是一个变量的作用访问
  (1)js中只有两种作用域：全局作用域、函数作用域
    全局作用域：直接编写在script标签中的代码，都在全局作用域中。在页面打开时创建，在页面关闭时销毁。全局作用域有一个window对象，代表浏览器窗口，由浏览器创建。我们可以直接使用。在页面的任何部分都可以访问到（成为了windows的属性）

    <script> 
        var a = 1;  创建的变量本质上是window对象的属性。函数成为方法保存在window里。
        var b = 2;  使用var声明，意味着所有代码前执行，（但不会赋值），往前提
        window.a = 1  不会提前执行

        function(){  用声明的方式创建函数，在所有代码执行前创建

        }

        var fun2 = function(){  只是有了fun2，是undefined

        }
    </script>

 （2）函数作用域（局部作用域），调用函数时创建函数作用域，函数执行完毕后销毁
   函数外部访问不到函数里面的变量
   var a = 20;
    function(a，b){    形参相当于在函数作用域中生命了变量 
        var b = 10;    函数作用域用var定义，在作用域范围内提前渲染
        return a + b  //30
    }
    function(){      当全局和局部冲突，谁离得近找谁，先在自身的作用域中寻找。如没有，在上一级作用域中寻找。
        var a = 10   
        var b = 10;
        return a + b  //20
    }

判断数据类型 typeof instanceof ===
    (1)typeof 返回数据类型的字符串表达
    var a 
    consolo.log(a,typeof a) // 

Json  JS object Notation JS对象表示法
      Json的结构和对象的结构近似，多语言通信的时候交流
      Json是特殊格式的字符串，能被任意的语言所识别，转换为任意语言中的对象 
 Json分类： 1. 对象 2，数组
 Json允许的值：1.字符串 2.数值 3.布尔值 4.null 5.对象 6.数组
    var obj2 = '{'arr':[1,2,3]}'
    var obj3 = '[{},{}]'

    （1）当后端传一个json字符串，需要有一个方法将字符串转化为JS对象，就是Json类
        JSON.parse(JSON字符串) 可以把Json字符串转化为对象，数组
    
    （2）要往后端传一个json字符串，需要一个方法将对象转化为json字符串，就不用自己做了
        JSON.stringify(对象)

    （3）执行一段字符串形式的字符串代码，并将结果返回
        eval(字符串)   如果执行的字符串中含有{}，会把{}当成代码快。如果不希望当场代码块解析，需要前后加()
        尽量不要用
