import { Link, Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div>
      <Link to="./">홈페이지</Link>
      <br />
      <Link to="./posts">포스트 목록 페이지</Link>
      <br />
      <Link to="./posts/12">포스트 상세 페이지</Link>

      <Outlet />
    </div>
  );
}
