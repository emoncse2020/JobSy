import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <header className="px-16 pb-3 sticky top-0 z-10">
        <Navbar></Navbar>
      </header>
      <div className="w-11/12 mx-auto">
        {" "}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
