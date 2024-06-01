import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Toast from "../components/Toast";

const initialValue = () => ({
  open: () => {},
  close: () => {},
});

const toastContext = createContext(initialValue());

export const useToast = () => useContext(toastContext);

export function ToastProvider({ children }) {
  const [toastLists, setToastLists] = useState([]);

  const value = {
    open: (newLists) => {
      const id = uuidv4();
      setToastLists((prevLists) => [...prevLists, { ...newLists, id }]);
    },

    close: (id) => {
      setToastLists((prevLists) =>
        prevLists.filter((toast) => toast.id !== id)
      );
    },
  };

  return (
    <toastContext.Provider value={value}>
      {children}
      <ul className="fixed bottom-6 right-8 grid grid-cols-1 gap-y-3">
        {toastLists &&
          toastLists.map(({ title, content, exposureTime, id }) => (
            <li key={id}>
              <Toast
                title={title}
                content={content}
                exposureTime={exposureTime}
                id={id}
              />
            </li>
          ))}
      </ul>
    </toastContext.Provider>
  );
}
