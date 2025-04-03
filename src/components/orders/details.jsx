import React from "react";
import Snavbar from "../snavbar";
import loc from "../../assets/tableIcon.png"
import GoogleMapReact from "google-map-react";
function Details() {
  const defaultProps = {
    center: {
      lat: 24.87947483314433,
      lng: 67.06070215767181,
    },
    zoom: 11,
  };

  return (
    <div className="w-full bg-[#fafafa]">
      <Snavbar />
      <div className="w-full flex justify-center items-center py-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5193.666676219355!2d67.0606807!3d24.8794651!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1743693184374!5m2!1sen!2s"
          width={"90%"}
          height={400}
          style={{ border: 0, borderRadius: 10 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="w-full flex gap-4 px-14  py-2">
        <div className="p-3 rounded-md w-[50%] bg-white border-md">
          <p className="text-neutral-700 font-semibold p-2">
            Order Information
          </p>
          <div className="flex ">
            <table className="text-xs mt-4 mr-2">
              <tr>
                <td className="px-2 py-2 text-neutral-500">Created At</td>
                <td className=" py-2 text-neutral-900">01/31/2024 09:25</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500">Created By</td>
                <td className=" py-2 text-neutral-900">Shakeel Ahmad</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500">Company Name</td>
                <td className=" py-2 text-neutral-900">TEST001</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500">Shipper Name</td>
                <td className=" py-2 text-neutral-900">John Doe</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500">
                  Pick-Up Address 1
                </td>
                <td className=" py-2 text-neutral-900">
                  1901 Thornridge Cir. Shiloh, Hawaii 81063
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500">Drop-Off Address</td>
                <td className=" py-2 text-neutral-900">
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
                <td className=" py-2 text-neutral-900">Sayyam</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500">On Behalf</td>
                <td className=" py-2 text-neutral-900">-</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500"></td>
                <td className=" py-2 text-neutral-900"></td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500"></td>
                <td className=" py-2 text-neutral-900"></td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500"></td>
                <td className=" py-2 text-neutral-900"></td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500">Pick-Up Date</td>
                <td className=" py-2 text-neutral-900">01/03/2024 06:00 AM</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-neutral-500">Drop-Off Date</td>
                <td className=" py-2 text-neutral-900">01/02/2024 06:00 AM</td>
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
        <div className="w-[25%]">
          <div className="px-3 py-2.5 bg-white rounded-md">
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
                  className="size-5 text-neutral-700"
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
                class="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="w-full flex justify-between items-center  border-b border-neutral-500 p-2">
              <div className="flex text-sm p-3 gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-neutral-700"
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
          <div className="w-full bg-white rounded-md mt-4">
            <div className="w-full flex justify-between text-sm font-semibold px-3 ">
              <p>Driver</p>
              <p className="text-amber-400 underline">Get Location</p>
            </div>
            <div className="p-3 text- flex flex-col gap-3">
              <p className="flex justify-between">
                Test Driver <span className="mr-5">+1 (234) 567-8900</span>
              </p>
              <p className="flex justify-between">
                Text Message <span className="mr-5">Sent 01/02/24 at 09:00 EST</span>
              </p>
              <p className="flex justify-between">
                App Status <span className="mr-5">Killed</span>
              </p>
              <p className="flex justify-between">
                Permission <span className="mr-5"><img src={loc} className="w-20" alt="" /></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
