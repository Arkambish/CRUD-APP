import mongoose from "mongoose";

const ConnectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(`DB error is 💥 ${error}`);
  }
};
export default ConnectMongoDB;
