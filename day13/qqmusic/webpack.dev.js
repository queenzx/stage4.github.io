// 开发环境
let {merge} = require('webpack-merge');
let base = require('./webpack.base');


module.exports = merge(base,{
    mode:"development",
    devtool:"cheap-module-eval-source-map",
    devServer:{
        contentBase:__dirname+ '/dist',
        host:'localhost',//主机名
        port:4001,//端口号
        open:false,//自动打开浏览器
        overlay:{
            errors:true,//出错时显示错误
        },
        hot:true//开启热加载
    }
})