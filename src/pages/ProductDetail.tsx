// src/pages/ProductDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { slug, productName } = useParams<{
    slug: string;
    productName: string;
  }>();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 capitalize">
        {productName?.replace("-", " ")}
      </h1>
      <p className="text-gray-600 mb-4">
        Category: <span className="capitalize">{slug?.replace("-", " ")}</span>
      </p>

      <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center text-gray-400">
        {/* Placeholder for product image */}
        Image goes here
      </div>

      <p className="text-gray-700 leading-relaxed">
        This is a detailed description of the <strong>{productName}</strong>{" "}
        product. It belongs to the <strong>{slug}</strong> category and offers
        high quality, great performance, and excellent value.
      </p>
    </div>
  );
};

export default ProductDetail;
