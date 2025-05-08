import "./App.css";
import { Routes, Route} from "react-router-dom";
import { Home, Product, About, NotFound } from "./pages";
import LayoutDefault from "./components/LayoutDefault";

import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Routes>
      {/* Pages with both Header & Footer */}
      <Route element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Route>

      {/* Pages with only Header 
      <Route element={<HeaderOnlyLayout />}>
        <Route path="/special" element={<Special />} />
      </Route> */}

      {/* Pages with only Footer 
      <Route element={<FooterOnlyLayout />}>
        <Route path="/footer-only" element={<div>Page with only footer</div>} />
      </Route> */}

      {/* No layout at all 
      <Route element={<BareLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route> */}
    </Routes>
  );
}

export default App;
