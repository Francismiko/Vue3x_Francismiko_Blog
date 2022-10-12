module.exports = {
  app: {
    port: process.env.PORT || 3000,
  },

  //数据库配置
  db: {
    url: process.env.MONGODB_URL || "mongodb://localhost:27017/Francismiko_Blog",
  }
}