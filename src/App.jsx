import Navbar from "./components/navear";
import OderSide from "./components/orders/sidebar";
import { useState } from "react";

function App() {
  return (
    <div className="w-full h-[100vh] relative flex bg-gray-100">
      <OderSide />
      <div className="hidden md:block"></div>
      <div className=" w-full md:w-4/5 flex flex-col h-[100vh] overflow-y-auto orders">
        <Navbar /> {/* Add your navigation bar here */}
        <div className=" md:hidden">
          <OderSide />
        </div>
        {/* search bar */}
        <div className="w-full   px-3 bg-gray-100   py-2">
          <div className="p-3 flex justify-between items-center bg-white rounded-md">
            <label htmlFor="search" className="w-4/5 relative">
              <p className=" absolute right-3 text-neutral-400 top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </p>
              <input
                type="text"
                id="search"
                placeholder="Search Ouders"
                className=" w-full px-3 py-2 rounded focus:outline-none border border-neutral-300"
              />
            </label>
            <button
              className=" flex gap-3"
              style={{ backgroundColor: "#ffbb00" }}
            >
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </p>
              Add New
            </button>
          </div>
          <div className="w-full flex justify-center items-center relative  mt-3">
            <div className="w-16 h-16 bg-amber-400 rounded-full fixed right-10 bottom-8 flex justify-center items-center cursor-pointer">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </p>
            </div>
            <div className="w-full px-3 bg-white py-3 rounded-md overflow-x-auto">
              <table className="w-full bg-white rounded-md  ">
                <thead>
                  <tr className="bg-neutral-100 px-2 py-2">
                    <td className="text-sm text-center text-neutral-500 p-3">
                      Employee Status
                    </td>
                    <td className="text-sm text-center text-neutral-500 p-3">
                      On-Time Status
                    </td>
                    <td className="text-sm text-center text-neutral-500 p-3">
                      Shipment Status
                    </td>
                    <td className="text-sm text-center text-neutral-500 p-3">
                      PO#
                    </td>
                    <td className="text-sm text-center text-neutral-500 p-3">
                      Shipper PO#
                    </td>
                    <td className="text-sm text-center text-neutral-500 p-3">
                      Driver
                    </td>
                    <td className="text-sm text-center text-neutral-500 p-3">
                      Shipper
                    </td>
                    <td className="text-sm text-center text-neutral-500 p-3">
                      Carrier
                    </td>
                    <td className="text-sm text-center text-neutral-500 p-3">
                      Next Stop
                    </td>
                    <td className="text-sm text-center text-neutral-500 p-3">
                      Date Dispatched
                    </td>
                    <td className="text-sm text-center text-neutral-500 p-3">
                      Documents
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 flex justify-center items-center text-sm text-center">
                      <p className="text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="size-7"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </p>
                    </td>
                    <td className="p-4 text-sm text-center">----</td>
                    <td className="p-4 text-sm text-center">Non Dispatched</td>
                    <td className="p-4 text-sm text-center">FH45678</td>
                    <td className="p-4 text-sm text-center">FH45678</td>
                    <td className="p-4 text-sm text-center">Driver 1</td>
                    <td className="p-4 text-sm text-center">John</td>
                    <td className="p-4 text-sm text-center">lorem</td>
                    <td className="p-4 text-sm text-center">
                      02/22/2024 06:38 (EST)
                    </td>
                    <td className="p-4 text-sm text-center">
                      02/22/2024 06:38 (EST)
                    </td>
                    <td className="p-4 cursor-pointer flex justify-center items-center text-sm text-center">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                            clip-rule="evenodd"
                          />
                          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                        </svg>
                      </p>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 flex justify-center items-center text-sm text-center">
                      <p className="text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-7"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </p>
                    </td>
                    <td className="p-4 text-sm text-center">----</td>
                    <td className="p-4 text-sm text-center">Non Dispatched</td>
                    <td className="p-4 text-sm text-center">FH45678</td>
                    <td className="p-4 text-sm text-center">FH45678</td>
                    <td className="p-4 text-sm text-center">Driver 1</td>
                    <td className="p-4 text-sm text-center">John</td>
                    <td className="p-4 text-sm text-center">lorem</td>
                    <td className="p-4 text-sm text-center">
                      02/22/2024 06:38 (EST)
                    </td>
                    <td className="p-4 text-sm text-center">
                      02/22/2024 06:38 (EST)
                    </td>
                    <td className="p-4 cursor-pointer flex justify-center items-center text-sm text-center">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                            clip-rule="evenodd"
                          />
                          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                        </svg>
                      </p>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 flex justify-center items-center text-sm text-center">
                      <p className="text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-7"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </p>
                    </td>
                    <td className="p-4 text-sm text-center">----</td>
                    <td className="p-4 text-sm text-center">Non Dispatched</td>
                    <td className="p-4 text-sm text-center">FH45678</td>
                    <td className="p-4 text-sm text-center">FH45678</td>
                    <td className="p-4 text-sm text-center">Driver 1</td>
                    <td className="p-4 text-sm text-center">John</td>
                    <td className="p-4 text-sm text-center">lorem</td>
                    <td className="p-4 text-sm text-center">
                      02/22/2024 06:38 (EST)
                    </td>
                    <td className="p-4 text-sm text-center">
                      02/22/2024 06:38 (EST)
                    </td>
                    <td className="p-4 cursor-pointer flex justify-center items-center text-sm text-center">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                            clip-rule="evenodd"
                          />
                          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                        </svg>
                      </p>
                    </td>
                  </tr>
                  {/* offline */}
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 flex justify-center items-center text-sm text-center">
                      <p className="text-red-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-7"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </p>
                    </td>
                    <td className="p-4 text-sm text-center">----</td>
                    <td className="p-4 text-sm text-center">Non Dispatched</td>
                    <td className="p-4 text-sm text-center">FH45678</td>
                    <td className="p-4 text-sm text-center">FH45678</td>
                    <td className="p-4 text-sm text-center">Driver 1</td>
                    <td className="p-4 text-sm text-center">John</td>
                    <td className="p-4 text-sm text-center">lorem</td>
                    <td className="p-4 text-sm text-center">
                      02/22/2024 06:38 (EST)
                    </td>
                    <td className="p-4 text-sm text-center">
                      02/22/2024 06:38 (EST)
                    </td>
                    <td className="p-4 cursor-pointer flex justify-center items-center text-sm text-center">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                            clip-rule="evenodd"
                          />
                          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                        </svg>
                      </p>
                    </td>
                  </tr>
                  {/* online */}
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 flex justify-center items-center text-sm text-center">
                      <p className="text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-7"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </p>
                    </td>
                    <td className="p-4 text-sm text-center">----</td>
                    <td className="p-4 text-sm text-center">Non Dispatched</td>
                    <td className="p-4 text-sm text-center">FH45678</td>
                    <td className="p-4 text-sm text-center">FH45678</td>
                    <td className="p-4 text-sm text-center">Driver 1</td>
                    <td className="p-4 text-sm text-center">John</td>
                    <td className="p-4 text-sm text-center">lorem</td>
                    <td className="p-4 text-sm text-center">
                      02/22/2024 06:38 (EST)
                    </td>
                    <td className="p-4 text-sm text-center">
                      02/22/2024 06:38 (EST)
                    </td>
                    <td className="p-4 cursor-pointer flex justify-center items-center text-sm text-center">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                            clip-rule="evenodd"
                          />
                          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                        </svg>
                      </p>
                    </td>
                  </tr>
                  {/* offline */}
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 flex justify-center items-center text-sm text-center">
                      <p className="text-red-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-7"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </p>
                    </td>
                    <td className="p-4 text-sm text-center">----</td>
                    <td className="p-4 text-sm text-center">Non Dispatched</td>
                    <td className="p-4 text-sm text-center">FH45678</td>
                    <td className="p-4 text-sm text-center">FH45678</td>
                    <td className="p-4 text-sm text-center">Driver 1</td>
                    <td className="p-4 text-sm text-center">John</td>
                    <td className="p-4 text-sm text-center">lorem</td>
                    <td className="p-4 text-sm text-center">
                      02/22/2024 06:38 (EST)
                    </td>
                    <td className="p-4 text-sm text-center">
                      02/22/2024 06:38 (EST)
                    </td>
                    <td className="p-4 cursor-pointer flex justify-center items-center text-sm text-center">
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                            clip-rule="evenodd"
                          />
                          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                        </svg>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="w-full flex justify-between items-center mt-4">
                <div className="flex gap-6 items-center">
                  <p className="text-neutral-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                      />
                    </svg>
                  </p>
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>...</p>
                  <p>10</p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </p>
                </div>
                <div>
                  <p className="text-neutral-500">
                    Showing 10 to 8 of 50 results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
