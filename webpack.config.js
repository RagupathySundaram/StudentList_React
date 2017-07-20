module.exports = {
//    entry:  __dirname+"/app.js",
	    entry:  __dirname+"/components/NewComponent.js",
    output: {
        path: __dirname,
        filename: "/build/bundle.js"
    },
    module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', 
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
