import { useState } from "react";
import { Button } from "../Button/Button";
import { Products } from "../Products/Products";
import "./Offer.scss";

export const Offer: React.FC = () => {
  const [isShowAll, setIsShowAll] = useState<boolean>(false);

  const toggleShowAll = () => {
    setIsShowAll(prev => !prev);
  }

  return (
    <section className="offer">
      <div className="offer__container">
        <h2 className="offer__title title">Vyberte si z naši nabídky</h2>
        <div className="wrapper">
          <div className="offer__list">
            <div className="offer__item">
              <img
                src="/item-01.jpg"
                className="offer__item--img"
                alt="image"
              />
              <div className="offer__item--text">
                <p className="offer__item--subtitle">Investiční</p>
                <h3 className="offer__item--title">Zlaté mince</h3>
              </div>
            </div>
            <div className="offer__item">
              <img
                src="/item-02.jpg"
                className="offer__item--img"
                alt="image"
              />
              <div className="offer__item--text">
                <p className="offer__item--subtitle">Investiční</p>
                <h3 className="offer__item--title">Zlaté slitky</h3>
              </div>
            </div>
          </div>
          <div className="offer__button">
            <Button />
          </div>
        </div>

        <h2 className="news__title title">Novinky</h2>
        <Products isShowAll={isShowAll} />
        <div className="news__button" onClick={toggleShowAll}>
          {isShowAll ? "Zobrazit méně produktů" : "Zobrazit více produktů"}
        </div>
      </div>
    </section>
  );
};
