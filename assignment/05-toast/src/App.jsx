import { useEffect, useRef } from "react";
import { useToast } from "./contexts/toast.context";

function App() {
  const toast = useToast();
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    console.log("hi");
    titleRef.current.value = "Scheduled: Catch up";
    contentRef.current.value = "Friday, February 10, 2023 at 5:57 PM";
    timeRef.current.value = 2000;
  }, [titleRef, contentRef, timeRef]);

  const handleToastButton = () => {
    toast.open({
      title: titleRef.current.value,
      content: contentRef.current.value,
      exposureTime: timeRef.current.value,
    });
  };

  return (
    <main className="min-h-screen grid place-items-center">
      <div className="w-full max-w-80 h-full max-h-96 flex flex-col gap-y-6 ">
        <h1 className="text-2xl font-bold text-center">토스트 컨트롤러</h1>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="title">제목 (필수)</label>
          <input
            id="title"
            type="text"
            ref={titleRef}
            className="px-4 py-2 rounded-sm outline outline-gray-300"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="content">내용 (필수)</label>
          <input
            id="content"
            type="text"
            ref={contentRef}
            className="px-4 py-2 rounded-sm outline outline-gray-300"
          />
        </div>
        <div className="flex flex-col gap-y-2 ">
          <label htmlFor="exposureTime">노출 시간(ms) (선택)</label>
          <input
            id="exposureTime"
            type="number"
            ref={timeRef}
            className="px-4 py-2 rounded-sm outline outline-gray-300"
          />
        </div>
        <button
          onClick={handleToastButton}
          className="py-3 rounded-md bg-black text-white text-center transition hover:bg-black/80  active:bg-black/70"
        >
          토스트 띄우기
        </button>
      </div>
    </main>
  );
}

export default App;
