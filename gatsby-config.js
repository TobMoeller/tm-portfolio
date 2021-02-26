/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const personal = true;

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Showcase of some of Tobias Möller's recent work`,
    titleTemplate: "Tobias Möller's %s",
    url: `https://www.tobias-moeller.de`,
    image: `/images/tobiasmoeller.png`,
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/${personal ? "pers_" : ""}images/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/${personal ? "pers_" : ""}sections/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/${personal ? "pers_" : ""}projects/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
