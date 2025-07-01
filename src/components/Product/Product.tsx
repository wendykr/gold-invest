import React from 'react';
import "./Product.scss";

interface ProductProps {
  key: number;
  imgSrc: string;
  title: string;
  getStatusClass: (status: string) => string;
  availability: string;
  price: number;
}

export const Product: React.FC<ProductProps> = ({key, imgSrc, title, getStatusClass, availability, price}) => {
  return (
    <div className="product" key={key}>
      <div className="product__container">
        <img
          src={`${imgSrc}`}
          className="product__img"
          alt={title}
        />
      </div>
      <div className="product__info">
        <h3 className="product__title">{title}</h3>
        <div className="product__grid">
          <p
            className={`product__status ${getStatusClass(
              availability
            )}`}
          >
            {availability}
          </p>
          <p className="product__price">{price} CZK</p>
          <div className="product__button">
            <img src="/shopping-cart.svg" alt="cart icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
