import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import avatar from "../assets/profile.png";

function Snavbar() {
  const [activePage, setActivePage] = useState("");

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
    <div className="w-full flex flex-wrap bg-white items-center justify-between border-b border-neutral-300 px-3 py-1">
      {/* Logo */}
      <div className="px-4 py-2">
        <img src={Logo} alt="Logo" className="w-24 sm:w-25" />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-3 sm:gap-4">
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              to={item.path}
              key={item.path}
              className={`cursor-pointer hover:!underline text-sm md:text-base ${
                activePage === item.path
                  ? "!font-bold !text-amber-400 !underline"
                  : "hover:!text-amber-400"
              }`}
              style={{ color: "gray" }}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      {/* Profile & Notifications */}
      <div  className="flex items-center space-x-4">
        {/* Notification Icon */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="w-3 h-3 bg-amber-400 rounded-full border-2 border-white absolute right-0 top-0"></div>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-2 px-5">
          <img
            src={avatar}
            className="h-8 w-8 rounded-full"
            alt="User Avatar"
          />
          <p className="text-xs font-semibold text-black">John Doe</p>
        </div>
      </div>
    </div>
  );
}

export default Snavbar;
