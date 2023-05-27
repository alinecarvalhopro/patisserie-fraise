import { Navigate, Outlet } from "react-router-dom";
import { ShowcaseProvider } from "../../providers/ShowcaseContext";
import { CartProvider } from "../../providers/CartContext";

export const ProtectedRoutes = () => {
  const token = localStorage.getItem("@PATISSERIEFRAISE:TOKEN");
  return token ? (
    <ShowcaseProvider>
      <CartProvider>
        <Outlet />
      </CartProvider>
    </ShowcaseProvider>
  ) : (
    <Navigate to="/" />
  );
};
