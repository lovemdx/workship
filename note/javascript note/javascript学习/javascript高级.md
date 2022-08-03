开始进入宿主对象
DOM 是Document Object Model 文档对象模型 帮助我们操纵html
    文档指 的是整个网页
    对象指 网页的每一个部分都转化为对象
    模型指 用模型表示对象节点之间的关系，方便我们获取对象

    节点分为四类：1.文档节点 整个html文档 2.元素节点 整个html文档中的html标签  3.属性节点 元素的属性 4.文本节点
    节点属性：nodeName、nodeType、nodeValue

DOM查询  都是document对象的方法
    (1)通过id元素获取一个元素节点对象
        var btn = document.getElementById('btn');
        btn.innerHTML = '修改了按钮'  //把按钮内部的文字进行修改

    （2）通过标签名获取'一组'元素节点对象
        document.getElementsByTagName()  返回一个类数组对象，里面全是tag目标。
    
    (3) 通过name属性获取'一组'元素节点对象
        document.getElementsByName()

DOM指定元素的后代中查询 
    （1）getElementByTagName()  在当前节点里面寻找元素
    （2）childNodes 表示当前节点的所有子节点  

        children 属性可以获取当前节点的所有子元素
        <ul id='city'>
            <li>背景</li>
            <li>仨</li>
            <li>安抚</li>
            <li>苏轼</li>
        </ul>
        var city = document.getElementById('city')
        var cns = city.childNodes  返回节点的所有子节点，居然有9个。包括文本节点。
        var cns = city.children    返回节点的所有子元素，4个。

    （3）firstChild 当前节点的第一个子节点    兼容性不太好
        var cns = city.firstchild  获取第一个子节点，包括空白文本节点
    
    （4）lastChild 当前节点的上一个子节点
    
    （5）parentNode 表示当前节点的父节点
         var pn = bj.parentNode

    （6）当前节点的前一个兄弟节点
        var ps = and.previousSibling;
    
    （7）当前节点的下一个兄弟节点
        var pe = and.nextSibling

     (8) 读取value属性值
         节点对象.value 

     (9) 读取文本值
         节点对象.innerHTML   第一种
         bj.firstchild.nodevalue  获取文本节点对象，然后获取nodevalue的值

    （10）获取body、html内容 
        var body = document.body;
        var html = document.documentElement;
        var all = document.all;

     (11) 根据class获取一组元素节点对象 该方法不支持ie8即一下浏览器
        var box1 = document.getElementByClassName('')

    （12） 获取class为box1中的第一个div 根据一个css选择器查询一个元素节点对象 这个方法更加灵活
            该方法只能返回第一个
        var div = document.querySelector('.box1 div');

    （13） 获取class为box1中的所有div  返回一个节点数组
        var div = document.querySelectorALL('.box1')

DOM增加元素
    （1）给一个父节点添加子节点
        document.createElement()  创建节点元素对象，需要标签名，根据标签名创建元素节点对象，把创建好的对象作为元素节点返回  节点对象.appendChild()
        var li = document.createElement('li')  创建一个li节点对象
        var text = document.createTextNode('广州')  创建一个文本节点对象
        li.appendChild(text);  
    
    （2）给指定子节点前插入新的子节点
        父节点.insertBefore(新节点,旧节点)

    （3） 删除子节点
        父节点.removeChild(子节点)
        子节点.parentNode.removeChild(子节点)

    （4） 替换子节点
        父节点.replaceChild(新节点，旧节点)

    （5） 增加节点
        源节点.innerHTML += 'html文档'
        
        var li = document.createElement('li')；
        li.appendChild('text内容')
    
事件，就是文档或者浏览器窗口发生的 一些特定的交互瞬间
    javascript与HTML之间的交互是通过事件实现的，可以在事件发生时运行一些js代码

    （1）单击事件
        var btn = document.getElementById('btn');
        btn.onclcik = function(){  响应单击函数 这样就可以不写在html，降低耦合度
            alert('别点了')；
        }
    （2）为什么<script></script>必须放在Body的最下面？因为先要读取html，再加载js。浏览器从上而下解析页面
         window.onload(){}方法，可以让函数体内代码在页面加载完成之后执行

    （3）事件方法
        鼠标在元素中移动时触发
        element.onmousemove = function(e){

        }
    （4）事件对象  当事件的相应函数被触发时，浏览器每次会将事件对象作为实参传递进响应函数。封装了当前事件相关的一切信息。比如坐标、滚轮方向、键盘等等，都在实践对象里面。
        element.onmousemove = function(e){    每次都有事件对象

        }
        e.clientX  X坐标
        e.clientY  Y坐标
        e.target   返回触发事件的对象

    （5）事件的冒泡：后代的事件被触发，祖先节点的也被触发  就很不合逻辑。开发中大部分冒泡是有用的。不希望可取消
        event.cancelBubble = true     evet函数在事件触发时自动生成，为了操作事件有用


    （6）事件的委派：  只绑定一次事件，即可应用到多个元素上 即使元素是后添加的
        可以尝试绑定给共同的祖先元素 后代元素上事件触发时，可以一直冒泡的祖先元素。可以增加性能
        if(e.target.className == 'link'){    但是点大框框全部都反应，这样判断下就好

        }

    （7）事件的绑定： 使用 对象.事件= 函数形式绑定回调函数，一个元素只能绑定一个响应函数，不能绑定多个，后面绑定前面的。
        addEventListener()  通过这个方法为元素绑定响应函数。参数：1.事件   2.回调函数，事件触发时会被调用
        3.是否在捕获阶段触发，需要一个布尔值   从外往里捕获，从里往外冒泡
        btn1.addEventListener('click',function(){              不支持ie8以下浏览器
        },false)    一般不会希望在捕获阶段触发事件

        bind(element,'事件名'，绑定的事件)   bind(btn1,'click',function(){})

    （8） 事件的鼠标拖拽
        box1.onmousedown = function(){} //鼠标按下触发事件
            document.onmousemove =  function(event){   注意，事件绑定在哪个元素里面
                var left = e.clientX;
                var right = e.clientY;

                box1.style.left = left +'px'
                box1.style.left = right + 'px'
            }      

            document.onmouseup = function(){
                document.onmouseup = function(){
                    document.onmousemove = null；
                    document.onmouseup = null;
                }
            }

        (9) 事件的鼠标滚轮
            var div = getElementById()
            div.onmousewheel = function(e){    火狐中不兼容
                var delta = e.wheeldelta       向上滚是正数，向下滚是负数 

            }

        (10) 键盘事件  一般绑定在可以获取焦点的对象上 
            document.onkeydown = function(e){}  按键被按下    如果按着不动 会连续触发
            document.onkeyup = function(e){}   按键被抬起了  两次之间略长，之后非常快

            e.keyCode  该属性得到按到的按键

