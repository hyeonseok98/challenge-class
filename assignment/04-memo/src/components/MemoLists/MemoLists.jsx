import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { useMemoLists } from "../../redux/reducer/hook/useMemoLists";
import { selectedMemo } from "../../redux/reducer/memo.reducer";
import Header from "../Header/Header";

export default function MemoLists() {
  const dispatch = useDispatch();
  const { memoLists, selectedId } = useMemoLists();

  const handleSelectMemo = (memoId) => {
    dispatch(selectedMemo(memoId));
  };

  return (
    <StyledAside>
      <Header />
      <StyledUl>
        {memoLists.map(({ id, content, time }) => {
          const slicedDate = time.split(" ").slice(3, 5).join(" ");
          return (
            <StyledLi
              key={id}
              selected={id === selectedId}
              onClick={() => handleSelectMemo(id)}
            >
              <H6>{content ? content : "새로운 메모"}</H6>
              <time>{slicedDate}</time>
            </StyledLi>
          );
        })}
      </StyledUl>
    </StyledAside>
  );
}

const StyledAside = styled.aside`
  height: 100%;
  border-right: 1px solid var(--border-grey);
`;

const StyledUl = styled.ul`
  max-height: 440px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  padding: 20px 12px 0px 12px;
  row-gap: 8px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const StyledLi = styled.li`
  width: 100%;
  height: 56px;
  border-radius: 4px;
  padding: 12px 24px;
  background-color: ${(props) => (props.selected ? "#FFE07F" : "transparent")};
  cursor: pointer;

  time {
    font-size: 1.2rem;
    color: var(--time-black);
  }
`;

const H6 = styled.h6`
  width: 160px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 2px;
`;
