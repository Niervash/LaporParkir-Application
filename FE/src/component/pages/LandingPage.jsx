import React from "react";
import LandingLayout from "../Layout/LandingLayout";
import Home from "../Section/BasicUser/Home/Home";
import Sampah from "../Section/Sampah/Sampah";
import { About } from "../Section/BasicUser/About/About";
import { Stats } from "../Section/BasicUser/Stats/Stats";

export const LandingPage = () => {
  return (
    <div>
      <LandingLayout>
        <Home />
        <Stats />
        <About />
      </LandingLayout>
    </div>
  );
};
