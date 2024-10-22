import React from "react";

export const PelanggarCountcard = () => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg m-2 p-4 flex flex-col items-center w-60">
        <h2 className="text-xl font-bold mb-2">Jumlah Total Pelanggaran </h2>
        <div className="text-3xl mb-2">💰</div>
        <p className="text-3xl font-semibold">924</p>
        <p className="text-sm text-green-500">
          +100% <span className="text-gray-500">Since yesterday</span>
        </p>
      </div>
    </div>
  );
};
