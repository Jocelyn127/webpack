'use strict'

const path = require('path');

module.exports = {
    entry: {    //多入口
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'  // 占位符
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
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /.less$/,
            use: [  // 从右到左执行
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        },
        {
            test: /.(png|jpg|gif|jpeg)$/,
            use: 'file-loader'
        },
        {
            test: /.(woff|woff2|eot|ttf|otf)$/,
            use: 'file-loader'
        }
    ]
    }
}

