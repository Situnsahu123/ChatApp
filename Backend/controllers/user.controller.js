import User from "../models/User.module.js";
import createToken from "../JWT/generateToken.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  const { fullname, email, password, confirmpass } = req.body;
  try {
    if (password !== confirmpass) {
      return res
        .status(400)
        .json({ error: " password and confirm password are not matching" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: " user all ready exizist " });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      fullname,
      email,
      password: hashPassword,
    });
    await newUser.save();
    if (newUser) {
      createToken(newUser._id, res);
      res.status(201).json({
        message: "Usercreate successFully",
        user: {
          fullname: newUser.fullname,
          email: newUser.email,
          id: newUser._id,
        },
      });
    }
    console.log(newUser);
    res.status(201).json({ message: "Usercreate successFully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "something  went wrong" });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ error: " in valid email and password " });
    }
    createToken(user._id, res);
    return res.status(201).json({
      message: " logged successfully  ",
      user: {
        fullname: user.fullname,
        email: user.email,
        id: user._id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(201).json({ message: "logout successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "nuable to logout" });
  }
};

export const allUser = async (req, res) => {
  try {
    const loggedInuser = req.user._id; 

    const filterredUser = await User.find({ _id: { $ne: loggedInuser } }).select(
      "-password"
    );
    res.status(201).json({ filterredUser });
  } catch (error) {
    console.log("error in allUser controller:", error);
    res.status(500).json({ error: "Server Error" });
  }
};