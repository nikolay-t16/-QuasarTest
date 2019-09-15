const koaRouter = require('koa-router');
const product = require('./product');

const router = koaRouter();

router.use('/product', product.router.routes());

module.exports = router;
