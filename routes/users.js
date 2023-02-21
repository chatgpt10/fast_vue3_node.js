const router = require("koa-router")();
const ctlUser = require("../controller/user");
const { User } = require("../models");
// 查询所有用户
router.get("/list", ctlUser.getAllUsers);
// 查询用户
router.get("/user/:id", async (ctx) => {
  let { id } = ctx.params;
  await User.findOne({ _id: id })
    .then((res) => {
      if (res) {
        ctx.body = {
          code: 200,
          msg: "查询成功",
          data: res,
        };
      } else {
        ctx.body = {
          code: 400,
          msg: "查询失败",
        };
      }
    })
    .catch((error) => {
      console.error("查询出现异常", error);
    });
});
// 添加用户
router.post("/add", async (ctx) => {
  let { username, password, email, isVip, address, avatar } = ctx.request.body;
  await User.create({
    username,
    password,
    email,
    isVip,
    address,
    avatar,
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

// 用户信息修改
router.post("/update", ctlUser.EditUser);

// 删除用户
router.delete("/del", async (ctx) => {
  let { _id } = ctx.request.body;
  await User.findOneAndDelete({
    _id: _id,
  })
    .then((res) => {
      if (res) {
        ctx.body = {
          code: 200,
          msg: "删除成功",
          data: res,
        };
      } else {
        ctx.body = {
          code: 400,
          msg: "删除失败",
        };
      }
    })
    .catch((error) => {
      console.error("删除出现异常", error);
    });
});

//------ 模拟登录测试--------
router.post("/login", async (ctx) => {
  let { username } = ctx.request.body;
  await User.findOne({ username: username })
    .then((res) => {
      if (res) {
        ctx.body = {
          code: 200,
          msg: "登录成功",
          data: res,
        };
      } else {
        ctx.body = {
          code: 400,
          msg: "登录失败,用户名不正确！",
          data: res,
        };
      }
    })
    .catch((error) => {
      console.error("登录出现异常", error);
    });
});

module.exports = router;
