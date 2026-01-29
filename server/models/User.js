import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone:{
    type: String,
    required: true,
    unique: true,
  },
  isVerified:{
    type: Boolean,
    default: false,
  },
  phoneOTP:{
    type: String,
    default: null,
  },    
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;