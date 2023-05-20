import { useCartContext } from "../../../providers/CartContext";
import { useShowcaseContext } from "../../../providers/ShowcaseContext";
import { StyledLi } from "./style";

export const ProductCardPie = () => {
  const { productList } = useShowcaseContext();
  const { addToCart } = useCartContext();

  const pies = productList.filter(pie => 
    pie.kind === "pie"
  )

  return (
    <>
      {pies.map((pie) => (
        <StyledLi key={pie.id}>
          <img src={pie.image} alt={pie.name} />
          <div className="content">
            <h3>{pie.name}</h3>
            <div className="priceButtonBox">
              <p>
                {pie.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <button onClick={() => addToCart(pie.id)} className="buttonAddBag">Colocar na bag</button>
            </div>
          </div>
          </StyledLi>
      ))}
    </>
  );
};
