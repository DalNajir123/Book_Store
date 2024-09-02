import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createUser = new User({ fullname, email, password: hashPassword });
    await createUser.save();
    res.status(201).json({ createUser, message: "User created successfully" });
  } catch (error) {
    console.log("Error while creating user", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ user, message: "Invalid credentials" });
    } else {
      res.status(200).json({
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
        message: "Login successful",
      });
    }
  } catch (error) {
    console.log("Error while logging in", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
