
const navBarLinks = [
  { name: "首页", url: "/zh" },
  { name: "产品", url: "/zh/products" },
  { name: "服务", url: "/zh/services" },
  { name: "博客", url: "/zh/blog" },
  { name: "联系我们", url: "/zh/contact" },
];

const footerLinks = [
  {
    section: "其他信息",
    links: [
      { name: "文档", url: "/zh/welcome-to-docs/" },
      { name: "工具与设备", url: "/zh/products" },
      { name: "建筑服务", url: "/zh/services" },
    ],
  },
  {
    section: "公司",
    links: [
      { name: "关于我们", url: "#" },
      { name: "博客", url: "/zh/blog" },
      { name: "职业发展", url: "#" },
      { name: "客户", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};