import axios from "axios";
import { useQuery } from "react-query";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

// function Posts() {
//   const { data: posts = [] } = useQuery<AxiosResponse<Post[]>, string, Post[]>({
//     queryKey: ["posts"],
//     queryFn: () => axios.get(endpoint).then((res) => res.data),
//     select: (response) => response.data,
//   });

function Posts() {
  const { data: posts = [] } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: () => axios.get(endpoint).then((res) => res.data),
  });

  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id}>
          [{post.id}] {post.title}
        </li>
      ))}
    </ol>
  );
}

export default Posts;
