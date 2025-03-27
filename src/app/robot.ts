import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["api/survey"],
    },
    sitemap: "https://amoa-tech.vercel.app//sitemap.xml",
  };
}
