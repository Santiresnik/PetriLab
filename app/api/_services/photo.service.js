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

const createRegister = (register) => {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO registers (email, number, img, text) VALUES (?, ?, ?, ?)";
  
      const { email, number, img, text } = register;
  
      db.execute(query, [email, number, img, text])
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };

module.exports = createRegister;
