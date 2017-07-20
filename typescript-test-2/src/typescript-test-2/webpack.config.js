/// <binding BeforeBuild='Run - Development' ProjectOpened='Watch - Development' />
"use strict";

var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: "./Scripts/app.ts",

    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.css', '.html']
    },

    output: {
        path: path.join(__dirname, "./wwwroot/"),
        filename: "main.js"
    },

    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },

    module: {
        loaders: [
            { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' }
        ]
    },

    plugins: [
        new CleanWebpackPlugin()
    ]
};