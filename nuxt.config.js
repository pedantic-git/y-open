module.exports = {
  /*
  ** Meta and manifest info
  */
  manifest: {
    name: 'Yorkshire O.P.E.N',
    short_name: 'O.P.E.N',
    description: 'Open relationips, polyamory and ethical non-monogamy. A discussion, support and social group in Leeds.',
    theme_color: '#562634',
    background_color: '#F8BBD0',
    ogHost: 'y-open.org.uk'
  },
  head: {
    titleTemplate: (chunk) => {
      let sitename = 'Yorkshire O.P.E.N'
      return chunk == sitename ? sitename : `${chunk} | ${sitename}`
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#E91E63' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    '~/plugins/jsonp.js'
  ],
  modules: [
    '@nuxtjs/pwa'
  ]
}
