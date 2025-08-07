import { createContext, useContext } from "react";
import useFetchData from "../hooks/useFetchData";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { products, setProducts, product, getSingleProduct } = useFetchData();

  return (
    <ProductContext.Provider value={{ products, setProducts, product, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook for consuming the context
export const useProductContext = () => useContext(ProductContext);
