'use strict';

const GoogleFontsPlugin = require('google-fonts-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  'entry': 'index.js',
  'plugins': [
    new GoogleFontsPlugin({
      fonts: [
        {family: 'IBM Plex Sans Condensed'},
      ],
    }),
    new BundleAnalyzerPlugin(),
  ],
};
