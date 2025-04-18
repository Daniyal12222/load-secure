import { useState } from "react";
import { ChevronUp } from "lucide-react";

const ActivityFeed = () => {
  const [isOpen, setIsOpen] = useState(true);
  const activities = [
    "Lorem Ipsum is simply dummy unknown printer.",
    "Lorem Ipsum is simply dummy unknown printer.",
    "Lorem Ipsum is simply dummy unknown printer.",
    "Lorem Ipsum is simply dummy unknown printer."
  ];

  return (
    <div className="w-full mt-3 dark:bg-[#2d353a]   dark:text-white bg-white rounded-xl shadow-md p-3 relative">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-base font-semibold">Activity</h2>
        <ChevronUp
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-0" : "rotate-180"}`}
        />
      </div>
      {isOpen && (
        <div className="mt-3">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-2 mb-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-yellow-300 rounded-full"></div>
                {index !== activities.length - 1 && (
                  <div className="w-0.5 bg-gray-300 h-full absolute left-1/2 top-2.5"></div>
                )}
              </div>
              <div>
                <p className="text-xs dark:text-white text-gray-700">{activity}</p>
                <p className="text-[10px] text-gray-500">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActivityFeed;
