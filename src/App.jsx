import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import ProductForm from "./Components/Productform";
import ProductPage from "./Components/ProductPage";
import sampleProducts from "./data/sampleProducts";

function Home({ products, onDeleteProduct, onEditProduct }) {
  return (
    <ProductPage
      products={products}
      onDeleteProduct={onDeleteProduct}
      onEditProduct={onEditProduct}
    />
  );
}

function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <h2 className="text-3xl font-bold text-slate-900">Page not found</h2>
      <p className="mt-2 text-slate-600">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-lg bg-indigo-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-800"
      >
        Back to dashboard
      </Link>
    </main>
  );
}

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
      <Routes>
       
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
