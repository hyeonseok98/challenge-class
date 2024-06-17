import { QueryClientProvider } from "@tanstack/react-query";
import Posts from "./components/Posts/Posts";
import queryClient from "./react-query/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  );
}

export default App;
