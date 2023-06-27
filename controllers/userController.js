import userModel from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const user = new userModel({
      ...req.body,
    });
    await user.save();
    res.status(201).send(`New user named: ${req.body.userName} is created`);
  } catch {
    console.log(error);
    res.status(400).send(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(201).send(users);
  } catch {
    console.log(error);
    res.status(400).send(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await userModel.deleteOne({ name: req.params.userName });
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await userModel.findOneAndUpdate(
      {
        name: req.params.userName,
      },
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
