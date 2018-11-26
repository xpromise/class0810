const MyKoa = require('./src/application');

const app = new MyKoa();

app.use((ctx, next) => {
  console.log(111);
  next();
})
app.use((ctx, next) => {
  console.log(222);
  next();
})
app.use((ctx, next) => {
  // res.end('12345678911111');
  console.log(333);
  ctx.body = 'xxxxx';
})

app.listen(3000);