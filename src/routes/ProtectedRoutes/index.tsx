import { Navigate, Outlet } from "react-router-dom";
import { ShowcaseProvider } from "../../providers/ShowcaseContext";

export const ProtectedRoutes = () => {
  const token = localStorage.getItem("@PATISSERIEFRAISE:TOKEN");
  return token ? (
    <ShowcaseProvider>
      <Outlet />
    </ShowcaseProvider>
  ) : (
    <Navigate to="/" />
  );
};
