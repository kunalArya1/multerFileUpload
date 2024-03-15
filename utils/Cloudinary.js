import { v2 as cloudinary } from "cloudinary";
import { log } from "console";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    console.log("cloudinary ", localFilePath);

    const Response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("cloud response ", Response);
    await fs.unlinkSync(localFilePath);
    return Response;
  } catch (error) {
    await fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
