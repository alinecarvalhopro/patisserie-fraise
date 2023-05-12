import { useShowcaseContext } from "../../../providers/ShowcaseContext";
import { StyledLi } from "./style";

export const ProductCardCake = () => {
  const { productList } = useShowcaseContext();

  const cakes = productList.filter(cake => 
    cake.kind === "cake"
  )

  return (
    <>
      {cakes.map((cake) => (
        <StyledLi key={cake.id}>
          <img src={cake.image} alt={cake.name} />
          <div className="content">
            <h3>{cake.name}</h3>
            <p>
              {cake.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          </StyledLi>
      ))}
    </>
  );
};
