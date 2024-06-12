import { createContext, useContext, useState } from "react";

type ModalContextValue = {
  open: (element: React.ReactElement) => void;
  close: () => void;
};

const initialValue: ModalContextValue = { open: () => {}, close: () => {} };

// 만든다
const ModalContext = createContext<ModalContextValue>(initialValue);

// 사용한다
export const useModal = () => useContext(ModalContext);

// 범위를 지정해서 값을 내려준다.
export function ModalProvider({ children }: { children: React.ReactNode }) {
  // close 되면 값이 없음으로 null 타입을 추가로 넣어줌
  const [modalElement, setModalElement] = useState<React.ReactElement | null>(
    null
  );

  const open: ModalContextValue["open"] = (element) => {
    setModalElement(element);
  };
  const close: ModalContextValue["close"] = () => {
    setModalElement(null);
  };

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      {modalElement}
    </ModalContext.Provider>
  );
}
