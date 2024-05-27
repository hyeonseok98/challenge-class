import { useSelector } from "react-redux";

export default function Display() {
  const count = useSelector((state) => state.counter.count);
   return <button>{count}</button>;
}
