import express from "express";
import UserModel from "../../models/User.js";
import sendSms from "../../utils/smsVerify.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { fullName, email, password, phone } = req.body;

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    let phoneOtp = Math.floor(Math.random() * (9999 - 1000) + 1000);

    // Hash password
    let bpassword = await bcrypt.hash(password, 10);

    // Send OTP to user's phone
    // await sendSms(
    //   phone,
    //   `Your OTP for registration is ${phoneOtp}. Please do not share it with anyone.`,
    // );

    let finalObj = {
      fullName,
      email,
      password: bpassword,
      phone,
      phoneOTP: phoneOtp,
    };
    await UserModel.insertOne(finalObj);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/verify-otp", async (req, res) => {
  try {
    const { otp } = req.body;

    // Find user by phone OTP
    const user = await UserModel.findOne({ phoneOTP: otp });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check if OTP matches
    if (user.phoneOTP !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    await UserModel.updateOne(
      { _id: user._id },
      { $set: { isVerified: true, phoneOTP: null } },
    );

    res.status(200).json({ message: "Phone number verified successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { phone, password } = req.body;

    // Find user by phone
    const user = await UserModel.findOne({ phone });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check if user is verified
    if (!user.isVerified) {
      return res.status(400).json({ message: "User not verified" });
    }

    // Check if password matches
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    let payload = { userId: user._id, phone: user.phone };
    let token = jwt.sign(payload, process.env.JWTSECRET, { expiresIn: "1d" });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});
export default router;
