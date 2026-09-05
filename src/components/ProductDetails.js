import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProducts } from "./ProductsContext";

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { products, updateProduct } = useProducts();
  const product = products.find((p) => p.id === id);
  const [price, setPrice] = useState(product ? product.price : "");

  if (!product) {
    return <div><p>Product not found</p></div>;
  }

  const handleSave = () => {
    updateProduct(product.id, { price: Number(price) });
  };

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} width="200" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <input
        className="form-control"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button className="float-right" onClick={handleSave}>Save</button>
      <button className="btn" onClick={() => history.push("/")}>Back</button>
    </div>
  );
};

export default ProductDetails;
