import express from "express";
import routes from "../routes";
import { postRegisterView } from "../controllers/videoController";

const userRouter = express.Router();

userRouter.get(routes.registerView, postRegisterView);

export default userRouter;
