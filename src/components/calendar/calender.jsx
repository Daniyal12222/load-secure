import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CalendarComponent = () => {
  const [selectedDates, setSelectedDates] = useState([9, 12, 15]);

  const handleDateClick = (date) => {
    setSelectedDates((prev) =>
      prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
    );
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-2xl w-80">
      <h2 className="text-center text-lg font-semibold">Metrics</h2>

      {/* Dropdown */}
      <div className="mt-3">
        <select className="w-full p-2 border rounded-md text-gray-700">
          <option>Select Company</option>
          <option value="company1">Company 1</option>
          <option value="company2">Company 2</option>
        </select>
      </div>

      {/* Calendar Header */}
      <div className="flex justify-between items-center mt-4">
        <ChevronLeft className="w-5 h-5 cursor-pointer" />
        <span className="text-sm font-semibold">January 2023</span>
        <ChevronRight className="w-5 h-5 cursor-pointer" />
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 text-center text-xs text-gray-500 mt-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="py-1">{day}</div>
        ))}
        {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
          <div
            key={date}
            className={`py-2 text-sm cursor-pointer rounded-md ${
              selectedDates.includes(date)
                ? "bg-yellow-500 text-white"
                : "hover:bg-yellow-100"
            }`}
            onClick={() => handleDateClick(date)}
          >
            {date}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button className="border px-4 py-2 rounded-md">Reset</button>
        <button className="!bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
          Search
        </button>
      </div>
    </div>
  );
};

export default CalendarComponent;
