import PostHeader from "./post-header";
import styles from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import useSWR from "swr";

const PostContent = (props) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR(`/api/posts?slug=${props.slug}`, fetcher);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <article className={styles.content}>
      <PostHeader title={data.title} image={data.image} />
      <ReactMarkdown>{data.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
