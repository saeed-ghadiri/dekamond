import { useParams, Link } from "react-router-dom";
import productData from "../productData";

const ProductCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const products = productData[slug ?? ""] || [];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 capitalize">
        {slug?.replace("-", " ")}
      </h1>

      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <Link
              key={index}
              to={`/product/${slug}/${product.toLowerCase()}`}
              className="block"
            >
              <div className="p-4 bg-white rounded-lg shadow border text-center hover:shadow-lg transition-shadow">
                <div className="text-lg font-medium">{product}</div>
                <p className="text-gray-500 text-sm">
                  Awesome {product.toLowerCase()} product
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
