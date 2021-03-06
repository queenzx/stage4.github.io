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
    mode:"development",//环境
    devtool:"cheap-module-eval-source-map",
    resolve:{
        // 后缀名
        extensions:[".js",".css",".less"],
        // 别名
        alias:{
            "@css":"../css"
        }
    },
    //入口文件
    // 从哪个文件开始查找相关的依赖

    // 方式2:对象形式
    /* entry:{
        a:"./src/js/index.js",
        b:"./src/js/index2.js"
    }, */
    /* entry:{
        aaa:"./src/js/index.js",
        bbb:"./src/js/index2.js"
    }, */

    // entry:'./src/js/testES6.js',
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
                    // 'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            modules:true//css样式模块化
                        }
                    },
                    'less-loader'
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
        // 每一个实例就是一个插件
        /* new HtmlPlugin({
            // 指定生成文件的名称
            filename:'a.html',//要生成的html页面的名字
            // 指定使用的模板
            template: './src/testWeb.html',
            // 指定使用哪些chunks(entry中的key)
            chunks:["aaa"]
        }),
        new HtmlPlugin({
            filename:'b.html',
            template: './src/testWeb.html',
            chunks:["bbb"],
            minify:{
                removeComments:true,//删除注释
                // 删除空白和换行
                collapseWhitespace:true,
                // 删除css中的空白和换行
                minifyCSS:true
            }
        }), */
        new HtmlPlugin({
            template:'./src/testWeb.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // 使用占位符命名
            filename:"[name]-[contenthash:6].css"
        }),
        new VuePlugin()
    ],
    // 配置webpack-dev-server
    devServer:{
        // 在内存中的路径
        contentBase:__dirname+ '/dist',
        host:'localhost',//主机名
        port:4001,//端口号
        open:true,//自动打开浏览器
        overlay:{
            error:true,//出错时显示错误
        },
        hot:true//开启热加载
    }
}