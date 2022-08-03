静态资源存放
    网页的静态资源存放，可以放在云上，不要放在服务器上，节省扩充服务器的成本和带宽成本。

浏览器默认样式


CSS :
    问题：Html就是堆叠页面的，很不好看；html属性不全面；html标签属性繁多，复杂，耦合性大
    解决：CSS是修饰页面的，让页面好看；让样式和元素分离，降低了代码的耦合

字符集：ASCII：美国标准码 用7位表示
        ISO88591：欧洲用的标准码
        GB2312、GBK 中国用德
        UFT-8 万国码 全世界范围内就能用   开发时用的UTF-8
        <meta charset = 'utf-8'/>


CSS的三种书写方法：
    1.内联样式：在标签中加入style属性，CSS样式作为属性值。
        举例：<h1 style="color:pink;font-family:'宋体';'>随便什么</h1>
    2.内部样式：在head标签中加入一个style标签
        缺点：无法实现多页面的复用

    3.外部样式：另外做一个.css文件，然后link进文本文档
        问题：如果一套页面，多个主题。可以把多个样式设计做到分离的效果
        优点：可以使用浏览器的缓存机制，提高用户体验

    问题：当三个样式同时操作一个元素，用哪个？
    解决：就近原则，内联样式<内部样式<外部样式

    注意：写css要注意层次关系

样式：属性：属性值
    （1）样式的继承：
        定义：为一个元素设置的样式同时会应用到它的后代元素上。但是不是所有样式都会继承，背景、布局相关的不继承。

    （2）长度单位：
        问题：怎么设置元素的大小？
        解决：1.像素：px
                屏幕（显示器是一个个小点点组成的）。不同屏幕的像素大小不同，像素越小越清晰
                所以同样200px在不同设备下显示不一样
             2.百分比：将属性值设置为相对于其父元素属性的百分比
                优点：可以随着父元素尺寸的变化改变
             3.em:相对于元素的字体大小计算，1em=1font-size 跟随字体大小改变而改变
             4.rem:相对于根元素的字体大小来计算，即html的字体大小

    （3）颜色单位：
        问题：怎么精准设置颜色？
        解决：1.用颜色名来设置各种颜色   background-color=red;
             2.rgb|rgba  用红绿蓝三原色设置颜色 0-1表示透明程度，0完全透明  background-color=rgb(255,0,0,0.5)
             3.HSL值 工业设计比较多，用的不多  色相饱和度亮度调整



选择器：
    问题：css如何定位html上的元素？
    解决：选择器
    注意：也就是说，css要学的，就是选择器+属性

    内容：
    1.基本选择器
         (0)通配选择器
            *{

            }
        （1）元素选择器
            h1{

            }
        (2) 类选择器 各种类型的样式用相同的
            .mycalss{

            }
        (3) ID选择器 指定ID的元素的样式 一般会人为控制，让id唯一定位到元素
            #myid{

            }

        优先级：id > class > element

    2.关系选择器
        （1）后代选择器 只要是这个元素的后代，样式都会发生变化
            div hi{

            }
        
         (2)子代选择器 这个元素的子代，样式发生变化
            div > h1{

           }
        
         (3)兄弟选择器   后一个兄弟元素
            1.择下一个兄弟  
            p + span{    选择p后面的span

            }
            2.选择下面所有兄弟
            p~span{

            }
        
    3.属性选择器  用的少一些
        （1）属性选择器
            input[type='password']{    把type=password的input组件变为指定样式

            }
            p[属性名]选择含有指定属性的元素
            p[属性名=属性值]选择含有指定属性和值的元素
            p[属性名^=属性值]选择属性以指定值开头的元素
            p[属性名$=属性值]选择属性以指定值结尾的元素
            p[属性名*=属性值]选择属性中含有某值的元素
    
    4.复合选择器
        （1）交集选择器  两个选择条件同时达成
            div.red{

            }
            注意：如果里面有元素，以元素开头

        （2）并集选择器 选中多个选择器
            div,.red,body{

            }


    5.伪类选择器  
        定义：伪类用来描述一个元素的特殊状态：如第一个子元素、被点击的元素、鼠标移入的元素
        （1）举例：h1:hover|active|focus   |visited|linked{

                  }
            :first :lastchild :nthchild()特殊值：n 2n 2n+1 even odd
            :first-of-type  :last-of-type :nth-of-type()
            :not(:nth-of-type()) 将符合条件的元素从选择器去除
            :disabled 不能被激活、选择的元素，一般在Input，select的option和button元素中

    
    6.伪元素选择器
        定义：表示页面中一些特殊的并不真实存在的元素（特殊的位置）
        （1）h1::first-letter{   h1中的第一个字母

            }
            ::firstline 第一行
            ::selection 表示选中的内容
            ::before 表示元素的开始
            ::after 表示元素的结束    必须结合content使用


