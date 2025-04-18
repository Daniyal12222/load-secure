import React from "react";
import Snavbar from "../snavbar";
import loc from "../../assets/tableIcon.png";
import avatar from "../../assets/avatar.jpg";
import GoogleMapReact from "google-map-react";
import ActivityFeed from "./copm";
function Details() {
  return (
    <div className="w-full  bg-[#fafafa]">
      <Snavbar />
      <div className="w-full relative dark:bg-[#363f42] flex justify-center items-center py-6">
        <div className=" w-full gap-2 grid grid-cols-6 p-2">
          <div className=" relative col-span-4 p-3">
          <div className=" absolute top-14 left-10 p-2 rounded  dark:bg-[#363f42] dark:text-white flex min-h-10 bg-white  ">
          <p className="px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </p>
          <div className="py-1 ">
            <p className="!text-xl font-bold flex items-center">
              Test 0001
              <p className=" text-sm text-center ms-2 font-light px-2 rounded bg-green-600 text-white">
                On Time 22.5H
              </p>
            </p>
            <p className="flex gap-2 items-center text-sm font-semibold ">
              Stop:
              <p className="text-gray-600 dark:text-white text-xs">
                3891 Ranchview Dr. Richardson, California 62639
              </p>
            </p>
            <p className="flex gap-2 text-sm items-center font-semibold ">
              ETA:
              <p className="text-gray-600 text-xs dark:text-white "> 2/1/2024 - 09:40 (EST)</p>
            </p>
          </div>
        </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5193.666676219355!2d67.0606807!3d24.8794651!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1743693184374!5m2!1sen!2s"
              width={"100%"}
              height={400}
              style={{ border: 0, borderRadius: 10 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="w-full mt-4">
              <div className="p-3 rounded-md dark:bg-[#2d353a] dark:text-white  bg-white border-md">
          <p className="text-neutral-700 dark:text-white font-semibold p-2">
            Order Information
          </p>
          <div className="flex ">
            <table className="text-xs mt-4 mr-2">
              <tr>
                <td className="px-2 py-2 text-neutral-500">Created At</td>
                <td className=" py-2 text-neutral-900 dark:text-white">01/31/2024 09:25</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500">Created By</td>
                <td className=" py-2 text-neutral-900 dark:text-white">Shakeel Ahmad</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500">Company Name</td>
                <td className=" py-2 text-neutral-900 dark:text-white">TEST001</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500">Shipper Name</td>
                <td className=" py-2 text-neutral-900 dark:text-white">John Doe</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500">
                  Pick-Up Address 1
                </td>
                <td className=" py-2 text-neutral-900 dark:text-white">
                  1901 Thornridge Cir. Shiloh, Hawaii 81063
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500">Drop-Off Address</td>
                <td className=" py-2 text-neutral-900 dark:text-white">
                  3891 Ranchview Dr. Richardson, California 62639
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500">Embedded URL</td>
                <td className="flex gap-1 py-2  items-center">
                  http://www.exampleloremipsum.com
                  <span className="text-amber-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 0 1-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0 1 13.5 1.5H15a3 3 0 0 1 2.663 1.618ZM12 4.5A1.5 1.5 0 0 1 13.5 3H15a1.5 1.5 0 0 1 1.5 1.5H12Z"
                        clip-rule="evenodd"
                      />
                      <path d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 0 1 9 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0 1 16.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625v-12Z" />
                      <path d="M10.5 10.5a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963 5.23 5.23 0 0 0-3.434-1.279h-1.875a.375.375 0 0 1-.375-.375V10.5Z" />
                    </svg>
                  </span>
                </td>
              </tr>
            </table>
            <table className="text-xs">
              <tr>
                <td className="px-2 py-2 text-neutral-500">Carrier</td>
                <td className=" py-2 text-neutral-900 dark:text-white">Sayyam</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500">On Behalf</td>
                <td className=" py-2 text-neutral-900 dark:text-white">-</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500"></td>
                <td className=" py-2 text-neutral-900 dark:text-white"></td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500"></td>
                <td className=" py-2 text-neutral-900 dark:text-white"></td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500"></td>
                <td className=" py-2 text-neutral-900 dark:text-white"></td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500">Pick-Up Date</td>
                <td className=" py-2 text-neutral-900 dark:text-white ">01/03/2024 06:00 AM</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500">Drop-Off Date</td>
                <td className=" py-2 text-neutral-900 dark:text-white">01/02/2024 06:00 AM</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500"></td>
                <td className=" py-2 text-neutral-900"></td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500"></td>
                <td className=" py-2 text-neutral-900"></td>
              </tr>
            </table>
          </div>
        </div>
        {/*  */}
        <div className="w-full mt-4   ">
        <div className="grid  grid-cols-2  gap-2 ">
          <div className="px-3 py-2.5 dark:bg-[#2d353a]   dark:text-white bg-white rounded-md">
            <div className="w-full flex justify-between text-sm font-semibold">
              <p>Document</p>
              <p className="text-amber-400">+ Add Document </p>
            </div>
            <div className="w-full flex justify-between items-center  border-b border-neutral-500 p-2">
              <div className="flex text-sm p-3 gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 dark:text-white text-neutral-700"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="">Bill of Loading</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-5 "
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="w-full flex justify-between items-center   border-b border-neutral-500 p-2">
              <div className="flex text-sm p-3 gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 dark:text-white text-neutral-700"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="">Document 2 Receipt</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="w-full dark:bg-[#2d353a]   dark:text-white bg-white h-full rounded-md ">
            <div className="w-full py-3  flex justify-between text-sm font-semibold px-3 ">
              <p>Driver</p>
              <p className="text-amber-400 underline">Get Location</p>
            </div>
            <div className="p-3 text-sm flex flex-col gap-3">
              <p className="flex justify-between">
                Test Driver <span className="mr-5">+1 (234) 567-8900</span>
              </p>
              <p className="flex justify-between">
                Text Message
                <span className="mr-5">Sent 01/02/24 at 09:00 EST</span>
              </p>
              <p className="flex justify-between">
                App Status <span className="mr-5">Killed</span>
              </p>
              <p className="flex justify-between">
                Permission{" "}
                <span className="mr-5">
                  <img src={loc} className="w-20" alt="" />
                </span>
              </p>
            </div>
          </div>
        </div>
        </div>
        </div>
          </div>
          <div className="  col-span-2  rounded ">
          <div className="  flex flex-col md:flex-row p-3 dark:bg-[#2d353a]   dark:text-white bg-white rounded gap-3    ">
          <select className="w-full max-w-xs px-4 py-3 border rounded">
            <option value="in-transit">In-Transit</option>
          </select>
          <select className="w-full max-w-xs px-4 py-3 border rounded">
            <option value="action">Actions</option>
          </select>
        </div>
        <div><ActivityFeed /></div>
        <div className=" mt-4 px-3 dark:bg-[#2d353a]   dark:text-white bg-white rounded-md">
          <div className="w-full border-b border-gray-400 flex items-end gap-2 p-2">
            <div className=" relative  rounded-full   border border-gray-300">
              <img src={avatar} className="w-11 rounded-full h-11" alt="" />
              <div className="w-3 h-3 top-0 right-0 absolute bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="py-1">
              <p className="text-neutral-900 text-xs dark:text-white font-semibold">
                lorem ipsum name
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">Online</p>
            </div>
          </div>
          <div className=" mt-1 min-h-65 p-2 w-full">
            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-xs p-3 rounded-t-md rounded-bl-md font-semibold dark:bg-gray-800 bg-amber-400">
                Can I request for 3d Video tutorial?
              </p>
              <p className="text-sm mr-1 text-neutral-400 ">05:09 pm</p>
            </div>
            <div className="w-full flex flex-col items-start my-4">
              <p className="text-xs p-3 rounded-t-md rounded-br-md font-semibold dark:bg-gray-500 bg-neutral-100">
                Yes please choose new request option.
              </p>
              <p className="text-sm mr-1 text-neutral-400 ">05:09 pm</p>
            </div>
            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-xs p-3 rounded-t-md rounded-bl-md font-semibold dark:bg-gray-800 bg-amber-400">
                Ah okay, thanks for your information
              </p>
              <p className="text-sm mr-1 text-neutral-400 ">05:09 pm</p>
            </div>
          </div>
          <div className="border-t flex">
            <div className="flex w-full items-center py-4 gap-3">
              <p className="text-[#94A3B8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                  />
                </svg>
              </p>
              <input
                type="text"
                className="px-1  w-full focus:outline-none placeholder:text-sm"
                placeholder="Write message here..."
              />
              <button className=" !bg-amber-300 text-white w-16 h-12 !p-0 flex justify-center items-center !rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 -rotate-20"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
