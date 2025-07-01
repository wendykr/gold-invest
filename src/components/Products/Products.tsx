import { useState, useEffect } from "react";
import { IProduct } from "../../models/Product.ts";
import "./Products.scss";

interface ProductsProps {
  isShowAll: boolean;
}

export const Products: React.FC<ProductsProps> = ({isShowAll}) => {
  const [productsData, setProductsData] = useState<IProduct[]>([]);
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

  const getStatusClass = (status: string): string => {
    if (status === "Skladem") return "in-stock";
    if (status === "Na objednávku") return "to-order";
    if (status === "Momentálně nedostupné") return "out-stock";
    return "";
  };

  return (
    <div className="product">
      {isLoading ? (
        <div>Načítám data</div>
      ) : error ? (
        <div>{error}</div>
      ) : productsData && productsData.length > 0 ? (
        productsData
          .slice(0, isShowAll ? productsData.length : 4)
          .map((product, index) => (
            <div className="product__item" key={index}>
              <div className="product__item--container">
                <img
                  src={`${product.imgSrc}`}
                  className="product__item--img"
                  alt={product.title}
                />
              </div>
              <div className="product__item--info">
                <h3 className="product__item--title">{product.title}</h3>
                <div className="product__item--grid">
                  <p
                    className={`product__item--status ${getStatusClass(
                      product.availability
                    )}`}
                  >
                    {product.availability}
                  </p>
                  <p className="product__item--price">{product.price} CZK</p>
                  <div className="product__item--button">
                    <img src="/shopping-cart.svg" alt="cart icon" />
                  </div>
                </div>
              </div>
            </div>
          ))
      ) : (
        <div>Žádná data</div>
      )}
    </div>
  );
};
