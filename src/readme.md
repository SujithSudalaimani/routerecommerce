# 🛒 React Shopping Cart App

This project is a simple React-based Shopping Cart application that uses React Context API for global state management, React Router for page navigation, and DaisyUI + Tailwind CSS for UI styling.

 🧠 Functionality Overview

 🛒 `CartContext.jsx`
- Manages the cart items globally using Context
- Functions:
  - `addToCart(product)`
  - `decrementFromCart(productId)`
  - `removeFromCart(productId)`

🛍️ `ProductList.jsx`
- Fetches product data from `https://fakestoreapi.com/products`
- Displays product cards
- Add to Cart button

🛒 `Cart.jsx`
- Displays all cart items with:
  - Increment / Decrement quantity
  - Remove from cart
- Shows:
  - Subtotal
  - 10% Discount
  - Final Total

🔗 `Navbar.jsx`
- Shows cart count and subtotal using context
- Includes navigation to Cart page

