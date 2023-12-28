import PropTypes from "prop-types";
import "../styles/products.css";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("../public/data.json");
        const data = await response.json();
        setProducts(data.products);
        //console.table(data.products);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProducts();
  }, []);

  const getRandomProducts = (count) => {
    const shuffledProducts = products.sort(() => Math.random() - 0.5);
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
          title={product.title}
          description={product.description}
          price={product.price}
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
