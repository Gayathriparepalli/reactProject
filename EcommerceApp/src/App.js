import "./App.css";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ProductsCategory from "./components/ProductsCategory";
import Cart from "./components/Cart";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import UserCart from "./components/UsersCart";
import AddProducts from "./components/AddProducts";
import EditProduct from "./components/EditProduct";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/productList" element={<ProductList />} />
          <Route
            path="/productList/productDetails/:productId"
            element={<ProductDetails />}
          />
          <Route
            path="/productList/productsCategory/:category"
            element={<ProductsCategory />}
          />
          <Route
            path="/productsCategory/productDetails/:productId"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/usersCart" element={<UserCart />} />
          <Route path="/addProducts" element={<AddProducts />} />
          <Route path="/editProduct" element={<EditProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
