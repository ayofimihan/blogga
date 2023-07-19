import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "@/helpers/mongo-utils";

export default function Home(props) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.data} />
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getFeaturedPosts()) || [];
  const data = posts.map((post) => ({
    // Extract only the necessary serializable properties from each post
    title: post.title,
    image: post.image,
    slug: post.slug,
    date: post.date.toISOString(), // Convert the Date object to a serializable string
  }));
  console.log(data);

  return {
    props: {
      data,
    },
    revalidate: 100000,
  };
}
