HTTP原理
HTTP是什么：浏览器和服务器之间互相通信的规则、协议。全名超文本传输协议。

## 请求报文结构
请求行 GET / s?te=utf-8 HTTP/1.1 
请求头  
        accept 通知服务器，浏览器可以接受的文件类型
        accept-Encoding 通知服务器浏览器接受的编码方式
        accept-language 通知服务器浏览器接受的人类语言
        Connetion 保持连接
                http有俩版本，1.0 1.1 两者的区别：1.0发送请求就中断连接 1.1发出请求保持连接。同样的请求复用连接
        Host；要访问的主机名称
        User-agent:浏览器信息
       Cookies:name=guigu   浏览器存储的缓存信息
       Content-type:浏览器所发出的内容类型
        
请求空行
请求体      username=admin&password=admin


## 响应报文结构
响应行   HTTP/1.1  200 OK
响应头   Content-type:text/html;charset=utf-8
        Content-length:2048
        Content-encoding:gzip

空行
响应体  <html>
            innerHTML
        </html>
