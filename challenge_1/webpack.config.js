const path = require('path');

module.exports = {
  mode: "production", // "production" | "development" | "none"
  entry: "./client/", // string | object | array
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "public"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "bundle.js", // string
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "client")
        ],
        loader: "babel-loader",
        // the loader which should be applied, it'll be resolved relative to the context
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
        },
        // options for the loader
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    // directories where to look for modules
    extensions: [".js", ".json", ".jsx", ".css"],
  }
}