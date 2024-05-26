import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header/Header";

const StyledAsie = styled.aside`
  border-right: 1px solid var(--border-grey);
  overflow-y: auto;
`;

export default function MemoLists() {
  return (
    <StyledAsie>
      <Header />
      <ul>
        <li key={uuidv4}></li>
      </ul>
    </StyledAsie>
  );
}
