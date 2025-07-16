import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
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

  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log("successfully sign out");
      })
      .catch((error) => {
        console.log("Failed to sign out.");
      });
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
      <div className="navbar ">
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
          <Link
            to={"/"}
            className="flex items-center gap-2 text-xl font-display"
          >
            <img className="w-10" src={logo} alt="" />
            <p className="text-[#6CD7E3] font-extrabold text-2xl">JobSy</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Button</a> */}
          {user ? (
            <>
              <button onClick={handleSignOut} className="btn">
                Sign Out
              </button>
            </>
          ) : (
            <div>
              <Link to={"/signIn"}>Sing In</Link>
            </div>
          )}
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
