import React from "react";

export const PelaporanCountCard = () => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg m-2 p-4 flex flex-col items-center w-60">
        <h2 className="text-xl font-bold mb-2">Total Pelaporan Anda</h2>
        <div className="text-3xl mb-2">📈</div>
        <p className="text-3xl font-semibold">350,897</p>
        <p className="text-sm text-green-500">
          +2.96% <span className="text-gray-500">Since last month</span>
        </p>
      </div>
    </div>
  );
};
