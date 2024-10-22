import React, { useState, useEffect } from "react";
import { Tableberanda } from "../Table/Tableberanda/PetugasLiar/Tableberanda";
import { StatsCardDashboard } from "../statistikCard/StatsCardDashboard";
import { TableBerandaParkirLiar } from "../Table/Tableberanda/ParkirLiar/TableBerandaParkirLiar";
import { Breadcrumbs } from "../BreadCrumbs/BreadCrumbs";
import BerandaMaps from "../Maps/BerandaMaps";

export const Commoncardused = () => {
  const [positions, setPositions] = useState([]);
  const [center, setCenter] = useState([-0.93975, 119.8974]);
  const [petugasData, setPetugasData] = useState([]);
  const [parkirData, setParkirData] = useState([]);

  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchPetugasData = async () => {
      try {
        const response = await fetch(
          `https://laporparkir-application.onrender.com/petugas?userId=${userId}`
        );
        const result = await response.json();
        if (result.data) {
          setPetugasData(result.data);
          const locations = result.data.map((item) => [
            parseFloat(item.latitude),
            parseFloat(item.longitude),
          ]);
          setPositions(locations);
        }
      } catch (error) {
        console.error("Error fetching petugas data:", error);
      }
    };

    const fetchParkirData = async () => {
      try {
        const response = await fetch(
          `https://laporparkir-application.onrender.com/parkir?userId=${userId}`
        );
        const result = await response.json();
        if (result.data) {
          setParkirData(result.data);
        }
      } catch (error) {
        console.error("Error fetching parkir data:", error);
      }
    };

    fetchPetugasData();
    fetchParkirData();
  }, [userId]);

  const breadcrumbItems = [
    { label: "Dashboard" },
    { label: "Home", link: "#" },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="flex flex-col mt-4">
        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-3 dark:bg-gray-800 dark:border-gray-700 mb-3">
          <StatsCardDashboard />
        </div>
        <div className="w-full p-2 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-1 dark:bg-gray-800 dark:border-gray-700 mb-3">
          <TableBerandaParkirLiar data={parkirData} />
        </div>
        <div className="flex flex-grow flex-col md:flex-row justify-center items-start">
          <div className="w-full md:w-1/2 p-2 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-1 dark:bg-gray-800 dark:border-gray-700 mb-2 md:mb-0">
            <Tableberanda data={petugasData} />
          </div>
          <div className="h-[40vh] w-full md:w-1/2 border-8 border-gray-200 rounded-lg shadow overflow-hidden dark:border-gray-700 mx-1 z-0">
            <BerandaMaps positions={positions} center={center} zoomLevel={13} />
          </div>
        </div>
      </div>
    </div>
  );
};
