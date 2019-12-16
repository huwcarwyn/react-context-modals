module.exports = {
  presets: ['@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        root: 'src'
      }
    ],
    ['@babel/plugin-transform-runtime']
  ]
}
