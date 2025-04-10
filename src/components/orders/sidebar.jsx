import Logo from "../../assets/logo.png";
import WhiteLogo from "../../assets/whiteLogs.png";
import grid from "../../assets/grid.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function OderSide() {
  const [openMenu, setOpenMenu] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  useEffect(() => {
    console.log(theme);
  }, [theme]);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className=" w-[100vw] dark:bg-[#363f42] md:w-1/6 md:h-[100vh]  md:overflow-y-auto scrollbar   bg-white">
      {/* logo */}
      <div className="w-full hidden  md:flex justify-center pt-3 relative">
        <img
          src={theme === "dark" ? WhiteLogo : Logo}
          alt=""
          className="w-30 "
        />
      </div>
      {/*  */}
      <div className="w-full hidden  md:flex justify-center  pt-6">
        <div className=" bg-amber-400 flex justify-between items-center px-4 py-2 rounded-xl w-40">
          <p className="w-40 text-md font-semibold ">Your Order</p>
          <img src={grid} alt="" className="w-5 h-5" />
        </div>
      </div>
      {/* menu */}
      <div className="w-full flex  md:flex-col justify-center items-center scrollbar overflow-x-auto py-4 px-6 mt-4">
        <div className="w-full text-xs ">
          <div
            className="md:w-full flex gap-3 justify-between items-center w-full cursor-pointer"
            onClick={() => toggleMenu("Shipment Status")}
          >
            <p className="text-[#ffbb00] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
              </svg>
            </p>
            <p className=" font-bold dark:text-white">Shipment Status</p>
            <p className="text-[#afaeaa] ">
              {openMenu === "Shipment Status" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </p>
          </div>
          {/* sub menu */}
          {openMenu === "Shipment Status" && (
            <div className="w-full flex  flex-col   justify-center  mt-4">
              <Link to="#" className="py-2 dark:!text-white px-4" style={{ color: "black" }}>
                Non-Dispatched
              </Link>
              <Link to="#" className="py-2 dark:!text-white px-3" style={{ color: "black" }}>
                Dispatched
              </Link>
              <Link to="#" className="py-2 dark:!text-white px-3" style={{ color: "black" }}>
                Delivered
              </Link>
              <Link to="#" className="py-2 dark:!text-white px-3" style={{ color: "black" }}>
                Expired
              </Link>
            </div>
          )}
        </div>
        {/* menu */}
        <div className="w-full mt-5">
          <div
            className="w-full flex gap-3 text-xs justify-between  items-center cursor-pointer"
            onClick={() => toggleMenu("On-Time Slots")}
          >
            <p className="text-[#ffbb00] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                  clip-rule="evenodd"
                />
              </svg>
            </p>
            <p className=" font-bold dark:text-white">On-Time Slots</p>
            <p className="text-[#afaeaa] ">
              {openMenu === "Shipment Status" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </p>
          </div>
          {/* sub menu */}
          {openMenu === "On-Time Slots" && (
            <div className="w-full text-xs flex  flex-col  justify-center  mt-4">
              <Link to="#" className="py-2 dark:!text-white  px-4" style={{ color: "black" }}>
                On-Time
              </Link>
              <Link to="#" className="py-2 dark:!text-white  px-3" style={{ color: "black" }}>
                At-Risk
              </Link>
              <Link to="#" className="py-2 dark:!text-white  px-3" style={{ color: "black" }}>
                Late
              </Link>
            </div>
          )}
        </div>
        {/* menu */}
        <div className="w-full mt-5 ">
          <div
            className="w-full flex gap-3 text-xs justify-between  items-center cursor-pointer"
            onClick={() => toggleMenu("Driver Status")}
          >
            <p className="text-[#ffbb00] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clip-rule="evenodd"
                />
              </svg>
            </p>
            <p className=" font-bold dark:text-white">Driver Status</p>
            <p className="text-[#afaeaa] ">
              {openMenu === "Shipment Status" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </p>
          </div>
          {/*sub menu */}
          {openMenu === "Driver Status" && (
            <div className="w-full text-xs flex  flex-col  justify-center  mt-4">
              <Link to="#" className="py-2 dark:!text-white  px-4" style={{ color: "black" }}>
                Active
              </Link>
              <Link to="#" className="py-2 dark:!text-white  px-3" style={{ color: "black" }}>
                Inactive
              </Link>
              <Link to="#" className="py-2 dark:!text-white  px-3" style={{ color: "black" }}>
                Not Connected
              </Link>
            </div>
          )}
        </div>
        {/* menu */}
        <div className="w-full mt-5">
          <div
            className="w-full flex justify-between text-xs gap-3 items-center cursor-pointer"
            onClick={() => toggleMenu("PO Owner")}
          >
            <p className="text-[#ffbb00] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
              </svg>
            </p>
            <p className=" font-bold dark:text-white">PO Owner</p>
            <p className="text-[#afaeaa] ">
              {openMenu === "Shipment Status" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </p>
          </div>
          {/* sub menu */}
          {openMenu === "PO Owner" && (
            <div className="w-full flex text-xs  flex-col  justify-center  mt-4">
              <Link to="#" className="py-2 dark:!text-white px-4" style={{ color: "black" }}>
                Company
              </Link>
              <Link to="#" className="py-2 dark:!text-white px-3" style={{ color: "black" }}>
                Shipper
              </Link>
              <Link to="#" className="py-2 dark:!text-white px-3" style={{ color: "black" }}>
                Group
              </Link>
              <Link to="#" className="py-2 dark:!text-white px-3" style={{ color: "black" }}>
                User
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OderSide;
