import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import avatar from "../assets/profile.png";
import { Link } from "react-router-dom";
import EditProfile from "./profile";
import Switch from "./darkmode";


function Navbar({ toggleTheme, currentTheme }) {
  const location = useLocation();
  const [activePage, setActivePage] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <div
      className={`w-full relative dark:bg-amber-300 dark:text-black bg-white `}
    >
      {open && <EditProfile onClose={handleClose} />}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Navigation Items */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                to={item.path}
                key={item.path}
                className={`cursor-pointer hover:!underline text-sm dark:!text-black   md:text-base ${
                  activePage === item.path
                    ? "!font-bold !text-amber-300 dark:!text-black !underline"
                    : "hover:!text-amber-300 dark:hover:!text-black"
                }`}
                style={{ color: "gray" }}
              >
                {item.name}
              </Link>
            ))}
          </ul>
          {/* Mobile Menu Button */}
          <div className="md:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.5 6.75a.75.75 0 0 1 .75-.75h14.25a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75ZM4.5 12a.75.75 0 0 1 .75-.75h14.25a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75ZM4.5 17.25a.75.75 0 0 1 .75-.75h14.25a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Belicon />
            <div
              onClick={handleOpen}
              className="flex items-center space-x-2 p-1"
            >
              <img
                src={avatar}
                className="h-8 w-8 rounded-full"
                alt="User Avatar"
              />
              <div>
                <p className="text-xs font-semibold">John Doe</p>
                <p className="text-xs text-gray-400">john@doe.com</p>
              </div>
            </div>
            <Switch toggleTheme={toggleTheme} currentTheme={currentTheme} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

export function Belicon() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative " onClick={() => setIsOpen(!isOpen)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
          clipRule="evenodd"
        />
      </svg>
      <div className=" bg-amber-300 dark:bg-red-500 rounded-full border-2 border-white absolute  -right-2 px-1 -top-2"><p className="dark:text-white text-xs">4</p></div>
      {isOpen && (
      <div className=" absolute dark:bg-[#2d353a] dark:text-white overflow-y-auto scrollbar max-h-[90vh] -right-15 rounded  top-13  z-100 border bg-white w-[25vw] p-3 ">
        <p className="w-full  font-semibold text-center">Notification</p>
        <p className="w-full text-xs font-semibold dark:text-neutral-400 text-neutral-500 text-end">
          Mark all read
        </p>
        {/* message */}
        <div className="w-full  border-2 rounded p-2 border-amber-300 mt-2">
          <p className="text-sm dark:!text-white text-neutral-500 py-0.5">New Message</p>
          <p className="text-sm dark:!text-white text-neutral-500 py-0.5">PO#130366-1 Aemaniner message </p>
          <p className="text-sm dark:!text-white text-neutral-500 py-0.5">empty</p>
          <p className="text-sm dark:text-neutral-300 text-neutral-700 text-end">an hour ago</p>
        </div>
        <div className="w-full  border-2 rounded p-2 border-amber-300 mt-2">
          <p className="text-sm dark:!text-white text-neutral-500 py-0.5">New Message</p>
          <p className="text-sm dark:!text-white text-neutral-500 py-0.5">PO#130366-1 Aemaniner message </p>
          <p className="text-sm dark:!text-white text-neutral-500 py-0.5">empty</p>
          <p className="text-sm dark:text-neutral-300 text-neutral-700 text-end">an hour ago</p>
        </div>
        <div className="w-full  border-2 rounded p-2 border-amber-300 mt-2">
          <p className="text-sm dark:!text-white text-neutral-500 py-0.5">New Message</p>
          <p className="text-sm dark:!text-white text-neutral-500 py-0.5">PO#130366-1 Aemaniner message </p>
          <p className="text-sm dark:!text-white text-neutral-500 py-0.5">empty</p>
          <p className="text-sm dark:text-neutral-300 text-neutral-700 text-end">an hour ago</p>
        </div>
        <div className="w-full  border-2 rounded p-2 border-amber-300 mt-2">
          <p className="text-sm dark:!text-white text-neutral-500 py-0.5">New Message</p>
          <p className="text-sm dark:!text-white text-neutral-500 py-0.5">PO#130366-1 Aemaniner message </p>
          <p className="text-sm dark:!text-white text-neutral-500 py-0.5">empty</p>
          <p className="text-sm dark:text-neutral-300 text-neutral-700 text-end">an hour ago</p>
        </div>
      </div>
      )}
    </div>
  );
}