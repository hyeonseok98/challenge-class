import { useShallow } from "zustand/react/shallow";
import useLoginStore from "../zustand/login.store";

export default function Button() {
  // const logIn = useLoginStore((state) => state.logIn);
  // const logOut = useLoginStore((state) => state.logOut);

  const { logIn, logOut } = useLoginStore(
    useShallow((state) => ({
      logIn: state.logIn,
      logOut: state.logOut,
    }))
  );

  console.log("버튼 리렌더링");
  return (
    <>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={logOut}>로그인하기</button>
    </>
  );
}
