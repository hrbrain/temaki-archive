const path = require('path')

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '~': path.resolve(__dirname, '../src/')
  }

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
        loader: require.resolve('ts-loader')
      }
    ]
  })
  config.resolve.alias = {
    ...config.resolve.alias,
    '~': path.resolve(__dirname, '../src')
  }
  
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}