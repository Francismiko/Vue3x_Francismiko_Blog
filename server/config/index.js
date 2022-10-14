const dotenv = require('dotenv');
const env = process.env;

dotenv.config();

// 后端服务端口
const app = {
  port: env.PORT || 3000,
}

//数据库配置
const db = {
  url: env.MONGODB_URL + env.TABLE_NAME || "mongodb://localhost:27017",
}

module.exports = {
  app,
  db
}