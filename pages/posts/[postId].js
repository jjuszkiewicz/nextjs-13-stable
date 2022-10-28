import axios from "axios";
import { Layout } from "../../components/Layout";
import PostLayout from "../../components/PostLayout";
import { wait } from "../../utils/helper";

export const getServerSideProps = async ({ params }) => {
  // await wait(3);
  const { data: post } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${+params.postId}`
  );

  return {
    props: {
      post,
    },
  };
};

const PostPage = ({ post }) => {
  return (
    <Layout>
      <PostLayout>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </PostLayout>
    </Layout>
  );
};

export default PostPage;
