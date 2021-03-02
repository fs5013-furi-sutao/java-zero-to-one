module.exports = {
  pathPrefix: `/java-zero-to-one`,
  siteMetadata: {
    siteTitle: `Java ゼロイチ養成ドリル`,
    defaultTitle: `Java ゼロイチ養成ドリル`,
    siteTitleShort: `Java ゼロイチ養成ドリル`,
    siteDescription: `1 か月（31日）、毎日 5 ～ 10 分、カンタンな練習問題で、基礎的なコーディング力を養成する問題集です`,
    siteUrl: `https://fs5013-furi-sutao.github.io/java-zero-to-one/`,
    siteAuthor: `@hashimoto`,
    siteImage: `/banner.png`,
    siteLanguage: `ja`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://fs5013-furi-sutao.github.io/java-zero-to-one`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://fs5013-furi-sutao.github.io/java-zero-to-one/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
