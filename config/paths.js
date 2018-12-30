const path = require('path');

const MAIN = {
  root: path.resolve(__dirname, '../'),
  src: path.resolve(__dirname, '../src/client/'),
  dist: path.resolve(__dirname, '../dist/')
};

const ALIASES = {
  config: path.resolve(__dirname, ''),
  actions: path.resolve(__dirname, '../src/client/actions/'),
  components: path.resolve(__dirname, '../src/client/components/'),
  core: path.resolve(__dirname, '../src/client/core/'),
  data: path.resolve(__dirname, '../src/client/data/'),
  fonts: path.resolve(__dirname, '../src/client/fonts/'),
  images: path.resolve(__dirname, '../src/client/images/'),
  reducers: path.resolve(__dirname, '../src/client/reducers/'),
  styles: path.resolve(__dirname, '../src/client/styles/')
};

module.exports = {
  paths: {
    ...MAIN,
    ...ALIASES
  },
  aliases: ALIASES
};
