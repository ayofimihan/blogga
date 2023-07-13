const mongoose = require("mongoose");

export async function connectDB() {
  const uri =
    "mongodb+srv://champion:fadekemi@cluster0.gwdt4gm.mongodb.net/blogga?retryWrites=true&w=majority";
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
