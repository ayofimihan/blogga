import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "@/helpers/mongo-utils";

export default function AllPostsPage(props) {
  return (
    <>
      <AllPosts posts={props.allPosts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  const allPosts = posts.map((post) => ({
    // Extract only the necessary serializable properties from each post
    title: post.title,
    image: post.image,
    slug: post.slug,
    date: post.date.toISOString(), // Convert the Date object to a serializable string
  }));
  console.log(allPosts);

  return {
    props: {
      allPosts,
    },
    revalidate: 1000,
  };
}
