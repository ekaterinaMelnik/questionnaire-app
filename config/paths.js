const path = require('path');

const MAIN = {
  root: path.resolve(__dirname, '../'),
  src: path.resolve(__dirname, '../src/'),
  dist: path.resolve(__dirname, '../dist/')
};

const ALIASES = {
  config: path.resolve(__dirname, ''),
  actions: path.resolve(__dirname, '../src/actions/'),
  components: path.resolve(__dirname, '../src/components/'),
  core: path.resolve(__dirname, '../src/core/'),
  data: path.resolve(__dirname, '../src/data/'),
  fonts: path.resolve(__dirname, '../src/fonts/'),
  images: path.resolve(__dirname, '../src/images/'),
  reducers: path.resolve(__dirname, '../src/reducers/'),
  styles: path.resolve(__dirname, '../src/styles/')
};

module.exports = {
  paths: {
    ...MAIN,
    ...ALIASES
  },
  aliases: ALIASES
};
