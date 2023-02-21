const { User } = require("../models");
const crudUtils = require("./crudUtils");
const getAllUsers = async (ctx) => {
  await crudUtils.find(User, null, ctx);
};

const EditUser = async (ctx) => {
  let body = ctx.request.body;
  await User.updateOne(
    {
      _id: body._id,
    },
    {
      username: body.username,
      _id: body._id,
      password: body.password,
      email: body.email,
      isVip: body.isVip,
      address: body.address,
      avatar: body.avatar,
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
};
module.exports = {
  getAllUsers,
  EditUser,
};
