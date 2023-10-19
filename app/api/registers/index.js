const express =require("express");
const upload = require('express-fileupload')

const {createPhotoRegister} =require("../_controllers/photo.controller.js");

const registerRouter = express();

registerRouter.use(upload());

registerRouter.get("/api/registers", (req, res) =>{
    const HTML = '<form method="POST"action="/api/registers"enctype="multipart/form-data"><input type="file"name="file"/><input type="submit"value="Upload"/></form>'
    res.status(200).send(HTML)
})
registerRouter.post("/api/registers", createPhotoRegister);



module.exports = registerRouter;
