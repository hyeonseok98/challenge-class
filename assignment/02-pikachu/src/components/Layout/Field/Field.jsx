import grass from "@/assets/grass.png";
import styles from "./Field.module.css";

export default function Field({ mapSize, pikachuSize }) {
  return (
    <div
      className={styles.field}
      style={{
        width: `${mapSize}px`,
        height: `${mapSize}px`,
        backgroundSize: `${pikachuSize}px`,
        backgroundImage: `url(${grass})`,
      }}
    ></div>
  );
}
