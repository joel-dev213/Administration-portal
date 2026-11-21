import { useEffect, useState } from "react";
import Navigation from "./Components/Navigation";
import Herosection from "./Components/Herosection";
import NewProductForm from "./Components/Productform";
import Productcard from "./Components/Productcard";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/products";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setProducts(Array.isArray(data) ? data : []))
      .catch(() => setProducts([]));
  }, []);

  function handleAddProduct(createdProduct) {
    setProducts((prev) => [...prev, createdProduct]);
  }

  return (
    <div className="app-container">
      <Navigation />
      <Herosection />

      <section className="product-management">
        <NewProductForm onAddProduct={handleAddProduct} />
      </section>

      <section className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <Productcard product={product} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
