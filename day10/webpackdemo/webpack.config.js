// const path = require("path");
// 使用HTML模板
let HtmlPlugin = require('html-webpack-plugin');
// 每次打包前先清空上一次打包的数据
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 独立打包css文件
let MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode:"development",//环境
    //入口文件
    // 从哪个文件开始查找相关的依赖
    // entry:"./src/index.js",  //单一入口

    // 多个入口文件:方式1,方式2
    // 方式1:数组形式
    // entry:[
    //     "./src/index.js",
    //     "./src/index2.js"
    // ]

    // 方式2:对象形式
    /* entry:{
        a:"./src/js/index.js",
        b:"./src/js/index2.js"
    }, */
    entry:{
        aaa:"./src/js/index.js",
        bbb:"./src/js/index2.js"
    },

    // 出口,输出路径
    // 指定打包生成的文件保存位置
    output:{
        // __dirname表示当前项目的路径
        // path: path.resolve(__dirname, 'dist2'),//需要引入path
        path:__dirname+"/dist2",//绝对路径
        filename:"[hash:6]-tt-[name].js"
    },

    // loaders
    // 配置不同的loader来处理非js类型的文件
    module:{
        rules: [
            // 处理css
            // 使用的加载器的加载顺序: 从后向前,从下向上
            // 先使用css-loader让webpack认识css文件,然后再分析打包,再去使用style-loader将样式内联到模板中
            // 写法一:
            /* {
                test:/\.css$/,
                use:"style-loader"
            },
            {
                test:/\.css$/,//以.css结尾的文件
                use:"css-loader"
            } */

            // ,写法二:上面合并的写法
            /* { 
                test: /\.css$/, 
                // 从后向前加载
                use: ["style-loader","css-loader"] 
            } */

            // 写法三:
            { 
                test: /\.(c|le)ss$/, 
                // 从后向前加载
                use: [
                   /*  {
                        loader:"style-loader",
                        options:{
                            // singleton:true
                            injectType:"singletonStyleTag"
                        },  
                    }, */
                    // 将css独立打包成一个css文件,此时就不需要再将样式内联到HTML中了,也就不需要style-loader了
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ] 
            }
            /* {
                test:/\.less$/,
                // use:["style-loader","css-loader","less-loader"]
            } */
           
        ]
    },

    // plugins代表插件,是一个数组
    plugins:[
        // 每一个实例就是一个插件
        new HtmlPlugin({
            template: './src/testWeb.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // 使用占位符命名
            filename:"[name]-[contenthash:6].css"
        })
    ]
}