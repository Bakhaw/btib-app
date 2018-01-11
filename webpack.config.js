const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index'),
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
  module: {
    rules : [
      {
        test : /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  }
};