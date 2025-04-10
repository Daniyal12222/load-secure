import CalendarComponent from "./components/calendar/calender";
import Snavbar from "./components/snavbar";
function Metrics() {
  return (
    <div className="w-full">
      <div className="">
        <Snavbar />
      </div>
      <div className="w-full dark:bg-[#363f42]  h-[calc(100vh - 60px)] flex  gap-3 p-4">
        <div className="flex">
          <CalendarComponent />
        </div>
        <div className="w-full">
          <table className="w-full dark:bg-[#363f42] dark:text-white bg-white rounded-md  ">
            <thead>
              <tr className="bg-neutral-100 dark:bg-amber-400 px-2 py-2">
                <td className="text-sm dark:text-black text-center text-neutral-500 p-3">
                  Results For
                </td>
                <td className="text-sm dark:text-black text-center text-neutral-500 p-3">
                  Date range
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-200">
                <td className="p-4 text-sm text-center">Orders Created</td>
                <td className="p-4 text-sm text-center">-</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-4 text-sm text-center">Orders Deleted</td>
                <td className="p-4 text-sm text-center">-</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-4 text-sm text-center">Actual Orders</td>
                <td className="p-4 text-sm text-center">-</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-4 text-sm text-center">Orders Tracked</td>
                <td className="p-4 text-sm text-center">-</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-4 text-sm text-center">Compliance Rate</td>
                <td className="p-4 text-sm text-center">-</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="p-4 text-sm text-center">Orders Tracked and Deleted</td>
                <td className="p-4 text-sm text-center">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Metrics;
