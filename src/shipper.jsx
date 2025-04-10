import Navbar from "./components/navear";
import ShipperSide from "./components/shipers/sidebar";
import { useNavigate } from "react-router-dom";
function Shipper() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/shippers/shipment', { replace: true });
  };
  return (
    <div className="w-full h-[100vh] relative flex bg-gray-100">
      <ShipperSide />
      <div className=" w-full md:w-5/6 flex flex-col h-[100vh] overflow-y-auto orders">
        <Navbar /> {/* Add your navigation bar here */}
        {/* search bar */}
        <div className="w-full dark:bg-[#2d353a]  px-3 bg-gray-100   py-2">
        <div className="p-3 flex justify-between items-center dark:bg-[#363f42] bg-white rounded-md">
            <label htmlFor="search" className="w-4/5 relative">
              <p className=" absolute  right-3 text-neutral-400 top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 dark:text-white"
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
                className=" w-full px-3 py-2 rounded focus:outline-none border border-neutral-300  dark:placeholder:text-white dark:placeholder:text-xs dark:border-gray-900"
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
          <div className="w-full dark:bg-[#363f42] flex justify-center items-center relative  mt-3">
            <div className="w-14 h-14 bg-amber-400 rounded-full dark:text-white fixed right-10 bottom-10 flex justify-center items-center cursor-pointer">
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
            <div className="w-full px-3 dark:bg-[#363f42] bg-white py-3 rounded-md overflow-x-auto">
              <table className="w-full dark:bg-[#363f42] dark:text-white bg-white rounded-md  ">
                <thead>
                  <tr className="bg-neutral-100 dark:bg-amber-400 px-2 py-2">
                    <td className="text-sm text-center text-neutral-500 p-3">
                    Shipper Company Name
                    </td>
                    <td className="text-sm text-center text-neutral-500 p-3">
                    Admin Name
                    </td>
                    <td className="text-sm text-center text-neutral-500 p-3">
                    Admin Email
                    </td>
                    <td className="text-sm text-center text-neutral-500 p-3">
                    Package
                    </td>
                    <td className="text-sm text-center text-neutral-500 p-3">
                    Status
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {/* Add your data rows here */}
                  <tr onClick={handleClick} className="border-b cursor-pointer border-neutral-200">
                    <td className="p-4 text-sm text-center">JMcDonald's</td>
                    <td className="p-4 text-sm text-center">Nguyen, Shane</td>
                    <td className="p-4 text-sm text-center">jackson.graham@example.com</td>
                    <td className="p-4 text-sm text-center">-</td>
                    <td className="p-4 text-sm text-center">-</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-sm text-center">IBD</td>
                    <td className="p-4 text-sm text-center">Flores, Juanita</td>
                    <td className="p-4 text-sm text-center">georgia.young@example.com</td>
                    <td className="p-4 text-sm text-center">-</td>
                    <td className="p-4 text-sm text-center">-</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-sm text-center">The Walt Disney Company</td>
                    <td className="p-4 text-sm text-center">Black, Marvin</td>
                    <td className="p-4 text-sm text-center">kenzi.lawson@example.com</td>
                    <td className="p-4 text-sm text-center">-</td>
                    <td className="p-4 text-sm text-center">-</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-sm text-center">Sony</td>
                    <td className="p-4 text-sm text-center">Henry, Arthur</td>
                    <td className="p-4 text-sm text-center">debbie.baker@example.com</td>
                    <td className="p-4 text-sm text-center">-</td>
                    <td className="p-4 text-sm text-center">-</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-sm text-center">JMcDonald's</td>
                    <td className="p-4 text-sm text-center">Nguyen, Shane</td>
                    <td className="p-4 text-sm text-center">jackson.graham@example.com</td>
                    <td className="p-4 text-sm text-center">-</td>
                    <td className="p-4 text-sm text-center">-</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-sm text-center">eBay</td>
                    <td className="p-4 text-sm text-center">Flores, Juanita</td>
                    <td className="p-4 text-sm text-center">nevaeh.simmons@example.com</td>
                    <td className="p-4 text-sm text-center">-</td>
                    <td className="p-4 text-sm text-center">-</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-sm text-center">General Electric</td>
                    <td className="p-4 text-sm text-center">Miles, Esther</td>
                    <td className="p-4 text-sm text-center">alma.lawson@example.com</td>
                    <td className="p-4 text-sm text-center">-</td>
                    <td className="p-4 text-sm text-center">-</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 text-sm text-center">Facebook</td>
                    <td className="p-4 text-sm text-center">Nguyen, Shane</td>
                    <td className="p-4 text-sm text-center">michael.mitc@example.com</td>
                    <td className="p-4 text-sm text-center">-</td>
                    <td className="p-4 text-sm text-center">-</td>
                  </tr>
                  {/* Add more data rows as needed */}
                </tbody>
              </table>
              <div className="w-full flex justify-between items-center mt-4">
                <div className="flex gap-6 dark:!text-white items-center">
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
                  <p className="text-neutral-500 text-xs dark:!text-white">
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

export default Shipper;
