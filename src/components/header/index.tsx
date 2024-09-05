import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import SearchField from "../search-field";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

const Header: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  const totalCount = cartItems.reduce((total: number, item: CartItem) => {
    return total + item.quantity;
  }, 0);

  return (
    <div className="header">
      <Link to="/" className="link-brand">
        <div className="brand">Home</div>
      </Link>
      <SearchField />
      <Link to="/cart">
        <div className="cart-icon">
          <span className="cart-count">{totalCount}</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
