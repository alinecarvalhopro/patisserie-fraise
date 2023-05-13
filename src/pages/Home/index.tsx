import { useEffect } from "react";
import { ProductList } from "../../components/ListProducts";
import { useShowcaseContext } from "../../providers/ShowcaseContext";
import { Header } from "../../components/Header";

export const Home = () => {
  const { loadProducts, loadingProducts } = useShowcaseContext();

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      {loadingProducts ? null : (
        <>
          <Header />
          <ProductList />
        </>
      )}
    </>
  );
};
