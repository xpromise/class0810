## session
* 会话：当浏览器第一次访问服务器时，会开启此次会话，当结束访问时，会结束此次会话
* session 会话储存，会话开始时产生，会话结束销毁
* 使用场景
  * 当浏览器第一次访问服务器时，服务器内部会生成一个session对象来保存此次会话通信产生的临时数据，
  * 当服务器返回响应给浏览器时，会返回一个cookie（里面包含着session_id）
  * 当浏览器下一次访问时，服务器通过解析cookie中的session_id，就能找到对应的session对象，从而找到对应的数据返回给用户
* 应用
  * 7天免登陆  
* cookie和session的区别
  * 储存位置
    * cookie保存在浏览器中
    * session保存在服务器中
  * 大小容量
    * cookie 4kb 20个
    * session 理论上没有限制
  * 传输流量
    * cookie每次请求时都会自动携带上，cookie越多，流量越大
    * session只会产生一个cookie，所有数据都在服务器端，流量相对较小  
* webStorage    
  * 浏览器本地离线存储方案
  * 7天免登陆
    