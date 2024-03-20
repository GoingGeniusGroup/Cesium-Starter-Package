const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const nextConfig = {
  webpack: (config, { webpack, isServer }) => {
    const projectRoot = process.cwd();
    if (!isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: '../public/Cesium/Workers',
            },
            {
              from: '../public/Cesium/ThirdParty',
            },
            {
              from: '../public/Cesium/Assets',
            },
            {
              from: '../public/Cesium/Widgets',
            },
          ],
        })
      );
    }
    config.plugins.push(
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('/Cesium'),
      })
    );
    config.resolve.exportsFields = [];
    return config;
  },
};

module.exports = nextConfig;
