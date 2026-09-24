import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://emfau88.github.io",
  base: "/motorrad",
  integrations: [sitemap()],
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
});
