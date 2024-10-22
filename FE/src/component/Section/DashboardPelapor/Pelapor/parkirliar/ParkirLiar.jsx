// src/components/ParkirLiar/ParkirLiar.js
import React, { useState, useEffect } from "react";
import { TableParkirLiar } from "../../../../Fragment/Table/TableParkirLiar/TableParkirLiar";
import { Breadcrumbs } from "../../../../Fragment/BreadCrumbs/BreadCrumbs";
import { IoIosAdd } from "react-icons/io";
import { ButtonInput } from "../../../../bases/buttoninput/buttoninput";
import { ModalDashboard } from "../../../../Fragment/ModalPict/modaldashboard";
import { Pagination } from "../../../../bases/Dashboard/Pagination/Pagination";
import { ModalParkirLiar } from "../../../../Fragment/InputModal/ParkirLiar/ModalParkirLiar";

export const ParkirLiar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isparkirLiarModalOpen, setIsModalParkirLiarOpen] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const userId = sessionStorage.getItem("userId"); // Ambil userId dari session

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://laporparkir-application.onrender.com/parkir?userId=${userId}`
        );
        const result = await response.json();
        console.log(result); // Log untuk memeriksa hasil
        if (result.data) {
          setData(result.data); // Set data jika tersedia
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  const totalPages = Math.ceil(
    (data && Array.isArray(data) ? data.length : 0) / itemsPerPage
  );
  const currentItems = (data && Array.isArray(data) ? data : []).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleModalParkir = () => {
    setIsModalParkirLiarOpen(!isparkirLiarModalOpen);
  };

  const breadcrumbItems = [
    { label: "Dashboard" },
    { label: "Parkir Liar", link: "#" },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />

      <div className="mt-4">
        <ButtonInput
          text="Tambah Data"
          onClick={handleModalParkir}
          className="shadow-xl"
          icon={<IoIosAdd />}
        />
        <TableParkirLiar
          items={currentItems}
          onModalToggle={handleModalToggle}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <ModalParkirLiar
          isOpen={isparkirLiarModalOpen}
          onClose={handleModalParkir}
        />
        <ModalDashboard isOpen={isModalOpen} onClose={handleModalToggle} />
      </div>
    </div>
  );
};
