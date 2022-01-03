const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader
      },
      'css-loader',
      'sass-loader'
    ],
    include: path.resolve(__dirname, '../src')
  })

  config.plugins.push(new MiniCssExtractPlugin())

  return config
}
