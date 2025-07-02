
import "./Products.scss";
import { Product } from "../Product/Product.tsx";
import { IProduct } from "../../models/Product.ts";

interface ProductsProps {
  isLoading: boolean;
  error: null | string;
  productsData: IProduct[];
  getStatusClass: (status: string) => string;
  visibleCount: number
}

export const Products: React.FC<ProductsProps> = ({isLoading, error, productsData, getStatusClass, visibleCount
}) => {


  return (
    <div className="products">
      {isLoading ? (
        <div>Načítám data</div>
      ) : error ? (
        <div>{error}</div>
      ) : productsData && productsData.length > 0 ? (
        productsData
          .slice(0, visibleCount)
          .map((product, index) => (
            <Product
              key={index}
              imgSrc={product.imgSrc}
              title={product.title}
              getStatusClass={getStatusClass}
              availability={product.availability}
              price={product.price}
              flags={product.flags}
            />
          ))
      ) : (
        <div>Žádná data</div>
      )}
    </div>
  );
};
