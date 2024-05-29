import { createContext, useContext, useState } from "react";

const initialValue = { isLoggedIn: false };
export const AuthContext = createContext(initialValue);

// 2.사용한다: useContext

// 멋지게 사용하는 방법 → 아래와 같이 hook을 만들어 사용
// =>를 쓰지 않으면 바로 실행됨. 실행하고 싶은 시점을 늦추기 위해 사용함
export const useAuth = () => useContext(AuthContext);

// 3. 범위를 지정해 깂을 내려준다.
// 범위를 지정 => provider

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
