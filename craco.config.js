const path = require('path');

const resolvePath = p => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@/app': resolvePath('./src/app'),
      '@/processes': resolvePath('./src/processes'),
      '@/pages': resolvePath('./src/pages'),
      '@/widgets': resolvePath('./src/widgets'),
      '@/features': resolvePath('./src/features'),
      '@/entities': resolvePath('./src/entities'),
      '@/shared': resolvePath('./src/shared'),
    },
  },
};
