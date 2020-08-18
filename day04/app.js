let express = require('express');
let app = express();

app.listen(4000);

app.use(express.static('./routerdemo/dist'));

app.get('/getSinger',(req,res)=>{
    let name = req.query.name;
    res.send(name);
});
