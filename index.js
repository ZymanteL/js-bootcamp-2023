import mongoose from "mongoose";
import express from "express";
import userRoute from "./routes/userRoute.js";

const app = express();
const port = 3033;

app.use(express.json())

const connectionToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dbUser:123@cluster0.rlpa0p0.mongodb.net/usersNamesPasswords"
    );
    console.log("Connection to DB works!");
  } catch (error) {
    console.log(error);
  }
};

app.use("/user", userRoute);

app.listen(port, () => {
  connectionToDB();
  console.log(`Server started on port ${port}`);
});
