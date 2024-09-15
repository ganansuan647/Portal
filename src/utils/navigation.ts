// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Publications", url: "/Publications" },
  { name: "Interests", url: "/interests" },
  { name: "Members", url: "/members" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Online Info",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Journal Publications", url: "/Publications" },
      { name: "interests", url: "/interests" },
    ],
  },
  {
    section: "Research Group",
    links: [
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
      { name: "Join us", url: "/contact" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};