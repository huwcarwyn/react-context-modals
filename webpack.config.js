const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProd ? 'production' : 'development',

  entry: path.join(__dirname, 'src/index.js'),

  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    globalObject: 'this',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ],
        include: path.resolve(__dirname, 'src')
      }
    ]
  },

  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src')],
    extensions: ['.js', '.jsx', '.json']
  },

  externals: ['react', 'react-dom'],

  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    ...(process.env.ANALYZE ? [new BundleAnalyzerPlugin()] : [])
  ]
}
