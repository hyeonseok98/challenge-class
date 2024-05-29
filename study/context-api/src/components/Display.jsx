import { useAuth } from "./../contexts/auth.context";

export default function Display() {
  const { isLoggedIn } = useAuth();

  console.log("로그인 리렌더링");

  return <div>로그인 여부 ({isLoggedIn.toString()}) </div>;
}
