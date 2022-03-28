const path = require('path');
const jsonImporter = require('node-sass-json-importer').default;

module.exports = {
  entry: {
    style: [
      path.resolve(__dirname, './_index.sass')
    ]
  },
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          'file-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                importer: jsonImporter()
              },
            }
          },
        ],
      },
    ],
  },
};

