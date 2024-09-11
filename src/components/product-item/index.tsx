import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "./style.css";

interface ProductItemProps {
  name: string;
  img: string;
  id: number;
  price: number;
}

const ProductItem = ({ name, img, id, price }: ProductItemProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, img, price }));
  };

  return (
    <div className="product-item">
      <p>{name}</p>
      <img src={img} alt={name} />
      <p>{price} VND</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductItem;
