import { useCartContext } from "../../providers/CartContext";
import CartProductList from "./CartProductList";
import { useEffect } from "react";
import { StyledDiv } from "./style";
import { Link } from "react-router-dom";

export const CartModal = () => {
  const { modalIsOpen, setModalIsOpen, productCart } = useCartContext();

  useEffect(() => {
    localStorage.setItem(
      "@PATISSERIEFRAISE:CARTLIST",
      JSON.stringify(productCart)
    );
  }, [productCart]);

  return (
    <>
      {" "}
      {modalIsOpen ? (
        <StyledDiv role="dialog">
          <div className="containerDialog">
            <header>
              <h2>Seu pedido</h2>
              <button
                className="closeModal"
                onClick={() => {
                  setModalIsOpen(false);
                }}
              >
                x
              </button>
            </header>
            <div className="cartBox">
              {productCart.length === 0 ? (
                <div className="withoutProducts">
                  <h3>Sua bag está vazia</h3>
                  <button
                    onClick={() => {
                      setModalIsOpen(false);
                    }}
                  >
                    Clique aqui para adicionar ítens
                  </button>
                </div>
              ) : (
                <CartProductList />
              )}
            </div>
          </div>
        </StyledDiv>
      ) : null}
    </>
  );
};
