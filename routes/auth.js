const router = require("koa-router")();
const ctlAuth = require("../controller/auth");

// 查询用户菜单
router.get("/menus", ctlAuth.getMenus);
module.exports = router;
