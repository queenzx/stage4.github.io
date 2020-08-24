const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 创建用户对于的Schema
const userSchema = new Schema({
    empId:Number,
    empName:String,
    gender:{type:String,default:'M'},
    age:Number,
    position:String,
    telephone:String,
    address:String,
    edu:String,
    status:{type:Boolean,default:false}
});

// 创建Model
const User = mongoose.model("emp",userSchema);

// 创建连接
const url = 'mongodb://localhost:27017/web';
const opt  ={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

// 连接
mongoose.connect(url,opt);

module.exports = {
    User
}