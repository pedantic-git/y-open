module.exports = {
  /*
  ** Meta and manifest info
  */
  manifest: {
    name: 'Yorkshire O.P.E.N',
    short_name: 'O.P.E.N',
    lang: 'en-GB',
    description: 'Open relationships, polyamory and ethical non-monogamy. A discussion, support and social group in Leeds.',
    theme_color: '#562634',
    background_color: '#F8BBD0',
    ogHost: 'y-open.org.uk'
  },
  head: {
    htmlAtrs: {
      lang: 'en-GB'
    },
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico' }
    ],
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
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {id: 'UA-34193061-1'}]
  ]
}
