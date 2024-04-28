import express from "express";

import { v2 as cloudinary } from "cloudinary";
import Multer from "multer";

const cloudinaryRouter = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
}
// eslint-disable-next-line new-cap
const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});

cloudinaryRouter.route("/upload")
  .post(upload.single("picture"), async (req, res) => {
    try {
      const { file } = req;
      const b64 = Buffer.from(file.buffer).toString("base64");
      const dataURI = `data:${file.mimetype};base64,${b64}`;
      const cldRes = await handleUpload(dataURI);
      res.json(cldRes);
    } catch (error) {
      console.log(error);
      res.send({
        message: error.message,
      });
    }
  });

export default cloudinaryRouter;
