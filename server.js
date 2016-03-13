const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')

const port = 3000 || process.env.PORT
const app = express()

const compiler = webpack(config)
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true
  }
})

const response = (req, res) => {
  res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.hmtl')))
  res.end()
}

app.use(middleware)
app.use(webpackHotMiddleware(compiler))
app.get('*', response())

app.listen(port, '0.0.0.0', function onStart (err) {
  if (err) {
    console.log(err)
  }
  console.log('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port)
})
