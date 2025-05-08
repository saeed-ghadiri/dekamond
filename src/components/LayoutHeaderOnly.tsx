// src/layouts/HeaderOnlyLayout.tsx
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const LayoutHeaderOnly = () => (
  <>
    <Header />
    <main className="">
      <Outlet />
    </main>
  </>
);

export default LayoutHeaderOnly;
