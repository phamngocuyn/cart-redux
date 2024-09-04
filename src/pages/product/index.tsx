import ProductItem from "../../components/product-item";
// import ErrorBoundary from "../../config/ErrorBoundary";
import "./style.css";

interface Products {
  id: number;
  name: string;
  img: string;
  price: number;
}

const Products = () => {
  const ListProduct: Products[] = [
    {
      id: 1,
      name: "Sach giao khoa toán",
      img: "https://sachcuatui.net/wp-content/uploads/2019/07/Sach-giao-khoa-toan-5.jpg",
      price: 10.99,
    },
    {
      id: 2,
      name: "Sach giao khoa lý",
      img: "https://sachcuatui.net/wp-content/uploads/2019/07/Sach-giao-khoa-toan-5.jpg",
      price: 15.0,
    },
    {
      id: 3,
      name: "Sach giao khoa hóa",
      img: "https://sachcuatui.net/wp-content/uploads/2019/07/Sach-giao-khoa-toan-5.jpg",
      price: 13.99,
    },
    {
      id: 4,
      name: "Sach giao khoa văn",
      img: "https://sachcuatui.net/wp-content/uploads/2019/07/Sach-giao-khoa-toan-5.jpg",
      price: 11.99,
    },
  ];

  return (
    <div className="product-container">
      {ListProduct.map((item) => (
        // <ErrorBoundary key={item.id}>
        <ProductItem
          id={item.id}
          name={item.name}
          img={item.img}
          price={item.price}
        />
        // </ErrorBoundary>
      ))}
    </div>
  );
};

export default Products;
