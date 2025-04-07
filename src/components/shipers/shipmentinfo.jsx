import { useState } from "react";
import Snavbar from "../snavbar";

export default function ShipmentForm() {
  // const [formData, setFormData] = useState({
  //   behalfOf: "Shakeel Ahmad",
  //   po: "91238",
  //   shipperPo: "876589765",
  //   phoneNumber: "",
  //   driver: "",
  //   carrier: "",
  //   shipper: "John Doe",
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 ">
      <Snavbar />
      <div className="w-full px-30 py-5 relative">
        <div className="w-16 h-16 bg-amber-400 rounded-full fixed right-10 bottom-8 flex justify-center items-center cursor-pointer">
          <p className=" dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                clip-rule="evenodd"
              />
            </svg>
          </p>
        </div>
        <div className=" absolute h-1 w-[75%] top-8 left-42 z-10  bg-gray-400 rounded-full"></div>
        <div className="w-full flex justify-between z-100 bg-amber-50/0 items-center ">
          {/* dot */}
          <div className="flex flex-col justify-center z-100 items-center">
            <div className="w-7 h-7 rounded-full flex justify-center items-center bg-amber-100">
              <div className="w-4 h-4 rounded-full bg-amber-400"></div>
            </div>
            <p className="font-semibold">Shipper</p>
          </div>
          <div className="flex flex-col z-100 justify-center items-center">
            <div className="w-7 h-7 rounded-full flex justify-center items-center bg-amber-100">
              <div className="w-4 h-4 rounded-full bg-amber-400"></div>
            </div>
            <p className="text-sx text-neutral-400">Pick Up</p>
          </div>
          <div className="flex flex-col z-100 justify-center items-center">
            <div className="w-7 h-7 rounded-full flex justify-center items-center bg-amber-100">
              <div className="w-4 h-4 rounded-full bg-amber-400"></div>
            </div>
            <div>
              <p className="text-sx text-neutral-400">Drop Off</p>
            </div>
          </div>
          <div className="flex flex-col z-100 justify-center items-center">
            <div className="w-7 h-7 rounded-full flex justify-center items-center bg-amber-100">
              <div className="w-4 h-4 rounded-full bg-amber-400"></div>
            </div>
            <p className="text-sx text-neutral-400">Preview</p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center  py-5">
          <Preview />
        </div>
      </div>
    </div>
  );
}

