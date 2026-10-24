const path = require('path');

module.exports = {
    devtool:'source-map',
    entry : './src/index.js',
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
    
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production'
};

// use webpack configuration file to customise the code
// mode is optional.