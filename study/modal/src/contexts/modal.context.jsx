// 1. 만든다 -> createContext
// 2. 사용한다 -> useContext
// 3. 범위를 지정해 값을 내려준다 -> Context.Provier

import { useScrollLock } from "@yoojinyoung/usescrolllock";
import { createContext, useContext, useState } from "react";
import Modal from "./../components/Modal";

const initialValue = () => {
  open: () => {};
  close: () => {};
};

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [modalOptions, setModalElement] = useState();
  const scrollLock = useScrollLock();

  const value = {
    open: (options) => {
      setModalElement(options);
      scrollLock.lock();
    },
    close: () => {
      setModalElement(null);
      scrollLock.release();
    },
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalOptions && (
        <Modal title={modalOptions.title} content={modalOptions.content} />
      )}
    </ModalContext.Provider>
  );
}
