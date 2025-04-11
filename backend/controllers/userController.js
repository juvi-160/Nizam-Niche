import User from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    //check if user exists
    if (!user) {
      return res.status(400).json({ sucess: false, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ sucess: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.json({ sucess: false, message: error.message });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    //check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({sucess:false, message: "User already exists" });
    }

    //validate user input
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }
    if (!password || password.length < 8) {
      return res
        .status(400)
        .json({ message: "Please enter a password with 8 or more characters" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(password, salt);

    //create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashpass,
    });
    const user = await newUser.save();

    //token
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.json({ sucess: false, message: error.message });
  }
};

export const adminLogin = (req, res) => {
  try {
    const { email, password } = req.body;
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){ 
      const token = jwt.sign(email+password, process.env.JWT_SECRET)
      res.json({ success: true, token });
    }else {
      res.json({ sucess: false, message: "Invalid credentials" });
    }
    
  } catch (err) {
    console.error(err);
    res.json({ sucess: false, message: err.message });
    
  }
};
