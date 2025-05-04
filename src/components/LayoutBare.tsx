// src/layouts/BareLayout.tsx
import { Outlet } from "react-router-dom";

const LayoutBare = () => (
  <main className="min-h-screen p-6">
    <Outlet />
  </main>
);

export default LayoutBare;
