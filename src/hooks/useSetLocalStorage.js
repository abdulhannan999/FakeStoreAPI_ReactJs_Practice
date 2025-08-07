import { useReducer, useEffect } from "react";

// Initial state loader from localStorage
const getInitialCart = () => {
  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    case "REMOVE_ITEM":
      return state.filter(item => item.productId !== action.payload.productId);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

const useSetLocalStorage = () => {
  const [cart, dispatch] = useReducer(cartReducer, [], getInitialCart);

  // Sync with localStorage on cart change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return [cart, dispatch];
};

export default useSetLocalStorage;
