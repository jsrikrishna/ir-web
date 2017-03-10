module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
        publicPath: "/static/"
    },
    devServer: {
        inline: true,
        // `contentBase` specifies what folder to server relative to the
        // current directory. This technically isn't false since it's an absolute
        // path, but the use of `__dirname` isn't necessary.
        contentBase: __dirname + '/static',
        port: 8081
    },


    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel",
            include: __dirname,
            query: {
                presets: ["es2015", "react", "react-hmre"],
                plugins: ["transform-class-properties"]
            }
        }]
    }
}
