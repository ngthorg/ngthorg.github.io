import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dashboard from 'webpack-dashboard';
import DashboardPlugin from 'webpack-dashboard/plugin';

const dashboard = new Dashboard();

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
  },
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    // 'react-hot-loader/patch', // current using babel-preset-react-hmre
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader?parser=postcss-scss',
        ],
      }, {
        test: /\.(css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader', options: { parser: 'postcss-scss' } },
        ],
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'url-loader?limit=10240&name=icons/[name].[ext]',
      }, {
        test: /\.(eot|woff2|woff|ttf|svg)$/,
        use: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new DashboardPlugin(dashboard.setData),
  ],
};