操作样式 原来操作结构，现在操作表现 使用DOM操作CSS    
    #box1{
        width:200px;
        height:200px;
        background-color:red; ！important 说明重要性最高
    }

    <div id='box1'>
    </div>

    (1) 修改读取内联样式 Box1的大小  元素.style.样式名 = 样式值  改的实际上是内联样式表。由于有较高优先级，可以覆盖
        box1.style.width = '300'px  把宽度改为300像素
        box1.style.backgroundColor = 'Yellow'  去掉-改为驼峰命名法

    （2）获取元素当前的样式，包括元素表样式4
        在IE和其他浏览器上注定不能兼容，要用if else去判断
        
        box1.currentStyle.width  读取当前正在显示的样式   只有IE支持
        
        var sty = getComputedStyle(目标元素，null) 这个方法是window的方法，可以直接使用。返回了一个对象。如果获取的元素本身没有定义样式，就会返回现实的值 本方法不支持ie8及以下浏览器
        sty.width  获得长度

    其他样式相关的属性
    （1）element.clientWidth 获取元素的可见宽度  包括内容区与内边距  属性只读不能修改
         element.clientHeight 获取元素的可见高度  属性都是不带px的，返回的都是数字，可以直接进行计算

    （2）element.offsetHeight 获取元素的整个宽度和高度，包括内容区、内边距和边框  返回的是数字无px
        element.offsetwidth

     (3) element.offsetParenet 获取元素的定位父元素 如果所有的祖先父元素都没开启定位，那么返回Body

     (4) element.offsetLeft  相对于定位父元素的左偏移量
         element.offsetTop   相对于定位父元素的上偏移量 
    
     （5） element.scrollHeight  父元素中子元素滚动区域的高度
          element.scrollWidth   父元素中子元素滚动与其的宽度
          element.scrollLeft   可以获得水平滚动条滚动的距离
          element.scrollTop    可以获得垂直滚动条滚动的距离

          scrollHeight - scrollTop == clientWidth  说明垂直滚动条滚动到低了
          scrollWidth - scrollLeft == clientWidth  说明水平滚动条到底了

BOM 浏览器对象模型，让我们可以用js来操作浏览器，BOM为我们提供了一组对象，完成浏览器操作。
包括：Window(代表浏览器窗口，也是网页中的全局对象)、Navigator（代表当前浏览器的信息，识别不同的浏览器）、Location（代表当前浏览器的地址栏信息，可以获取地址栏信息，操作浏览器跳转页面）、History(代表浏览器的历史记录。由于隐私的原因，该对象不能获取到具体的历史记录。只能前后翻页，而且该操作只在当次访问时有效)、Screen(可以获得用户的显示器相关信息)

    BOM这些对象都是在window里保存

Navigator  用于识别浏览器。由于历史原因，大部分参数已经不能帮助我们识别浏览器，用userAgent区别浏览器
    navigator.appname()
    navigator.userAgent()

History  操作浏览器向前向后翻页
    (1) History.back()  和回退按钮是一样的
    (2) History.forward()  可以跳转到下一个页面
    (3) go(int)  可以跳转到指定页面  1,2向前跳转1,2个页面   -1，-3向后跳转1,3个页面

Location  封装了地址栏信息
    直接打印location，打印地址栏信息
    Location.assign() 跳转到其他页面，和直接修改Location一样
    Location.reload() 刷新页面  如果传入True，清空缓存。
    Location.replace() 用新的页面替换当前页面，调用完毕也会跳转页面。不会生成历史记录

Window 浏览器窗口对象
   （1）window.setInterval() 如果希望一段程序，每间隔一段时间调用一次，可以使用定时调用，每间隔一段时间调用一
            参数：1.回调函数，每隔一段时间调用一次  2.间隔时间，毫秒单位
            返回一个Number值，用于区分定时器

        ClearInterval()  关闭定时器  参数


