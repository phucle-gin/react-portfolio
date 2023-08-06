const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    clean: true,
  },
  performance: {
    maxAssetSize: 350000, 
    maxEntrypointSize: 500000, 
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
      }
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },

  module: {
    rules: [ 
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env', 
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }, 
      { 
        test: /\.(jpg|png|gif|svg|pdf)$/, 
        use: [
          { 
            loader: 'file-loader', 
            options: { 
              name: '[name].[ext]', 
              outputPath: './assets/' 
            } 
          } 
        ]
      },
    ],
  },
  
  plugins: [  
    new MiniCssExtractPlugin(),
    new GenerateSW({
      maximumFileSizeToCacheInBytes:4194304,
      clientsClaim: true,
      skipWaiting: true,
      // Define precaching rules
      navigateFallback: '/index.html', // For single-page applications (SPA)
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://api.example.org/'), // URL pattern to match
          handler: 'StaleWhileRevalidate', // Caching strategy
        },
      ],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename:'index.html',
  }),
  
  ],
  devtool: 'source-map'
};