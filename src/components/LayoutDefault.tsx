// src/layouts/DefaultLayout.tsx
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LayoutDefault = () => (
  <>
    <Header />
    <main className="">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default LayoutDefault;