布局
    文档流：
        网页是多层结构，一层落着一层，用css可以设置每一层设置。这些层中，最底下的一层就是文档流，元素默认在文档流中排列。对于我们来说，元素主要有两个状态：在文档流中与不在文档流中。

    当在文档流中：
        块元素与行内元素：
            块元素： 如Div
                块元素会在网络独占一行，无论你有多宽
                默认宽度把父元素撑满，默认高度被内容撑开
                在网页中一般通过块元素布局

        行内元素：
            行内元素只占自身大小，水平排列。如果一行容纳不下，就换到第二行。
            默认宽度和高度都被内容撑开
            一般情况下块元素内放行内元素，行内元素不放块元素，p元素内不放块元素
    注意：如果不在文档流中，性质会发生变化

    盒子模型：
        (1)块元素盒模型
            用一组属性于布局
            内容区(content):
                问题：width和height是盒子模型的哪个部分？
                解决：内容区，外面padding，外面边框，外面margin
                所有的子元素在内容中排列
            内边距(padding):
                padding-xxxx

                背景颜色会延伸到内边距上
        
            边框(border):
                至少设置三个：
                    border-width:  默认3px  可以设置四、三、二个值，代表上右下左，上 左右 下，上下 左右
                    border-color:  可以设置 四三二一个值，和width一样 设置四边的颜色
                    border-style:solid 实线  dotted 点状虚线 dashed虚线 double双线

                    或者：
                    border solid 10px orange  简写属性  transparent 透明
                    或者border-XXX
                边框的大小影响到整个盒子的大小
            注意：盒子的大小，内容+padding+border
            轮廓：outline 和border一样 优点是不会影响可见框的大小


            外边距(margin):
                -外边距不影响盒子的大小，但会影响盒子的位置
                -属性：marigin-xxx
                    top.left挤自己
                    right.bottom挤别人
                -相邻的、垂直方向的外边距会发生重叠现象。
                    兄弟元素：相邻垂直外边距会取较大值
                            特殊情况：一正一负，取两者的和
                                     两个都是负，取绝对值较大的
                    父子元素：父子元素间相邻上边距，子元素会传递给父元素。这种折叠，必须要处理。
                            处理方法：一般用position:absolute，也可以用::before{content:'';display:table}
                -outline属性可用于增加外轮廓
            
            其他：
                border-box:content-box 宽度和高度设置内容区的大小  默认
                            border-box  内容区、内边距、边框的总大小

                box-shadow：10px 10px 20px black;第一、二像素代表从left、top的偏移量 第三个代表模糊度 第四个代表颜色 用来设置元素的阴影效果，不会影响布局

                border-radius:设置盒子圆角
                border-xxx：(top-left)分别代表四个方向。设置50%变成圆形
            
            

        (2)行内元素的盒模型
            -行内元素不支持设置宽度和高度。可以设置padding、border、margin，但是不会影响页面的布局
            -问题：行内元素怎么设置宽高？
             解决：display 用来设置元素显示的类型 inline 设置为行内元素 block改为块元素 none元素不在页面中显示 inlien-block 既设置宽度又设置高度，又不会独占一行。但是要注意：能不用避免用，空格坑人， 
            -注意：visibility:visible默认 用来表示元素的显示状态 hidden隐藏不显示。display:none和hidden的区别是：hidden占着位置藏着。


        (3)水平布局与垂直布局
            水平布局
                -块元素在父元素的水平布局由margin border padding width - left right共同决定。如果宽度撑不满一行，又没Auto，自动增加margin-right。如果里面width，margin-left|right设置为auto，则自动设置auto的值
                -如果一个宽度和width设置auto，把宽度设置到最大
                -如果两个宽度和width设置auto，把宽度设置到最大
            垂直布局
                -父元素被子元素撑开
                -如果设置父元素固定高度，子元素高度大于父元素，子元素超过父元素 从父元素内容区溢出
                -在父元素上设置如何对待子元素 
                    overflow：visible 默认溢出 hidden溢出部分看不见 scroll生成滚动条 auto根据情况生成滚动条
                    overflow-x|y 

    浮动
        问题：解决一些水平方面的布局

        概念：
            （1）解释：控制元素相对父元素向左、向右浮动。
                    默认不从父元素移出。
                    使得元素脱离文档流。而且元素变成行内块元素。
                    浮动元素向左、向右时，不会超过其他浮动元素

        float:none 默认 
              left left设置完了后，没有块元素的补margin-right，水平布局等式不必强制成立
              right   

        特点：1.浮动元素不会盖住文字，文字自动环绕在浮动元素周围<p>
            2.块元素变化：不会独占一行了，脱离文档流后，变为inline-block
            3.行内元素变化：脱离文档流后，变为inline-block 

        缺点:
            1.高度塌陷:如果内部元素全是浮动，脱离文档流了，就无法撑开父元素，导致页面混乱
                解决方法1：父元素高度写死（不推荐）
                
                解决方法2：BFC:块级格式化环境。BFC是CSS中的一个隐含的属性。可以为一个元素开启BFC，开启后，该元素会变成一个独立的布局区域，和其他块不同。
                -元素开启BFC后的特点：1.开启BFC的元素不会被浮动元素覆盖 2.开启BFC的元素子元素和父元素的外边距不会重叠。 3.开启BFC的元素可以包含浮动的子元素
                -无法直接开启BFC，可以通过特殊的方式开启BFC
                    1.设置父元素的浮动  缺点是宽度丢了 不推荐
                    2.inline-block给父元素  缺点是宽度丢了  不推荐
                    3.元素的overflow设置为非visble的值 最好是hidden  推荐 开启BFC包含浮动元素
                    4.clear：left|right|both 清除左侧/右侧浮动元素对当前元素的影响 原理: 设置清除浮动后，浏览器自动增加一个上外边距margin-top
                -5.高度塌陷的最终解决方案：.box1::after{clear:both；display:block}  ::after是行内元素  用一个块元素解决高度塌陷问题
                -6同时解决高度塌陷和外边距重叠：
                    .clearfix::before,.clear::after{content:'',display:table;clear:both}
        元素层级：
            问题：当浮动、定位时，如果决定谁遮盖谁？
                1.对于开启定位的元素，可以通过z-index属性指定元素的层级
                    z-index需要一个整数作为参数，值越大的元素层级越高，层级高的优先显示。如果层级一样，优先显示靠下的元素。
                2.相对、绝对定位等定位层级一样。
                3.祖先元素永远盖不住子元素

        
    定位：一种更高级的布局手段
        1.静态定位  static 原来的地方，在文件流
        2.相对定位  relative 原来的地方偏移，在文件流
            问题：把块元素摆放到任意位置，如果用margin会干扰文档流，要改所有的元素
            解决:相对定位，参照文档流中进行定位，在文档流
                -要设置偏移量offset   {position:relative;left:200px;top:-200px}
                相对定位会提升元素的层级，是超过浮动的；
                相对定位不会改变元素的性质是块还是行内
        3.绝对定位  absolute 按照有定位的上一级定位，不在文件流
            特点：1.开启绝对定位后，如果不设置偏移量的位置不会发生变化
                 2.开启绝对定位后，会从文档流中脱离
                 3.绝对定位会改变元素的性质，行内变成块，块的宽高被内容撑开
                 4.绝对定位会提升元素的层级
                 5.绝对定位相对于其包含块进行定位
                    -包含块：包含块就是离当前元素最近的祖先块元素。
                    也就是说，决定定位就是离他最近的开启了定位的祖先元素

            绝对定位元素的布局：原来用margin
                -水平、垂直方向布局的9属性等式必须要满足，利用这个等式，可以完成很多厉害的布局，如垂直居中

        4.固定定位  fixed 按照页面位置定位,是一种特殊的绝对定位
            特点：1.固定定位也是一种绝对定位，固定定位的大部分特点都与绝对定位一样
                 2. 开启固定定位，从文档流内脱离
                 3.绝对定位会改变元素的性质，行内变成块，块的宽高被内容撑开
                 4.绝对定位会提升元素的层级
                 5.固定定位永远参照浏览器的视口定位
        5.粘滞定位 sticky 
            特点：粘滞定位可以在元素达到某个位置时固定   兼容性不好

