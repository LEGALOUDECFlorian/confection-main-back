import express from "express";
import dotenv from "dotenv";

// import { v2 as cloudinary } from "cloudinary";
// import Multer from "multer";
import apiRouter from "./api/index.router.js";

const router = express.Router();

router.use("/api", apiRouter);
dotenv.config();

export default router;
