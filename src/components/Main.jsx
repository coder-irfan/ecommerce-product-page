const images = [
  {
    id: 1,
    main: 'images/image-product-1.jpg',
    thumbnail: 'images/image-product-1-thumbnail.jpg',
  },

  {
    id: 2,
    main: 'images/image-product-2.jpg',
    thumbnail: 'images/image-product-2-thumbnail.jpg',
  },
  
  {
    id: 3,
    main: 'images/image-product-3.jpg',
    thumbnail: 'images/image-product-3-thumbnail.jpg',
  },
  {
    id: 4,
    main: 'images/image-product-4.jpg',
    thumbnail: 'images/image-product-4-thumbnail.jpg',
  },
]

import React, { useState } from "react";

function Main({cartItems, setCartItems, setIsCartOpen}) {
    const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quantity, setQuantity] = useState(0);
 
    const prevImage = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const nextImage = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const increase = () => setQuantity(q => q + 1);
    const decrease = () => setQuantity(q => (q > 0 ? q - 1 : 0));

    const handleAddToCart = () => {
      if (quantity === 0) return;
      setCartItems([{
        id: 1,
        title: "Fall Limited Edition Sneakers",
        price: 125,
        quantity,
        image: images[currentIndex].thumbnail
      }]);
      setQuantity(0);
    }

    return (
      <>
        <main className="main">
          <div className="main__container">

            <div className="main__images">
              <div className="main__image">

                <img 
                  src="images/icon-previous.svg" 
                  alt="previous" 
                  className="main__arrow-left main__hidden-icons"
                  onClick={prevImage}
                />

                <img
                  src={images[currentIndex].main}
                  alt="Seleceted Product"
                  className="main__img"
                  onClick={() => setIsLightBoxOpen(true)}
                />

                <img 
                  src="images/icon-next.svg" 
                  alt="next" 
                  className="main__arrow-right main__hidden-icons"
                  onClick={nextImage}
                />

              </div>

              <div className="main__thumbnails">
                {images.map((img, idx) => (
                  <img
                    key={img.id}
                    src={img.thumbnail}
                    alt={`Thumbnail ${img.id}`}
                    className={currentIndex === idx ? "active" : ""}
                    onClick={() => setCurrentIndex(idx)}
                  />
                ))}
              </div>
            </div>

            <div className="content">
              <p className="content__subtitle">Sneaker Company</p>
              <h1 className="content__title">Fall Limited Edition Sneakers</h1>
              <p className="content__text">These low-profile sneakers are your perfect casual wear companion. Featuring a 
              durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

              <div className="content__prices-wrapper">
                <div className="content__prices">
                  <h2 className="content__price">$125.00</h2>
                  <p className="content__discount">50%</p>
                </div>

                <div className="content__previous-price">
                  <p className="content__pre-price">$250.00</p>
                </div>
              </div>

              <div className="content__buttons">
                <span className="content__amount">
                  <img src="images/icon-minus.svg" alt="minus" className="content__minus-icon" onClick={decrease} />
                  <span className="content__count">{quantity}</span>
                  <img src="images/icon-plus.svg" alt="plus" className="content__plus-icon" onClick={increase} />
                </span>
                <button className="content__add-cart" onClick={handleAddToCart}>
                  <img src="images/icon-cart.svg" alt="cart" className="content__cart-icon" />
                  Add to cart
                </button>
              </div>
            </div>

          </div>
        </main>

        {isLightBoxOpen && (
          <div className="lightbox">
            <div className="lightbox__container">
              <div className="lightbox__overlay" onClick={() => setIsLightBoxOpen(false)}></div>

              <div className="lightbox__box">
                <img 
                  src="images/icon-close.svg" 
                  alt="close"
                  className="lightbox__close-icon" 
                  onClick={() => setIsLightBoxOpen(false)}
                />

                <img 
                  src="images/icon-previous.svg" 
                  alt="previous" 
                  className="lightbox__arrow-left"
                  onClick={prevImage}
                />

                <img 
                  src={images[currentIndex].main} 
                  alt="product img"
                  className="lightbox__main-img"
                />

                <img 
                  src="images/icon-next.svg" 
                  alt="next" 
                  className="lightbox__arrow-right"
                  onClick={nextImage}
                />
              </div>

              <div className="lightbox__thumbnails">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.thumbnail}
                    alt={`Thumbnail ${img.id}`}
                    className={`lightbox__thumb ${currentIndex === idx ? "active" : ""}`}
                    onClick={() => setCurrentIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    )
}

export default Main;