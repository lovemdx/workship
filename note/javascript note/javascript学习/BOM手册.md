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