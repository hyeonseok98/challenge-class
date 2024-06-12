import { PropsWithChildren } from "react";

// 유틸리티 타입 만들어보기 => PropsWithChildren과 똑같은 기능
// React 개발자들이 PropsWithChildren라는 기능을 이미 만들어 뒀음
// type VeryUsefulType<T> = T & { children: React.ReactNode };

// 컨벤션: 컴포넌트 이름 + Props = {property의 타입}
interface CounterButtonProps {
  onClick: () => void;
}

// children type은 ReactNode다
function CounterButton({
  onClick: handleClick,
  children,
}: PropsWithChildren<CounterButtonProps>) {
  return <button onClick={handleClick}>{children}</button>;
}

export default CounterButton;
