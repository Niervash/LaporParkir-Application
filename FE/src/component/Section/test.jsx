import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const DataDisplay = () => {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const user = JSON.parse(sessionStorage.getItem("user"));
  //   const userId = Cookies.get("userId");
  //   console.log("User ID:", userId);

  //   if (!user || !userId) {
  //     navigate("/login");
  //     return;
  //   }

  //   const fetchData = async () => {
  //     try {
  //       const apiUrl = import.meta.env.VITE_API_URL;
  //       console.log(`Fetching data from: ${apiUrl}/petugas/${userId}`);

  //       const response = await fetch(`${apiUrl}/petugas/${userId}`, {
  //         method: "GET",
  //         credentials: "include",
  //       });

  //       if (!response.ok) {
  //         if (response.status === 404) {
  //           throw new Error("Resource not found.");
  //         } else {
  //           throw new Error("An error occurred on the server.");
  //         }
  //       }

  //       const result = await response.json();
  //       setData(result);
  //     } catch (err) {
  //       console.error("Error details:", err.message);
  //       setError(err.message || "An unexpected error occurred.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [navigate]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  const [data, setData] = useState([]);
  const [me, setMe] = useState();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const userId = Cookies.get("userId");
  console.log("User ID:", userId);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      // const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.get(
        `https://laporparkir-application.onrender.com/petugas`
      );
      console.log("response", response);
      setData(response.data.data);
    } catch (error) {
      console.log("error :", error.response.data.message);
    }
  };

  const getMNe = async () => {
    try {
      // const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.get(
        `https://laporparkir-application.onrender.com/me`
      );
      console.log("me", response.data);
      setMe(response.data);
    } catch (error) {
      console.log("error :", error.response.data.message);
    }
  };

  useEffect(() => {
    getData();
    getMNe();
  }, []);

  console.log("data", data);
  console.log("me", me);

  return (
    <div>
      <h1>Laporan Petugas</h1>
      {data.map((item, index) => (
        <div key={index}>
          <p>
            <strong>Hari:</strong> {item.hari}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
