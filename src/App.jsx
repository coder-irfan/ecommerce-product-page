import React, { useState } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Main from "./components/Main"
import "./sass/style.scss";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  
    return (
        <>
          <Header
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />

          {isCartOpen && (
            <Cart cartItems={cartItems} setCartItems={setCartItems} />
          )}

          <Main
            cartItems={cartItems}
            setCartItems={setCartItems}
            setIsCartOpen={setIsCartOpen}
          />
        </>
    )
}

export default App;