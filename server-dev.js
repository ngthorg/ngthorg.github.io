/* eslint no-console: 0 */
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './scripts/webpack.config.dev';

const APP_PORT = process.env.APP_PORT || 3000;

// Serve the Relay app
const app = new WebpackDevServer(webpack(webpackConfig), {
  contentBase: '/public/',
  publicPath: '/',
  stats: { colors: true, chunks: false },
  hot: true,
  quiet: true,
  historyApiFallback: true,
});

app.listen(APP_PORT, () => {
  console.info(`Relay is listening on port ${APP_PORT}`);
});
