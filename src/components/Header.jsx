import React, { useState } from "react";

function Header({isCartOpen, setIsCartOpen, cartItems, setCartItems}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isAvatarActive, setIsAvatarActive] = useState(false);
    const [activeLink, setActiveLink] = useState(false);

    {isCartOpen && <div className="overlay" onClick={() => setIsCartOpen(false)}></div>}

    const totalItem = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="header">
          <nav className="nav">
            <div className="nav__container">
              <div className="nav__wrapper">
                <div className="nav__menu-logo">
                  <div className="nav__icons">
                    
                  {!isOpen && (
                    <div className="nav__menu" onClick={() => setIsOpen(true)}>
                      <img src="images/icon-menu.svg" alt="menu-icon" />
                    </div>
                  )}
                </div>

                <div className="nav__logo">
                  <img src="images/logo.svg" alt="logo" />
                </div>
                </div>
                
                {isOpen && <div className="nav__overlay" onClick={() => setIsOpen(false)}></div>}

                <div className={`nav__links ${isOpen ? "nav__show-menu" : ""}`}>
                  {isOpen && (
                    <div className="nav__close" onClick={() => setIsOpen(false)}>
                      <img src="images/icon-close.svg" alt="close-icon" />
                    </div>
                   )}
                   
                  <ul>

                    <li>
                      <a 
                        href="#"
                        className={`nav__link ${activeLink === "Collections" ? "nav__link--active" : ""}`}
                        onClick={() => setActiveLink("Collections")}
                      >
                        Collections
                      </a>
                    </li>

                    <li>
                      <a 
                        href="#"
                        className={`nav__link ${activeLink === "Men" ? "nav__link--active" : ""}`}
                        onClick={() => setActiveLink("Men")}
                      >
                        Men
                      </a>
                    </li>

                    <li>
                      <a 
                        href="#" 
                        className={`nav__link ${activeLink === "Women" ? "nav__link--active" : ""}`}
                        onClick={() => setActiveLink("Women")}
                      >
                        Women
                      </a>
                    </li>

                    <li>
                      <a 
                        href="#" 
                        className={`nav__link ${activeLink === "About" ? "nav__link--active" : ""}`}
                        onClick={() => setActiveLink("About")}
                      >
                        About
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className={`nav__link ${activeLink === "Contact" ? "nav__link--active" : ""}`}
                        onClick={() => setActiveLink("Contact")}
                      >
                        Contact
                      </a>
                    </li>

                  </ul>

                </div>
              </div>

              <div className="nav__cart-profile">

                <div className="nav__cart-wrapper">
                  <img 
                    src="images/icon-cart.svg" 
                    alt="icon cart" 
                    className="nav__cart-icon"
                    onClick={() => setIsCartOpen(!isCartOpen)} 
                  />
                  {totalItem > 0 && (
                    <span className="nav__cart-count">{totalItem}</span>
                  )}
                </div>
                
                
                <img 
                  src="images/image-avatar.png"
                  alt="avatar image"
                  className={`nav__avatar-img ${isAvatarActive ? "active" : ""}`}
                  onClick={() => setIsAvatarActive(!isAvatarActive)}
                />

              </div>
            </div>
          </nav>
        </header>
    )
}

export default Header;