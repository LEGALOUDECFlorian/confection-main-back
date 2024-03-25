import express from "express";
import ApiError from "../../errors/api.error.js";
import apiCategoryRouter from "./category.router.js";
import apiStatusRouter from "./status.router.js";
import apiSubcategoryRouter from "./subcategory.router.js";
import apiWorkshopRouter from "./workshop.router.js";
import apiUserRouter from "./user.router.js";
import apiAuthRouter from "./auth.router.js";
import apiItemRouter from "./item.router.js";

const apiRouter = express.Router();

apiRouter.use("/users", apiUserRouter);
apiRouter.use("/roles", apiUserRouter);
apiRouter.use("/createurs", apiWorkshopRouter);
apiRouter.use("/categories", apiCategoryRouter);
apiRouter.use("/sous-categories", apiSubcategoryRouter);
apiRouter.use("/articles", apiItemRouter);
apiRouter.use("/statuts", apiStatusRouter);

apiRouter.use("/login", apiAuthRouter);
apiRouter.use((_, __, next) => {
  next(new ApiError("Resource not found", { httpStatus: 404 }));
});
export default apiRouter;
