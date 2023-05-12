import { ProductCardCake } from "./ProductCardCakes";
import wordCake from "../../assets/wordCake.png";
import wordPie from "../../assets/wordPie.png";
import { ProductCardPie } from "./ProductCardPie";
import { StyledDiv } from "./style";

export const ProductList = () => {
  return (
    <StyledDiv>
      <img className={"wordCake"} src={wordCake} />
      <ul>
        <ProductCardCake />
      </ul>
      <img className={"wordPie"} src={wordPie} />
      <ul>
        <ProductCardPie />
      </ul>
    </StyledDiv>
  );
};
