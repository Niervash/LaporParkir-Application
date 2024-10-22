import React, { useEffect, useState } from "react";
import NavbarSection from "../Fragment/NavbarSection";
import { FooterUser } from "../Section/BasicUser/Footer/FooterUser";

const LandingLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user")); // Mengambil data pengguna dari localStorage
    setIsLoggedIn(!!userData); // Set status login berdasarkan keberadaan userData
    console.log(userData);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSection isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div className="flex-grow bg-slate-700 dark:bg-gradient-to-b from-slate-700 p-4">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { isLoggedIn, setIsLoggedIn });
        })}
      </div>
      <FooterUser />
    </div>
  );
};

export default LandingLayout;
