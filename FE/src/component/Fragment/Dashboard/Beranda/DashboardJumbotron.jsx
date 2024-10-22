import React from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "../../../bases/Button";
import { Breadcrumbs } from "../../BreadCrumbs/BreadCrumbs";

const DashboardJumbotron = () => {
  const breadcrumbItems = [{ label: "Dashboard" }];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <section className="mt-3 min-h-[calc(100vh-14rem)] rounded-lg bg-white dark:bg-gray-700 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] flex items-center justify-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center z-10 relative">
          <h1 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl dark:text-white">
            <TypeAnimation
              sequence={[
                "Parkir Sembarangan? Laporkan Sekarang ",
                5000,
                "Di LaporParkir ",
                5000,
              ]}
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            LaporParkir, laporan Anda membantu menciptakan lingkungan kota yang
            lebih tertib dan nyaman.
          </p>
          <Button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
          >
            HOME
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DashboardJumbotron;
