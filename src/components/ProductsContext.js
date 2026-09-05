import React, { createContext, useState, useContext } from "react";

const initialProducts = [
  { id: '1', name: 'iPhone 13', price: 799, description: 'Apple flagship phone', image: 'https://via.placeholder.com/150?text=iPhone+13' },
  { id: '2', name: 'Samsung Galaxy S21', price: 699, description: 'Samsung flagship phone', image: 'https://via.placeholder.com/150?text=Galaxy+S21' },
  { id: '3', name: 'Google Pixel 6', price: 599, description: 'Google flagship phone', image: 'https://via.placeholder.com/150?text=Pixel+6' },
  { id: '4', name: 'OnePlus 9', price: 549, description: 'OnePlus flagship phone', image: 'https://via.placeholder.com/150?text=OnePlus+9' },
  { id: '5', name: 'Xiaomi Mi 11', price: 499, description: 'Xiaomi flagship phone', image: 'https://via.placeholder.com/150?text=Mi+11' },
  { id: '6', name: 'Oppo Find X3', price: 649, description: 'Oppo flagship phone', image: 'https://via.placeholder.com/150?text=Find+X3' },
  { id: '7', name: 'Vivo X60', price: 449, description: 'Vivo flagship phone', image: 'https://via.placeholder.com/150?text=Vivo+X60' },
  { id: '8', name: 'Nokia 8.3', price: 399, description: 'Nokia flagship phone', image: 'https://via.placeholder.com/150?text=Nokia+8.3' },
];

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now().toString() }]);
  };

  const updateProduct = (id, updated) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, ...updated } : p)));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
