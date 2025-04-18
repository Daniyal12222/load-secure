import Snavbar from "./components/snavbar";
import pdficon from "./assets/pdf.png";
import logo from "./assets/logo.png";
import { useState } from "react";

function Documents() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full relative dark:!bg-[#232728] bg-gray-50  min-h-[100vh]">
      <div className="w-full">
        <Snavbar />
      </div>

      {/* Pdf Dialog */}
      {open && <PdfD onClose={handleClose} />}

      <div className="w-full py-4 px-6">
        {/* Filter + Search + Add */}
        <div className="w-full rounded-md dark:bg-[#2d353a] dark:text-white  flex items-center p-2 bg-white">
          <div className="flex gap-3 w-70 p-2">
            {/* Type Filter */}
            <div className="relative">
              <label className="absolute text-xs text-gray-400 dark:!bg-[#2d353a] dark:text-white bg-white left-3 -top-2">
                Type
              </label>
              <select className="px-6 py-2 rounded border border-gray-300">
                <option value="all">All</option>
              </select>
            </div>
            {/* Modified Filter */}
            <div className="relative">
              <label className="absolute text-xs text-gray-400 dark:!bg-[#2d353a] dark:text-white bg-white left-3 -top-2">
                Modified
              </label>
              <select className="px-6 py-2 rounded border border-gray-300">
                <option value="all">All</option>
              </select>
            </div>
          </div>

          {/* Search & Add Button */}
          <div className="w-full">
            <div className="w-full px-4 flex justify-between dark:bg-[#2d353a] dark:text-white  items-center bg-white rounded-md">
              <label htmlFor="search" className="w-4/5 relative">
                <p className="absolute right-3 text-neutral-400 top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
                <input
                  type="text"
                  id="search"
                  placeholder="Search Ouders"
                  className="w-full px-3 py-2 rounded focus:outline-none border border-neutral-300"
                />
              </label>
              <button
                className="flex gap-3 text-black !bg-amber-300 px-4 py-2 text-sm rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Add New
              </button>
            </div>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="w-full bg-white dark:bg-[#363f42]   rounded-md mt-5 p-2">
          {/* Template Section */}
          <div className="w-full">
            <div className="w-full px-4 py-2 bg-amber-300 rounded-md">
              <p className="font-semibold text-black">Template</p>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-4">
              <div className="flex rounded mt-2 p-3">
                <div className="w-full dark:bg-[#2d353a] dark:text-white ps-2 bg-gray-100 flex items-center justify-center">
                  <img src={pdficon} alt="pdf" className="w-10 h-fit" />
                  <div className="w-full p-3 text-sm dark:text-white text-gray-600">
                    <p className="font-semibold">All Trips</p>
                    <p className="text-xs dark:text-neutral-500 text-neutral-500">
                      Last Activity : 02/02/2024
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <div className="w-full mt-6">
            <div className="w-full px-4 py-2 bg-amber-300 rounded-md">
              <p className="font-semibold">Documents</p>
            </div>
            <div className="w-full grid  grid-cols-2 md:grid-cols-4">
              {/* pdf */}
              <div className="flex mt-2 p-3">
                <div
                  className="w-full ps-2 dark:bg-[#2d353a] dark:text-white bg-gray-100 flex items-center justify-center cursor-pointer"
                  onClick={handleOpen}
                >
                  <img src={pdficon} alt="pdf" className="w-10 h-fit" />
                  <div className="w-full p-3 text-sm text-gray-600">
                    <p className="font-semibold dark:text-white">All Trips</p>
                    <p className="text-xs text-neutral-500">
                      Last Activity : 02/02/2024
                    </p>
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* pdf */}
              <div className="flex mt-2 p-3">
                <div
                  className="w-full ps-2 dark:bg-[#2d353a] dark:text-white bg-gray-100 flex items-center justify-center cursor-pointer"
                  onClick={handleOpen}
                >
                  <img src={pdficon} alt="pdf" className="w-10 h-fit" />
                  <div className="w-full p-3 text-sm text-gray-600">
                    <p className="font-semibold dark:text-white">All Trips</p>
                    <p className="text-xs text-neutral-500">
                      Last Activity : 02/02/2024
                    </p>
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* pdf */}
              <div className="flex mt-2 p-3">
                <div
                  className="w-full ps-2 dark:bg-[#2d353a] dark:text-white bg-gray-100 flex items-center justify-center cursor-pointer"
                  onClick={handleOpen}
                >
                  <img src={pdficon} alt="pdf" className="w-10 h-fit" />
                  <div className="w-full p-3 text-sm text-gray-600">
                    <p className="font-semibold dark:text-white">All Trips</p>
                    <p className="text-xs text-neutral-500">
                      Last Activity : 02/02/2024
                    </p>
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* pdf */}
              <div className="flex mt-2 p-3">
                <div
                  className="w-full ps-2 dark:bg-[#2d353a] dark:text-white bg-gray-100 flex items-center justify-center cursor-pointer"
                  onClick={handleOpen}
                >
                  <img src={pdficon} alt="pdf" className="w-10 h-fit" />
                  <div className="w-full p-3 text-sm text-gray-600">
                    <p className="font-semibold dark:text-white">All Trips</p>
                    <p className="text-xs text-neutral-500">
                      Last Activity : 02/02/2024
                    </p>
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* pdf */}
              <div className="flex mt-2 p-3">
                <div
                  className="w-full ps-2 dark:bg-[#2d353a] dark:text-white bg-gray-100 flex items-center justify-center cursor-pointer"
                  onClick={handleOpen}
                >
                  <img src={pdficon} alt="pdf" className="w-10 h-fit" />
                  <div className="w-full p-3 text-sm text-gray-600">
                    <p className="font-semibold dark:text-white">All Trips</p>
                    <p className="text-xs text-neutral-500">
                      Last Activity : 02/02/2024
                    </p>
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* pdf */}
              <div className="flex mt-2 p-3">
                <div
                  className="w-full ps-2 dark:bg-[#2d353a] dark:text-white bg-gray-100 flex items-center justify-center cursor-pointer"
                  onClick={handleOpen}
                >
                  <img src={pdficon} alt="pdf" className="w-10 h-fit" />
                  <div className="w-full p-3 text-sm text-gray-600">
                    <p className="font-semibold dark:text-white">All Trips</p>
                    <p className="text-xs text-neutral-500">
                      Last Activity : 02/02/2024
                    </p>
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* pdf */}
              <div className="flex mt-2 p-3">
                <div
                  className="w-full ps-2 dark:bg-[#2d353a] dark:text-white bg-gray-100 flex items-center justify-center cursor-pointer"
                  onClick={handleOpen}
                >
                  <img src={pdficon} alt="pdf" className="w-10 h-fit" />
                  <div className="w-full p-3 text-sm text-gray-600">
                    <p className="font-semibold dark:text-white">All Trips</p>
                    <p className="text-xs text-neutral-500">
                      Last Activity : 02/02/2024
                    </p>
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* pdf */}
              <div className="flex mt-2 p-3">
                <div
                  className="w-full ps-2 dark:bg-[#2d353a] dark:text-white bg-gray-100 flex items-center justify-center cursor-pointer"
                  onClick={handleOpen}
                >
                  <img src={pdficon} alt="pdf" className="w-10 h-fit" />
                  <div className="w-full p-3 text-sm text-gray-600">
                    <p className="font-semibold dark:text-white">All Trips</p>
                    <p className="text-xs text-neutral-500">
                      Last Activity : 02/02/2024
                    </p>
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* pdf */}
              <div className="flex mt-2 p-3">
                <div
                  className="w-full ps-2 dark:bg-[#2d353a] dark:text-white bg-gray-100 flex items-center justify-center cursor-pointer"
                  onClick={handleOpen}
                >
                  <img src={pdficon} alt="pdf" className="w-10 h-fit" />
                  <div className="w-full p-3 text-sm text-gray-600">
                    <p className="font-semibold dark:text-white">All Trips</p>
                    <p className="text-xs text-neutral-500">
                      Last Activity : 02/02/2024
                    </p>
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* pdf */}
              <div className="flex mt-2 p-3">
                <div
                  className="w-full ps-2 dark:bg-[#2d353a] dark:text-white bg-gray-100 flex items-center justify-center cursor-pointer"
                  onClick={handleOpen}
                >
                  <img src={pdficon} alt="pdf" className="w-10 h-fit" />
                  <div className="w-full p-3 text-sm text-gray-600">
                    <p className="font-semibold dark:text-white">All Trips</p>
                    <p className="text-xs text-neutral-500">
                      Last Activity : 02/02/2024
                    </p>
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* pdf */}
              <div className="flex mt-2 p-3">
                <div
                  className="w-full ps-2 dark:bg-[#2d353a] dark:text-white bg-gray-100 flex items-center justify-center cursor-pointer"
                  onClick={handleOpen}
                >
                  <img src={pdficon} alt="pdf" className="w-10 h-fit" />
                  <div className="w-full p-3 text-sm text-gray-600">
                    <p className="font-semibold dark:text-white">All Trips</p>
                    <p className="text-xs text-neutral-500">
                      Last Activity : 02/02/2024
                    </p>
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* pdf */}
              <div className="flex mt-2 p-3">
                <div
                  className="w-full ps-2 dark:bg-[#2d353a] dark:text-white bg-gray-100 flex items-center justify-center cursor-pointer"
                  onClick={handleOpen}
                >
                  <img src={pdficon} alt="pdf" className="w-10 h-fit" />
                  <div className="w-full p-3 text-sm text-gray-600">
                    <p className="font-semibold dark:text-white">All Trips</p>
                    <p className="text-xs text-neutral-500">
                      Last Activity : 02/02/2024
                    </p>
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documents;

