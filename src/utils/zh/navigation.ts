
const navBarLinks = [
  { name: "首页", url: "/zh" },
  { name: "科研成果", url: "/zh/Publications" },
  { name: "科研兴趣", url: "/zh/interests" },
  { name: "成员", url: "/zh/members" },
  { name: "博客", url: "/zh/blog" },
  { name: "联系我们", url: "/zh/contact" },
];

const footerLinks = [
  {
    section: "其他信息",
    links: [
      { name: "文档", url: "/zh/welcome-to-docs/" },
      { name: "科研成果", url: "/zh/Publications" },
      { name: "咨询", url: "/zh/interests" },
    ],
  },
  {
    section: "课题组",
    links: [
      { name: "兴趣", url: "#" },
      { name: "加入我们", url: "/zh/contact" },
      { name: "博客", url: "/zh/blog" },
      { name: "职业发展", url: "#" },
      
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