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