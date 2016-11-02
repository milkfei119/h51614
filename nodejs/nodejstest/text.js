//访问之前创建模块中的函数
var mm = require('myNodeJsApp');//""里为json中的name
console.log(mm);
var str = "you mad sad dad";
console.log(mm.censor(str));