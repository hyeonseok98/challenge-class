import clsx from "clsx";
import { useEffect, useState } from "react";
import cancelIcon from "../assets/cancel-icon.png";
import { useToast } from "../contexts/toast.context";

function Toast({ title, content, exposureTime, id }) {
  const [showToast, setShowToast] = useState(false);
  const toast = useToast();

  useEffect(() => {
    setShowToast(true);

    const timer = setTimeout(() => {
      setShowToast(false);
      handleCloseToast();
    }, exposureTime);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleCloseToast = () => {
    setShowToast(false);
    setTimeout(() => {
      toast.close(id);
    }, 500);
  };

  return (
    <div
      className={clsx(
        "relative flex-col items-center w-[320px] h-[90px] p-6 rounded-lg bg-white shadow-lg transition duration-500",
        showToast ? "translate-x-0" : "translate-x-96"
      )}
    >
      <img
        src={cancelIcon}
        alt="x"
        className="absolute top-3 right-4 cursor-pointer"
        onClick={() => handleCloseToast()}
      />
      <h6 className="text-sm font-semibold">{title}</h6>
      <p className="text-sm">{content}</p>
    </div>
  );
}

export default Toast;
