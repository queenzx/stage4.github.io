// const path = require("path");
// 使用HTML模板
let HtmlPlugin = require('html-webpack-plugin');
// 每次打包前先清空上一次打包的数据
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 独立打包css文件
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
// vue插件
let VuePlugin = require('vue-loader/lib/plugin');

module.exports = {
    resolve:{
        // 后缀名
        extensions:[".js",".css",".vue"],
        // 别名
        alias:{
            "@css":"../css"
        }
    },
    //入口文件
    entry:'./src/main.js',
    // 出口,输出路径
    // 指定打包生成的文件保存位置
    output:{
        // __dirname表示当前项目的路径
        path:__dirname+"/dist2",//绝对路径
        filename:"[hash:6]-tt-[name].js"
    },

    // loaders
    // 配置不同的loader来处理非js类型的文件
    module:{
        rules:[
            // 处理css
            {
                test: /\.(c|le)ss$/,
                use:[
                    MiniCssExtractPlugin.loader,//独立打包成一个css文件
                    // 'vue-style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            modules:true//css样式模块化
                        }
                    }
                ]
            },
            // 处理图片
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                use:{
                    // 将图片保存在某个路径
                    // loader:'file-loader',
                    // 将图片转换成base64格式
                    loader:'url-loader',
                    options:{
                        // 不使用默认的md5hash值,指定名称
                        name:'[name]-[hash:6].[ext]',
                        // 输出路径
                        outputPath:'images/',
                        // 限制图片大小
                        limit:20*1024
                    }
                }
            },
            // babel处理ES6
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/ //不包括
            },
            {
                // 处理vue文件
                test:/\.vue$/,
                use:'vue-loader'
            }
        ]
    },

    // plugins代表插件,是一个数组
    plugins:[
        new HtmlPlugin({
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // 使用占位符命名
            filename:"[name]-[contenthash:6].css"
        }),
        new VuePlugin()
    ]
}