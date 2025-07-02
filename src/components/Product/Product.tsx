import React from 'react';
import "./Product.scss";

interface ProductProps {
  key: number;
  imgSrc: string;
  title: string;
  getStatusClass: (status: string) => string;
  availability: string;
  price: number;
  flags: string[];
}

export const Product: React.FC<ProductProps> = ({key, imgSrc, title, getStatusClass, availability, price, flags}) => {
  return (
    <div className="product" key={key}>
      <div className="product__container">
        <img src={`${imgSrc}`} className="product__img" alt={title} />
      </div>
      <div className="product__info">
        <h3 className="product__title">{title}</h3>
        <div className="product__grid">
          <p className={`product__status ${getStatusClass(availability)}`}>
            {availability}
          </p>
          <p className="product__price">{price} CZK</p>
          <div className="product__button">
            <img src="/shopping-cart.svg" alt="cart icon" />
          </div>
        </div>
      </div>
      <div className="product__label">
        {flags.map((flag) => {
          if (flag === "Novinka") {
            return (
              <div key={flag} className="product__label--news">
                Novinka
              </div>
            );
          }
          if (flag === "Výprodej") {
            return (
              <div key={flag} className="product__label--sale">
                Výprodej
              </div>
            );
          }
          if (flag === "Tip") {
            return (
              <div key={flag} className="product__label--tip">
                Tip
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
