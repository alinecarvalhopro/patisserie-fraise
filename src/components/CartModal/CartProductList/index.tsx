import { useCartContext } from "../../../providers/CartContext";
import CartProductCard from "./CartProductCard";
import { StyledDiv } from "./style";

const CartProductList = () => {
  const { productCart, removeAll } = useCartContext();

  const total = productCart.reduce(
    (accumulator, currentValue) =>
      (accumulator + currentValue.price) * currentValue.quantity,
    0
  );

  const quantity = productCart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );
  return (
    <>
      {productCart.length === 0 ? null : (
        <StyledDiv>
          <ul>
            <CartProductCard />
          </ul>
          <div className="totalBox">
            <p className="totalProducts">Total ({quantity})</p>
            <p className="totalPrice">
              {total.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          <button className="finalizeOrder" onClick={() => removeAll()}>Finalizar Pedido</button>
        </StyledDiv>
      )}
    </>
  );
};
export default CartProductList;
