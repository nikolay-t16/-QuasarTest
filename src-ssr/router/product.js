const koaRouter = require('koa-router');
const productList = require('../controller/product/GetProductList');

const router = koaRouter();

router.get('/get_list', async (ctx) => {
  ctx.response.body = await productList(ctx);
});

module.exports.router = router;
