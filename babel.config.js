module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: {
          browsers: 'defaults'
        },
        corejs: 3
      }
    ]
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: 'src'
      }
    ]
  ]
}