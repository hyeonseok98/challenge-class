import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useMemoLists } from "../../redux/reducer/hook/useMemoLists";
import { editMemo } from "../../redux/reducer/memo.reducer";

export default function WriteMemo() {
  const dispatch = useDispatch();
  const memoRef = useRef(null);
  const { memoLists, selectedId } = useMemoLists();
  const { time } = memoLists.find(({ id }) => id === selectedId) || {};

  useEffect(() => {
    memoRef.current.focus();
    memoRef.current.value = memoLists.content || "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);

  const handleChangeMemo = (e) => {
    dispatch(editMemo({ id: selectedId, content: e.target.value }));
  };

  return (
    <StyledArticle>
      <DateSpan>{time}</DateSpan>
      <StyledTextarea ref={memoRef} onChange={handleChangeMemo} />
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
