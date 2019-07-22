'use strict';

const chalk = require('chalk');
const command = process.env.npm_lifecycle_event;
const _ = require('lodash')


let API_HOST = {};

//console.log(process.env)
let alpha = { // 开发
    URL: "http://60.195.252.91:8080/platform",
    // URL: "http://192.168.2.110:8080/platform",
    // URL: "http://192.168.2.233:8080/platform",
    HYGLOGINURL: 'http://60.195.252.86:8080',
    HYGINFOURL: "http://60.195.252.86:8082",
    HYGPROURL: "http://60.195.252.86:8083",
    HYGFILEURL: "http://60.195.252.91:8080/platform",
}
let beta = { // 测试
    URL: "https://www.api/code",
    BASE_URL: "https://www.api/code"
}
let gamma = { // 验收版本
    URL: "http://shopple.allbring.com/platform",
    HYGLOGINURL: "http://webple.haoyigong.com",
    HYGINFOURL: "http://infople.haoyigong.com",
    HYGPROURL: "http://prople.haoyigong.com",
    HYGFILEURL: "http://shopple.allbring.com/platform",
}
let release = { // 正式版本
    URL: "http://pro.haoyigong.com",
    HYGLOGINURL: 'http://web.haoyigong.com',
    HYGINFOURL: "http://info.haoyigong.com",
    HYGPROURL: "http://pro.haoyigong.com",
    HYGFILEURL: "http://file.haoyigong.com",
}

console.log(command)
if (_.endsWith(command, ':alpha')) {
    console.log(chalk.green(`当前环境为（${process.env.NODE_ENV}）:开发`));
    API_HOST = alpha;
} else if (_.endsWith(command, ':beta')) {
    console.log(chalk.green(`当前环境为（${process.env.NODE_ENV}）:测试)`));
    API_HOST = beta;
} else if (_.endsWith(command, ':gamma')) {
    console.log(chalk.green(`当前环境为（${process.env.NODE_ENV}）:验收`));
    API_HOST = gamma;
} else if (_.endsWith(command, ':release')) {
    console.log(chalk.green(`当前环境为（${process.env.NODE_ENV}）:正式`));
    API_HOST = release;
} else {
    console.log(chalk.green(`当前环境为（${process.env.NODE_ENV}）:开发`));
    API_HOST = alpha;
}


module.exports = {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    API_HOST: JSON.stringify(API_HOST)
}