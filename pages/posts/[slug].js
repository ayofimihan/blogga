import PostContent from "../../components/posts/post-detail/post-content";
import { useRouter } from "next/router";
const SinglePostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  return <PostContent slug={slug} />;
};

export default SinglePostPage;
