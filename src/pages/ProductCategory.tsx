// src/pages/ProductCategory.tsx
import { Link } from "react-router-dom";
import { categories } from "../data/categoryData";

const ProductCategory = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Product Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/product/${cat.slug}`}
            className="block group relative rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
              {cat.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
