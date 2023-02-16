const router = require("koa-router")();
const { User } = require("../models");
router.prefix("/users");

// 添加用户
router.post("/add", async (ctx) => {
  let { username, pwd } = ctx.request.body;
  console.log("username", ctx.request);
  await User.create({
    username,
    pwd,
  })
    .then((res) => {
      if (res) {
        ctx.body = {
          code: 200,
          msg: "添加成功",
          data: res,
        };
      } else {
        ctx.body = {
          code: 400,
          msg: "添加失败",
        };
      }
    })
    .catch((error) => {
      console.error("添加出现异常", error);
    });
});

module.exports = router;
