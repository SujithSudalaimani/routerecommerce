import React from 'react';
import { useCart } from "../Components/Cartcontext";

const Cart = () => {
  const { cartItems, addToCart, decrementFromCart, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.10;
  const totalAfterDiscount = subtotal - discount;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {cartItems.map((item, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded">
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                    <div>
                      <h3 className="font-semibold  text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-600">${item.price}</p>
                      <p className="text-sm text-gray-800 font-semibold">
                        Total: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      className="bg-red-300 px-2 py-1 rounded hover:bg-red-400"
                      onClick={() => decrementFromCart(item.id)}
                    >
                      −
                    </button>
                    <span className="text-md font-bold">{item.quantity}</span>
                    <button
                      className="bg-green-300 px-2 py-1 rounded hover:bg-green-400"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                    <button
                      className="ml-4 bg-gray-200 px-3 py-1 text-sm rounded hover:bg-gray-300"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="text-right border-t pt-4">
            <p className="text-lg font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
            <p className="text-md text-green-700">Discount (10%): -${discount.toFixed(2)}</p>
            <p className="text-xl font-bold mt-2">Total Cart Value: ${totalAfterDiscount.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
