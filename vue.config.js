module.exports = {
  devServer: {
    proxy: 'http://localhost:3000',
    port: 9000
  },
  lintOnSave: false,
  outputDir: './dist/client'
}
