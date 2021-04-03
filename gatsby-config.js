module.exports = {
  siteMetadata: {
    title: 'The Commodore Designs',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: "the-commodore-designs-website-bucket"
      }
    }
  ]
}
