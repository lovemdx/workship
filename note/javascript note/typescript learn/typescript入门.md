Typescript
    问题：javascript天生类型不受规定，很自由。但是由于无编译，运行时才能看出问题，大项目难以维护
    解决：typescript，强制给变量约束类型
    实现：
        (1)给变量添加数据类型绑定
            function plus(a:number,b?:number){  ?代表参数可有可无，标注number可以用any代替
                return a*b
            }

            let arr = [number,number,number]  定义了元组

            let gender:'male' | 'female'   只能赋值这两个，枚举数据类型

            interface User{
                name:string;        实例对象只能有这俩属性
                id:number;
            }
        
        （2）function sayHi():void{     如果函数没有返回值，可以标注为void类型

            }



tsc
    问题：typescript无法直接运行
    解决：安装tsc，把typescript转译成javascript
    安装：npm i typescript -g
    转换：tsc xxx.ts，当前目录下生成


    VSCODE已经可以对语法自动报错

编译器属性
    1.是否必须强制每一个变量都打上标记
    2.能否让值为空值，不初始化

