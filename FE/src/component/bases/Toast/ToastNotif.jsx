import React from "react";

export const ToastNotif = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed bottom-5 right-5 w-80 p-4 text-white rounded-lg shadow-lg ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <div className="flex justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="text-white">
          X
        </button>
      </div>
    </div>
  );
};
