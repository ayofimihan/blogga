import { connectDB } from "./db";
import Post from "../models/Posts";
export async function getAllPosts() {
  //connect the database
  await connectDB();
  try {
    //fetch all posts
    const posts = await Post.find({}.lean());
    console.log(posts);
    return posts;
  } catch (error) {
    console.error(error);
  }
}

export async function getFeaturedPosts() {
  //connect to database
  await connectDB();
  try {
    const data = await Post.find({ isFeatured: true });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
