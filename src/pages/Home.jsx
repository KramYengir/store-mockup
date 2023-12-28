import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
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
      <button onClick={() => navigate("/products")}>See our Products!</button>
    </main>
  );
};

export default Home;
