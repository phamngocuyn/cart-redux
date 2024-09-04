import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { deCrement, inCrement, removeCart } from "../../redux/cartSlice";
import { RootState } from "../../redux/store";

const Cart = () => {
  const cartItem = useSelector((state: RootState) => state.cart.cart);

  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      {cartItem.map((item) => {
        return (
          <div className="cart-item">
            <img src={item.img} alt="anh sgk" />
            <div>{item.name}</div>
            <div className="update-quantity-cart">
              <button onClick={() => dispatch(deCrement(item.id))}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => dispatch(inCrement(item.id))}>+</button>
            </div>
            <button onClick={() => dispatch(removeCart(item.id))}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