字体：
    1.字体相关样式：
        color:颜色
        font-size:字体大小
        font-family:字体家族  可选值：serif衬线字体  sans-serif非衬线字体 monspace等宽字体 每个字体的宽度是一样的。具体用什么字体浏览器自己决定   :'Courier New',Courier,moonspace;  同时指定多个字体，多个字体间用逗号隔开，优先使用第一个。一般指定比较常见的
        line-height:文字占有的实际高度。可以指定一个大小，px，数字（倍数）。行高会在字体框上下分配。可以设定行间距。
        text-align:left|right|center|justify(两端对齐)  文本对其方式
            给块元素设计，作用于子元素
        vertical-align:baseline(基线对齐)|top|buttom|middle
        text-decoration:none|underline(下划线)|line-through(上划线)|overline
        white-space:设置网页如何处理空白 normal|nowrap(不换行)|pre保留空白
        text-overflow:ellipist|clip  文字超出block的部分要不要变成省略号
            -white-space:nowrap;   需要这俩的支持
            overflow: hidden;


        -简写形式：font:normal noraml 50px/2 微软雅黑，'Time new roman',times,serif;
            -font-weight：bold normal 100-900九个级别 设置字重，也就是加粗之类
            -font-style:normal italic 正常的/斜体
            -50px/2 字体大小/行高(line-height) 行高可以省略不写，默认设置为1.33

    2.把字体放在服务器上让用户使用
    @font-face{    可以将服务器的字体直接提供给用户使用
        font-family:'';  指定字体的名字 
        src:url(''); 服务器中字体的路径 
    }
    问题：1.加载速度  2.版权 

    3.图标字体
        问题：非矢量图放大太多会失真，而且很大，不灵活
        解决：将图标设置为字体。字体不会失真、可以随便切换颜色、字体文件比较小
            通过font-face的方式引入。这样可以通过使用字体的方式使用图标了 
        图标库：
            fontawesome:使用方法
                1.下载
                2.解压
                3.css和webfont放在同一个目录下
                4.将all.css引入到网页中
                5.使用图标字体：直接通过类名使用图标字体
            <i class='fas fa-bell' style='font-size:50px;color:green'></i>

            -通过伪元素设置图表字体：
                1.找到目标和元素::before|after
                li::before{
                    content:'\f368';
                    font-family:'Font Awesome 5 Brands';
                    font-weight:900
                }
                2.在content中设置字体编码
                3.设置字体的样式

            -也可以通过实体来使用图标字体
            注意：国内字体库平台

        iconfont:阿里图标库，很灵活
            -可以选择自己喜欢的字体，然后用上面的形式引入

