const path = require('path');

module.exports = {
  mode: "development", // "production" | "development" | "none"
  entry: path.resolve(__dirname, "client"), // string | object |
  output: {
    path: path.resolve(__dirname, "public"), // string
    filename: "bundle.js", // string
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "client")
        ],
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
  },
}