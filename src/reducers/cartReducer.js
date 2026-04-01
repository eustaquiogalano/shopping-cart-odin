import addToCart from "../utils/addToCart/addToCart";

function cartReducer(state, action) {
  switch (action.type) {
    case "add_to_cart": {
      return addToCart(action.productID, action.productList);
    }

    case "increment_quantity": {
      return state.map((laptop) => {
        return laptop.id === action.productID
          ? { ...laptop, quantity: laptop.quantity + 1 }
          : laptop;
      });
    }

    case "decrement_quantity": {
      return state.map((laptop) => {
        return laptop.id === action.productID
          ? { ...laptop, quantity: laptop.quantity - 1 }
          : laptop;
      });
    }
    default:
      break;
  }
}

export default cartReducer;
