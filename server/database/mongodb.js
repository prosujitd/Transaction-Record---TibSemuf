import mongoose from "mongoose";

const connect = async() => {
    await mongoose.connect(
        "mongodb+srv://prosujit:Devcode123@mern-bitfumes.nbo2hhs.mongodb.net/?retryWrites=true&w=majority"
      );

      console.log("MongoDB is connected successfully");
}

export default connect;