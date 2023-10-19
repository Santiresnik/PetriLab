const mysql =require("mysql2");
const dotenv =require("dotenv");
dotenv.config();

const db = mysql.createConnection(process.env.DATABASE_URL).promise()

db.connect()
  .then(() => {
    console.log("conected to database");
}).catch((err) => {
  console.log("Error: ", err)
})



const getUsers = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * from users";

    db.execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * from users WHERE id = ?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

const createUser = (user) => {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO users (name, contra, email) VALUES (?, ?, ?)";

    const { name, contra, email } = user;

    db.execute(query, [name, contra, email])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

const updateUser = (id, user) => {
  return new Promise((resolve, reject) => {
    const query =
      "UPDATE users SET name = ?, contra = ?, email = ? WHERE id = ?";

    const { name, contra, email } = user;

    db.execute(query, [name, contra, email, id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    const query =
      "DELETE from users WHERE id = ?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

module.exports = {
  getUsers, getUser, createUser, updateUser, deleteUser
};