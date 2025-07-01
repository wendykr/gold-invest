import "./Benefits.scss";

export const Benefits: React.FC = () => {
  return (
    <section className="benefits">
      <div className="benefits__container">
        <div className="benefits__item">
          <img
            src="/transportation.svg"
            className="benefits__item--img"
            alt="benefits image"
          />
          <p className="benefits__item--text">
            Doprava zdarma na vše od 5 000 Kč
          </p>
        </div>
        <div className="benefits__item">
          <img
            src="/transaction.svg"
            className="benefits__item--img"
            alt="benefits image"
          />
          <p className="benefits__item--text">
            Okamžitá fixace cen do 150 000 Kč
          </p>
        </div>
        <div className="benefits__item">
          <img
            src="/qr-code.svg"
            className="benefits__item--img"
            alt="benefits image"
          />
          <p className="benefits__item--text">Možnost platby pomocí QR kódu</p>
        </div>
        <div className="benefits__item">
          <img
            src="/bank.svg"
            className="benefits__item--img"
            alt="benefits image"
          />
          <p className="benefits__item--text">
            Vykupujeme historické i novodobé mince
          </p>
        </div>
      </div>
    </section>
  );
};
