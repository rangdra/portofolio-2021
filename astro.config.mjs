import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const redirects = {
  "/portofolio": { destination: "/#work", status: 301 },
  "/resume": { destination: "/#experience", status: 301 },
};

export default defineConfig({
  site: "https://rangdra.my.id",
  output: "static",
  redirects,
  integrations: [
    sitemap({
      filter: (url) => !Object.hasOwn(redirects, new URL(url).pathname.replace(/\/$/, "")),
    }),
  ],
  image: { domains: ["res.cloudinary.com"] },
  vite: { plugins: [tailwindcss()] },
});
