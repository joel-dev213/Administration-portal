// Display and Search
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "./ProductList";

function ProductPage({ products, onDeleteProduct }) {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    function handleEditClick(productToEdit) {
        navigate(`/edit-product/${productToEdit.id}`);
    }

    // Dynamic product search
    const displayedProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Products
                    </h1>
                    <p className="mt-2 text-slate-600">
                        Browse and manage your product inventory.
                    </p>
                </header>

                <div className="mb-8 max-w-md">
                    <input
                        type="text"
                        placeholder="Search products..."
                        aria-label="Search products"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                {displayedProducts.length > 0 ? (
                    <ProductList
                        products={displayedProducts}
                        onDeleteProduct={onDeleteProduct}
                        onEditProduct={handleEditClick}
                    />
                ) : (
                    <p className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center text-slate-500">
                        No products found.
                    </p>
                )}
            </div>
        </main>
    );
}

export default ProductPage;