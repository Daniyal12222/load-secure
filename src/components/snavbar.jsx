import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import avatar from "../assets/profile.png";

function Snavbar() {
  const location = useLocation();

  return (
    <div className="w-full flex flex-wrap items-center justify-between border-b border-neutral-300 px-3 py-2">
      {/* Logo */}
      <div className="px-4 py-3">
        <img src={Logo} alt="Logo" className="w-24 sm:w-32" />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {[
          { name: "Order", path: "/" },
          { name: "Drivers", path: "/driver" },
          { name: "Shippers", path: "/shipper" },
          { name: "Users", path: "/users" },
          { name: "Companies", path: "/companies" },
          { name: "Metrics", path: "/metrics" },
          { name: "Group", path: "/group" },
          { name: "Documents", path: "/documents" },
        ].map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className={`!text-neutral-700 hover:!text-amber-400  text-[15px] font-light ${
              location.pathname === path ? "!font-bold !underline" : ""
            }`}
            style={{ color: "#000" }} // Ensures black text
          >
            {name}
          </Link>
        ))}
      </nav>

      {/* Profile & Notifications */}
      <div className="flex items-center space-x-4">
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
          <img src={avatar} className="h-8 w-8 rounded-full" alt="User Avatar" />
          <p className="text-xs font-semibold text-black">John Doe</p>
        </div>
      </div>
    </div>
  );
}

export default Snavbar;
