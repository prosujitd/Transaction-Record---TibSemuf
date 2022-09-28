import mongoose from "mongoose";

const connect = async() => {
    await mongoose.connect(
        process.env.DATABASE_URL
      );

      console.log("MongoDB is connected successfully");
}

export default connect;