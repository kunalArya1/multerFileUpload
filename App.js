import express from "express";
import { ConnectDB } from "./db/connect.db.js";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes/user.routes.js";
import path from "path";


const app = express();
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
// app.use(cookieParser());
const PORT = process.env.PORT || 3000;

// Body Parser
app.use(express.json());

// User Router setup
app.use("/api/v1/user", router);

app.route("/").get((req, res, next) => {
  res.send("Hello from app!😊   ");
});

const start = async () => {
  try {
    await ConnectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error While Connecting to Database", error);
  }
};

start();
