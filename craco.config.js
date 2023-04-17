const path = require('path');

const resolvePath = p => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@/app': resolvePath('./src/app'),
    },
  },
};
