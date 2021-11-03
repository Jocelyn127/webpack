'use strict'

const path = require('path');
const { webpack } = require('webpack');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');

module.exports = {
    entry: {    //多入口
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js'  // 占位符
    },
    mode: 'production',
    module: {
        rules: [{
            test: /.js$/,
            use: 'babel-loader'
        },
        {
            test: /.css$/,
            use: [  // 从右到左执行
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        },
        {
            test: /.less$/,
            use: [  // 从右到左执行
                MiniCssExtractPlugin.loader,
                'css-loader',
                'less-loader'
            ]
        },
        {
            test: /.(png|jpg|gif|jpeg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash:8][ext]'
                    }
                }
            ]
        },
        {
            test: /.(woff|woff2|eot|ttf|otf)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash:8].[ext]'
                    }
                }
            ]
        }
    ]
    },
    plugins:  [new MiniCssExtractPlugin({
        filename: '[name]_[contenthash:8].css'
    })]
    
}

