import ProductCard from "./Productcard";

function ProductList({ products, onDeleteProduct, onEditProduct }) {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onDeleteProduct={onDeleteProduct}
                    onEditProduct={onEditProduct}
                />
            ))}
        </div>
    );
}

export default ProductList;