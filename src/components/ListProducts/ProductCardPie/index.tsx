import { useShowcaseContext } from "../../../providers/ShowcaseContext";
import { StyledLi } from "./style";

export const ProductCardPie = () => {
  const { productList } = useShowcaseContext();

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
            <p>
              {pie.price.toLocaleString("pt-br", {
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
