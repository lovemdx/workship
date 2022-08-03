Nodejs的组成
    1.natives module
        Natives module
        当前层内容由JS实现
        提供应用程序可直接调用库，例如fs，path，http等
        JS语言无法直接操作底层硬件设置
    2.builtin modules
        Builtin modules"胶水层"    
        问题：js有的只是调用接口，底层的交互是C或者C++，这一层帮忙找到对应的C++开发的功能
    3.v8引擎 libuv c-ares httpparser zlib ...
    最下层：V8和一些具体的功能模块
        V8：相当于虚拟机，执行JS代码，提供桥梁接口（调用C与C++转换）
    Libuv：事件循环、事件队列、异步IO

    4.CPU RAM DISK OS

    1.ESCMScript
    2.node API

