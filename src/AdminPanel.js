import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "./ProductsContext";

const AdminPanel = () => {
  const { products, addProduct, deleteProduct } = useProducts();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    addProduct({ name, description, image, price: Number(price) });
    setName("");
    setDescription("");
    setImage("");
    setPrice("");
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>

      <div className="add-product-form">
        <input
          className="form-control"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          className="form-control"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul className="admin-product-list">
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <Link to={`/products/${product.id}`} className="float-right">Edit</Link>
            <button className="float-right" onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
