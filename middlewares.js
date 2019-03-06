import multer from "multer";
import routes from "./routes";

const multerdVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  console.log(req.user);
  next();
};

export const uploadVideo = multerdVideo.single("videoFile");
