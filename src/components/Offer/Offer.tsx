import { Product } from "../Product/Product";
import "./Offer.scss";

export const Offer = () => {
  return (
    <section className="offer">
      <div className="offer__container">
        <h3 className="offer__title">Vyberte si z naši nabídky</h3>
        <div className="offer__wrapper">
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
          <div className="offer__button">Zobrazit více</div>
        </div>

        <h2 className="news__title">Novinky</h2>
        <Product />
        <div className="news__button">Zobrazit více produktů</div>
      </div>
    </section>
  );
};
