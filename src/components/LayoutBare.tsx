// src/layouts/BareLayout.tsx
import { Outlet } from "react-router-dom";

const LayoutBare = () => (
  <main className="">
    <Outlet />
  </main>
);

export default LayoutBare;
