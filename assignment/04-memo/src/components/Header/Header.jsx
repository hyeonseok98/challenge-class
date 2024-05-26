import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-grey);
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
export default function Header() {
  return (
    <StyledHeader>
      <StyledBtn>새 메모 작성하기</StyledBtn>
      <StyledBtn>삭제</StyledBtn>
    </StyledHeader>
  );
}
