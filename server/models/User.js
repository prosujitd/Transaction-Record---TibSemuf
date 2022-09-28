import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    firstName: { type: String, required: ["First name is required"] },
    lastName: { type: String, required: ["Last name is required"] },
    email: { type: String, required: ["Email is required"] },
    password: { type: String, required: ["Password is required"] },
  },
  {
    timestamps: true,
  }
);


const UserModel = new mongoose.model("User", UserSchema);
export default UserModel;
