import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // or your subdirectory path if needed
  build: {
    outDir: 'dist', // Explicitly set (though this is default)
  }
})
