const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/pangee_dev/' : '/',
  outputDir: 'dist', 

  devServer: {
    proxy: {
      "/api": {
        target: "https://pangee-siecwauy.xyz",
        changeOrigin: true,
        pathRewrite: { "^/api": "/api" },
        secure: false,
      },
    },
  },
})
