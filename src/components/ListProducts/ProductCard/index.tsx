import { useShowcaseContext } from "../../../providers/ShowcaseContext";

export const ProductCard = () => {
  const { productList } = useShowcaseContext();

  return (
    <>
      {productList.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="content">
            <h3>{product.name}</h3>
            <p>
              {product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </li>
      ))}
    </>
  );
};
