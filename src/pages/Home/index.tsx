import { useEffect } from "react";
import { ProductList } from "../../components/ListProducts";
import { useShowcaseContext } from "../../providers/ShowcaseContext";
import { Header } from "../../components/Header";
import { StyledDiv } from "./style";

export const Home = () => {
  const { loadProducts } = useShowcaseContext();

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <StyledDiv>
      <Header />
      <ProductList />
    </StyledDiv>
  );
};
