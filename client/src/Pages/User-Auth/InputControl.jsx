import React from "react";

function InputControl({ label, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="font-bold text-lg text-gray-700">{label}</label>}
      <input
        {...props}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
}

export default InputControl;