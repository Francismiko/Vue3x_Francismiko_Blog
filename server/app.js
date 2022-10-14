const Koa = require('koa');
const Router = require('koa-router'); // 路由
const cors = require("koa2-cors");// cors跨域
const static = require("koa-static");// 处理静态文件
const logger = require('koa-logger');// 日志打印
const routes = require("./routes");
require("./config");
require("./model");

const app = new Koa();
const router = new Router();

// 挂载二级路由
router.use(routes.routes());

app.use(cors());
app.use(logger());
app.use(router.routes());

app.listen(app.port, () => {
    console.log(`Running on http://localhost:${app.port}`);
});