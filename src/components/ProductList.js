import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "./ProductsContext";

const ProductList = () => {
  const { products } = useProducts();

  return (
    <div className="product-list">
      <h1>Mobile Store</h1>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <Link to={`/products/${product.id}`}>
            <img src={product.image} alt={product.name} width="100" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
