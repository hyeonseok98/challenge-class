import { useSelector } from "react-redux";

export const useMemoLists = () => {
  return useSelector((state) => state.memo);
};
