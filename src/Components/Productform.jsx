import { useState } from "react";

const PRODUCTS_URL = "http://localhost:3001/products";

function Productform({ onAddProduct }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");

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

    const newProduct = {
      name,
      image,
      description,
      price: parseFloat(price),
      stock: parseInt(stock, 10),
      category
    };

    fetch(PRODUCTS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
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
      <h2 className="text-xl font-bold mb-4">Add Your New Product</h2>
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
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Productform;