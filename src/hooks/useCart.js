import { useReducer, useEffect } from "react";
import { cartReducer, getInitialCart } from "../reducers/cartReducer.js";

const useCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, [], getInitialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const getcartlength=()=>{
    const cart=localStorage.getItem("cart")
    return cart.length
  }
  return [cart, dispatch , getcartlength];
};

export default useCart;
