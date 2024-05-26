// action의 타입은 전통적으로 상수로 만들어 사용함. 변수 앞에는 기능의 이름을 붙임(이번 경우는 auth)
export const LOG_IN = "auth/LOG_IN";
export const LOG_OUT = "auth/LOG_OUT";

// 어떤 자료형을 쓸지는 자유임. 많은 양을 사용하기 위해선 객체를 사용
const initialState = {
  isLoggedIn: false,
};

// 바꿀 상태와 작업 명세서를 매개변수로 받음
function authReducer(prevState = initialState, action) {
  // if-else로 사용해도 되나, 전통적으로 switch가 사용됨

  switch (action.type) {
    case LOG_IN:
      return { ...prevState, isLoggedIn: true };

    case LOG_OUT:
      return { ...prevState, isLoggedIn: false };

    default:
      return prevState;
  }
}

export default authReducer;
