const Router = require('koa-router');

const router = new Router({ prefix: '/api' });

// api可用性测试
router.get('/', (ctx) => {
  ctx.body = "GET IS OK";
})

router.post('/', (ctx) => {
  ctx.body = 'POST IS OK';
});

router.put('/', (ctx) => {
  ctx.body = 'PUT IS OK';
});

router.delete('/', (ctx) => {
  ctx.body = 'DELETE IS OK';
});

router.patch('/', (ctx) => {
  ctx.body = 'PATCH IS OK';
});

module.exports = router;