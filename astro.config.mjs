import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://example.invalid",
  integrations: [sitemap()],
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
});
