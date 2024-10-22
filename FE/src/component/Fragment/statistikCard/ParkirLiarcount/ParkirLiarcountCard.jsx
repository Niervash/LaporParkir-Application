// Example: ParkirLiarcountCard.js
import React from "react";

export const ParkirLiarcountCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between h-40">
      <div className="flex items-center mb-2">
        <div className="bg-red-500 rounded-full p-2 text-white">
          <i className="fas fa-exclamation-circle"></i> {/* Example icon */}
        </div>
        <h6 className="text-lg font-semibold ml-2">
          Jumlah Total Pelanggaran Parkir Liar
        </h6>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold">924</div>
      </div>
    </div>
  );
};
