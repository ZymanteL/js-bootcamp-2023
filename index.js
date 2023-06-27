import mongoose from "mongoose";
import express from "express";
import studentRoute from "./routes/studentRoute.js";

const app = express();
const port = 3005;

app.use(express.json())

// const Student = mongoose.model("Student", studentSchema);

const connectionToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dbUser:123@cluster0.rlpa0p0.mongodb.net/students"
    );
    console.log("Connection to DB works!");
  } catch (error) {
    console.log(error);
  }

  //   mongoose
  //     .connect("mongodb+srv://dbUser:123@cluster0.rlpa0p0.mongodb.net/")
  //     .then(() => {
  //         console.log("Connection to DB works!");
  //     }).catch((error => {
  //         console.log(error);
  //     }))
};

app.use("/student", studentRoute);

app.listen(port, () => {
  connectionToDB();
  console.log(`Server started on port ${port}`);
});
