import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink, Navigate } from "react-router-dom";

import logo from "../../assets/thanksgiving.png";


import { Tooltip } from "react-tooltip";
import useAuth from "../../Hooks/useAuth";
const Nav = () => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "light");

  useEffect(() => {
    // Update local storage whenever theme changes
    localStorage.setItem("theme", theme);
    // Apply the theme to the HTML element
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

 const handleToggle = () => {
    // Toggle between "light" and "dark" themes
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  // console.log(theme);
  const { logOut, user } = useAuth();
  // console.log(user);

  const [openNav, setOpenNav] = React.useState(false);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
    Navigate("/");
  };
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 pl-4 lg:pr-12 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/"
         className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#f9a06f] border-b-4 font-bold border-[#f9a06f]"
              : "hover:text-[#f9a06f] font-bold"
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
           to="/available-foods"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#f9a06f] border-b-4 font-bold border-[#f9a06f]"
              : "hover:text-[#f9a06f] font-bold"
          }
        >
         Available Foods
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
         to="/add-food"
         className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#f9a06f] border-b-4 font-bold border-[#f9a06f]"
              : "hover:text-[#f9a06f] font-bold"
          }
        >
          Add Food
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
           to="/manage-my-food"
        className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#f9a06f] border-b-4 font-bold border-[#f9a06f]"
              : "hover:text-[#f9a06f] font-bold"
          }
        >
            Manage  My Food
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/my-food-request"
       className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#f9a06f] border-b-4 font-bold border-[#f9a06f]"
              : "hover:text-[#f9a06f] font-bold"
          }
        >
        My Food Request
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 md:w-12 md:h-12 rounded-full dark:bg-violet-600 hidden md:block">
              <img src={logo} alt="" />
            </div>
            <Typography
              as="a"
              href="#"
              className="mr-1 md:mr-2 cursor-pointer py-1.5 font-bold pl-2 md:pl-6 text-xl text-[#f9a06f]"
            >
           Surplus Saver
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {user ? (
              <div className="">
                <a
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={
                    user?.displayName || "user name not found"
                  }
                >
                  <label tabIndex={0} className="btn btn-circle avatar ">
                    <div className="w-12 rounded-full">
                      <img src={user?.photoURL || ""} className="" />
                    </div>
                  </label>
                </a>
                <Tooltip id="my-tooltip" />
                {/* <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-1 z-[1] pr-10 mr-4 rounded-box w-52"
                >
                  <li>
                    <button className="btn bg-primary text-white rounded">
                      {user?.displayName || "user name not found"}
                    </button>
                  </li>
                </ul> */}
              </div>
            ) : (
              <button></button>
            )}

            {user ? (
              <button
                onClick={handleSignOut}
                className="btn bg-[#f9a06f] text-white rounded "
              >
                {" "}
                LogOut
              </button>
            ) : (
              <div className="flex gap-2">
                <Link to="/login">
                  <button className="btn bg-[#f9a06f] text-white rounded ">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn bg-[#f9a06f] text-white rounded ">
                    Register
                  </button>
                </Link>
              </div>
            )}

            <label className="swap swap-rotate mr-2 ">
              <input
                type="checkbox"
                checked={theme === "dark"} // Check if the theme is "dark"
                onChange={handleToggle}
                className=" theme-controller"
              />
           {/* sun icon */}
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
            </label>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </div>
  );
};

export default Nav;