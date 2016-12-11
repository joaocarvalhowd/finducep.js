let webpack = require('webpack');

module.exports = {
    entry: "./src/FindUCep.js",
    output: {
        filename: "dist/finducep.min.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ] 
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    devtool: 'source-map',
    watch: true
};
