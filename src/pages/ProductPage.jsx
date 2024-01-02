import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/productPage.css";

const BASE_API_URL = "https://fakestoreapi.com/products";

const ProductPage = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(BASE_API_URL);
        const data = await response.json();
        setProduct(data.find((product) => product.id == id));
        console.log(id - 1);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-page">
      <img src={product.image} alt={product.title} />
      <div className="right-side">
        <h2>{product.title}</h2>
        <p>{product.description}</p>

        <div className="product-footer">
          <h3>£{product.price}</h3>
          <input type="number" />
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
