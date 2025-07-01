import "./Header.scss";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">Logo</div>
        <div className="header__info">
          <img
            src="/search.svg"
            className="header__search"
            alt="ikona hledat"
          />
          <div className="header__backet">
            <div className="header__backet--button">Košík</div>
            <div className="header__backet--count">2</div>
          </div>
        </div>
        <nav className="header__menu">
          <img src="/menu.svg" alt="ikona menu" />
        </nav>
      </div>
    </header>
  );
};
