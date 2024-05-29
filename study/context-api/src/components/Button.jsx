import { useAuth } from "./../contexts/auth.context";

export default function Button() {
  const { logIn, logOut } = useAuth();

  console.log("버튼 리렌더링");

  return (
    <>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={logOut}>로그아웃하기</button>
    </>
  );
}