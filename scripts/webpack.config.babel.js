import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ProgressBar from 'progress-bar-webpack-plugin';

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
  },
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'js/bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&importLoaders=1&minimize=true' +
              '&localIdentName=[hash:base64:5]',
            'postcss-loader?parser=postcss-scss',
          ],
        }),
      },
      {
        test: /\.(css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader', options: { parser: 'postcss-scss' } },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'url-loader?limit=10240&name=icons/[name].[ext]',
      },
      {
        test: /\.(eot|woff2|woff|ttf|svg)$/,
        use: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: { warnings: false },
      output: { comments: false },
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),
    new ProgressBar(),
  ],
};
