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
        historyApiFallback:true,//解决路由刷新404错误
        hot:true,//开启热加载
        /* proxy:{
            "/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg":{
                target:"http://c.y.qq.com",
                changeOrigin:true
            }
        }, */
        proxy:[{
            context:[
                "/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",
                "/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg"
            ],
            target:"http://c.y.qq.com",
            changeOrigin:true,
            headers:{
                referer:"https://c.y.qq.com",
                host:"c.y.qq.com"
            }
        }]
    }
})