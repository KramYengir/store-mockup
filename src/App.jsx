import "./App.css";
import Router from "./components/Router";
import { CartContextProvider } from "./components/CartContext";
import { ProductProvider } from "./components/ProductContext";

function App() {
  return (
    <ProductProvider>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </ProductProvider>
  );
}

export default App;
