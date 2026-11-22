import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  image: { domains: ["res.cloudinary.com"] },
  vite: { plugins: [tailwindcss()] },
});
