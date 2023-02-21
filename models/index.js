const mongoose = require("mongoose");

// 用户列表
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  address: String,
  avatar: String,
  age: Number,
  sex: Number,
  isVip: Number,
  email: String,
});
// 用户菜单
const menuListSchema = new mongoose.Schema({
  path: String,
  name: String,
  component: String,
  meta: Object,
});
const User = mongoose.model("users", userSchema);
const Menu = mongoose.model("menus", menuListSchema);

module.exports = {
  User,
  Menu,
};
