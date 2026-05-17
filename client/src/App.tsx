import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Phones from "./pages/Phones";
import ProductDetails from "./pages/ProductDetails";
import Compare from "./pages/Compare";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Quiz from "./pages/Quiz";
import Navbar from "./components/Navbar";
import Tablets from "./pages/Tablets";
import Accessories from "./pages/Accesories"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;