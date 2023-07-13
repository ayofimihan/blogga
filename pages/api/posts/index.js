import { getAllPosts } from "../../../helpers/mongo-utils";
async function handler(req, res) {
  try {
    const posts = await getAllPosts();
    console.log(posts);
    return res.status(200).json(posts);
  } catch (error) {
    console.error(error);
  }
}

export default handler;
