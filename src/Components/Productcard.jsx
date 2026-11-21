import { useState } from "react";

function ProductCard({ product, onDeleteProduct, onEditProduct }) {
    const [isStock, setIsStock] = useState(product.stock > 0);
    const [isSoldOut, setIsSoldOut] = useState(product.sold >= product.stock);

    function handleDeleteClick() {
        onDeleteProduct(product.id);
    }

    function handleEditClick() {
        onEditProduct(product);
    }

    // Keep both flags in sync so the card always shows one consistent status.
    function handleToggleAvailability() {
        const nextIsStock = !isStock;
        setIsStock(nextIsStock);
        setIsSoldOut(!nextIsStock);
    }

    const inStock = isStock && !isSoldOut;

    return (
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img
                src={product.image}
                alt={product.name}
                className="h-52 w-full bg-slate-100 object-cover"
            />
            <div className="space-y-3 p-5">
                <h2 className="text-lg font-semibold text-slate-900">{product.name}</h2>
                <p className="min-h-12 text-sm leading-6 text-slate-600">{product.description}</p>

                <div className="flex items-center justify-between gap-4">
                    <p className="text-lg font-bold text-indigo-700">
                        ${Number(product.price).toFixed(2)}
                    </p>
                    <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            inStock
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                        }`}
                    >
                        {inStock ? "In Stock" : "Sold Out"}
                    </span>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-600">
                    <span> Stock: {product.stock}</span>
                    <span> Sold: {product.sold}</span>
                </div>

                <button
                    type="button"
                    onClick={handleToggleAvailability}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                    {inStock ? "Mark as sold out" : "Restock"}
                </button>

                <div className="flex gap-2">
                    <button
                        onClick={handleDeleteClick}
                        className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-700 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                        Delete
                    </button>
                    <button
                        onClick={handleEditClick}
                        className="rounded-lg border border-blue-200 px-3 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Edit
                    </button>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;