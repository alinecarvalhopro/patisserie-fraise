import { useEffect } from "react";
import { ProductList } from "../../components/ListProducts";
import { useShowcaseContext } from "../../providers/ShowcaseContext";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Footer } from "../../components/Footer";
import { CartModal } from "../../components/CartModal";

export const Home = () => {
  const { loadProducts, loadingProducts } = useShowcaseContext();

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      {loadingProducts ? <Loading/> : (
        <>
          <Header />
          <CartModal/>
          <ProductList />
          <Footer/>
        </>
      )}
    </>
  );
};
