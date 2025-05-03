import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home, Product, About, NotFound } from "./pages";
import Layout from "./components/Layout";
import ProductCategory from "./pages/ProductCategory";
import ProductDetail from "./pages/ProductDetail";

// Inside Route layout:
const App = () => {
  return (
    <Routes>
      {/* Layout Route */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:slug" element={<ProductCategory />} />
        <Route path="product/:slug/:productName" element={<ProductDetail />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} /> {/* ← Catch-all 404 */}
      </Route>
    </Routes>
  );
};

export default App;
