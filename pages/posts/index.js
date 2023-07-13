import { useState } from "react";
import AllPosts from "../../components/posts/all-posts";
import useSWR from "swr";
import { useEffect } from "react";
import { getAllPosts } from "../../helpers/mongo-utils";

export default function AllPostsPage(props) {
  // const DUMMY_DATA = [
  //   {
  //     title: "Getting started with nextJs",
  //     image: "getting-started-nextjs.png",
  //     excerpt: "this is the excerpt",
  //     date: "2023-03-25",
  //     slug: "getting-started-with-nextjs",
  //   },
  //   {
  //     title: "Getting started with nextJs",
  //     image: "getting-started-nextjs.png",
  //     excerpt: "this is the excerpt",
  //     date: "2023-03-25",
  //     slug: "getting-started-with-nextjs2",
  //   },
  //   {
  //     title: "Getting started with nextJs",
  //     image: "getting-started-nextjs.png",
  //     excerpt: "this is the excerpt",
  //     date: "2023-03-25",
  //     slug: "getting-started-with-nextjs3",
  //   },
  //   {
  //     title: "Getting started with nextJs",
  //     image: "getting-started-nextjs.png",
  //     excerpt: "this is the excerpt",
  //     date: "2023-03-25",
  //     slug: "getting-started-with-nextjs4",
  //   },
  // ];

  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data } = useSWR("/api/posts", fetcher);
  // const [allPosts, seAllPosts] = useState([]);
  // useEffect(() => {
  //   if (data) {
  //     seAllPosts(allPosts);
  //     console.log(data);
  //     console.log(post);
  //   }
  // }, [data]);
  return (
    <>
      <AllPosts posts={props.posts} />
    </>
  );
}

export async function getStaticProps() {
  const data2 = await getAllPosts();
  console.log("🚀 ~ file: index.js:58 ~ getStaticProps ~ data2:", data2);
  return {
    props: {
      posts: data2,
    },
  };
}
