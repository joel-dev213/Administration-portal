import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const PRODUCTS_URL = "http://localhost:3001/products";

function Productform({ products = [], onAddProduct, onEditProduct }) {
  const { id } = useParams();

  const editingProduct = id
    ? products.find((product) => String(product.id) === id)
    : null;

  if (id && !editingProduct) {
    return (
      <div className="mx-auto mt-10 max-w-md rounded-lg bg-white p-6 text-center shadow-md">
        <p className="mb-4 text-slate-700">Product not found.</p>
        <Link
          to="/products"
          className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Back to products
        </Link>
      </div>
    );
  }

  // Remount the form whenever a different product is opened for editing,
  // so the fields start from that product's values.
  return (
    <ProductformFields
      key={editingProduct?.id ?? "new"}
      editingProduct={editingProduct}
      onAddProduct={onAddProduct}
      onEditProduct={onEditProduct}
    />
  );
}

function ProductformFields({ editingProduct, onAddProduct, onEditProduct }) {
  const navigate = useNavigate();

  const [name, setName] = useState(editingProduct?.name ?? "");
  const [image, setImage] = useState(editingProduct?.image ?? "");
  const [description, setDescription] = useState(
    editingProduct?.description ?? ""
  );
  const [price, setPrice] = useState(
    editingProduct ? String(editingProduct.price) : ""
  );
  const [stock, setStock] = useState(
    editingProduct ? String(editingProduct.stock) : ""
  );
  const [category, setCategory] = useState(editingProduct?.category ?? "");

  function resetForm() {
    setName("");
    setImage("");
    setDescription("");
    setPrice("");
    setStock("");
    setCategory("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !name ||
      !image ||
      !description ||
      !price ||
      !stock ||
      !category ||
      !(parseFloat(price) > 0) ||
      !(parseInt(stock, 10) >= 0)
    ) {
      alert(
        "Please fill in all fields and ensure the price is greater than 0 and stock is 0 or more."
      );
      return;
    }

    const productData = {
      name,
      image,
      description,
      price: parseFloat(price),
      stock: parseInt(stock, 10),
      category
    };

    // Editing an existing product: keep the same update flow as before,
    // but from the form instead of a prompt.
    if (editingProduct) {
      onEditProduct({ ...editingProduct, ...productData });
      navigate("/products");
      return;
    }

    fetch(PRODUCTS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productData)
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add product");
        return res.json();
      })
      .then((createdProduct) => {
        onAddProduct(createdProduct);
        resetForm();
      })
      .catch((error) => {
        console.error(error);
        alert("Could not add the product. Please try again.");
      });
  }

  return (
    <div className="new-product-form bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">
        {editingProduct ? "Edit Product" : "Add Your New Product"}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="number"
          name="price"
          step="0.01"
          min="0"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="number"
          name="stock"
          step="1"
          min="0"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          {editingProduct ? "Save Changes" : "Add Product"}
        </button>
        {editingProduct && (
          <button
            type="button"
            onClick={() => navigate("/products")}
            className="rounded border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default Productform;
