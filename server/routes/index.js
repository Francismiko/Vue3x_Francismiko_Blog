const Router = require('koa-router');

const router = new Router();

// api可用性测试
router.get('/', (ctx) => {
  ctx.body = "GET IS OK";
})

router.post('/', (ctx) => {
  ctx.body = 'POST IS OK';
});

router.put('/', (ctx) => {
  return ctx.body = 'PUT IS OK';
});

router.delete('/', (ctx) => {
  return ctx.body = 'DELETE IS OK';
});

router.patch('/', (ctx) => {
  return ctx.body = 'PATCH IS OK';
});

module.exports = router;