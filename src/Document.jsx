import Snavbar from "./components/snavbar";
import pdficon from "./assets/pdf.png";
import logo from "./assets/logo.png";
import { useState } from "react";

function Documents() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full relative bg-gray-50 min-h-[100vh]">
      <div className="w-full">
        <Snavbar />
      </div>

      {/* Pdf Dialog */}
      {open && <PdfD onClose={handleClose} />}

      <div className="w-full py-4 px-6">
        {/* Filter + Search + Add */}
        <div className="w-full rounded-md flex items-center p-2 bg-white">
          <div className="flex gap-3 w-70 p-2">
            {/* Type Filter */}
            <div className="relative">
              <label className="absolute text-xs text-gray-400 bg-white left-3 -top-2">
                Type
              </label>
              <select className="px-6 py-2 rounded border border-gray-300">
                <option value="all">All</option>
              </select>
            </div>
            {/* Modified Filter */}
            <div className="relative">
              <label className="absolute text-xs text-gray-400 bg-white left-3 -top-2">
                Modified
              </label>
              <select className="px-6 py-2 rounded border border-gray-300">
                <option value="all">All</option>
              </select>
            </div>
          </div>

          {/* Search & Add Button */}
          <div className="w-full">
            <div className="w-full px-4 flex justify-between items-center bg-white rounded-md">
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
                className="flex gap-3 px-4 py-2 text-sm rounded text-white"
                style={{ backgroundColor: "#ffbb00" }}
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
        <div className="w-full bg-white rounded-md mt-5 p-2">
          {/* Template Section */}
          <div className="w-full">
            <div className="w-full px-4 py-2 bg-amber-400 rounded-md">
              <p className="font-semibold">Template</p>
            </div>
            <div className="w-full grid grid-cols-4">
              <div className="flex mt-2 p-3">
                <div className="w-full ps-2 bg-gray-100 flex items-center justify-center">
                  <img src={pdficon} alt="pdf" className="w-10 h-fit" />
                  <div className="w-full p-3 text-sm text-gray-600">
                    <p className="font-semibold">All Trips</p>
                    <p className="text-xs text-neutral-500">
                      Last Activity : 02/02/2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <div className="w-full mt-6">
            <div className="w-full px-4 py-2 bg-amber-400 rounded-md">
              <p className="font-semibold">Documents</p>
            </div>
            <div className="w-full grid grid-cols-4">
              <div className="flex mt-2 p-3">
                <div
                  className="w-full ps-2 bg-gray-100 flex items-center justify-center cursor-pointer"
                  onClick={handleOpen}
                >
                  <img src={pdficon} alt="pdf" className="w-10 h-fit" />
                  <div className="w-full p-3 text-sm text-gray-600">
                    <p className="font-semibold">All Trips</p>
                    <p className="text-xs text-neutral-500">
                      Last Activity : 02/02/2024
                    </p>
                  </div>
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
        className="fixed z-20 inset-0 bg-gray-800/70 flex justify-center items-center"
        onClick={onClose}
      >
        <div
          className="w-[70vw] grid grid-cols-2 bg-white p-5 h-[80vh]"
          onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
        >
          {/* Left: Detail */}
          <div className="overflow-y-auto">
            <div className="p-4 border rounded">
              <div className="w-full flex">
                <div className="w-50 p-2 flex justify-center items-center">
                  <img src={logo} className="h-15 w-30" alt="logo" />
                </div>
                <div className="w-50 p-4">
                  <p className="text-xs text-end">(808) 555-0111</p>
                  <p className="text-xs text-end">willie.jennings@example.com</p>
                  <p className="text-xs text-end">
                    8502 Preston Rd. Inglewood, Maine 98380
                  </p>
                </div>
              </div>
              <div className="w-full mt-4 rounded bg-black">
                <div className="w-40 h-1 bg-amber-400 rounded"></div>
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
                      <td className="text-neutral-500">felicia.reid@example.com</td>
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
            </div>
          </div>
  
          {/* Right: Empty for now */}
          <div></div>
  
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-black hover:text-red-500 text-xl font-bold"
          >
            ×
          </button>
        </div>
      </div>
    );
  }
  