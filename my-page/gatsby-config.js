module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      'gatsby-plugin-react-helmet',
      `gatsby-plugin-sass`,
      {
          resolve: `gatsby-plugin-typography`,
          options: {
              pathToConfigModule: `src/utils/typography.js`,
          },
      },
  ],
};
