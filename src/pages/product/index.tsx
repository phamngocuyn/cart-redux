import React from "react";
import ProductItem from "../../components/product-item";
import "./style.css";
import { useSearch } from "../../context/SearchContext";

interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
}

const Products: React.FC = () => {
  const { searchTerm } = useSearch();

  const ListProduct: Product[] = [
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

  const filteredProducts = ListProduct.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-container">
      {filteredProducts.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          name={item.name}
          img={item.img}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Products;
