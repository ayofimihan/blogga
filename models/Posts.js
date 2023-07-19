import mongoose from "mongoose";

let Post;

try {
  Post = mongoose.model("Post");
} catch (error) {
  const postSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      unique: false,
    },
    image: {
      type: String,
      required: true,
      unique: false,
    },
    slug: {
      type: String,
      required: true,
      unique: false,
    },
    content: {
      type: String,
      required: true,
      unique: false,
    },
    date: {
      type: Date,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      required: true,
    },
  });

  Post = mongoose.model("Post", postSchema);
}

export default Post;
