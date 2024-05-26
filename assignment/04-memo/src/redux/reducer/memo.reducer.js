import { v4 as uuidv4 } from "uuid";
import getDate from "../../utils/getDate";

const ADD_MEMO = "memo/ADD_MEMO";
const SELECT_MEMO = "memo/SELECT_MEMO";
const EDIT_MEMO = "memo/EDIT_MEMO";
const DELETE_MEMO = "memo/DELETE_MEMO";

export const addMemo = (payload) => {
  return {
    type: ADD_MEMO,
    payload,
  };
};

export const selectedMemo = (payload) => {
  return {
    type: SELECT_MEMO,
    payload,
  };
};

export const editMemo = (payload) => {
  return {
    type: EDIT_MEMO,
    payload,
  };
};

export const deleteMemo = (payload) => {
  return {
    type: DELETE_MEMO,
    payload,
  };
};

const uniqueId = uuidv4();
const initialState = {
  memoLists: [
    {
      id: uniqueId,
      content: "",
      time: getDate(),
    },
  ],
  selectedId: uniqueId,
};
function memoReducer(prevState = initialState, action) {
  switch (action.type) {
    case ADD_MEMO:
      return {
        ...prevState,
        memoLists: [action.payload, ...prevState.memoLists],
        selectedId: action.payload.id,
      };

    case SELECT_MEMO:
      return { ...prevState, selectedId: action.payload };

    case EDIT_MEMO:
      return {
        ...prevState,
        memoLists: prevState.memoLists.map((memoList) =>
          memoList.id === prevState.selectedId
            ? { ...memoList, content: action.payload.content }
            : memoList
        ),
      };

    case DELETE_MEMO: {
      const newMemoLists = prevState.memoLists.filter(
        (memo) => memo.id !== action.payload
      );
      const newSelectedId =
        prevState.selectedId === action.payload
          ? newMemoLists[0]?.id
          : prevState.selectedId;

      return {
        ...prevState,
        memoLists: newMemoLists,
        selectedId: newSelectedId,
      };
    }

    default:
      return prevState;
  }
}

export default memoReducer;
