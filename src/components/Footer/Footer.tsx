import "./Footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <p className="footer__logo--text">Logo</p>
        </div>
        <div className="footer__wrapper">
          <div className="footer__buy">
            <h4>Jak nakoupit</h4>
            <ul className="buy">
              <li className="buy__item">
                <a href="#" className="buy__link">
                  Platební podmínky
                </a>
              </li>
              <li className="buy__item">
                <a href="#" className="buy__link">
                  Fixační podmínky
                </a>
              </li>
              <li className="buy__item">
                <a href="#" className="buy__link">
                  Dodací a skladovací podmínky
                </a>
              </li>
              <li className="buy__item">
                <a href="#" className="buy__link">
                  Obchodní podmínky
                </a>
              </li>
              <li className="buy__item">
                <a href="#" className="buy__link">
                  Ochrana osobních údajů
                </a>
              </li>
              <li className="buy__item">
                <a href="#" className="buy__link">
                  Reklamace
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__order">
            <h4>Vaše objednávky</h4>
            <ul className="order">
              <li className="order__item">
                <a href="#" className="order__link">
                  Stav objednávky
                </a>
              </li>
              <li>
                <a href="#" className="order__link">
                  Stav poštovní zásilky
                </a>
              </li>
              <li className="order__item">
                <a href="#" className="order__link">
                  Přehled služeb a benefitů
                </a>
              </li>
              <li className="order__item">
                <a href="#" className="order__link">
                  Výkupní podmínky
                </a>
              </li>
              <li className="order__item">
                <a href="#" className="order__link">
                  Nejčastější dotazy
                </a>
              </li>
              <li className="order__item">
                <a href="#" className="order__link">
                  Grafy investičních kovů
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__company">
            <h4>O společnosti</h4>
            <ul className="company">
              <li className="company__item">
                <a href="#" className="company__link">
                  Základní informace
                </a>
              </li>
              <li className="company__item">
                <a href="#" className="company__link">
                  Pobočky
                </a>
              </li>
              <li className="company__item">
                <a href="#" className="company__link">
                  Kontakty
                </a>
              </li>
              <li className="company__item">
                <a href="#" className="company__link">
                  Partneři
                </a>
              </li>
              <li className="company__item">
                <a href="#" className="company__link">
                  Blog
                </a>
              </li>
              <li className="company__item">
                <a href="#" className="company__link">
                  Kariéra
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__contact">
            <h4>Kontakt</h4>
            <ul className="contact">
              <li className="contact__item">
                <img src="/icon-ig.svg" alt="icon instagram" />
                <img src="/icon-fb.svg" alt="icon facebook" />
              </li>
              <li className="contact__item">
                <img src="/icon-phone.svg" alt="icon phone" />
                <span className="contact__text">+421919163181</span>
              </li>
              <li className="contact__item">
                <img src="/icon-mail.svg" alt="icon mail" />
                <span className="contact__text">info@constantinvest.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright">
          <ul className="copyright">
            <li className="copyright__item">Copyright 2021 Constant Invest</li>
            <li className="copyright__item">
              <div className="copyright__text--wrapp">
                <span className="copyright__text">
                  vytvořil{" "}
                  <a href="#" className="copyright__link">
                    Shoptet
                  </a>
                </span>
                <span className="copyright__text"> | </span>
                <img src="/logo-miranda.svg" alt="logo miranda" />
                <a href="#" className="copyright__link">
                  MirandaMedia Group, s.r.o.
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};