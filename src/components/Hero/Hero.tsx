import "./Hero.scss";

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__content--text">
            <h3 className="hero__subtitle">Lorem ipsum dolor sit</h3>
            <h2 className="hero__title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
          </div>
          <div className="hero__content--button">
            <div className="hero__button">Zobrazit</div>
          </div>
        </div>
        <div className="hero__nav">
          <div className="hero__nav--ellipse fill"></div>
          <div className="hero__nav--ellipse"></div>
          <div className="hero__nav--ellipse"></div>
        </div>
      </div>
      <div className="hero__secondary">
        <div className="hero__secondary--item item--01">
          <h2 className="hero__title">
            Lorem ipsum dolor sit amet, consectetur
          </h2>
          <div className="hero__button">Zobrazit</div>
        </div>
        <div className="hero__secondary--item item--02">
          <h2 className="hero__title">
            Lorem ipsum dolor sit amet, consectetur
          </h2>
          <div className="hero__button">Zobrazit</div>
        </div>
        <div className="hero__secondary--item item--03">
          <h2 className="hero__title">
            Lorem ipsum dolor sit amet, consectetur
          </h2>
          <div className="hero__button">Zobrazit</div>
        </div>
      </div>
    </section>
  );
};


