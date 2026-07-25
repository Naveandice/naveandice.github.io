import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://naveandice.github.io",
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Noto Serif",
      cssVariable: "--font-noto-serif",
    },
    {
      provider: fontProviders.google(),
      name: "Noto Sans",
      cssVariable: "--font-noto-sans",
    },
    {
      provider: fontProviders.google(),
      name: "Noto Sans Mono",
      cssVariable: "--font-noto-mono",
    },
  ],
});
