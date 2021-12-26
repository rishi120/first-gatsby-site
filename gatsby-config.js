module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
    name: "Chandan Baruah",
    subtitle: "Develop & Deploy",
    designation: "Software Engineer (UI)",
    footer: "Copyright 2021",
    desciption: "Hi there, this is Chandan. A front-end web developer based in Bangalore. I work with a software firm to create high performance & rich interactive websites that work across all platforms & devices. I love to learn, explore, travel and expertise in the field of Web Development.",
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
