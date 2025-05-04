// src/layouts/DefaultLayout.tsx
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LayoutDefault = () => (
  <>
    <Header />
    <main className="min-h-screen p-6">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default LayoutDefault;
