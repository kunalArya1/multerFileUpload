/**
 *
 * Dummy
 *
 * You Can start writing your code.
 * Happy Coding 😊
 *
 */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avtar: {
    type: String,
  },
});

export default mongoose.model("user", userSchema);
