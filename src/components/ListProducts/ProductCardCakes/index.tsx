import { useCartContext } from "../../../providers/CartContext";
import { useShowcaseContext } from "../../../providers/ShowcaseContext";
import { StyledLi } from "./style";

export const ProductCardCake = () => {
  const { productList } = useShowcaseContext();
  const { addToCart } = useCartContext();

  const cakes = productList.filter((cake) => cake.kind === "cake");

  return (
    <>
      {cakes.map((cake) => (
        <StyledLi key={cake.id}>
          <img src={cake.image} alt={cake.name} />
          <div className="content">
            <h3>{cake.name}</h3>
            <div className="priceButtonBox">
              <p>
                {cake.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <button onClick={() => addToCart(cake.id)} className="buttonAddBag">Colocar na bag</button>
            </div>
          </div>
        </StyledLi>
      ))}
    </>
  );
};
