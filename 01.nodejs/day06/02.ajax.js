const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/testAjax', (req, res) => {
  console.log(req.query); // { username: 'sunwukong' }
  res.send('这是服务器返回的响应11111~');
})

app.post('/testAjax', (req, res) => {
  console.log(req.body);  //{ name: 'sunwukong', age: '18' }
  res.send('这是服务器返回的响应~');
})

app.get('/testJSONP', (req, res) => {
  const {callback} = req.query;
  
  const data = [{name: 'jack', age: 18}, {name: 'rose', age: 16}];
  
  console.log(callback + '(' + JSON.stringify(data) + ')');
  // getData([{name: 'jack', age: 18}, {name: 'rose', age: 16}])
  
  res.end(callback + '(' + JSON.stringify(data) + ')');
})

app.get('/testCORS', (req, res) => {
  // res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Origin', 'http://localhost:63342');
  const data = [{name: 'jack', age: 18}, {name: 'rose', age: 16}];
  res.json(data);
})

app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})