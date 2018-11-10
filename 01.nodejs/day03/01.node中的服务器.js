//引入http模块
const {createServer} = require('http');
//引入querystring模块
const {parse} = require('querystring');

//创建服务, 用来接收请求，处理请求，返回响应
const server = createServer((request, response) => {
  /*
  request 请求对象
  response 响应对象
   */
  /*
  ?username=123&password=123  请求参数（查询字符串）：  ?key=value&key=value&key=value
   */
  //接收请求参数
  console.log(request.url);  // /?username=123&password=123
  const str = request.url.split('?')[1];
  const qs = parse(str);  // { username: '123', password: '123' }
  console.log(qs);
  //设置响应头
  response.setHeader('content-type', 'text/html;charset=utf-8');
  //返回响应
  response.end('<h1>这是node原生服务器返回的响应</h1>');
})

//监听端口号  访问http://localhost:3000
server.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})
