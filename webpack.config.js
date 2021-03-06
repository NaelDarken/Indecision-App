const path = require('path')

module.exports = {

  entry: './src/index.js',

  output: {

    path: path.resolve(__dirname, './public/scripts'),
    filename: 'bundle.js'

  },

  module: {

    rules: [

      {
        test: /\.js$/,

        exclude: /node_modules/,

        use: {

          loader: 'babel-loader',
          options: {

            presets: ['@babel/preset-env', '@babel/preset-react']

          }

        }

      },

      {

        test: /\.(sa|sc|c)ss$/,

        use: ['style-loader', 'css-loader', 'sass-loader']

      }

    ]

  },

  devServer: {

    contentBase: path.resolve(__dirname, 'public'),

    publicPath: '/scripts/'

  },

  devtool: 'source-map'

}