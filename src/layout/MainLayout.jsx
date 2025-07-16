import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="bg-base-300 sticky top-0 z-10">
        <header className=" container mx-auto sticky top-0 z-10">
          <Navbar></Navbar>
        </header>
      </div>
      <div className="w-11/12 mx-auto">
        {" "}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
