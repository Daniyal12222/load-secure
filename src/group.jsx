import Snavbar from "./components/snavbar";
import grid from "./assets/grid.svg";
function Group() {
  return (
    <div className="w-full bg-gray-50 min-h-[100vh]">
      <div className="w-full">
        <Snavbar />
      </div>
      <div className="w-full  py-4 px-6">
        <div className="bg-white rounded flex w-full p-2">
          <button className="text-xl  !bg-amber-400 flex items-center gap-2 rounded text-neutral-700 font-semibold">
            Group
            <span>
              <img src={grid} alt="" className="w-5 h-5" />
            </span>
          </button>
          <div className="w-full px-4 flex justify-between items-center bg-white rounded-md">
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
        </div>
        <div className="w-full px-12 py-2 gap-15 justify-center bg-white mt-5 min-h-90 items-center grid grid-cols-2">
          <table className="border rounded-md border-gray-300">
            <thead>
              <tr className="bg-amber-400 rounded   ">
                <th className="p-3 text-start text-xs">Front Office</th>
                <th className="p-3 flex  justify-end gap-1 text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-300">
                <td className="p-3  text-start text-sm">Abbi</td>
                <td className="p-3  text-end text-sm">abbiuser@gmail.com</td>
              </tr>
              <tr className="border-b border-neutral-300">
                <td className="p-3  text-start text-sm">Abbi</td>
                <td className="p-3  text-end text-sm">abbiuser@gmail.com</td>
              </tr>
              <tr className="border-b border-neutral-300">
                <td className="p-3  text-start text-sm">Abbi</td>
                <td className="p-3  text-end text-sm">abbiuser@gmail.com</td>
              </tr>
              <tr className="border-b border-neutral-300">
                <td className="p-3  text-start text-sm">Abbi</td>
                <td className="p-3  text-end text-sm">abbiuser@gmail.com</td>
              </tr>
            </tbody>
          </table>

          <table className="border rounded-md border-gray-300">
            <thead>
              <tr className="bg-amber-400 rounded   ">
                <th className="p-3 text-start text-xs">Team 2 group</th>
                <th className="p-3 flex  justify-end gap-1 text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-300">
                <td className="p-3  text-start text-sm">Abbi</td>
                <td className="p-3  text-end text-sm">abbiuser@gmail.com</td>
              </tr>
              <tr className="border-b border-neutral-300">
                <td className="p-3  text-start text-sm">Abbi</td>
                <td className="p-3  text-end text-sm">abbiuser@gmail.com</td>
              </tr>
              <tr className="border-b border-neutral-300">
                <td className="p-3  text-start text-sm">Abbi</td>
                <td className="p-3  text-end text-sm">abbiuser@gmail.com</td>
              </tr>
              <tr className="border-b border-neutral-300">
                <td className="p-3  text-start text-sm">Abbi</td>
                <td className="p-3  text-end text-sm">abbiuser@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Group;
