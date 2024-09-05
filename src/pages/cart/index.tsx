import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { deCrement, inCrement, removeCart } from "../../redux/cartSlice";
import { RootState } from "../../redux/store";

const Cart = () => {
  const cartItem = useSelector((state: RootState) => state.cart.cart);

  const totalPriceProducts = cartItem.reduce(
    (total, current) => total + current.totalPrice,
    0
  );

  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      {cartItem.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.img} alt="anh sgk" />
          <div>{item.name}</div>
          <div className="update-quantity-cart">
            <button onClick={() => dispatch(deCrement(item.id))}>-</button>
            <p>{item.quantity}</p>
            <button onClick={() => dispatch(inCrement(item.id))}>+</button>
          </div>
          <div className="total-price">
            {item.totalPrice.toLocaleString()} VND
          </div>
          <button onClick={() => dispatch(removeCart(item.id))}>Remove</button>
        </div>
      ))}
      <div className="cart-total">
        <h3>
          Tổng tiền: <span>{totalPriceProducts.toLocaleString()}VND</span>
        </h3>
      </div>
    </div>
  );
};

export default Cart;
