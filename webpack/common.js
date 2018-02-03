const { join } = require('path')

const PATH = {
  NODE_MODULES: join(__dirname, '..', 'node_modules'),
  SRC: join(__dirname, '..', 'src'),
  PUBLIC: join(__dirname, '..', 'public')
}

module.exports = {
  PATH,

  loaders: {
    jsLoader: {
      test: /\.js$/,
      exclude: PATH.NODE_MODULES,
      include: PATH.SRC,
      use: 'babel-loader'
    },

    stylusLoader: {
      test: /\.styl$/,
      exclude: PATH.NODE_MODULES,
      include: PATH.SRC,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          query: {
            modules: true,
            sourceMap: false,
            localIdentName: '[name]--[local]--[hash:base64:8]'
          }
        },
        {
          loader: 'stylus-loader',
          options: {
            preferPathResolver: 'webpack'
          }
        }
      ]
    },

    fileLoader: {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
      include: PATH.SRC,
      use: ['file-loader']
    },

    urlLoader: {
      test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
      include: PATH.SRC,
      use: 'url-loader'
    }
  },

  html: {
    title: 'Page Title',
    favicon: '',
    template: join(PATH.SRC, 'template.html')
  },

  alias: {
    'redux-flow': join(PATH.SRC, 'redux-flow'),
    'components': join(PATH.SRC, 'components'),
    'containers': join(PATH.SRC, 'containers'),
    'screens': join(PATH.SRC, 'screens')
  },

  server: {
    defaultPort: 8080
  }
}
