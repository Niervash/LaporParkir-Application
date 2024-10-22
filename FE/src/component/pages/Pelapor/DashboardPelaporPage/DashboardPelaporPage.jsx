import React from "react";
import PelaporLayout from "../../../Layout/PelaporLayout";
import DashboardJumbotron from "../../../Fragment/Dashboard/Beranda/DashboardJumbotron";

export const DashboardPelaporPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PelaporLayout>
        <DashboardJumbotron />
      </PelaporLayout>
    </div>
  );
};
