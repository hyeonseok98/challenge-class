import pikachu from "@/assets/pikachu.png";
import { MAP_SIZE, PIKACHU_SIZE } from "@/config.js";
import { useEffect, useMemo, useState } from "react";
import styles from "./Pikachu.module.css";

// 피카츄의 이동 담당 컴포넌트(상,하,좌,우 이동 및 점프 기능)
export default function Pikachu() {
  // Map 반경 계산
  const mapArea = useMemo(() => {
    const top = Math.ceil((window.innerHeight - MAP_SIZE) / 2);
    const bottom =
      Math.ceil((window.innerHeight + MAP_SIZE) / 2) - PIKACHU_SIZE;
    const right = Math.ceil(window.innerWidth + MAP_SIZE) / 2 - PIKACHU_SIZE;
    const left = Math.ceil((window.innerWidth - MAP_SIZE) / 2);

    return {
      top,
      bottom,
      right,
      left,
    };
  }, []);

  const [position, setPosition] = useState({ x: mapArea.left, y: mapArea.top });
  const [isJumping, setIsJumping] = useState(false);
  const [isRightDirection, setIsRightDirection] = useState(true);

  const handleCharacter = (event) => {
    switch (event.key) {
      case "ArrowUp":
        setPosition((prev) => ({
          ...prev,
          y: Math.max(prev.y - PIKACHU_SIZE, mapArea.top),
        }));
        break;
      case "ArrowDown":
        setPosition((prev) => ({
          ...prev,
          y: Math.min(prev.y + PIKACHU_SIZE, mapArea.bottom),
        }));
        break;
      case "ArrowRight":
        setPosition((prev) => ({
          ...prev,
          x: Math.min(prev.x + PIKACHU_SIZE, mapArea.right),
        }));
        setIsRightDirection(true);
        break;
      case "ArrowLeft":
        setPosition((prev) => ({
          ...prev,
          x: Math.max(prev.x - PIKACHU_SIZE, mapArea.left),
        }));
        setIsRightDirection(false);
        break;
      case " ":
        event.preventDefault();
        if (isJumping || position.y <= mapArea.top) {
          return;
        }
        setIsJumping((isJumping) => !isJumping);
        setPosition((prev) => ({ ...prev, y: prev.y - PIKACHU_SIZE }));
        setTimeout(() => {
          setIsJumping((isJumping) => !isJumping);

          setPosition((prev) => ({ ...prev, y: prev.y + PIKACHU_SIZE }));
        }, 200);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleCharacter);

    return () => {
      window.removeEventListener("keydown", handleCharacter);
    };
  }, [position]);

  return (
    <div
      style={{
        width: `${PIKACHU_SIZE}px`,
        height: `${PIKACHU_SIZE}px`,
        backgroundImage: `url(${pikachu})`,
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: isRightDirection ? "scaleX(1)" : "scaleX(-1)",
      }}
      className={styles.pikachu}
    ></div>
  );
}
