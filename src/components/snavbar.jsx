import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import avatar from "../assets/profile.png";
import { Belicon } from "./navear";
import Switch from "./darkmode";
import WhiteLogo from "../assets/whiteLogs.png";

function Snavbar() {
  const [activePage, setActivePage] = useState("");
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState("light");


  useEffect(() => {
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
    console.log(storedTheme);
  }, []);

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  const navItems = [
    { name: "Order", path: "/" },
    { name: "Drivers", path: "/drivers" },
    { name: "Shippers", path: "/shippers" },
    { name: "Users", path: "/users" },
    { name: "Companies", path: "/companies" },
    { name: "Metrics", path: "/metrics" },
    { name: "Group", path: "/group" },
    { name: "Documents", path: "/documents" },
  ];

  return (
    <div className="w-full dark:bg-amber-300 flex flex-wrap bg-white items-center justify-between border-b border-neutral-300 px-3 py-1">
      {/* Logo */}
      <div className="px-4 py-2">
        <img src={theme === "dark" ? WhiteLogo : Logo} alt="Logo" className="w-24 sm:w-25" />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-3 sm:gap-4">
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              to={item.path}
              key={item.path}
              className={`cursor-pointer hover:!underline dark:!text-black text-sm md:text-base ${
                activePage === item.path
                  ? "!font-bold !text-amber-300 dark:!text-black  !underline"
                  : "hover:!text-amber-300 dark:hover:!text-black"
              }`}
              style={{ color: "gray" }}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      {/* Profile & Notifications */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <Belicon />
        {/* User Profile */}
        <div className="flex items-center space-x-2 px-5">
          <img
            src={avatar}
            className="h-8 w-8 rounded-full"
            alt="User Avatar"
          />
          <p className="text-xs font-semibold text-black">John Doe</p>
        </div>
        <Switch />
      </div>
    </div>
  );
}

export default Snavbar;