背景
    属性：
        background-color:颜色
        background-image:url('')  
            -如果元素大于背景，将有一部分背景无法显示
            -如果元素小于背景，将重复后平铺
        background-repeat:repeat(default)|repeat-x|repeat-y|no-repeat|
        background-position:top left right bottom center  
            -相当于九宫格，可以摆在任意位置
            -使用时应该用两个方位词，不然第二个默认center
        background-position:10px 10px   改变background的偏移量
        background-clip:背景的范围border-box(default 边框也算背景)|padding-box|content-box|
        background-origin:背景图片的偏移量计算的原点border-box(default 边框也算背景)|padding-box|content-box|
        background-size:200px|% 100px(一个值只设置宽度，高度自动|两个值则定死宽高)|cover 元素比例不变，将元素铺满，部分溢出|contain 图片比例不变，图片在元素铺满
        background-attachment:scroll(default 背景图片跟随元素移动)|fixed 背景固定在页面中，不随元素移动
            -注意：overflow：scroll 拖动滚动条 背景不变

        线性渐变：可以设置一些复杂的背景颜色。渐变是图片，具有图片的性质
            background-imgae:linear-greadient(to right|45deg(角度),red,yellow) 线性渐变，沿着一条直线发生变化|
                -（to right,red,yellow,green,blue）
        径向渐变：360度放射效果
            background-imgae:radial-greadient(100px,100px,red,yellow)

        简写：background:green url() center center no-repeat;把所有的值都放在里面，而且没有顺序要求


        雪碧图：
            问题：如果一个图片来回切换，由于是外部资源，会有空白闪烁
            解决：雪碧图，一次性把所有的图都加载出来。而且节省加载次数。
                -怎么切换？用background-position 应用十分广泛

            使用步骤：
                1.确定要使用的图标，衡量图标大小
                2.测量图标的大小
                3.根据测量结果创建元素
                4.将雪碧图设置为元素的背景图片
                4.设置偏移量显示正确的图片

