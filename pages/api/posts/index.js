import {
  getAllPosts,
  getSinglePost,
  saveNewPost,
} from "../../../helpers/mongo-utils";

async function handler(req, res) {
  if (req.method === "GET") {
    if (req.query.slug) {
      // Get a single post by slug
      const slug = req.query.slug;
      const post = await getSinglePost(slug);
      console.log(post);
      return res.status(200).json(post);
    } else {
      // Get all posts
      const data = await getAllPosts();
      console.log(data);
      return res.status(200).json(data);
    }
  }

  if (req.method === "POST") {
    const { title, image, slug, isFeatured, content } = req.body;
    console.log("🚀 ~ file: index.js:25 ~ handler ~ isFeatured:", isFeatured);
    try {
      await saveNewPost({ title, image, slug, isFeatured, content });
      console.log("🚀 ~ file: index.js:28 ~ handler ~ isFeatured:", isFeatured);
      return res.status(200).json({ message: "Post saved successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Failed to save post" });
    }
  }
}

export default handler;
