import { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";

const initialValue = () => {
  open: () => {};
  close: () => {};
};

const toastContext = createContext(initialValue);

export const useToast = () => useContext(toastContext);

export function ToastProvider({ children }) {
  const [toastLists, setToastLists] = useState([]);

  const value = {
    open: (newlists) => {
      setToastLists((prevLists) => [...prevLists, newlists]);
    },
    close: () => {
      setToastLists([]);
    },
  };

  return (
    <toastContext.Provider value={value}>
      {children}
      {toastLists &&
        toastLists.map(({ title, content, exposureTime }, index) => (
          <Toast
            key={index}
            title={title}
            content={content}
            exposureTime={exposureTime}
          />
        ))}
    </toastContext.Provider>
  );
}
