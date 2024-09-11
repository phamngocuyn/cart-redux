import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/product";
import Header from "./components/header";
import Cart from "./pages/cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
