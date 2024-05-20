import grass from "@/assets/grass.png";
import { MAP_SIZE, PIKACHU_SIZE } from "@/config.js";
import styles from "./Field.module.css";

export default function Field() {
  return (
    <div
      className={styles.field}
      style={{
        width: `${MAP_SIZE}px`,
        height: `${MAP_SIZE}px`,
        backgroundSize: `${PIKACHU_SIZE}px`,
        backgroundImage: `url(${grass})`,
      }}
    ></div>
  );
}
