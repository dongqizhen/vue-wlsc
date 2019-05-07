'use strict';

const chalk = require('chalk');
const command = process.env.npm_lifecycle_event;

let API_HOST = {};

let alpha = { // 开发
    merchantURL: "http://60.195.252.91:8080/platform",
    URL: "http://192.168.2.233:8080/platform",
    HYGLOGINURL: 'http://60.195.252.86:8080'
}
let beta = { // 测试
    URL: "https://www.api/code",
    BASE_URL: "https://www.api/code"
}
let gamma = { // 验收版本
    URL: "http://prople.haoyigong.com",
    INFO_URL: "http://infople.haoyigong.com",
    WEB_URL: "http://webple.haoyigong.com",
    FILE_URL: "http://webple.haoyigong.com"
}
let release = { // 正式版本
    URL: "http://pro.haoyigong.com",
    INFO_URL: "http://info.haoyigong.com",
    WEB_URL: "http://web.haoyigong.com",
    FILE_URL: "http://file.haoyigong.com"
}

if (command == "serve:alpha") {
    console.log(chalk.green('当前环境为（development）:开发'));
    API_HOST = alpha;
} else if (command == "serve:beta") {
    console.log(chalk.green('当前环境为（development）:测试'));
    API_HOST = beta;
} else if (command == "serve:gamma") {
    console.log(chalk.green('当前环境为（development）:验收'));
    API_HOST = gamma;
} else if (command == "serve:release") {
    console.log(chalk.green('当前环境为（development）:正式'));
    API_HOST = release;
} else {
    console.log(chalk.green('当前环境为（development）:开发'));
    API_HOST = alpha;
}



module.exports = {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    API_HOST: JSON.stringify(API_HOST)
}