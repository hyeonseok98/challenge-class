import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef, useState } from "react";
import Page from "../components/Page";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

function TodoPage() {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const { isPending, mutate } = useMutation({
    mutationFn: (variables) => {
      axios.post(ENDPOINT, { value: variables });
    },
    // (1) 1번 사용법
    // onSuccess의 매개변수: mutation의 result
    // onSuccess: () => {
    //   alert("성공했어!");
    // },
    // onError: () => {
    //   alert("실패했어");
    // },
  });

  const handleClickButton = async () => {
    // (2) 2번 사용법. 이렇게도 처리할 수 있음!
    mutate(inputRef.current.value, {
      onSuccess: () => {
        alert("성공했어!");
      },
    });
  };

  return (
    <Page>
      <input
        ref={inputRef}
        type="text"
        className="border"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={isPending}
      />
      <button
        onClick={handleClickButton}
        className="bg-black text-white"
        disabled={isPending}
      >
        눌러주세요
      </button>
    </Page>
  );
}

export default TodoPage;
