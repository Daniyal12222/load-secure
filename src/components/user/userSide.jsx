import Logo from "../../assets/logo.png";
import grid from "../../assets/grid.svg";
import WhiteLogo from "../../assets/whiteLogs.png";
import { useState , useEffect } from "react";

function UserSide() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, [theme]);

  return (
    <div className=" w-[100vw] md:w-1/6 dark:bg-[#363f42] md:h-[100vh]  md:overflow-y-auto scrollbar   bg-white">
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
      <div className=" bg-amber-300 flex justify-between items-center px-4 py-2 rounded-xl w-40">
          <p className="w-40 text-md font-semibold ">Shiper</p>
          <img src={grid} alt="" className="w-5 h-5" />
        </div>
      </div>
      <div className="w-full p-4">
        <div className="px-2">
          <p className="text-neutral-500 dark:!text-white text-xs">Filter by:</p>
        </div>
        <div className="w-full p-4 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <p className="text-amber-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
                  clip-rule="evenodd"
                />
              </svg>
            </p>
            <p className="dark:!text-white">All</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-amber-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                  clip-rule="evenodd"
                />
              </svg>
            </p>
            <p className="dark:!text-white">Company</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-amber-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                  clip-rule="evenodd"
                />
                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
              </svg>
            </p>
            <p className="dark:!text-white">Grop</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSide;
