import jwt from "jsonwebtoken";
import userModel from "../modules/userModel.js";

const verifyUser = (req, res, next, userName) => {
  if (req.body.userName === userName) {
    next();
  }
  return res.status(400).send("Not authorized.");
};

const verifyAdmin = (res, next, user) => {
  if (user?.isAdmin) {
    next();
  }
  return res.status(400).send("Not authorized.");
};

export const verifySessionToken = (req, res, next) => {
  const token = req.cookie.session_token;

  if (!token) {
    return res.status(401).send("Not authorized!");
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
    if (err) {
      return res.status(401).send("Invalid token");
    }

    const user = await userModel.findById(decodedToken.id);

    if (user.isAdmin) {
      verifyAdmin(res, next, user);
    } else {
      verifyUser(req, res, next, user?.userName);
    }

    verifyUser(req, res, next, user?.userName);

    // req.userToken = decodedToken;

    // const foundUser = userModel.findOne({userName: req.userName})

    next();
  });
};
