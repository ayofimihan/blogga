import PostHeader from "./post-header";
import styles from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import useSWR from "swr";
import { useEffect, useState } from "react";

const PostContent = (props) => {
  const [post, setPost] = useState(null);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR("/api/posts", fetcher);
  const imagePath = post ? `/posts/${post.slug}/${post.image}` : "";

  useEffect(() => {
    if (data) {
      setPost(data[0]);
    }
  }, [data]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
