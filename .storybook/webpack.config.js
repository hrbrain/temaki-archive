module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    use: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' }
      }
    ],
    enforce: 'pre'
  })
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('babel-loader')
      }
    ]
  })
  
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}