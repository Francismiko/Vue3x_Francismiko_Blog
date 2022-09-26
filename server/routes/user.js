const router = require("express").Router();
const { User } = require('../model/user.js')

// 注册用户
router.post('/', (req, res, next) => {
  const user = new User({
    name: "fzc",
    password: "705432"
  })
  user.save((err) => {
    if (err) {
      return console.error(err);
    }
    console.log("注册成功");
  })
  res.send('注册')
})

router.get("/", async (req, res, next) => {
  const data = await User.find()
  res.send(data)
})

router.get("/", (req, res, next) => {
  res.send('获取用户列表')
})

router.get("/:id", (req, res, next) => {
  res.send('获取单个用户')
})

router.put("/:id", (req, res, next) => {
  res.send('编辑用户')
})

router.delete("/:id", (req, res, next) => {
  res.send('删除用户')
})

module.exports = router