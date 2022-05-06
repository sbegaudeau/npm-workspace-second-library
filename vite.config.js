const path = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'second-library',
      fileName: (format) => `second-library.${format}.js`,
    },
  },
});
