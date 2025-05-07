import { useParams } from "react-router-dom";
import { productDetail } from "../data/productDetail";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productDetail.find((p) => p.id === productId);

  if (!product)
    return <div className="p-4 text-red-500">Product not found.</div>;

  return (
    <div className="w-full rounded-lg">
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-lg"
      />
    </div>
  );
};

export default ProductDetail;
