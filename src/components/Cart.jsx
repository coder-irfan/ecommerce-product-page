import React  from "react";

function Cart({cartItems, setCartItems}) {
    return (
        <section className="cart">

          <div className="cart__container">
            <h3>Cart</h3>
            <div className="cart__line"></div>
          </div>

          <div className="cart__details">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul className="list">
                {cartItems.map(item => (
                  <li key={item.id}>
                    <div className="list__body">
                      <div className="list__thumbnail">
                        <img src={item.image} alt="Product thumbnail" />
                      </div>
                      
                      <div className="list__content">
                        <div className="list__title">
                          <p className="list__title-name">{item.title}</p>
                        </div>

                        <div className="list__amounts">
                          <p>${item.price} x {item.quantity} = <strong>${item.price * item.quantity}</strong></p>
                        </div>
                      </div>

                      <div className="list__delete">
                        <img 
                          src="images/icon-delete.svg" 
                          alt="delete" 
                          className="list__delete-icon"
                          onClick={() => setCartItems([])}
                        />
                      </div>
                    </div>

                    <button className="list__button">Checkout</button>
                  </li>
                ))}
      
              </ul>
            )}
          
          </div>

        </section>
    )
}

export default Cart;