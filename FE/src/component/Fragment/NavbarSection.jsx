// NavbarSection
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { SpeedDial } from "../bases/SpeedDial/SpeedDial";

const API = "https://laporparkir-application.onrender.com";

const NavbarSection = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Mengambil informasi pengguna dari sessionStorage
    const userData = JSON.parse(sessionStorage.getItem("user"));
    if (userData) {
      setIsLoggedIn(true);
      setUserRole(userData.role);
    }
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      // Navigasi berdasarkan role
      if (userRole === "admin") {
        navigate("/admin-dashboard"); // Rute untuk admin
      } else if (userRole === "user") {
        navigate("/user-dashboard"); // Rute untuk user
      }
    } else {
      navigate("/login"); // Navigasi ke halaman login jika belum login
    }
  };

  // const profileViewer = () => {
  //   if (isLoggedIn) {

  // };
  return (
    <nav className="sticky top-0 z-50 bg-slate-700 dark:bg-gradient-to-b from-slate-700 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="../../public/Logo/1.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Lapor <span className="text-sky-300">Parkir</span>
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={handleButtonClick}
            className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 rounded-lg sm:w-auto hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-600"
          >
            {isLoggedIn ? (
              <>
                Dashboard <MdDashboard className="ml-2" />
              </>
            ) : (
              "Sign In"
            )}
          </button>
          {isLoggedIn && <SpeedDial setIsLoggedIn={setIsLoggedIn} />}{" "}
          {/* Menambahkan setIsLoggedIn */}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-slate-800 md:dark:hover:text-slate-400 dark:text-white dark:hover:bg-slate-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-200"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-slate-800 md:dark:hover:text-slate-400 dark:text-white dark:hover:bg-slate-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Statistics"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-slate-800 md:dark:hover:text-slate-400 dark:text-white dark:hover:bg-slate-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-200"
              >
                Statistics
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
