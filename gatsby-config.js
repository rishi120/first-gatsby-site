module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
    name: "Chandan Baruah",
    subtitle: "Develop & Deploy",
    designation: "Software Engineer (UI)",
    footer: "Copyright 2021",
    navMenu: [
      {
        navTitle: "Home",
        navPath: "/"
      },
      {
        navTitle: "About",
        navPath: "/about"
      },
      {
        navTitle: "Portfolio",
        navPath: "/portfolio"
      }]
  },
  plugins: [`gatsby-plugin-sass`],
};
