import express from "express";
import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import e from "express";

const router = express.Router();

router.post("/login", async(req,res) => {
    const {email, password} = req.body;
    const userExists = await UserModel.findOne({email});
    if(!userExists){
        res.status(406).json({message: "Credentials not found"});
        return;
    }

    const matched = await bcrypt.compare(password, userExists.password);
    if(!matched){
        res.status(406).json({message: "Credentials not found"});
        return;
    }

    // Create JWT token
    const payload = {
      username: email,
      _id: userExists._id,
    };

    const token = jwt.sign(payload,process.env.JWT_SECRET);
    console.log(token);
    res.json({message: " successfully loggged in ",token})

})

router.post("/register", async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  const userExists = await UserModel.findOne({ email });
  if (userExists) {
    res.status(406).json({ message: "User already exists" });
    return;
  }

  // Hash the password
  const saltRounds = 10
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hashedPassword = await bcrypt.hashSync(password, salt);


  const user = await UserModel({firstName, lastName, email, password: hashedPassword});
  const userSave = await user.save();
  res.status(201).json({ message: "User is created" });
});

export default router;
