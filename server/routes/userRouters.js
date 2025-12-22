import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getUserData, storeRecentSearchedCities } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/",protect,getUserData);
userRouter.get("/store-recent-search",protect,storeRecentSearchedCities);

export default userRouter;