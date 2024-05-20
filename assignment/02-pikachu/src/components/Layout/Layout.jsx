import grass from "@/assets/grass.png";
import Field from "./Field";

export default function Layout({ children }) {
  return (
    <>
      <Field texture={grass} />
      {children}
    </>
  );
}
