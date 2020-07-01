'use strict';

const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

module.exports = {
  'entry': 'index.js',
  'plugins': [
    new GoogleFontsPlugin({
      fonts: [
        {family: 'IBM Plex Sans Condensed'},
      ],
    }),
  ],
};
