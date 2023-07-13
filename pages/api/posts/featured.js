import { getFeaturedPosts } from "../../../helpers/mongo-utils";

async function handler(req, res) {
  const data = await getFeaturedPosts();
  console.log(data);
  return res.status(200).json(data);
}
export default handler;
