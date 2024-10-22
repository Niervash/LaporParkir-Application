import React from "react";
import { Carousel } from "../../../bases/carousel/carousel";
import { LuLogIn } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

const Home = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  // Mengambil data pengguna dari sessionStorage
  const userData = JSON.parse(sessionStorage.getItem("user"));

  const handleDashboardRedirect = () => {
    if (userData && userData.role) {
      if (userData.role === "admin") {
        navigate("/admin-dashboard"); // Navigasi ke dashboard admin
      } else {
        navigate("/user-dashboard"); // Navigasi ke dashboard user
      }
    }
  };

  return (
    <div>
      <section>
        <div
          className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-20"
          id="home"
        >
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Lapor Parkir Liar dengan Mudah!
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Platform ini memudahkan Anda untuk melaporkan kasus parkir liar di
              daerah Anda. Cukup isi form yang disediakan untuk memberikan
              informasi yang diperlukan.
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 rounded-lg sm:w-auto hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-600"
                  >
                    <LuLogIn className="mr-2" />
                    Sign In
                  </Link>

                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-center text-gray-900 rounded-lg sm:w-auto focus:outline-none hover:text-blue-700 focus:z-10 focus:ring-4 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Daftar
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleDashboardRedirect}
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 rounded-lg sm:w-auto hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-600"
                >
                  <MdDashboard className="mr-2" />
                  Dashboard
                </button>
              )}
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-end">
            <Carousel />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
