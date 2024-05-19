import grass from "@/assets/grass.png";
import Field from "./Field";

export default function Layout({ children, mapSize, pikachuSize }) {
  return (
    <>
      <Field texture={grass} mapSize={mapSize} pikachuSize={pikachuSize} />
      {children}
    </>
  );
}
