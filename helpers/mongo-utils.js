import { connectDB } from "./db";
import Post from "../models/Posts";
import Contact from "@/models/Contact";
export async function getAllPosts() {
  //connect the database
  await connectDB();
  try {
    //fetch all posts
    const posts = await Post.find({});
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

export async function getSinglePost(slug) {
  //connect to db
  await connectDB();
  try {
    const data = await Post.findOne({ slug });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function saveNewPost(props) {
  const { title, image, slug, isFeatured, content } = props;
  //connect to database
  await connectDB();
  try {
    const newPost = new Post({
      title: title,
      image: image,
      date: Date.now(),
      slug: slug,
      isFeatured: true,
      content: content,
    });
    await newPost.save();
  } catch (error) {
    console.log(error);
  }
}

export async function saveNewContact(props) {
  const { email, subject, message } = props;
  //connect to db
  await connectDB();
  try {
    const newContact = new Contact({
      email: email,
      subject: subject,
      message: message,
    });
    await newContact.save();
  } catch (error) {
    console.error(error);
  }
}
