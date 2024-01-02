import PropTypes from "prop-types";
import "../styles/products.css";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const BASE_API_URL = "https://fakestoreapi.com/products";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(BASE_API_URL);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
      {displayProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          img={product.image}
        />
      ))}
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
