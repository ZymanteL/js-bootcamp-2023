import userModel from "../modules/userModel.js";

export const createUser = async (req, res) => {
  try {
    const newUser = new userModel({
      ...req.body,
    });
    await newUser.save();

    const { password, ...remainingUserData } = newUser._doc;
    res.status(201).json(remainingUserData);
  } catch {
    console.log(error);
    res.status(400).send(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find({}, { password: 0 });
    res.status(201).json(allUsers);
  } catch {
    console.log(error);
    res.status(400).send(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await userModel.findOne(
      { userName: req.body.userName },
      { password: 0 }
    );
    res.status(201).json(user);
  } catch {
    console.log(error);
    res.status(400).send(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await userModel.findOneAndDelete({
      userName: req.body.userName,
    });
    const { password, ...remainingUserData } = user._doc;
    res.status(201).json(remainingUserData);
  } catch {
    console.log(error);
    res.status(400).send(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await userModel.findOneAndUpdate(
      {
        userName: req.body.user,
      },
      {
        $set: req.body,
      },
      { new: true }
    );
    
    res.status(201).json(user);
  } catch {
    console.log(error);
    res.status(400).send(error);
  }
};
