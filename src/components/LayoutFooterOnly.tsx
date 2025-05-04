// src/layouts/FooterOnlyLayout.tsx
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const LayoutFooterOnly = () => (
  <>
    <main className="min-h-screen p-6">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default LayoutFooterOnly;
