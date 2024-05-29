import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// 함수를 넣어 객체를 반환
const useLoginStore = create(
  persist(
    (set, get) => ({
      // 가지고 싶은 상태
      isLoggedIn: false,
      // 액션 핸들링, 작동하고 싶은 함수
      logIn: () => set(() => ({ isLoggedIn: true })),
      logOut: () => set(() => ({ isLoggedIn: false })),

      // set 안에서 처리하는게 가능할 때 사용
      // toggleIsLoggedIn: () =>
      //   set((prevState) => ({isLoggedIn: !prevState.isLoggedIn}))

      toggleIsLoggedIn: () => {
        const prevState = get();

        // set 하기 전에 어딘가 통신을 하고 데이터를 가져와야 한다 등의 일이 있을 수 있음
        // set 안에서 async 작업이 불가능하기 때문에 밖에서 처리하고 넣어줄때 사용함
        set({ isLoggedIn: !prevState.isLoggedIn });
      },
    }),
    {
      name: "login-store",
      storage: createJSONStorage(() => sessionStorage), // 비어있으면 localstorage가 기본
    }
  )
);

export default useLoginStore;
