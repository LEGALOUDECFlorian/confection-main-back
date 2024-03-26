import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routers/index.router.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import createDoc from "./helpers/swagger.doc.js";

const app = express();

app.use(cors({
  origin: "*",
  // origin: "https://confection-main.netlify.app/",
  // methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  // allowedHeaders: ["Content-Type", "Authorization", "application/json"],
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

createDoc(app);

app.use(router);
app.use(errorMiddleware);

export default app;
