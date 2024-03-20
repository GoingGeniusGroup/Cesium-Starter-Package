const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const cesiumSource = 'path/to/cesium/source'; // Update this with the actual path to your Cesium source directory

const nextConfig = {
  webpack: (config, { webpack, isServer }) => {
    const projectRoot = process.cwd();
    
    // Add your webpack rule here
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      include: path.resolve(__dirname, cesiumSource),
      use: [{
        loader: 'strip-pragma-loader',
        options: {
          pragmas: {
            debug: false
          }
        }
      }]
    });

    if (!isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.join(
                projectRoot,
                'node_modules/cesium/Build/Cesium/Workers'
              ),
              to: '../public/Cesium/Workers',
            },
            {
              from: path.join(
                projectRoot,
                'node_modules/cesium/Build/Cesium/ThirdParty'
              ),
              to: '../public/Cesium/ThirdParty',
            },
            {
              from: path.join(
                projectRoot,
                'node_modules/cesium/Build/Cesium/Assets'
              ),
              to: '../public/Cesium/Assets',
            },
            {
              from: path.join(
                projectRoot,
                'node_modules/cesium/Build/Cesium/Widgets'
              ),
              to: '../public/Cesium/Widgets',
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
