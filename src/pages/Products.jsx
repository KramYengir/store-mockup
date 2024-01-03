import PropTypes from "prop-types";
import "../styles/products.css";
import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../components/ProductContext";

const Products = ({ category }) => {
  const { products, loading, error } = useContext(ProductContext);

  const getRandomProducts = (count) => {
    const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
    return shuffledProducts.slice(0, count);
  };

  const displayProducts =
    category === "featured"
      ? getRandomProducts(3)
      : products.filter((product) => product.category === category);

  return (
    <div className="products-display">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error fetching products...</div>
      ) : (
        displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            category={product.category}
            img={product.image}
          />
        ))
      )}
    </div>
  );
};

Products.defaultProps = {
  category: "featured",
};

Products.propTypes = {
  category: PropTypes.string,
};

export default Products;
