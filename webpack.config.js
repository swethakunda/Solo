const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        // test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        test: /\.s?css$/,
        use: ['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    
    static: {
      // for react-router-dom
      //historyApiFallback: true,
      // cause webpack-dev-server creates another bundle.js and adds it to the html file, 
      // check in dev tools -> Sources -> index on line 5 may be ...
      
      publicPath: '/dist/',
      // contentBase: resolveAppPath('public'),
      directory: path.resolve(__dirname, '/')
    },
    historyApiFallback: true,
    proxy: {
      '/' : 'http://localhost:3000'
    }
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Development',
    template: 'index.html'
  })],
}