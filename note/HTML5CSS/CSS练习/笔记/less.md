Less：
    概念：Less是一门css的预处理语言，可以通过less用更少的代码，实现更强大的样式。
        -Less语法上和css基本一致，增加了许多css的扩展。浏览器无法直接执行less，必须要把less转化为css，然后再浏览器执行

    计算：calc(200px*|/|+|-)  计算函数

    问题：好多颜色、参数反复使用，该要一起改，怎么抽象出一个变量？怎么在css中使用函数？
    解决：原生css支持变量的新特性 --color:green; --length:200px
                        background-color:var(--color)
         calc(200px*|/|+|-)  计算函数，可以用来计算
         -问题：兼容性很差，怎么办？写上就废
         -解决：用less，编译后兼容性好。以写脚本的方式写css

    问题：css写的东西没有层次感，很痛苦
    解决：less可以按照缩进结构去写东西

    1.变量
        @[key]:[value];  用 @[varname]
        @[name]:[classname]; 用 .@{name}  
        @[name]:[url]

        举例：@a:200px;@b:rgb(20,20,20)
            div{
                width:@a;
              }
             
             @url:./staticresouce/key/asjdkasjd/asjdkasjd
             div{
                background-img:url('@{url}/a.html')   作为值的一部分用
             }

        问题：变量重名怎么办？
        解决：后面覆盖前面的，里面的优先用，在用外面的，和编程一样。如果先用后声明也可以

        问题：想在css直接进行运算怎么办？
        解决：width:100px+100px

    2.父元素选择器
        问题：原生css只能选择子类和兄弟，父类选择器不行，咋办？
        解决：用&代表父类选择器
        举例：
            .box1{
                .box2{
                    &-bottom{   代表.box2-bottom

                    }
                }
                &:hover{    //给父类添加属性

                }
            }

    3.继承扩展
        问题：原生css写出来的样式有大量重复，且同样属性要写好多遍
        解决：用extend继承后再写，对当前选择器宽展指定选择器样式
        举例：.box2:extend(.box1){
                color:red;
             }

             .box2{
                .box2();   mixin,直接引用
             }

    4.混合函数
        问题：一个参数结构很多元素要用，而且要变的，怎么办？
        解决：混合函数，创建构造函数，然后创建
            .test(@w:100px,@h:100px,@c:red){   //如果有：，就有默认值了，构建的时候可以不传参
                width:@w;
                height:@h;
                color:@c;
            }
            .box1{
                .test(200px,300px,#606060); //要按顺序传参，不按顺序得加上名字：如@w:300px
            }

        问题：有的时候要用一些数学函数，怎么办？
        解决：有预设的混合函数

    5.引入
        问题：如果Less中想引入其他less
        解决：@import "[name].less"  可以把less组合成一个。可以形成模块化维护

    6.其他
        问题：css报错，怎么定位Less?
        解决：可以配置json的配置文件