import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "./../components/Footer";

function DefaultLayout() {
  return (
    <div id="default-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
