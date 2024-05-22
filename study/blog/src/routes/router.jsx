import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PostDetailPage from "../pages/PostDetailPage";
import PostDetailPageLoader from "../pages/PostDetailPage/PostDetailPage.loader";
import PostsListPage from "../pages/PostsListPage";
import postListPageLoader from "../pages/PostsListPage/PostsListPage.loader";
import DefaultLayout from "../pages/layouts/DefaultLayout";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostsListPage />,
        loader: postListPageLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostDetailPage />,
        loader: PostDetailPageLoader,
      },
    ],
  },
]);

export default router;
