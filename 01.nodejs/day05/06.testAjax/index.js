const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/testAjax', (req, res) => {
  res.send('9527');
})

app.listen(3000, err => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})