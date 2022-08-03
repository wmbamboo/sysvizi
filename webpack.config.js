const config = {
  module: {
    rules: [
      {
        test: /\.ltrTreeLayoutWorker\.js$/,
        use: { loader: 'worker-loader' }
      }
    ]
  }
}

module.exports = config;