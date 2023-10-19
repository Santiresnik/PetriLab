const createRegister =require("../_services/photo.service.js");
const cloudinary = require("cloudinary").v2;
const createPhotoRegister = async (req, res) => {
    const File = req.files.file
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });
    const result = await cloudinary.uploader.upload(File.data, {
        resource_type: "auto",
    });
    res.send(result);
    
        






    // createRegister(register)
    //   .then(() => {
    //     res.status(200).json({
    //       message: "Register created successfully",
    //       data: register,
    //     });
    //   })
    //   .catch((err) => {
    //     res.status(500).send(err);
    //   });
  };
  module.exports = {
    createPhotoRegister
  };