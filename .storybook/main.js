const path = require('path')

module.exports = {
    stories: ['../src/**/stories.@(tsx|mdx)'],
    addons: [
        '@storybook/addon-knobs/preset',
        '@storybook/addon-actions',
        '@storybook/addon-storysource',
        '@storybook/addon-a11y',
        '@storybook/addon-backgrounds'
    ],
    webpackFinal: async (config, { configType }) => {
        /**
         * @see https://github.com/storybookjs/storybook/issues/6188#issuecomment-570910186
         */
        const fileLoaderRule = config.module.rules.find(rule => RegExp(rule.test).test('.svg'));
        fileLoaderRule.exclude = /\.svg$/;
        config.module.rules.push({
            test: /\.svg$/,
            use: ["raw-loader"],
          });
        config.resolve.alias = {
            ...config.resolve.alias,
            '~': path.resolve(__dirname, '../src')
          };
        return config;
      },
  }
