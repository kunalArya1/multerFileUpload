/**
 *
 * Dummy
 *
 * You Can start writing your code.
 * Happy Coding 😊
 *
 */

import express from "express";
import { homePage, Register } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.route("/").get(homePage);
router.route("/register").post(upload.single("avatar"), Register);

export default router;
