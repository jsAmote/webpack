/* 
    index.js:入口
    运行指令：
    开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
            以index.js为入口开始打包 输出到 built.js

    生产环境：webpack ./src/index.js -o ./build/built.js --mode=production


*/
import data from './data.json';
import  './index.css';
import './less.less';


console.log(data);

function add(x, y){
    return(x + y);
}
console.log(add(1,3));