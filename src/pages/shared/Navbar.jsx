import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggleTheme = (e) => {
    if (e.target.checked) {
      setTheme("luxury");
    } else {
      setTheme("light");
    }
  };

  const menu = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive ? "bg-green-400 mx-2" : "mx-2";
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/signIn"}
          className={({ isActive }) => {
            return isActive ? "bg-green-400 mx-2" : "mx-2";
          }}
        >
          Sign In
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/register"}
          className={({ isActive }) => {
            return isActive ? "bg-green-400 mx-2" : "mx-2";
          }}
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive ? "bg-green-400 mx-2" : "mx-2";
          }}
        >
          Home 2
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menu}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-display">JobSy</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
        <label className="flex cursor-pointer ml-4">
          <p className="mr-1">
            {theme === "light" ? (
              <span className="label-text">Luxury</span>
            ) : (
              <span className="label-text">Light</span>
            )}
          </p>

          <input
            onChange={handleToggleTheme}
            type="checkbox"
            value=""
            className="toggle theme-controller"
          />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
