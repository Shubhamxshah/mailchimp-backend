import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mailchimp')
    console.log("database connected")
  } catch (error) {
    console.error('error connecting to mongodb', error)
    process.exit(1);
  }
}
