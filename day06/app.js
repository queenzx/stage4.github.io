let express = require('express');
let got = require('got');
let app = express();

app.listen(4000);

// 消息头
app.use(function(req,res,next){
    // 处理跨域问题
    res.header("Access-Control-Allow-Origin","*");
    next();
});

app.get('/getdata',function(req,res){
    // res.send('over');
    let url = req.query.url;
    got(url).then(data=>{
        res.send(data.body);
    });
});