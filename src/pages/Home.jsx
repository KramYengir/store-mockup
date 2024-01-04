import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import { ProductContext } from "../components/ProductContext";
import { useContext } from "react";

const Home = () => {
  const navigate = useNavigate();
  const { products, loading, error } = useContext(ProductContext);
  console.log(products);

  return (
    <main>
      {loading ? (
        "Loading"
      ) : (
        <img src={products[2].image} alt={products[2].title} />
      )}
      {loading ? (
        "Loading"
      ) : (
        <img src={products[5].image} alt={products[5].title} />
      )}
      {loading ? (
        "Loading"
      ) : (
        <img src={products[15].image} alt={products[15].title} />
      )}
      {loading ? (
        "Loading"
      ) : (
        <img src={products[12].image} alt={products[12].title} />
      )}
      <div className="title">
        <h1>Why didn&apos;t the skeleton go to the dance?</h1>
        <h2>Because he had no body to go with :(</h2>
      </div>
      <h4>Your wonky legs getting you down? </h4>
      <h4>Your spaghetti arms the laughing stock at work?</h4>
      <h4>Maybe your toes are just too long?</h4>
      <h3>Well, suffer no more!</h3>
      <p>
        With YoBodyShop, you can have arms like Stallone or lips like Ghandi! No
        more achey knees or massive ears!
      </p>
      <p>
        <strong>DISCLAIMER</strong>: Due to the project requirement of fetching
        data from an API <em>(and human rights concerns...)</em>, YoBodyShop is
        now YoFakeShop. Thank you for your custom!
      </p>
      <button onClick={() => navigate("/products")}>See our Products!</button>
    </main>
  );
};

export default Home;
