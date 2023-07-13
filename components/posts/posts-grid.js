import PostItem from "./post-item";
import styles from "./posts-grid.module.css";

const postsGrid = (props) => {
  const { posts } = props;
  return (
    <ul className={styles.grid}>
      {posts.map((post) => {
        return <PostItem post={post} key={post.slug} />;
      })}
    </ul>
  );
};

export default postsGrid;
