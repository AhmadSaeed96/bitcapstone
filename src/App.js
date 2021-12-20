import "./App.css";

import TheNavbar from "./Component/TheNavbar";
import Home from "./Component/HomePage/Home";
import { Route, Routes } from "react-router";
import Products from "./Component/Products";
import ShippingForm from "./Component/ShippingForm";
import Cart from "./Component/Cart/Cart";
import ProductDetails from "./Component/ProductDetails";

function App() {
  return (
    <div className="App">
      <TheNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shippingform" element={<ShippingForm />} />
        <Route path="/product" element={<Products />} />
        <Route path="/form" element={<ShippingForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="*" element={<p> no routes found</p>} />
      </Routes>
    </div>
  );
}

export default App;
