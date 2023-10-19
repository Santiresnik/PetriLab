const express =require("express");

const {
    getUser,
    updateUser,
    deleteUser
} =require("../../_controllers/user.controller.js");
  
const usersRouter = express();

usersRouter.use(express.json());


usersRouter.get("/api/users/:id", getUser);

usersRouter.put("/api/users/:id", updateUser);

usersRouter.delete("/api/users/:id", deleteUser);

module.exports = usersRouter;