// 解决跨域问题方法一:

module.exports = {
    "devServer":{
        "proxy": "http://www.biquge.info"
    }
}

// 解决跨域问题方法二:
// 在pageage.json中加
/* "vue":{
    "devServer":{
    "proxy": "http://www.biquge.info"
    }
} */