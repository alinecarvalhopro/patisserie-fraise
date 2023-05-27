import {
  IProductCart,
  useCartContext,
} from "../../../../../providers/CartContext";
import { StyledDiv } from "./style";

interface IQuantityProductProps {
  product: IProductCart;
}

export const QuantityProduct = ({ product }: IQuantityProductProps) => {
  const { removeQuantity, addQuantity } = useCartContext();

  return (
    <StyledDiv>
      <button
        className={"buttonQuantity"}
        onClick={() => removeQuantity(product.id)}
      >
        -
      </button>
      <p>{product.quantity}</p>
      <button
        className={"buttonQuantity"}
        onClick={() => addQuantity(product.id)}
      >
        +
      </button>
    </StyledDiv>
  );
};
