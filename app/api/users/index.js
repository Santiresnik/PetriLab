const express = require("express");
const {
  getUsers,
  createUser,
} = require("../_controllers/user.controller.js");

const userRouter = express.Router();

userRouter.use(express.json());

// Define routes using the .route() method
userRouter.route("/api/users")
  .get(getUsers)
  .post(createUser);

module.exports = userRouter;
