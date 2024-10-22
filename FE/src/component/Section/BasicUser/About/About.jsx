import React from "react";
import BerandaMaps from "../../../Fragment/maps/BerandaMaps";

export const About = () => {
  return (
    <section>
      <div
        className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6 "
        id="about"
      >
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <BerandaMaps className="rounded-lg z-0" />
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Kami menangani parkir liar untuk lingkungan yang lebih baik
            </h2>
            <p className=" font-light lg:text-xl">
              Menyederhanakan proses pelaporan parkir liar untuk memastikan
              ketertiban dan keselamatan publik. Memberdayakan warga untuk
              bertindak tanpa kompleksitas metode pelaporan tradisional.
            </p>
            <ul
              role="list"
              className="pt-2 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Laporan pelanggaran parkir real-time
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Template pelaporan yang mudah digunakan
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Pelacakan pelanggaran yang efisien
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Otomatisasi laporan tanpa batas
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Manajemen pengetahuan parkir
                </span>
              </li>
            </ul>
            <p className="font-light lg:text-xl">
              Menyediakan pengalaman pelaporan yang cepat dan efektif untuk
              mengatasi masalah parkir liar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
