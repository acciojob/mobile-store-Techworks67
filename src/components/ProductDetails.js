import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProducts } from "./ProductsContext";

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { products } = useProducts();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div><p>Product not found</p></div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} width="200" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="btn" onClick={() => history.push("/")}>Back</button>
    </div>
  );
};

export default ProductDetails;
