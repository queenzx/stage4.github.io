import div from "./a.js"
import p from "./b.js"

// 引入b.css
import "../css/b.css"
// 引入less文件
// import "../less/a.less"
import a from "../less/a.less"

// day10
/* console.log(div());
console.log(p());
document.body.appendChild(div());
document.body.appendChild(p()); */

// day11
let divEle = div();
// divEle.className = 'index';
// divEle.className = 'con'; //不能直接写字符串,没有关联在一起
divEle.className = a.con;

// 引入图片
import img from '../img/1.png';
let pic = document.createElement('img');
pic.src = img;
pic.height = 150;

document.body.appendChild(pic);
document.body.appendChild(divEle);
document.body.appendChild(p());
