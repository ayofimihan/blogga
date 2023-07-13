import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import useSWR from "swr";
import { useEffect, useState } from "react";

export default function Home() {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR("/api/posts/featured", fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    retryInterval: 100000,
  });

  useEffect(() => {
    if (data) {
      setFeaturedPosts(featuredPosts);
    }
  }, [data]);

  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}
