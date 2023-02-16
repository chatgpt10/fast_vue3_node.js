const router = require("koa-router")();
const { User } = require("../models");
router.prefix("/users");

// 查询所有用户
router.get("/list", async (ctx) => {
  await User.find()
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

// 用户信息修改
router.post("/update", async (ctx) => {
  let { _id, username, pwd } = ctx.request.body;
  await User.updateOne(
    {
      _id: _id,
    },
    {
      username: username,
      pwd: pwd,
    }
  )
    .then((res) => {
      if (res) {
        ctx.body = {
          code: 200,
          msg: "修改成功",
          data: res,
        };
      } else {
        ctx.body = {
          code: 400,
          msg: "修改失败",
        };
      }
    })
    .catch((error) => {
      console.error("修改出现异常", error);
    });
});

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
module.exports = router;
