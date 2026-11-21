import { useState } from "react";
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
      <Navigation />
      <Header />
      <ProductForm onAddProduct={handleAddProduct} />
      <ProductPage
        products={products}
        onDeleteProduct={handleDeleteProduct}
        onEditProduct={handleEditProduct}
      />
    </>
  );
}

export default App;