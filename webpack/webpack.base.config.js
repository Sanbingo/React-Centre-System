const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname, '..');
const BUILD_PATH = path.resolve(__dirname, '../build');

module.exports = {
    entry: {
        index: path.resolve(ROOT_PATH, './client/index.js'),
    },
    output: {
        filename: 'js/[name].[hash].js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(BUILD_PATH),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            // {
            //   test: /\.tsx?$/,
            //   loader: "awesome-typescript-loader"
            // },
            // {
            //   enforce: "pre",
            //   test: /\.js$/,
            //   loader: "source-map-loader"
            // },
            {
                test: /\.(js|ts)x?$/,
                exclude: /(node_modules|build)/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(ROOT_PATH, 'index.html'),
        }),
    ],
};
