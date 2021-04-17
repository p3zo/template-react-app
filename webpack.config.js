var webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader",
            },
            {
                test: /\.(?:jpg|png|mp3)$/,
                exclude: /node_modules/,
                loader: "file-loader",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".css", ".jpg", ".mp3"],
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js",
    },
    devServer: {
        host: "0.0.0.0",
        port: 8080,
        contentBase: __dirname + "/dist",
        hot: true,
        compress: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                MY_ENV_VAR: JSON.stringify("my_env_var"),
            },
        }),
    ],
};
