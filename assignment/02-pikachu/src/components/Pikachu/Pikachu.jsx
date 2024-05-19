import pikachu from "@/assets/pikachu.png";
import { useEffect, useMemo, useState } from "react";
import styles from "./Pikachu.module.css";

// 피카츄의 이동 담당 컴포넌트(상,하,좌,우 이동 및 점프 기능)
export default function Pikachu({ mapSize, pikachuSize }) {
  // Map 반경 계산
  const mapArea = useMemo(() => {
    const MAP_TOP = Math.ceil((window.innerHeight - mapSize) / 2);
    const MAP_BOTTOM =
      Math.ceil((window.innerHeight + mapSize) / 2) - pikachuSize;
    const MAP_RIGHT = Math.ceil(window.innerWidth + mapSize) / 2 - pikachuSize;
    const MAP_LEFT = Math.ceil((window.innerWidth - mapSize) / 2);

    return {
      top: MAP_TOP,
      bottom: MAP_BOTTOM,
      right: MAP_RIGHT,
      left: MAP_LEFT,
    };
  }, []);

  const [position, setPosition] = useState({ x: mapArea.left, y: mapArea.top });
  const [isJumping, setIsJumping] = useState(false);
  const [isRightDirection, setIsRightDirection] = useState(true);

  useEffect(() => {
    window.addEventListener("keydown", handleCharacter);

    return () => {
      window.removeEventListener("keydown", handleCharacter);
    };
  }, [position]);

  const handleCharacter = (event) => {
    switch (event.key) {
      case "ArrowUp":
        setPosition((prev) => ({
          ...prev,
          y: Math.max(prev.y - pikachuSize, mapArea.top),
        }));
        break;
      case "ArrowDown":
        setPosition((prev) => ({
          ...prev,
          y: Math.min(prev.y + pikachuSize, mapArea.bottom),
        }));
        break;
      case "ArrowRight":
        setPosition((prev) => ({
          ...prev,
          x: Math.min(prev.x + pikachuSize, mapArea.right),
        }));
        setIsRightDirection(true);
        break;
      case "ArrowLeft":
        setPosition((prev) => ({
          ...prev,
          x: Math.max(prev.x - pikachuSize, mapArea.left),
        }));
        setIsRightDirection(false);
        break;
      case " ":
        if (isJumping || mapArea.top > position.y - pikachuSize) return;
        setIsJumping(true);
        setPosition((prev) => ({ ...prev, y: prev.y - pikachuSize }));
        setTimeout(() => {
          setIsJumping(false);
          setPosition((prev) => ({ ...prev, y: prev.y + pikachuSize }));
        }, 200);
        break;
      default:
        break;
    }
  };

  return (
    <div
      style={{
        width: `${pikachuSize}px`,
        height: `${pikachuSize}px`,
        backgroundImage: `url(${pikachu})`,
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: isRightDirection ? "scaleX(1)" : "scaleX(-1)",
      }}
      className={styles.pikachu}
    ></div>
  );
}
