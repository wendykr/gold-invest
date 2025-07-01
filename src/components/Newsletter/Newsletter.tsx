import "./Newsletter.scss";

export const Newsletter: React.FC = () => {
  return (
    <div className="newsletter">
      <div className="newsletter__container">
        <h2 className="newsletter__title title">Zůstaňte s námi v kontaktu</h2>
        <div className="newsletter__form">
          <form className="form">
            <input
              className="form__input"
              type="email"
              name="email"
              id="email"
              placeholder="@Zadej svůj email"
              required
            />
            <button className="form__button" type="submit">
              <span>Odeslat</span>
              <img
                src="/arrow-btn.svg"
                className="form__button--arrow"
                alt="arrow icon"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
