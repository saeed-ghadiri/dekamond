import { useParams } from "react-router-dom";
import { productDetail } from "../data/productDetail";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productDetail.find((p) => p.id === productId);

  if (!product)
    return <div className="p-4 text-red-500">Product not found.</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        className="max-w-md mx-auto rounded shadow"
      />
    </div>
  );
};

export default ProductDetail;
