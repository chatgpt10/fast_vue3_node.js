const find = (model, params, ctx) =>
  model
    .find()
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

module.exports = {
  find,
};
