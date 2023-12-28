import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/productPage.css";

const ProductPage = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setProduct(data.products[id - 1]);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-page">
      <img src="" alt="" />
      <div className="right-side">
        <h2>{product.name}</h2>
        <p>{product.description}</p>

        <div className="product-footer">
          <h3>{product.price}</h3>
          <input type="number" />
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
