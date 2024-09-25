import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "叶爱君课题组(Seismic Ye Group)",
  tagline: "桥梁抗震与减隔震",
  description: "叶爱君课题组致力于桥梁抗震与减隔震技术的研究与应用。",
  description_short: "面向韧性的新一代桥梁",
  url: "https://seismicye.top",
  author: "叶爱君课题组",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "zh-CN",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "zh_CN",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: 桥梁抗震与减隔震研究`,
  description: "叶爱君课题组致力于桥梁抗震与减隔震技术的研究与应用。我们专注于开发创新的抗震解决方案，提高桥梁结构的韧性和安全性。加入我们，共同探索桥梁工程的未来。",
  image: ogImageSrc,
};
