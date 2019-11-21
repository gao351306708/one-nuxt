module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/loading.vue',
  /*
   ** Global CSS,引入全局css
   */
  css: [
    '~/assets/css/main.css',
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/page-transition.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  /*
   ** Global less,引入全局less,需要先引入@nuxtjs/style-resources模块
   */
  styleResources: {
    less: [
      './assets/css/common.less', // 自己项目中的样式文件的路径
      ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    //extend(config, ctx) {},
    devtools:true,
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  router: {
    base: process.env.NODE_ENV === 'production' ? '/dist/' : '/'
  },
}
