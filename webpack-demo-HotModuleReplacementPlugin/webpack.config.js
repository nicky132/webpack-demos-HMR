// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    entry: path.join(__dirname, "/src/index.js"), // 入口文件
    output: {
        path: path.join( __dirname, "dist"), //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },
    // devServer: {
    //     contentBase: "./dist", // 本地服务器所加载文件的目录
    //     port: "8088",   // 设置端口号为8088
    //     inline: true, // 文件修改后实时刷新
    //     hot:true
    //     // historyApiFallback: true, //不跳转
    // },
    devServer: {
        static: {
          directory: path.join(__dirname, "dist/"),
        },
        port: 3000,
        // hot: "only",
        hot: true // 热更新
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,   // 正则匹配以.css结尾的文件
                use: ['style-loader', 'css-loader']  // 需要用的loader，一定是这个顺序，因为调用loader是从右往左编译的
            },
            {
                test: /\.(scss|sass)$/,   // 正则匹配以.scss和.sass结尾的文件
                use: ['style-loader', 'css-loader', 'sass-loader']  // 需要用的loader，一定是这个顺序，因为调用loader是从右往左编译的
            },
            {                             // jsx配置
                test: /(\.jsx|\.js)$/,   
                use: {                    // 注意use选择如果有多项配置，可写成这种对象形式
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),  // new一个插件的实例
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/src/template.html")// new一个这个插件的实例，并传入相关的参数
        }),
        // new CleanWebpackPlugin(['dist']),  // 所要清理的文件夹名称
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ], 
}