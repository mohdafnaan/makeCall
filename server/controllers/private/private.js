import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import userModel from '../../models/User.js';
import makeCall from '../../utils/makeCall.js';

const router = express.Router();
router.get("/make-call", async (req, res) => {
  try {
    const user = await userModel.findOne({phone : req.user.phone});
    console.log(user);
    if(!user){
        return res.status(404).json({message: "User not found"});
    }
    await makeCall(user.phone, process.env.PHONE);
    res.status(200).json('call initiated');
    
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
});
export default router;