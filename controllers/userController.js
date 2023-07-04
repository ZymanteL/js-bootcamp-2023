import userModel from "../modules/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const loginUser = async (req, res) => {
  try {
    const foundUser = await userModel.findOne({ userName: req.body.userName });
    if (!foundUser) {
      return res.status(404).send(`Username or password is wrong!`);
    }

    const isPassCorect = bcrypt.compareSync(
      req.body.password.toString(),
      foundUser.password
    );

    if (!isPassCorect) {
      return res.status(404).send(`Username or password is wrong!!`);
    }

    const token = jwt.sign({id: foundUser._id}, process.env.JWT_SECRET, {expiresIn: 60})
  
    return res.cookie('session_token', token, {
      httpOnly: true
    }).status(200).send(`Hello, ${foundUser.userName}! You loged in.`)
  } catch (error) {}
};

export const createUser = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password.toString(), salt);
    const newUser = new userModel({
      ...req.body,
      password: hashPassword,
      isAdmin: false,
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