动画
    1.转变（过渡）：
        问题：如果css样式发生切换，怎么让它切换的平滑
        解决：
            1.总的写法：transition:all 2s 
            2.trainsition-property:all|width|height   你要对哪些属性执行过渡效果 大多数可以过渡，只要是值
            3.trainsition-duration:1s|1000ms   你切换花费的时间
            4.trainsition-timing-function：ease(平滑)|linear(匀速运动)|ease-in(加速运动)|ease-out(减速运动)|cubic-bezier(.24,.95,.82,-0.88)(贝塞尔曲线)|step(num)分步走，看走几步   动画切换的时序函数
            5.transition-delay:2s  过渡的延迟，等待一段时间再执行过渡
            6.变形
                问题：给Box1变形，不会影响box2。怎么不改变布局？过渡、动画会改变布局
                    居中方式，只适合box固定大小，inline|block-inline怎么办？
                解决：
                    1.transform:translateX|Y|Z() 沿着X,Y,Z轴平移  px|50%(相对于自身宽高)
                        -鼠标放上去浮出怎么解决？
                            transfrom:translateY(-4px);
                            transfrom-duration:1000ms
                            box-shadow:0 0 10px black
                        -translateZ() 必须html设置视距：perspective:800px开启3D透视效果 效果就是变大变小
            7.旋转：transform:rotateX|Y|Z(45deg)  以X Y Z轴旋转
            8.缩放：transform:scale |X|Y|Z (.2) 全、X、Y尺寸缩放
                    -应用：鼠标移动上去缩放

    2.动画：
        问题：过渡是一个交互效果，只有触发才动。希望自己动的情况下用
        解决：设置动画，必须要有关键帧，设置了动画执行的每一个步骤
            @keyframes test{
                 from{
                    margin-left:100%
                }     //表示动画的结束位置
                25%{

                }
                50%{

                }
                to{
                    margin-left:0%
                }       //表示动画的开始位置
            }
            元素中加入：
                animation-name:test;
                animation-duration:2s
                animation-delay:2s
                    .......很多属性和过渡一样
                animation-iteration-count:20|infinite 动画重复执行的次数
                animation-direction:normal(从from 到 to执行)|reverse(从to向from运行)|alternate(from->to.to->from)|alternate-reverse(to->from.from->to)
                animation-play-state:running|paused 动画暂停
                animation-fill-mode:none(动画执行完回到那里)|forwards(到to的位置)|backwaeds(到from的位置) 动画的填充模式 
            
            关键帧：在动画里面加入25%,50%

补充
    1.list-of-style可修改ol ul前面是否有小点
        -ul ol的color可修改样式





        



