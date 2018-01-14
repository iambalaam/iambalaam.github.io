const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',

    devtool: 'inline-source-map',
    devServer: {
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/

            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            }
            // If I need to include fonts in my bundle
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/,
            //     use: 'file-loader'
            // }
        ]
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'iambalaam',
            inject: false,
            template: require('html-webpack-template'),
            appMountId: 'app'
        })
    ],

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
