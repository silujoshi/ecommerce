import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Women" element={<ShopCategory categpru="women" />} />
          <Route
            path="/Accessories"
            element={<ShopCategory category="Accessories" />}
          />
          <Route path="/More" element={<ShopCategory category="more" />} />
          <Route path="/Product" element={<Product />} />
          <Route path=":ProductId" element={<Product />} />

          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
