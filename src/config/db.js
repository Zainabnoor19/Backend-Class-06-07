import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI); // process.env >>-- env se jb humy kuch lena hota hy
    console.log("MongoDB connected");
  } catch (error) {
    console.log("DB connection error:", error.message);
  }
};

export default connectDb;