const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        // compress: true, // ускорит загрузку в режиме разработки
        port: 8080, 
        open: true,
        hot: true,
    },
    plugins: [
      new ReactRefreshWebpackPlugin(),
  ],
}