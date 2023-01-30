const express = require("express");
const Router = express.Router();
const {
  getUser,
  createUser,
  deleteUser,
  updateUser,
  getLinkByUser,
  createShort,
  getRedirectLink,
} = require("../Controller/Controller");

Router.get("/", getUser);
Router.post("/register", createUser);
Router.post("/short", createShort);
Router.delete("/:id", deleteUser);
Router.patch("/:id", updateUser);
Router.get("/:usernameId", getLinkByUser);
Router.get("/:shortlink", getRedirectLink);
module.exports = Router;
