import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import MemoLists from "./components/MemoLists/MemoLists";
import WriteMemo from "./components/WriteMemo";

const Main = styled.main`
  display: grid;
  grid-template-columns: 240px 1fr;
  width: 100%;
  max-width: 1024px;
  height: 500px;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
`;

function App() {
  return (
    <Main>
      <GlobalStyles />
      <MemoLists />
      <WriteMemo />
    </Main>
  );
}

export default App;
