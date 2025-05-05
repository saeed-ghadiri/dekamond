import { useState } from "react";
import { categories } from "../data/productCategoryData";
import { productData } from "../data/productData";
import { Link } from "react-router-dom";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? productData.filter((p) => p.category === selectedCategory)
    : [];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Browse Categories</h2>
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((cat) => (
          <div
            key={cat.slug}
            className={`cursor-pointer border rounded-md overflow-hidden shadow ${
              selectedCategory === cat.slug ? "ring-2 ring-blue-400" : ""
            }`}
            onClick={() => setSelectedCategory(cat.slug)}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-40 h-24 object-cover"
            />
            <p className="text-center p-2 font-medium">{cat.name}</p>
          </div>
        ))}
      </div>

      {filteredProducts.length > 0 && (
        <>
          <h3 className="text-2xl font-semibold mb-4 capitalize">
            {selectedCategory} Products
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="block border rounded overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
                <p className="text-center p-2">{product.name}</p>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
