import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

interface IShowcaseProviderProps {
  children: React.ReactNode;
}

interface IShowcaseContext {
  productList: IProduct[];
  loadProducts: () => Promise<void>;
  loadingProducts: boolean;
}

interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  kind: string;
}

export const ShowcaseContext = createContext({} as IShowcaseContext);

export const ShowcaseProvider = ({ children }: IShowcaseProviderProps) => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

  const token = localStorage.getItem("@PATISSERIEFRAISE:TOKEN");

  const loadProducts = async () => {
    setLoadingProducts(true);
    try {
      const { data } = await api.get<IProduct[]>("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProductList(data);
    } catch (error) {
    } finally {
      setLoadingProducts(false);
    }
  };

  return (
    <ShowcaseContext.Provider
      value={{
        productList,
        loadProducts,
        loadingProducts,
      }}
    >
      {children}
    </ShowcaseContext.Provider>
  );
};

export const useShowcaseContext = () => useContext(ShowcaseContext);