function ShipmentIn() {
  return (
    <div className=" w-[90%] x bg-white py-3 px-5 rounded md:w-[60%]">
      <h2 className="text-lg font-semibold text-center mb-3">Shipment Info</h2>
      <form className="space-y-3">
        <div>
          <label className="block dark:text-white text-gray-700 mb-1 text-sm">
            Create on behalf of
          </label>
          <input
            type="text"
            className="w-full p-1 focus:outline-none dark:text-white border border-gray-300 rounded text-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block dark:text-white text-gray-700 mb-1 text-sm">
              PO#*
            </label>
            <input
              type="text"
              className="w-full p-1 focus:outline-none dark:text-white border border-gray-300 rounded text-sm"
            />
          </div>
          <div>
            <label className="block dark:text-white text-gray-700 mb-1 text-sm">
              Shipper PO#
            </label>
            <input
              type="text"
              className="w-full p-1 focus:outline-none dark:text-white border border-gray-300 rounded text-sm"
            />
          </div>
        </div>
        <div>
          <label className="block dark:text-white text-gray-700 mb-1 text-sm">
            Phone Number
          </label>
          <input
            type="text"
            className="w-full p-1 focus:outline-none dark:text-white border border-gray-300 rounded text-sm"
          />
        </div>
        <div>
          <div className="w-full flex justify-between items-center">
            <label className="block dark:text-white text-gray-700 mb-1 text-sm">
              Driver
            </label>
            <p className="text-amber-400 text-sm">+ Add</p>
          </div>
          <input
            type="text"
            className="w-full p-1 focus:outline-none dark:text-white border border-gray-300 rounded text-sm"
          />
          <input
            type="text"
            placeholder="Driver"
            className="w-full p-1 focus:outline-none my-2 dark:text-white border border-gray-300 rounded text-sm"
          />
        </div>
        <button
          type="button"
          className="text-yellow-500  !bg-white flex gap-2 items-center !text-sm"
        >
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
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Additional Driver
        </button>
        <div>
          <label className="block dark:text-white text-gray-700 mb-1 text-sm">
            Carrier
          </label>
          <input
            type="text"
            className="w-full p-1 focus:outline-none dark:text-white border border-gray-300 rounded text-sm"
          />
        </div>
        <div>
          <div className="w-full flex justify-between items-center">
            <label className="block dark:text-white text-gray-700 mb-1 text-sm">
              Shipper*
            </label>
            <p className="text-amber-400 text-sm">+ Add</p>
          </div>
          <input
            type="text"
            className="w-full p-1 focus:outline-none dark:text-white border border-gray-300 rounded text-sm"
          />
        </div>
        <div className="flex justify-center gap-5 mt-3">
          <button className="px-3 py-1 !border-black  !font-extralight !bg-white rounded text-sm">
            Back
          </button>
          <button className="px-3 py-1 !bg-yellow-500 !font-extralight dark:text-white rounded text-sm">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

function PickUp() {
  return (
    <div className=" w-[90%] min-h-[60vh] bg-white py-3 px-5 rounded md:w-[60%]">
      <h2 className="text-lg font-semibold text-center mb-3">Pick Up</h2>
      <form className="space-y-3">
        <div className="w-full min-h-[35vh] ">
          <div className="w-full grid gap-4   grid-cols-3">
            <div>
              <label className="block dark:text-white text-gray-700 mb-1 text-sm">
                Date
              </label>
              <input
                type="date"
                className="w-full p-2 focus:outline-none dark:text-white border border-gray-300 rounded text-sm"
              />
            </div>
            <div>
              <label className="block dark:text-white text-gray-700 mb-1 text-sm">
                24 Hour Time
              </label>
              <input
                type="time"
                className="w-full p-2 focus:outline-none dark:text-white border border-gray-300 rounded text-sm"
              />
            </div>
            <div>
              <label className="block dark:text-white text-gray-700 mb-1 text-sm">
                Time Zone
              </label>
              <select
                name=""
                id=""
                className="w-full p-2 focus:outline-none dark:text-white border border-gray-300 rounded text-sm"
              >
                <option value="">Select Time Zone</option>
                <option value="EST">EST</option>
                <option value="PST">PST</option>
                <option value="CST">CST</option>
              </select>
            </div>
          </div>
          <div className="w-full my-4 relative">
            <label className="block dark:text-white text-gray-700 mb-1 text-sm">
              Pick Up Address
            </label>
            <p className=" absolute right-3 top-8">
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </p>
            <textarea className=" focus:outline-none text-sm  border rounded-md h-[20vh] !text-black resize-none p-3 w-[100%]">
              123 Main St. New York, NY 10001
            </textarea>
          </div>
          <div className="w-full flex">
            <button className="!text-sm !px-2 !bg-white ms-2 text-amber-400 flex gap-2">
              <span>
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
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              Add Address
            </button>
            <button className="!text-sm !px-2 !bg-white ms-2 text-amber-400 flex gap-2">
              <span>
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
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              Add Note
            </button>
            <button className="!text-sm !px-2 !bg-white ms-2 text-red-400 flex gap-2">
              <span>
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </span>
              Remove Address
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-5 mt-6">
          <button className="px-3 py-1 !border-black  !font-extralight !bg-white rounded text-sm">
            Back
          </button>
          <button className="px-3 py-1 !bg-yellow-500 !font-extralight dark:text-white rounded text-sm">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
function DropOff() {
  return (
    <div className=" w-[90%] min-h-[60vh] bg-white py-3 px-5 rounded md:w-[60%]">
      <h2 className="text-lg font-semibold text-center mb-3">Drop Off</h2>
      <form className="space-y-3">
        <div className="w-full min-h-[35vh] ">
          <div className="w-full grid gap-4   grid-cols-3">
            <div>
              <label className="block dark:text-white text-gray-700 mb-1 text-sm">
                Date
              </label>
              <input
                type="date"
                className="w-full p-2 focus:outline-none dark:text-white border border-gray-300 rounded text-sm"
              />
            </div>
            <div>
              <label className="block dark:text-white text-gray-700 mb-1 text-sm">
                24 Hour Time
              </label>
              <input
                type="time"
                className="w-full p-2 focus:outline-none dark:text-white border border-gray-300 rounded text-sm"
              />
            </div>
            <div>
              <label className="block dark:text-white text-gray-700 mb-1 text-sm">
                Time Zone
              </label>
              <select
                name=""
                id=""
                className="w-full p-2 focus:outline-none dark:text-white border border-gray-300 rounded text-sm"
              >
                <option value="">Select Time Zone</option>
                <option value="EST">EST</option>
                <option value="PST">PST</option>
                <option value="CST">CST</option>
              </select>
            </div>
          </div>
          <div className="w-full my-4 relative">
            <label className="block dark:text-white text-gray-700 mb-1 text-sm">
              Drop Off Address
            </label>
            <p className=" absolute right-3 top-8">
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </p>
            <textarea className=" focus:outline-none text-sm  border rounded-md h-[20vh] !text-black resize-none p-3 w-[100%]">
              123 Main St. New York, NY 10001
            </textarea>
          </div>
          <div className="w-full flex">
            <button className="!text-sm !px-2 !bg-white ms-2 text-amber-400 flex gap-2">
              <span>
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
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              Add Address
            </button>
            <button className="!text-sm !px-2 !bg-white ms-2 text-red-400 flex gap-2">
              <span>
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </span>
              Remove Address
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-5 mt-6">
          <button className="px-3 py-1 !border-black  !font-extralight !bg-white rounded text-sm">
            Back
          </button>
          <button className="px-3 py-1 !bg-yellow-500 !font-extralight dark:text-white rounded text-sm">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

function Preview() {
  return (
    <div className=" w-[90%] min-h-[60vh] bg-white py-3 px-5 rounded md:w-[60%]">
      <h2 className="text-lg font-semibold text-center mb-3">Preview</h2>
      <div className="w-full">
        <table>
          <tr className="">
            <th className="text-sm text-start font-medium py-2 px-3 text-neutral-400">
              PO#
            </th>
            <th className="text-sm text-start font-medium py-2 px-3">12345</th>
          </tr>
          <tr className="">
            <th className="text-sm text-start font-medium py-2 px-3 text-neutral-400">
              Shipper PO#
            </th>
            <th className="text-sm text-start font-medium py-2 px-3">78900</th>
          </tr>
          <tr className="">
            <th className="text-sm text-start font-medium py-2 px-3 text-neutral-400">
              carrier Name
            </th>
            <th className="text-sm text-start font-medium py-2 px-3">--</th>
          </tr>
          <tr className="">
            <th className="text-sm text-start font-medium py-2 px-3 text-neutral-400">
              Shipper Name
            </th>
            <th className="text-sm text-start font-medium py-2 px-3">James</th>
          </tr>
          <tr className="">
            <th className="text-sm text-start font-medium py-2 px-3 text-neutral-400">
              Pick-Up Address 1
            </th>
            <th className="text-sm text-start font-medium py-2 px-3">
              New York, United States
            </th>
          </tr>
          <tr className="">
            <th className="text-sm text-start font-medium py-2 px-3 text-neutral-400">
              Pick Up Date
            </th>
            <th className="text-sm text-start font-medium py-2 px-3">
              02/01/2024 06:00 (Eastern Time)
            </th>
          </tr>
          <tr className="">
            <th className="text-sm text-start font-medium py-2 px-3 text-neutral-400">
              Drop-Off Address 1
            </th>
            <th className="text-sm text-start font-medium py-2 px-3">
              8787 Wales Drive, Chichawatni, OH, USA
            </th>
          </tr>
          <tr className="">
            <th className="text-sm text-start font-medium py-2 px-3 text-neutral-400">
              Drop-Off Date #1{" "}
            </th>
            <th className="text-sm text-start font-medium py-2 px-3">
              02/02/2024 06:00 (Central Time)
            </th>
          </tr>
        </table>
      </div>
      <div className="w-full flex mt-4 flex-col">
        <label htmlFor="" className="text-xs font-medium">
          Notiy Driver
        </label>
        <select name="" id="" className="mt-2 focus:outline-none border border-gray-400 p-2 rounded">
          <option value="immediately">Immediately</option>
        </select>
      </div>
      <div className="flex justify-center gap-5 mt-6">
          <button className="!px-5 py-1 !border-black  !font-extralight !bg-white rounded text-sm">
            Back
          </button>
          <button className="!px-5 py-1 !bg-yellow-500 !font-extralight dark:text-white rounded text-sm">
            Fnish
          </button>
        </div>
    </div>
  );
}
