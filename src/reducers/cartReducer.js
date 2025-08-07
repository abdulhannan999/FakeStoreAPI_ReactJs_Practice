
export const getInitialCart = () => {
  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.find(item => item.id === action.payload.id);
      if (exists) return state;
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE_ITEM": {
      return state.filter(item => item.id !== action.payload.id);
    }

    case "UPDATE_QUANTITY": {
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    }

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};
