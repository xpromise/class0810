const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/testAjax', (req, res) => {
  console.log(req.query);
  res.send('这是服务器返回的响应11111~');
})

app.post('/testAjax', (req, res) => {
  console.log(req.body);  //{ name: 'sunwukong', age: '18' }
  res.send('这是服务器返回的响应~');
})

app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})