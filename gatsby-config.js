module.exports = {
  siteMetadata: {
    title: 'Stefano Demurtas',
    description: 'Developer and sea lover :sailboat:',
    keywords: 'stefano demurtas, developer',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    'gatsby-plugin-styled-components',
  ],
};
