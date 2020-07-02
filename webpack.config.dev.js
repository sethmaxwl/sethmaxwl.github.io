'use strict';

const GoogleFontsPlugin = require('google-fonts-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SWPrecache = require('sw-precache-webpack-plugin');

module.exports = {
  'entry': 'index.js',
  'plugins': [
    new GoogleFontsPlugin({
      fonts: [
        {family: 'IBM Plex Sans Condensed'},
      ],
    }),
    new BundleAnalyzerPlugin(),
    new SWPrecache({
      cacheID: 'seth-maxwell-portfolio',
      filepath: 'service-worker.js',
      staticFileGlobs: [
        'index.html',
        'manifest.json',
        'dist/*.{js,css}',
      ],
      stripPrefix: '/',
    }),
  ],
};
