import div from "./a.js"

// 引入a.css样式
// import "../css/a.css"
// import a from "../css/a"
// 使用别名
import a from "@css/a"

// day10
// document.body.appendChild(div());

// day11
/* let divEle  = div();
divEle.className = 'index2'; */

let divEle  = div();
divEle.className = a.con;
document.body.appendChild(divEle);