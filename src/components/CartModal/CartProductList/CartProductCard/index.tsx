import { StyledCartProductCard } from "./style";
import { useCartContext } from "../../../../providers/CartContext";
import { QuantityProduct } from "./QuantityProduct";
import bin from "../../../../assets/delete.svg";

const CartProductCard = () => {
  const { productCart, removeProductCart } = useCartContext();

  return (
    <>
      {productCart.map((product) => (
        <StyledCartProductCard key={product.id}>
            <img className="imageProduct" src={product.image} alt={product.name} />
          <div className="contentBox">
            <h3 className="productName">
              {product.name}
              </h3>
            <div className="quantityRemoveAll">
              <QuantityProduct product={product} />
              <button
                className="removeProduct"
                onClick={() => removeProductCart(product.id)}
              >
                <img className={"bin"} src={bin} />
              </button>
            </div>
          </div>
        </StyledCartProductCard>
      ))}
    </>
  );
};

export default CartProductCard;
