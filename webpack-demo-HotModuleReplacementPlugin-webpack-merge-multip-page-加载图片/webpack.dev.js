// webpack.dev.js
const path = require('path');  // 路径处理模块
const mergeWebpack = require('webpack-merge');  // 引入webpack-merge功能模块
const common = require('./webpack.common.js'); // 引入webpack.common.js

module.exports = mergeWebpack.merge(common, {   // 将webpack.common.js合并到当前文件
    devServer: {
        static: {
          directory: path.join(__dirname, "dist"),
        },
        port: 3000,
        // hot: "only",
        // hot: true // 热更新
    },
})
