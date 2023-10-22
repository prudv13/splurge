const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

let mode = "development";
let target = "web";

if(process.env.NODE_ENV === "production"){
    mode = "production";
    target = "browserslist";
}

module.exports = {
    mode: mode,
    target: target,
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        assetModuleFilename: "assets/[name][ext][query]"
    },
    devtool: 'source-map',
    devServer: {
        static: "./dist",
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/assets'),
                    to: path.resolve(__dirname, './dist/assets')
                }
            ]
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
}