import axios from "axios";
import Counter from "../components/Counter";
import { Layout } from "../components/Layout";

export const getServerSideProps = async () => {
  const { data: posts } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  );

  return {
    props: {
      posts
    },
  };
}


const PostPage = ({ posts }) => {
  // await wait(3);
  return (
    <Layout>
      <h1>Artykuły</h1>
      <Counter />

      <section>
        <h2>Lista</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <a href={`/posts/${post.id}`}>Artykuł {post.id}</a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default PostPage;
