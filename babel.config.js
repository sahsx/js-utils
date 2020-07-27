const presets = [
  '@babel/preset-env'
]

const plugins = [
  [
    '@babel/plugin-transform-runtime',
    {
      corejs: 3
    }
  ]
]

module.exports = {
  presets,
  plugins
}
