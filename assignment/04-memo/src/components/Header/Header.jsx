import { useDispatch } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useMemoLists } from "../../redux/config/hook/useMemoLists";
import { addMemo, deleteMemo } from "../../redux/reducer/memo.reducer";
import getDate from "../../utils/getDate";

export default function Header() {
  const dispatch = useDispatch();
  const { memoLists, selectedId } = useMemoLists();
  const memoListsLength = memoLists.length;

  const handleAddMemo = () => {
    const newMemo = {
      id: uuidv4(),
      content: "",
      time: getDate(),
    };
    dispatch(addMemo(newMemo));
  };

  const handledeleteMemo = () => {
    if (memoListsLength === 1) {
      alert("하나 이상의 메모는 남겨두어야 합니다.");
      return;
    }

    dispatch(deleteMemo(selectedId));
  };
  return (
    <StyledHeader>
      <StyledBtn onClick={handleAddMemo}>새 메모 작성하기</StyledBtn>
      <StyledBtn onClick={handledeleteMemo}>삭제</StyledBtn>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-top-left-radius: 10px;
  border-bottom: 1px solid var(--border-grey);
  background-color: var(--background-white);
`;

const StyledBtn = styled.button`
  padding: 4px 8px;
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--text-grey);

  &:hover {
    cursor: pointer;
    font-weight: 600;
    color: var(--text-black);
  }
`;
