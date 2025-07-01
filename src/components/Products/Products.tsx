import { useState, useEffect } from "react";
import { IProduct } from "../../models/Product.ts";
import "./Products.scss";
import { Product } from "../Product/Product.tsx";

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
    <div className="products">
      {isLoading ? (
        <div>Načítám data</div>
      ) : error ? (
        <div>{error}</div>
      ) : productsData && productsData.length > 0 ? (
        productsData
          .slice(0, isShowAll ? productsData.length : 4)
          .map((product, index) => (
            <Product
              key={index}
              imgSrc={product.imgSrc}
              title={product.title}
              getStatusClass={getStatusClass}
              availability={product.availability}
              price={product.price}
            />
          ))
      ) : (
        <div>Žádná data</div>
      )}
    </div>
  );
};
