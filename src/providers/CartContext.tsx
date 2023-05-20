import { createContext, useContext, useState } from "react";
import { useShowcaseContext } from "./ShowcaseContext";
import { toast } from "react-hot-toast";

interface ICartProviderProps {
  children: React.ReactNode;
}

interface ICartContext {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart: (productId: number) => void;
  removeAll: () => void;
  productCart: IProductCart[];
  removeProductCart: (productId: number) => void;

  addQuantity: (productId: number) => void;
  removeQuantity: (productId: number) => void;
}

export interface IProductCart {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const { productList } = useShowcaseContext();

  const cartLocalStorage = localStorage.getItem("@PATISSERIEFRAISE:CARTLIST");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productCart, setProductCart] = useState<IProductCart[]>(
    cartLocalStorage ? JSON.parse(cartLocalStorage) : []
  );

  const addToCart = (productId: number) => {
    if (productCart.some((product) => product.id === productId)) {
      const newProductCart = productCart.map((product) => {
        if (product.id === productId) {
          product.quantity++;
          return product;
        } else {
          return product;
        }
      });
      setProductCart(newProductCart);
    } else {
      const addedToCart = productList.find((product) => {
        return product.id === productId;
      });

      const newProduct = { ...addedToCart, quantity: 1 };

      setProductCart([...productCart, newProduct] as IProductCart[]);
    }
  };

  const addQuantity = (productId: number) => {
    const newProductCart = productCart.map((product) => {
      if (product.id === productId) {
        product.quantity++;
        return product;
      } else {
        return product;
      }
    });
    setProductCart(newProductCart);
  };

  const removeQuantity = (productId: number) => {
    const newProductCart = productCart.map((product) => {
      if (product.id === productId) {
        if (product.quantity === 1) {
          return product;
        } else {
          product.quantity--;
          return product;
        }
      } else {
        return product;
      }
    });
    setProductCart(newProductCart as IProductCart[]);
  };

  const removeProductCart = (productId: number) => {
    const removed = productCart.filter((product) => {
      return product.id !== productId;
    });
    setProductCart(removed);
  };

  const removeAll = () => {
    setProductCart([]);
    setModalIsOpen(false);
    toast("Recebemos o seu pedido.", {
      style: {
        borderRadius: "10px",
        padding: "16px",
        background: "#EEC8BB",
        color: "#1E1E1E",
      },
    });
  };

  return (
    <CartContext.Provider
      value={{
        modalIsOpen,
        setModalIsOpen,
        addToCart,
        removeAll,
        productCart,
        removeProductCart,
        addQuantity,
        removeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
