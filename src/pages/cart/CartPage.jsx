

import { toast } from "react-toastify";
import useCart from "../../hooks/useCart";


const CartPage = () => {
  const [cart, dispatch] = useCart();

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
     toast.warn(`Item removed from cart`, {
    position: "top-right",
  });
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    toast.info(`Item quntity changed successfully`, {
    position: "top-right",
  });
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const shipping = 50;
  const total = subtotal + tax + shipping;

  return (
    <section className="bg-gray-50 py-8 antialiased md:py-16">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <h2 className="text-2xl font-semibold text-gray-800 mb-8">
      Shopping Cart
    </h2>

    <div className="mt-6 md:gap-6 lg:flex lg:items-start xl:gap-8">
      {/* Cart Items */}
      <div className="mx-auto w-full lg:max-w-2xl xl:max-w-4xl">
        <div className="space-y-6">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300 md:p-6"
              >
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <img
                    className="h-20 w-20 object-cover rounded-md"
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="flex-1 min-w-[200px]">
                    <h3 className="text-base font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      className="rounded border border-gray-300 bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 transition"
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>

                    <span className="w-7 text-center font-medium text-gray-800">
                      {item.quantity}
                    </span>

                    <button
                      className="rounded border border-gray-300 bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 transition"
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <div className="font-semibold text-gray-900 text-right min-w-[70px]">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm transition"
                    aria-label="Remove item"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Order Summary */}
      <div className="mx-auto mt-8 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-xl font-semibold text-gray-900">Order summary</p>

          <div className="space-y-3">
            <dl className="flex justify-between text-gray-600">
              <dt>Subtotal</dt>
              <dd>${subtotal.toFixed(2)}</dd>
            </dl>
            <dl className="flex justify-between text-gray-600">
              <dt>Tax (10%)</dt>
              <dd>${tax.toFixed(2)}</dd>
            </dl>
            <dl className="flex justify-between text-gray-600">
              <dt>Shipping</dt>
              <dd>${shipping.toFixed(2)}</dd>
            </dl>
          </div>

          <dl className="flex justify-between border-t border-gray-300 pt-3 text-lg font-bold text-gray-900">
            <dt>Total</dt>
            <dd>${total.toFixed(2)}</dd>
          </dl>

          <a
            href="#"
            className="block w-full rounded bg-indigo-600 py-3 text-center text-white transition hover:bg-indigo-700"
          >
            Proceed to Checkout
          </a>

          <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
            <span>or</span>
            <a
              href="/"
              className="underline text-indigo-600 hover:text-indigo-800"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default CartPage;
