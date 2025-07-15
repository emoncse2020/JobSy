import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <header className="px-16 py-3">
        <Navbar></Navbar>
      </header>
      <div className="w-7xl mx-auto">
        {" "}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
