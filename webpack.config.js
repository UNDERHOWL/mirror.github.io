const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './public/js/textread.js',
    target: 'node',
    output: {
            path: path.join(__dirname, 'public/js'),
            filename: "HTMLURL.js"
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.wasm', '.mjs', '.js', '.json'],
        mainFields: ['browser', 'module', 'main'],
        mainFiles: ['index']
      }
};
