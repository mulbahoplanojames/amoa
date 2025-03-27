import { templateData } from "@/data/template-data";

export default async function sitemap() {
  const templateUrls = templateData.map((template) => ({
    url: template.link,
    lastModified: new Date(),
  }));
  return [
    {
      url: "https://amoa-tech.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://amoa-tech.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://amoa-tech.vercel.app/blog",
      lastModified: new Date(),
    },
    {
      url: "https://amoa-tech.vercel.app/services",
      lastModified: new Date(),
    },
    {
      url: "https://amoa-tech.vercel.app/templates",
      lastModified: new Date(),
    },
    {
      url: "https://amoa-tech.vercel.app/contact",
      lastModified: new Date(),
    },
    ...templateUrls,
  ];
}
