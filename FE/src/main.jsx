import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "leaflet/dist/leaflet.css";

// Import Halaman
import { LandingPage } from "./component/pages/LandingPage";
import { DashboardPelaporPage } from "./component/pages/Pelapor/DashboardPelaporPage/DashboardPelaporPage";
import HomePelaporPage from "./component/pages/Pelapor/HomePelaporPage/HomePelaporPage";
import { ParkirLiarpage } from "./component/pages/Pelapor/MenuPelaporanPage/ParkirLiar/ParkirLiarpage";
import { PetugasLiarpage } from "./component/pages/Pelapor/MenuPelaporanPage/PetugasLiar/PetugasLiarpage";
import { EditProfileUser } from "./component/pages/Pelapor/EditProfileUserPage/EditProfileUser";
import { LoginPage } from "./component/pages/auth/LoginPage/LoginPage";
import { RegisterPage } from "./component/pages/auth/RegisterPage/RegisterPage";
import { ToastNotif } from "./component/bases/Toast/ToastNotif";
import ProtectedRoute from "./content/auth/ProtectedRoute/protectedRoute";
import DataDisplay from "./component/Section/test";
import axios from "axios";

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  // User Dashboard
  {
    path: "/user-dashboard",
    element: <DashboardPelaporPage />,
  },
  {
    path: "/user-dashboard/home",
    element: <HomePelaporPage />,
  },
  {
    path: "/user-dashboard/parkir-liar",
    element: <ParkirLiarpage />,
  },
  {
    path: "/user-dashboard/petugas-liar",
    element: <PetugasLiarpage />,
  },
  {
    path: "/user-dashboard/edit-profile",
    element: <EditProfileUser />,
  },
  // Admin Dashboard
  // {
  //   path: "/admin-dashboard",
  //   element: (
  //     <ProtectedRoute allowedRoles={["admin"]}>
  //       <AdminDashboardPage /> {/* Ganti dengan halaman admin yang sesuai */}
  //     </ProtectedRoute>
  //   ),
  // },
  {
    path: "/test",
    element: <ToastNotif />,
  },
  {
    path: "/DataDisplay",
    element: <DataDisplay />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
