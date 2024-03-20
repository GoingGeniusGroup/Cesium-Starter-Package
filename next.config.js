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
              from: path.join(
                projectRoot,
                'node_modules/cesium/Build/Cesium/Workers'
              ),
      
            },
            {
              from: path.join(
                projectRoot,
                'node_modules/cesium/Build/Cesium/ThirdParty'
              ),
              
            },
            {
              from: path.join(
                projectRoot,
                'node_modules/cesium/Build/Cesium/Assets'
              ),
              
            },
            {
              from: path.join(
                projectRoot,
                'node_modules/cesium/Build/Cesium/Widgets'
              ),
             
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
