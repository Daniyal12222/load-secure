import React, { useState } from "react";

const EditProfile = ({onClose}) => {
    
  const [access, setAccess] = useState({
    billing: true,
    templates: true,
    metrics: false,
    permissions: false,
    groups: false,
  });

  const toggleAccess = (key) => {
    setAccess((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div
      className="fixed z-20  inset-0 bg-gray-800/70 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[40vw] dark:bg-[#363f42] rounded-lg overflow-hidden    "
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
         <div className="max-w-xl mx-auto dark:bg-[#394246] dark:text-white  shadow-lg rounded-2xl overflow-hidden  bg-white  ">
      <div className="flex bg-amber-400 px-3 py-3 items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Edit Profile</h2>
        <button className="!bg-white/0 !p-2 !text-gray-900">
          <svg className=" size-5" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3m-4 0h14"/>
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 px-4 sm:grid-cols-2 gap-3 mb-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">First Name<span className="text-red-500">*</span></label>
          <input type="text" defaultValue="Shakeel" className="w-full border rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Last Name</label>
          <input type="text" defaultValue="Ahmad" className="w-full border rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Role<span className="text-red-500">*</span></label>
          <select defaultValue="Operator" className="w-full border rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500">
            <option>Admin</option>
            <option>Operator</option>
            <option>Viewer</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Phone Number</label>
          <input type="text" defaultValue="+1 123 12345" className="w-full border rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Email<span className="text-red-500">*</span></label>
          <input type="email" defaultValue="shykiahma@email.com" className="w-full border rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
        </div>
      </div>

      <h3 className="text-sm font-semibold px-4 text-gray-800 mb-2 dark:text-white">Access</h3>
      <div className="grid grid-cols-1 dark:text-white px-4 sm:grid-cols-2 gap-3 mb-5">
        {Object.keys(access).map((key) => (
          <div key={key} className="flex dark:text-white items-center border border-neutral-300  justify-between p-2 rounded-md">
            <span className="capitalize text-sm dark:text-white  text-gray-800">{key}</span>
            <label className="inline-flex items-center  cursor-pointer">
              <input type="checkbox" className="sr-only" checked={access[key]} onChange={() => toggleAccess(key)} />
              <div className={`w-10 h-5  flex items-center rounded-full p-1 transition-colors duration-300
                ${access[key] ? 'bg-yellow-500' : 'bg-gray-300'}`}>
                <div className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform
                  ${access[key] ? 'translate-x-5' : 'translate-x-0'}`}></div>
              </div>
            </label>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 py-2 px-4">
        <button className="px-4 py-1.5 border rounded-md text-sm !text-gray-700 hover:!bg-gray-100">Cancel</button>
        <button className="px-4 py-1.5 !bg-yellow-500 text-white !text-sm rounded-md hover:!bg-yellow-600">Save</button>
      </div>
    </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute dark:!bg-[#2d353a] dark:text-white top-5 right-5 text-black hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
