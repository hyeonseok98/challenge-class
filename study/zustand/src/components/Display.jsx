import useLoginStore from "./../zustand/login.store";

export default function Display() {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);

  return <div>로그인 여부 ({isLoggedIn.toString()}) </div>;
}
