/**
 *
 * Dummy
 *
 * You Can start writing your code.
 * Happy Coding 😊
 *
 */

import { uploadOnCloudinary } from "../utils/Cloudinary.js";
export const homePage = (req, res, next) => {
  res.send("Hello from user router");
};

export const Register = async (req, res, next) => {
  console.log(req.file.path);
  const localFilePath = req.file?.path;

  const uploadedimage = await uploadOnCloudinary(localFilePath);
  console.log(uploadedimage);
  res.send(req.file.path);
};
