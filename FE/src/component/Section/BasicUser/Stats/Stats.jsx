import React, { useEffect, useState } from "react";
import { NumberStats } from "../../../Fragment/NumberStats/NumberStats";

export const Stats = () => {
  const [data, setData] = useState({
    userCount: 0,
    totalApprove: 0,
    laporanPetugasCount: 0,
    laporanParkirCount: 0,
  });

  useEffect(() => {
    const fetchDataStats = async () => {
      try {
        const response = await fetch(
          `https://laporparkir-application.onrender.com/dashboard`
        );
        const result = await response.json();
        console.log(result); // Log untuk memeriksa hasil
        if (result) {
          setData(result); // Set data dari API
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataStats();
  }, []); // Hanya dipanggil sekali saat komponen dimount

  return (
    <section>
      <div className="max-w-screen-xl px-4 pb-5 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-4 dark:text-gray-400">
          <a className="flex items-center lg:justify-center">
            <NumberStats n={data.userCount} label="Pengguna Terdaftar" />
          </a>
          <a className="flex items-center lg:justify-center">
            <NumberStats n={data.totalApprove} label="Pelaporan Terpublikasi" />
          </a>
          <a className="flex items-center lg:justify-center">
            <NumberStats
              n={data.laporanParkirCount}
              label="Pelaporan Parkir Liar"
            />
          </a>
          <a className="flex items-center lg:justify-center">
            <NumberStats
              n={data.laporanPetugasCount}
              label="Pelaporan Petugas Parkir Liar"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
