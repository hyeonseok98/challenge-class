import "./App.css";
import AuthButton from "./components/AuthButton";
import Display from "./components/Display";
import store from "./redux/store";

function App() {
  return (
    <>
      <Display store={store} />
      <AuthButton />
    </>
  );
}

export default App;
