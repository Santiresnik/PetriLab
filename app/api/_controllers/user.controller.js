const userServices =require("../_services/user.service.js");

const getUsers = (req, res) => {
  userServices
    .getUsers()
    .then((result) => {
      return res.status(200).json({
        message: "Users retrieved successfully",
        data: result[0],
      });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

const getUser = (req, res) => {
  const { id } = req.params;
  userServices
    .getUser(id)
    .then((result) => {
      res.status(200).json({
        message: "User retrieved successfully",
        data: result[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const createUser = (req, res) => {
  const user = req.body;
  userServices
    .createUser(user)
    .then(() => {
      res.status(200).json({
        message: "User created successfully",
        data: user,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const updateUser = (req, res) => {
  const user = req.body;
  const { id } = req.params;
  userServices
    .updateUser(id, user)
    .then(() => {
      res.status(200).json({
        message: "User updated successfully",
        data: user,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  userServices
    .deleteUser(id)
    .then(() => {
      res.status(200).json({
        message: "User deleted successfully"
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
module.exports = {
  getUsers, getUser, createUser, updateUser, deleteUser
};