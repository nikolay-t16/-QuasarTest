const Koa = require('koa');
const router = require('./router/router');

const app = new Koa();

app.use(router.routes());
app
  .use((ctx) => {
    ctx.body = 'KOA API!';
  })
  .listen(3001);
