const { Menu } = require("../models");
const crudUtils = require("./crudUtils");
const getMenus = async (ctx) => {
  await crudUtils.find(Menu, null, ctx);
};

module.exports = {
  getMenus,
};
