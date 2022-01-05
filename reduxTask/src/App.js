import "./App.css";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ProductsCategory from "./components/ProductsCategory";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route
            path="/productDetails/:productId"
            element={<ProductDetails />}
          />
          <Route
            path="/productsCategory/:category"
            element={<ProductsCategory />}
          />
          <Route
            path="/productsCategory/productDetails/:productId"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
