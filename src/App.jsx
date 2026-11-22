import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import ProductForm from "./Components/Productform";
import ProductPage from "./Components/ProductPage";
import sampleProducts from "./data/sampleProducts";

function App() {
  const [products, setProducts] = useState(sampleProducts);

  function handleAddProduct(newProduct) {
    setProducts((currentProducts) => [newProduct, ...currentProducts]);
  }

  function handleDeleteProduct(deletedId) {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== deletedId)
    );
  }

  function handleEditProduct(updatedProduct) {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
               <Navigation />
                <Header />
                <ProductForm onAddProduct={handleAddProduct} />
              <ProductPage
                products={products}
                onDeleteProduct={handleDeleteProduct}
                onEditProduct={handleEditProduct}
              />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <ProductPage
              products={products}
              onDeleteProduct={handleDeleteProduct}
              onEditProduct={handleEditProduct}
            />
          }
        />
        <Route
          path="/add-product"
          element={<ProductForm onAddProduct={handleAddProduct} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
