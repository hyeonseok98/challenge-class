import clsx from "clsx";
import { useState } from "react";

function Toast({ title, content, exposureTime }) {
  const [showToast, setShowToast] = useState(false);

  return (
    <div
      className={clsx(
        "fixed bottom-6 right-8 transition-transform duration-500",
        showToast ? "transform translate-x-1" : "transform translate-x-full"
      )}
    >
      <article className="flex-col items-center w-[320px] h-[90px] p-6 rounded-lg bg-white shadow-md">
        <h6 className="text-sm font-semibold">{title}</h6>
        <p className="text-sm">{content}</p>
      </article>
    </div>
  );
}

export default Toast;
