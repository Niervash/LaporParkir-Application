import React from "react";
import { ParkirLiarcountCard } from "./ParkirLiarcount/ParkirLiarcountCard";
import { PelanggarCountcard } from "./Pealanggaran/PelanggarCountcard";
import { PetugasLiarCountCard } from "./PetugasLiarCount/PetugasLiarCountCard";
import { PelaporanCountCard } from "./UserStats/PelaporanCountCard";

export const StatsCardDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8 text-slate-50 mt-3">
        Stats Overview
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <ParkirLiarcountCard />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <ParkirLiarcountCard />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <ParkirLiarcountCard />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <ParkirLiarcountCard />
        </div>
      </div>
    </div>
  );
};
