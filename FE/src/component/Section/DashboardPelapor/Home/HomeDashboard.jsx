import React from "react";
import { Commoncardused } from "../../../Fragment/CardCommon/commoncardused";
import BerandaMaps from "../../../Fragment/maps/BerandaMaps";

export const HomeDashboard = () => {
  console.log("HomeDashboard rendered"); // Tambahkan log ini
  return (
    <Commoncardused>
      <BerandaMaps />
    </Commoncardused>
  );
};

export default HomeDashboard;
