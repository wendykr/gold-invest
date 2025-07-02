import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Products } from "../Products/Products";
import { IProduct } from "../../models/Product.ts";
import "./Offer.scss";

export const Offer: React.FC = () => {
  const [productsData, setProductsData] = useState<IProduct[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(4);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/data/products.json");
      const data = await response.json();

      if (!response.ok) {
        setError("Chyba při načítání dat.");
        setProductsData([]);
      } else {
        setProductsData(data);
      }
    } catch (error) {
      setError(
        "Neočekávaná chyba při načítání dat: " + (error as Error).message
      );
      setProductsData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, productsData.length));
  };

  const getStatusClass = (status: string): string => {
    if (status === "Skladem") return "in-stock";
    if (status === "Na objednávku") return "to-order";
    if (status === "Momentálně nedostupné") return "out-stock";
    return "";
  };

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
        <Products
          isLoading={isLoading}
          error={error}
          productsData={productsData}
          getStatusClass={getStatusClass}
          visibleCount={visibleCount}
        />
        {visibleCount < productsData.length && (
          <div className="news__button" onClick={loadMore}>
            Zobrazit více produktů
          </div>
        )}
      </div>
    </section>
  );
};
