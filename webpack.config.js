const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ROOT = path.resolve( __dirname, 'src' );
const DESTINATION = path.resolve( __dirname, 'dist' );
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: ROOT,
    entry: {
        'main': './main.ts'
    },
    stats: 'verbose',
    output: {
        filename: '[name].bundle.js',
        path: DESTINATION
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, './src/assets'), to: 'assets' }
            ]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve( __dirname, 'src/index.html' ),
        }),

    ],

    module: {
        rules: [
            {
                test: /\.less$/,
                //loader: 'less-loader', // compiles Less to CSS
                use: ['style-loader', 'css-loader?sourceMap=true', 'less-loader']
            },
            /****************
             * PRE-LOADERS
             *****************/
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader'
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'tslint-loader'
            },

            /****************
             * LOADERS
             *****************/
            {
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                use: 'awesome-typescript-loader'
            }
        ]
    },

    devtool: 'cheap-module-source-map',
    devServer: {}
};
