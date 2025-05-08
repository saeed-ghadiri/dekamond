// src/layouts/FooterOnlyLayout.tsx
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const LayoutFooterOnly = () => (
  <>
    <main className="">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default LayoutFooterOnly;