function PdfD({ onClose }) {
  return (
    <div
      className="fixed z-20  inset-0 bg-gray-800/70 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[90vw] md:w-[60vw] dark:bg-[#363f42] grid grid-cols-3 gap-2 bg-white p-5 h-[80vh]"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        {/* Left: Detail */}
        <div className="overflow-y-auto scrollbar col-span-2">
          <div className="p-4 border bg-white  mr-2 rounded">
            <div className="w-full flex">
              <div className="w-50 p-5 flex justify-center items-center">
                <img src={logo} className="h-15 w-40" alt="logo" />
              </div>
              <div className="w-full p-4">
                <p className="text-xs text-end">(808) 555-0111</p>
                <p className="text-xs text-end">willie.jennings@example.com</p>
                <p className="text-xs text-end">
                  8502 Preston Rd. Inglewood, Maine 98380
                </p>
              </div>
            </div>
            <div className="w-full mt-4 rounded bg-black">
              <div className="w-40 h-1 bg-amber-300 rounded"></div>
            </div>
            <div className="w-full p-2">
              <table className="w-full text-xs">
                <tbody>
                  <tr>
                    <td className="text-neutral-500">To:</td>
                    <td className="font-semibold text-end">Feb-02-2024</td>
                  </tr>
                  <tr>
                    <td>Recipient</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="text-neutral-500">(684) 555-0102</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="text-neutral-500">
                      felicia.reid@example.com
                    </td>
                  </tr>
                  <tr>
                    <td className="text-neutral-500">
                      2118 Thornridge Cir. Syracuse, Connecticut 35624
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-full p-2">
              <p className=" font-semibold my-2  text-sm">Dear Recipient. </p>
              <p className="text-xs ">
                Lorem ipsum dolor sit amet consectetur. Convallis ornare eget
                aenean diam egestas semper hendrerit scelerisque. Aenean tortor
                accumsan ullamcorper tellus eget sit neque eu odio. Consectetur
                proin elementum quisque urna sit velit urna viverra praesent. Mi
                nisl est mauris arcu at enim auctor blandit vitae. Scelerisque
                euismod molestie diam convallis porttitor a sapien. Feugiat diam
                nisl non mauris aenean. Gravida id integer nunc nibh ac eleifend
                sed. Duis curabitur a sit rhoncus. A tortor sed vestibulum odio.
                Euismod felis semper in platea. Quam eget orci lacus gravida
                dignissim integer aenean in. Gravida consequat eget vestibulum
                fermentum vestibulum. Praesent lacus turpis maecenas fusce ut.
                Sed vel tincidunt augue gravida. Risus metus sit tempus dictum
                justo quis egestas blandit enim. Ac sagittis nibh odio leo
                augue. Sit duis lectus egestas cursus. Praesent risus tellus
                ullamcorper cras aliquam. Id hendrerit ut diam aenean faucibus.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Empty for now */}
        <div className="rounded p-5 dark:bg-[#2d353a]  bg-gray-100">
          <div className="w-full px-4 py-2 rounded bg-amber-300 ">
            <p className="font-semibold">History</p>
          </div>
          <div className="mt-5 dark:text-white">
            <p className="text-xs  font-semibold my-3">Uploaded</p>
            <p className=" text-xs font-">
              Via Portal by Abbi CampA - 02/02/2024
            </p>
            <p className=" text-xs">
              09:32 (EST) - 1831 Mears Avenue, Cincinnati, OH 45230,USA -{" "}
            </p>
            <p className=" text-xs ">Desktop IP: 72.49.254.174</p>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute dark:!bg-[#2d353a] dark:text-white top-5 right-5 text-black hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
}
