import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useMemoLists } from "../../redux/config/hook/useMemoLists";
import { editMemo } from "../../redux/reducer/memo.reducer";

export default function WriteMemo() {
  const dispatch = useDispatch();
  const { memoLists, selectedId } = useMemoLists();
  const { time, content } = memoLists.find(({ id }) => id === selectedId) || {};
  const [currentMemo, setCurrentMemo] = useState(content);

  useEffect(() => {
    setCurrentMemo(content);
  }, [content]);

  const handleChangeMemo = (e) => {
    setCurrentMemo(e.target.value);
    dispatch(editMemo({ id: selectedId, content: e.target.value }));
  };

  return (
    <StyledArticle>
      <DateSpan>{time}</DateSpan>
      <StyledTextarea
        value={currentMemo}
        onChange={handleChangeMemo}
      ></StyledTextarea>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

const DateSpan = styled.span`
  text-align: center;
  color: var(--text-grey);
  margin: 0 auto 24px;
`;

const StyledTextarea = styled.textarea`
  height: 90%;
  border: none;
  resize: none;
  outline: none;
  font-size: 1.5rem;
  line-height: 1.66;
`;
