import React from "react";
import SidebarSection from "../Fragment/SidebarSection";
import FooterSection from "../Fragment/Dashboard/sidebar/FooterSection";
import DropdownDashboard from "../Fragment/Dashboard/sidebar/DropdownDashboard";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useEffect } from "react";
import { Footerdashboard } from "../Fragment/footerdashboard/footerdashboard";
import { SpeedDial } from "../bases/SpeedDial/SpeedDial";

const PelaporLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const sessionData = JSON.parse(sessionStorage.getItem("user"));
    if (sessionData) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
      <nav className="fixed top-0 z-50 w-full p-2 drop-shadow-lg mb-2 bg-slate border-slate-700 dark:bg-slate-700 dark:border-slate-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end ">
              <Link
                to="/"
                className="flex items-center px-4 space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="../../public/Logo/1.svg"
                  class="h-8"
                  alt="Flowbite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Lapor <span className="text-sky-300">Parkir</span>
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                onClick={toggleSidebar}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <RxHamburgerMenu className="md:hidden block text-white cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="z-50 shadow-md">{isLoggedIn && <SpeedDial />}</div>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen  pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-slate-700 dark:border-slate-700 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-slate-700">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/user-dashboard"
                className="flex items-center mt-5 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-white-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/user-dashboard/home"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-500 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
              </Link>
            </li>
            <DropdownDashboard />
            <li>
              <Link
                to="/user-dashboard/edit-profile"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-500 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Users Profile
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64  ">
        <div className="p-4 border-gray-200 mt-14 ">{children}</div>
        <footer className="bg-gray-800 text-white py-4 rounded-lg ">
          <Footerdashboard />
        </footer>
      </div>
    </div>
  );
};

export default PelaporLayout;
