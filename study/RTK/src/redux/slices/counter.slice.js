import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const initialState = {
  count: 0,
  school: {
    class: {
      students: [{ 이름: "진영", 나이: 12 }],
    },
  },
};

// immer 실습하기 위한 reducer
function counterReudcer(state, action) {
  if (action === "진영나이바꾸기") {
    // immer를 사용하지 않으면 이렇게 길~게 써야함.
    // const newState = {...state, school: {...state.school, class: {...state.school.class, students:state.school.class.students.map(student => student)~.등등 }}};
    
    // 두번째 인자를 관습적으로 레시피라 부름
    const newState = produce(state, (draft) => {
      draft.school.class.students.find((student) => student.name === "진영");
    });
    return newState;
  }
}

const counterSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    //action.type => "counter/increment(네임+액션)"
    increment: (state, action) => {
      const value = action.payload;

      // 기존 방식: 새로운 객체를 만들어 리턴
      // const nextState = { ...state, count: state.count + value };
      // return nextState;
      // return { ...state, count: state.count + value }; // 한줄로 쓸 Eos

      // 그냥 올려줌(불변성 관리 안함) 리턴도 안함 => 그런데 잘 작동함
      state.count = state.count + value;
    },
    decrement: (state, action) => {
      const value = action.payload;

      state.count = state.count - value;
    },
  },
});

// slice안에 reducer가 들어 있음
export const counterReducer = counterSlice.reducer;

// actions지만 action creator가 반환됨
export const { increment, decrement } = counterSlice.actions;
